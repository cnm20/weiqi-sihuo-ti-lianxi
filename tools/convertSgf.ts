// SGF → Puzzle 答案树转换工具
// 语义模型（对齐计划）：
//  - 用户 = 先行方。SGF 交替树中每个节点 = 一手棋（根无棋，仅初始局面）。
//  - 我们保留完整记录树来做 minimax 分类；对外答案树 = “轮到用户”的局面视图，
//    其中 continue 分支携带电脑指定应手与下一节点。
//
// minimax（用户=success 目标）：
//  - 叶节点：若最后一手是用户且带成功标注（Correct / lives 等）→ success；
//    若最后一手是电脑 → 用户已失败（除非注释明确用户成功）→ failure。
//  - 用户轮到：存在一路 success 即算 success。
//  - 电脑轮到：所有记录应手都必须让用户仍可 success（电脑挑最狠的）。
//  - 带成功标注的非叶节点 → 直接视为用户已达成功终点。
// 分支分类：
//  - 用户着法自身命中 success 标注叶 → success
//  - 否则子树 outcome=success → continue（选电脑记录中的第一个应手作为指定应手）
//  - 否则 → failure（已记录、已被证伪）
// 未收录合法走法 → 不进答案树，交给 unlistedPolicy。
// 自动转换仅作候选，reviewStatus 一律 needs-review，须逐题人工审核后入库。

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeMove, nodeComment, sgfPointToXY } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Puzzle, Player, Stone, SolutionNode, SolutionBranch, Move, ViewRegion } from '../src/domain/types.ts';

export interface ConvertInput {
  file: string;
  text: string;
  meta?: Partial<Pick<Puzzle, 'id' | 'title' | 'goalText' | 'instruction' | 'levelIndex' | 'orderInLevel' | 'goal' | 'targetGroup'>>;
}

export interface ConvertStats {
  nodes: number;
  userMoves: number;
  successLeaves: number;
  silentLeaves: number;
  maxDepth: number;
  mainLine: Move[];
}

export interface ConvertReport {
  puzzle?: Puzzle;
  ok: boolean;
  warnings: string[];
  stats: ConvertStats;
}

const SUCCESS_RE =
  /Correct|correct|Black lives|White lives|Black is alive|White is alive|makes two eyes|make two eyes|make life|makes life|Black can live|White can live|Black's alive|White's alive|lives|alive/i;

export function looksLikeSuccess(comment: string): boolean {
  return SUCCESS_RE.test(comment);
}

const CORRECT_RE = /Correct/i;

/**
 * 方向感知成功判读：注释须表明【用户方】达成目标，才算成功终点。
 * - 显式 Correct
 * - 用户自己做活/成眼/活棋：e.g. "Black lives"（user=B）
 * - 用户杀死/提掉对方：e.g. "White is dead / White's captured"（user=B）
 * 注意：若注释说的是【对方】还活着（"White's already alive"/"White's alive in seki"），
 * 对以黑为用户的杀棋题而言是黑未成功 → 判为失败，绝不当作黑 success。
 * 语义不明的（如 "It's a ko, but Black can do better"）一律不算成功终点，
 * 交由逐题审核判定（宁可不足，不可虚标）。
 */
export function successJudgeFor(comment: string, userColor: Player): boolean {
  const c = comment.trim();
  if (!c) return false;
  if (CORRECT_RE.test(c)) return true;
  const user = userColor === 'B' ? 'Black' : 'White';
  const opp = userColor === 'B' ? 'White' : 'Black';
  // 用户自己活 / 做眼 / 赢对杀
  const userAlive =
    new RegExp(`\\b${user}\\b[^。;]*(lives|living|is alive|alive|can live|safe|two eyes|2 eyes|wins the capturing race)`, 'i').test(c) ||
    new RegExp(`${user}'s (alive|safe|alive in seki|still alive)`, 'i').test(c) ||
    new RegExp(`${user} (makes|can make|has|now has) (two|2) eyes`, 'i').test(c);
  if (userAlive) return true;
  // 用户杀死对方 / 对方不能成眼
  const oppDead =
    new RegExp(`\\b${opp}\\b[^。;]*(is dead|dies|is captured|captured|can't make|can't live|cannot make|only has one eye|killed|is killed)`, 'i').test(c) ||
    new RegExp(`${opp}'s (dead|captured|killed|dead shape)`, 'i').test(c) ||
    new RegExp(`${opp} (is|are) (dead|captured)`, 'i').test(c);
  if (oppDead) return true;
  // “Correct + 说明”已在上面命中；其余中性/劝告性注释一律不判成功
  return false;
}

// ---------- 节点 ----------
interface SNode {
  raw: ReturnType<typeof parseSgf>;
  mv: { color: Player; x: number; y: number } | null;
  comment: string;
  children: SNode[];
  successMark: boolean;
}

/** 解析 + 合法性/交替校验，产出 SNode 树 */
export function parseToSNode(root: ReturnType<typeof parseSgf>, initial: Stone[]): { root: SNode; illegal: string[]; hasPass: boolean } {
  const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
  const illegal: string[] = [];
  let hasPass = false;

  function convert(node: ReturnType<typeof parseSgf>, b: GoBoard): SNode {
    const mv = nodeMove(node);
    if (mv && mv.pass) {
      hasPass = true;
    } else if (mv) {
      const res = b.tryMove(mv.color, mv.x, mv.y);
      if (res.status !== 'ok' && illegal.length < 8) {
        illegal.push(`${mv.color}(${mv.x},${mv.y}):${res.status}`);
      }
    }
    const sn: SNode = { raw: node, mv, comment: nodeComment(node), children: [], successMark: false };
    for (const child of node.children) {
      sn.children.push(convert(child, b.clone()));
    }
    return sn;
  }

  const board = new GoBoard(size);
  board.setup(initial);
  return { root: convert(root, board), illegal, hasPass };
}

/**
 * minimax outcome。
 * status: 'success'（用户最终可达成）/ 'failure'（用户必败/无记录路线）
 */
export type Outcome = 'success' | 'failure';

/**
 * 可达性分类（供交互判题与审核）：
 *  - success 标注节点（Correct/活死语义词所在叶或带标注中间节点）即成功终点。
 *  - 用户手所在子树若“存在一条可达 success 叶的路径”→ success/继续；
 *    否则（子树内完全没有成功终点）→ failure（记录在案、被谱证伪的走法）。
 * 语义说明：不做“白方所有应手都必须拦不住”的极小化——GGG 谱是参考树，
 * 用户正解只需应对谱中给出的一条主应手即可成立；其余分支按记录保留展示。
 */
export function minimaxOutcome(
  rootSn: SNode,
  userColor: Player,
  opts?: { successNode?: (n: SNode) => boolean },
): { outcome: Map<SNode, Outcome> } {
  const outcome = new Map<SNode, Outcome>();
  const successJudge = opts?.successNode ?? ((n: SNode) => successJudgeFor(n.comment, userColor));

  // 1) 标注 success 终点：叶（最后一手是用户且注释为成功/活死语义）或带成功标注的节点
  function premark(n: SNode) {
    if (n.children.length === 0) {
      if (n.mv) {
        if (n.mv.color === userColor && successJudge(n)) {
          n.successMark = true;
        } else if (n.mv.color === userColor && /White is dead|White is captured|kills|dies/i.test(n.comment)) {
          n.successMark = true;
        }
      }
    } else if (successJudge(n) && n.mv && n.mv.color === userColor) {
      n.successMark = true;
    }
    n.children.forEach(premark);
  }
  premark(rootSn);

  // 2) 子树可达性：以“存在成功终点”为准
  function dfs(n: SNode): Outcome {
    const hit = outcome.get(n);
    if (hit) return hit;
    if (n.successMark) {
      outcome.set(n, 'success');
      return 'success';
    }
    if (n.children.length === 0) {
      outcome.set(n, 'failure');
      return 'failure';
    }
    const anyChildSuccess = n.children.some((c) => dfs(c) === 'success');
    outcome.set(n, anyChildSuccess ? 'success' : 'failure');
    return outcome.get(n)!;
  }
  dfs(rootSn);
  return { outcome };
}

/** 沿任意节点收集整条主要序列（按交替），用于检查/展示 */
export function chainFrom(n: SNode): Move[] {
  const moves: Move[] = [];
  let cur: SNode | null = n;
  let guard = 0;
  while (cur && cur.mv && guard++ < 40) {
    moves.push({ color: cur.mv.color, x: cur.mv.x, y: cur.mv.y });
    cur = cur.children[0] ?? null;
  }
  return moves;
}

// ---------- 答案树构建 ----------
let seqCounter = 0;
function nextId(prefix: string): string {
  return `${prefix}${seqCounter++}`;
}

export interface AnswerBuildResult {
  root: SolutionNode;
  /** 全部创建的答案节点（用于建索引/遍历） */
  nodes: SolutionNode[];
  stats: ConvertStats;
}

/**
 * 从 SGF 根构建答案树。
 * answer 树上每个节点都是“轮到用户”的局面。
 * n 是 SGF 节点，且当前“轮到用户”（n.mv==null 或 n.mv.color==opp）。
 */
export function buildAnswerTree(
  rootSn: SNode,
  userColor: Player,
  outcome: Map<SNode, Outcome>,
): AnswerBuildResult {
  const oppColor: Player = userColor === 'B' ? 'W' : 'B';
  const allNodes: SolutionNode[] = [];
  let totalUserMoves = 0;

  function buildNode(n: SNode): SolutionNode {
    const branches: SolutionBranch[] = [];
    for (const u of n.children) {
      if (!u.mv || u.mv.color !== userColor) continue; // n.children 应当全是用户手
      totalUserMoves++;
      // 用户着法本身达到成功终点（successMark 含“叶带标注”与“中间带标注”）
      if (u.successMark) {
        branches.push({ x: u.mv.x, y: u.mv.y, type: 'success', reason: u.comment.trim() || undefined });
        continue;
      }
      const o = outcome.get(u) ?? 'failure';
      if (o === 'failure') {
        branches.push({
          x: u.mv.x,
          y: u.mv.y,
          type: 'failure',
          reason: u.comment.trim() || '已记录的错误变化',
          refutation: collectRefutation(u, oppColor, 10),
        });
        continue;
      }
      // continue：电脑应手 = u.children 中的第一个含成功路线的电脑应手（有教学意义的主应手）
      const replies = u.children.filter((c) => c.mv && c.mv.color === oppColor);
      const reply = replies.find((c) => outcome.get(c) === 'success') ?? replies[0] ?? null;
      if (!reply || !reply.mv) {
        // outcome 说 success 却无应手，防御处理
        branches.push({ x: u.mv.x, y: u.mv.y, type: 'failure', reason: '题库转换异常：无电脑应手' });
        continue;
      }
      // reply 之后轮到用户：把 reply 当作下一 answer 节点（其 children 是用户手）
      const sub = buildNode(reply);
      branches.push({
        x: u.mv.x,
        y: u.mv.y,
        type: 'continue',
        whiteReply: { color: reply.mv.color, x: reply.mv.x, y: reply.mv.y },
        next: sub.id,
        reason: u.comment.trim() || undefined,
      });
    }
    const node: SolutionNode = { id: nextId('n'), branches };
    allNodes.push(node);
    return node;
  }

  const root = buildNode(rootSn);
  return {
    root,
    nodes: allNodes,
    stats: { nodes: 0, userMoves: totalUserMoves, successLeaves: 0, silentLeaves: 0, maxDepth: 0, mainLine: [] },
  };
}

/** 失败分支参考变化：该用户手之后黑白交替的连续谱（用于讲解，最长 maxLen 手） */
function collectRefutation(u: SNode, oppColor: Player, maxLen: number): Move[] {
  const moves: Move[] = [];
  let cur: SNode | null = u;
  let guard = 0;
  while (cur && cur.mv && moves.length < maxLen && guard++ < 50) {
    moves.push({ color: cur.mv.color, x: cur.mv.x, y: cur.mv.y });
    // 优先取对方应手往下
    cur = cur.children.find((c) => c.mv && c.mv.color === oppColor) ?? cur.children[0] ?? null;
  }
  return moves;
}

/** 统计辅助 */
export function countStats(rootSn: SNode): { nodes: number; successLeaves: number; silentLeaves: number; maxDepth: number } {
  let nodes = 0;
  let successLeaves = 0;
  let silentLeaves = 0;
  let maxDepth = 0;
  (function dfs(n: SNode, d: number) {
    nodes++;
    maxDepth = Math.max(maxDepth, d);
    if (n.children.length === 0) {
      if (n.successMark) successLeaves++;
      else if (!n.comment.trim()) silentLeaves++;
    }
    n.children.forEach((c) => dfs(c, d + 1));
  })(rootSn, 0);
  return { nodes, successLeaves, silentLeaves, maxDepth };
}

// ---------- 主入口 ----------
export function convertToPuzzle(input: ConvertInput): ConvertReport {
  const rootSgf = parseSgf(input.text);
  const size = Number.parseInt(rootSgf.props['SZ']?.[0] ?? '19', 10) || 19;
  const comment = nodeComment(rootSgf);
  const userColor: Player = /White to play/i.test(comment) ? 'W' : 'B';
  const initial: Stone[] = [
    ...(rootSgf.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) })),
    ...(rootSgf.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) })),
  ];
  const warnings: string[] = [];

  const { root: rootSn, illegal, hasPass } = parseToSNode(rootSgf, initial);
  if (illegal.length > 0) {
    return {
      ok: false,
      warnings: ['非法着法：' + illegal.slice(0, 5).join('; ')],
      stats: { nodes: 0, userMoves: 0, successLeaves: 0, silentLeaves: 0, maxDepth: 0, mainLine: [] },
    };
  }
  if (hasPass) warnings.push('含虚手(pass)，判题不适用，建议排除');

  const { outcome } = minimaxOutcome(rootSn, userColor);
  const ans = buildAnswerTree(rootSn, userColor, outcome);
  const stats0 = countStats(rootSn);

  // 主变化：从答案树找第一条到 success 的路线（含电脑应手）
  const index = buildAnswerIndex(ans.nodes, ans.root);
  const mainLine = collectMainLine(ans.root, userColor, index);
  const viewRegion = computeViewRegion(initial, mainLine);

  const meta = input.meta ?? {};
  const puzzle: Puzzle = {
    id: meta.id ?? '',
    levelIndex: meta.levelIndex ?? 0,
    orderInLevel: meta.orderInLevel ?? 1,
    size,
    initial,
    userColor,
    goal: meta.goal ?? 'live',
    targetGroup: meta.targetGroup ?? [],
    viewRegion,
    title: meta.title ?? '',
    goalText: meta.goalText ?? '',
    instruction: meta.instruction ?? '',
    unlistedPolicy: 'neutral',
    source: { origin: 'gogameguru', ref: input.file, license: 'CC BY-NC-SA 4.0', adapted: '由 SGF 自动转换，待人工审核与分级' },
    reviewStatus: 'needs-review',
    root: ans.root,
    solutionNodes: ans.nodes,
  };

  return {
    puzzle,
    ok: true,
    warnings,
    stats: {
      nodes: stats0.nodes,
      userMoves: ans.stats.userMoves,
      successLeaves: stats0.successLeaves,
      silentLeaves: stats0.silentLeaves,
      maxDepth: stats0.maxDepth,
      mainLine,
    },
  };
}

/** 答案树→第一条正解主线（index 必须传入） */
export function collectMainLine(root: SolutionNode, userColor: Player, index?: Map<string, SolutionNode>): Move[] {
  const idx = index ?? buildAnswerIndex([root], root);
  const moves: Move[] = [];
  let cur: SolutionNode = root;
  let guard = 0;
  while (guard++ < 60) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const chosen = succ ?? cont;
    if (!chosen) break;
    moves.push({ color: userColor, x: chosen.x, y: chosen.y });
    if (chosen.type === 'success') break;
    if (chosen.whiteReply) moves.push({ ...chosen.whiteReply });
    const next = chosen.next ? idx.get(chosen.next) ?? null : null;
    if (!next) break;
    cur = next;
  }
  return moves;
}

export function findAnswerNode(root: SolutionNode, id: string): SolutionNode | null {
  return buildAnswerIndex([root], root).get(id) ?? null;
}

/** 由扁平节点表构建 id → 节点 索引 */
export function buildAnswerIndex(all: SolutionNode[], _root?: SolutionNode): Map<string, SolutionNode> {
  const map = new Map<string, SolutionNode>();
  for (const n of all) map.set(n.id, n);
  return map;
}

function computeViewRegion(initial: Stone[], mainLine: Move[]): ViewRegion {
  const all: { x: number; y: number }[] = [...initial, ...mainLine];
  if (all.length === 0) return { minX: 0, minY: 0, maxX: 18, maxY: 18 };
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (const p of all) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  const pad = 2;
  const clamp = (v: number) => Math.max(0, Math.min(18, v));
  return { minX: clamp(minX - pad), minY: clamp(minY - pad), maxX: clamp(maxX + pad), maxY: clamp(maxY + pad) };
}

// ---------- 批量导出 ----------
export function convertDir(dir: string, outJson: string, filter?: (file: string) => boolean): void {
  const files: { file: string; path: string }[] = [];
  for (const sub of ['easy', 'intermediate', 'hard', 'other']) {
    const d = join(dir, sub);
    if (!existsSync(d)) continue;
    for (const f of readdirSync(d)) {
      if (f.endsWith('.sgf') && (!filter || filter(`${sub}/${f}`))) files.push({ file: `${sub}/${f}`, path: join(d, f) });
    }
  }
  const out: Puzzle[] = [];
  const rejected: string[] = [];
  for (const f of files) {
    const text = readFileSync(f.path, 'utf8');
    const report = convertToPuzzle({ file: f.file, text });
    if (report.ok && report.puzzle) out.push(report.puzzle);
    else rejected.push(`${f.file}（${report.warnings.slice(0, 2).join('; ')}）`);
  }
  const jsonOut = join(process.cwd(), outJson);
  mkdirSync(jsonOut.substring(0, jsonOut.lastIndexOf('/')), { recursive: true });
  writeFileSync(jsonOut, JSON.stringify(out, null, 1), 'utf8');
  console.log(`converted=${out.length} rejected=${rejected.length}`);
  rejected.slice(0, 15).forEach((r) => console.log('  REJECT:', r));
}
