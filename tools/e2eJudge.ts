// 端到端判题验证：node tools/e2eJudge.ts
// 用真实转换结果构建 puzzle，走一遍：正确解答、错误着法、未收录着法、非法着法
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';
import { submitUserMove, type JudgeState } from '../src/judge/judge.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Puzzle, Move } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const arg = process.argv[2] ?? 'easy/ggg-easy-01.sgf';
const text = readFileSync(join(base, arg), 'utf8');
const rep = convertToPuzzle({ file: arg, text });
if (!rep.ok || !rep.puzzle) {
  console.error('convert fail', rep.warnings);
  process.exit(1);
}
const p: Puzzle = rep.puzzle;

function freshState(p: Puzzle): JudgeState {
  const board = new GoBoard(p.size);
  board.setup(p.initial);
  return { board, node: p.root, moves: [] };
}

function submitSequence(p: Puzzle, moves: Move[], label: string) {
  const state = freshState(p);
  const trail: string[] = [];
  for (const m of moves) {
    const res = submitUserMove(state, p, m.x, m.y);
    trail.push(`${m.color}${m.x},${m.y} -> ${res.kind}${'reason' in res && res.reason ? ` (${res.reason.slice(0, 40)})` : ''}`);
    if (res.kind !== 'accepted') break;
  }
  console.log(`\n[${label}]`);
  for (const t of trail) console.log('   ', t);
  const lastKind = trail[trail.length - 1]?.split(' -> ')[1] ?? '?';
  return lastKind;
}

// 正确主线
const mainLine: Move[] = rep.stats.mainLine;
submitSequence(p, mainLine, '正确主线 ' + mainLine.map((m) => `${m.color}${m.x},${m.y}`).join(' '));

// 一个错误分支（root 的 failure 分支坐标）
const failureBranch = p.root.branches.find((b) => b.type === 'failure');
if (failureBranch) {
  submitSequence(p, [{ color: p.userColor, x: failureBranch.x, y: failureBranch.y }], `错误着法 ${p.userColor}${failureBranch.x},${failureBranch.y}`);
} else {
  console.log('\n(无失败分支可测)');
}

// 未收录着法：找一个空点（不在任何分支/初始子上）
function emptyPoint(p: Puzzle) {
  const taken = new Set(p.initial.map((s) => `${s.x},${s.y}`));
  for (const n of p.solutionNodes) {
    for (const br of n.branches) {
      taken.add(`${br.x},${br.y}`);
      if (br.whiteReply) taken.add(`${br.whiteReply.x},${br.whiteReply.y}`);
    }
  }
  for (let y = 0; y < p.size; y++) {
    for (let x = 0; x < p.size; x++) {
      if (!taken.has(`${x},${y}`)) return { x, y };
    }
  }
  return { x: 0, y: 0 };
}
const pt = emptyPoint(p);
submitSequence(p, [{ color: p.userColor, x: pt.x, y: pt.y }], `未收录着法 ${p.userColor}${pt.x},${pt.y}`);

// 非法：占点
const occ = p.initial.find((s) => s.color === p.userColor)!;
submitSequence(p, [{ color: p.userColor, x: occ.x, y: occ.y }], `非法（占点）${occ.x},${occ.y}`);

console.log('\nok');
