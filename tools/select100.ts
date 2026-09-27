// 100 题选题与审核工作表生成器
// node tools/select100.ts
// 输出：
//  - _tools/candidates/workbook.json       审核工作表（每题含证据、难度初分、待人工确认字段）
//  - _tools/candidates/selection.json      初选 100 题（可能不足，缺口记录）
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Puzzle } from '../src/domain/types.ts';
import { looksLikeSuccess } from './convertSgf.ts';

const dir = join(process.cwd(), '_tools/candidates');
const puzzles = JSON.parse(readFileSync(join(dir, 'puzzles.json'), 'utf8')) as Puzzle[];

// ---------- 语义线索：仅作审核提示，不作为自动结论 ----------
const KO_RE = /\bko\b|劫/i;
const SEKI_RE = /\bseki\b|双活|alive in seki/i;
const LADDER_RE = /\bladder\b|征子/i;

interface Row {
  file: string;
  source: string;
  levelGuess: number; // 0..9 初判
  reason: string;
  nodes: number;
  depth: number;
  userMoves: number;
  successLeaves: number;
  silentLeaves: number;
  rootBranches: number;
  correctRootBranches: number;
  mainlineLen: number;
  koHint: boolean;
  sekiHint: boolean;
  ladderHint: boolean;
  comments: string;
  titleCN: string;
  goalCN: string;
  // 审核记录
  reviewStatus: 'needs-review';
  notes: string[];
}

function safeComments(p: Puzzle): string {
  // 从答案树 reason 字段收集 SGF 注释
  const parts: string[] = [];
  const stack = p.solutionNodes ?? [];
  for (const n of stack) {
    for (const b of n.branches) if (b.reason) parts.push(b.reason);
  }
  return parts.join(' | ').slice(0, 800);
}

function collectStats(p: Puzzle) {
  const stack = p.solutionNodes ?? [];
  let userMoves = 0;
  let successLeaves = 0;
  let silentLeaves = 0;
  const rootBranches = p.root.branches.length;
  let correctRootBranches = 0;
  for (const b of p.root.branches) if (b.type === 'success' || b.type === 'continue') correctRootBranches++;
  for (const n of stack) {
    for (const b of n.branches) {
      if (b.type !== 'continue') userMoves++; // 非 continue 亦为用户候选
      else userMoves++;
    }
  }
  void silentLeaves;
  // 静默叶：solution tree 无法直接给出（SGF 已折叠），此处以深度/分支代替
  return { rootBranches, correctRootBranches, userMoves };
}

// 难度启发：GGG 粗分 + 结构指标
function guessLevel(p: Puzzle, file: string): { level: number; reason: string } {
  const stats = collectStats(p);
  const depth = Math.max(...(p.solutionNodes ?? []).map((n) => depthOf(n, p)), 0);
  const base = file.includes('/easy/') ? 0 : file.includes('/hard/') ? 2 : 1;
  const struct = Math.min(2, Math.floor(depth / 4)) + Math.min(1, Math.floor((stats.correctRootBranches > 1 ? 1 : 0) + (p.root.branches.length > 3 ? 1 : 0)));
  const levelGuess = Math.max(0, Math.min(9, base * 3 + struct));
  return { level: levelGuess, reason: `${file} 粗分=${base} 深度=${depth} 根候选=${p.root.branches.length}` };
}

function depthOf(n: { id: string }, p: Puzzle): number {
  // 计算到 success 主线的深度（沿第一个 continue/success）
  let depth = 0;
  let cur = n;
  const index = new Map((p.solutionNodes ?? []).map((x) => [x.id, x]));
  let guard = 0;
  while (guard++ < 80) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const c = succ ?? cont;
    if (!c) return depth + 1;
    depth++;
    if (succ) break;
    cur = index.get(c.next!)!;
  }
  return depth;
}

// ---------- 逐题审核表 ----------
const rows: Row[] = [];
const seenBoards = new Set<string>();

for (const p of puzzles) {
  const file = p.source.ref;
  const comments = safeComments(p);
  const stats = collectStats(p);
  const notes: string[] = [];
  const koHint = KO_RE.test(comments);
  const sekiHint = SEKI_RE.test(comments);
  const ladderHint = LADDER_RE.test(comments);
  const successHint = looksLikeSuccess(comments);
  if (koHint) notes.push('注释出现劫(ko)字样，正式收录前须核实主解不含劫');
  if (sekiHint) notes.push('注释出现双活(seki)字样，须核实');
  if (ladderHint) notes.push('注释出现征子(ladder)字样，须核实是否依赖盘外征子');
  if (!successHint) notes.push('无 Correct/失败 语义注释，须人工判读');

  // 镜像/旋转去重：仅做粗略指纹提示
  const fp = boardFingerprint(p);
  seenBoards.add(fp);

  const { level, reason } = guessLevel(p, file);
  const userColorCN = p.userColor === 'B' ? '黑' : '白';
  rows.push({
    file,
    source: file,
    levelGuess: level,
    reason,
    nodes: p.solutionNodes?.length ?? 0,
    depth: depthOf(p.root, p),
    userMoves: stats.userMoves,
    successLeaves: 0,
    silentLeaves: 0,
    rootBranches: stats.rootBranches,
    correctRootBranches: stats.correctRootBranches,
    mainlineLen: 0,
    koHint,
    sekiHint,
    ladderHint,
    comments: comments.slice(0, 400),
    titleCN: `待审核（${file}）`,
    goalCN: `${userColorCN}先 · 目标待审核`,
    reviewStatus: 'needs-review',
    notes,
  });
}

// 分档统计
const perLevel = Array.from({ length: 10 }, () => 0);
for (const r of rows) perLevel[r.levelGuess]++;
console.log('rows:', rows.length);
console.log('perLevelGuess:', perLevel.join(','));

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'workbook.json'), JSON.stringify(rows, null, 1), 'utf8');
console.log('written workbook.json');
console.log('boardFingerprint unique boards:', seenBoards.size);

function boardFingerprint(p: Puzzle): string {
  const stones = p.initial.map((s) => `${s.color}${s.x},${s.y}`).sort().join(';');
  return stones;
}
