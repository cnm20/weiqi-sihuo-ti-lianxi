// GGG 题库分析工具：解析每个 SGF，用规则引擎全树校验，输出候选清单
import { readdirSync, readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeMove, nodeComment, sgfPointToXY } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone } from '../src/domain/types.ts';

interface ProblemReport {
  file: string;
  size: number;
  userColor: 'B' | 'W';
  firstMoveColor: 'B' | 'W' | null;
  initialStones: Stone[];
  comment: string;
  correctOnUser: number;
  correctOnOpp: number;
  totalNodes: number;
  leaves: number;
  maxDepth: number;
  illegalMoves: { move: string; reason: string }[];
  alternationErrors: string[];
  allLegal: boolean;
  koNodes: number;
  hasKoWord: boolean;
  hasSekiWord: boolean;
  hasDeadWord: boolean;
  hasLiveWord: boolean;
}

function analyze(file: string, text: string): ProblemReport {
  const root = parseSgf(text);
  const szRaw = root.props['SZ']?.[0] ?? '19';
  const size = Number.parseInt(szRaw, 10) || 19;
  const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
  const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
  const initial: Stone[] = [...ab, ...aw];
  const comment = nodeComment(root);
  const userColor: 'B' | 'W' = /white to play/i.test(comment) ? 'W' : 'B';
  const opponent: 'B' | 'W' = userColor === 'B' ? 'W' : 'B';

  const illegal: { move: string; reason: string }[] = [];
  const alternationErrors: string[] = [];
  let correctOnUser = 0;
  let correctOnOpp = 0;
  let totalNodes = 0;
  let leaves = 0;
  let maxDepth = 0;
  let koNodes = 0;
  let allLegal = true;
  let firstMoveColor: 'B' | 'W' | null = null;

  function dfs(node: ReturnType<typeof parseSgf>, ctx: { board: GoBoard; depth: number; expected: 'B' | 'W' | null; path: string[] }) {
    totalNodes++;
    const mv = nodeMove(node);
    if (mv) {
      if (ctx.depth === 1) firstMoveColor = mv.color;
      // 行棋方交替校验
      if (ctx.expected && mv.color !== ctx.expected) {
        alternationErrors.push(`${ctx.path.join(' ')} -> ${mv.color} expected ${ctx.expected}`);
      }
      const res = ctx.board.tryMove(mv.color, mv.x, mv.y);
      if (res.status !== 'ok') {
        allLegal = false;
        illegal.push({ move: mv.color + '[' + mv.x + ',' + mv.y + ']', reason: res.status });
      } else if (res.koPoint) {
        koNodes++;
      }
    }
    const commentText = nodeComment(node);
    if (/correct/i.test(commentText)) {
      if (mv && mv.color === userColor) correctOnUser++;
      else if (mv && mv.color === opponent) correctOnOpp++;
      else correctOnUser++; // 无手的根节点注释含 correct 视为题面描述
    }
    maxDepth = Math.max(maxDepth, ctx.depth);
    if (node.children.length === 0) leaves++;

    const parentBoard = ctx.board.clone();
    for (const child of node.children) {
      const childMv = nodeMove(child);
      dfs(child, {
        board: parentBoard.clone(),
        depth: ctx.depth + 1,
        expected: mv ? (mv.color === 'B' ? 'W' : 'B') : ctx.expected === null ? null : ctx.expected,
        path: [...ctx.path, childMv ? `${childMv.color}${childMv.x},${childMv.y}` : '?'],
      });
    }
  }

  dfs(root, { board: (() => { const b = new GoBoard(size); b.setup(initial); return b; })(), depth: 0, expected: null, path: [] });

  const fullComment = comment.toLowerCase();
  return {
    file,
    size,
    userColor,
    firstMoveColor,
    initialStones: initial,
    comment: comment.replace(/\s+/g, ' ').trim(),
    correctOnUser,
    correctOnOpp,
    totalNodes,
    leaves,
    maxDepth,
    illegalMoves: illegal,
    alternationErrors,
    allLegal,
    koNodes,
    hasKoWord: /\bko\b|劫/.test(fullComment),
    hasSekiWord: /\bseki\b|双活/.test(fullComment),
    hasDeadWord: /\bdead|dies|dying|killed|死亡|被杀/.test(fullComment),
    hasLiveWord: /\blive|alive|lives\b/.test(fullComment),
  };
}

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const outDir = join(process.cwd(), '_tools/reports');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const all: ProblemReport[] = [];
for (const sub of ['easy', 'intermediate', 'hard', 'other']) {
  const dir = join(base, sub);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.sgf')) continue;
    const text = readFileSync(join(dir, f), 'utf8');
    try {
      all.push(analyze(f, text));
    } catch (e) {
      all.push({
        file: `${sub}/${f}`,
        size: 0,
        userColor: 'B',
        firstMoveColor: null,
        initialStones: [],
        comment: `PARSE ERROR: ${(e as Error).message}`,
        correctOnUser: 0,
        correctOnOpp: 0,
        totalNodes: 0,
        leaves: 0,
        maxDepth: 0,
        illegalMoves: [],
        alternationErrors: [],
        allLegal: false,
        koNodes: 0,
        hasKoWord: false,
        hasSekiWord: false,
        hasDeadWord: false,
        hasLiveWord: false,
      });
    }
  }
}

all.sort((a, b) => a.file.localeCompare(b.file));
writeFileSync(join(outDir, 'corpus-report.json'), JSON.stringify(all, null, 1), 'utf8');

const legalCount = all.filter((p) => p.allLegal && p.alternationErrors.length === 0).length;
console.log(`total=${all.length} legal&alternating=${legalCount}`);
const withCorrectUser = all.filter((p) => p.correctOnUser > 0);
console.log(`with correct-on-user=${withCorrectUser.length} correct-on-opp-only=${all.filter((p) => p.correctOnUser === 0 && p.correctOnOpp > 0).length}`);
console.log('\nproblems with illegal or alternation issues:');
for (const p of all.filter((p) => !p.allLegal || p.alternationErrors.length > 0)) {
  console.log(`  ${p.file} illegal=${p.illegalMoves.length} ${p.illegalMoves[0]?.reason ?? ''} altErrors=${p.alternationErrors.length}`);
}
