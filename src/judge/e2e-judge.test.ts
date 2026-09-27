// 端到端判题测试：用真实 GGG SGF 转换结果验证 正确/错误/未收录/非法 四类路径
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from '../../tools/convertSgf.ts';
import { submitUserMove } from './judge.ts';
import { GoBoard } from '../rules/goBoard.ts';
import type { Puzzle, Move } from '../domain/types.ts';

const BASE = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const arg = 'easy/ggg-easy-01.sgf';

function loadPuzzle(): Puzzle {
  const text = readFileSync(join(BASE, arg), 'utf8');
  const rep = convertToPuzzle({ file: arg, text });
  if (!rep.ok || !rep.puzzle) throw new Error(rep.warnings.join(';'));
  return rep.puzzle;
}

function submitAll(p: Puzzle, moves: Move[]) {
  const board = new GoBoard(p.size);
  board.setup(p.initial);
  const state = { board, node: p.root, moves: [] };
  const results: string[] = [];
  for (const m of moves) {
    if (m.color !== p.userColor) continue; // 只提交用户着；电脑应手由引擎推进
    const res = submitUserMove(state, p, m.x, m.y);
    results.push(res.kind);
    if (res.kind !== 'accepted') break;
  }
  return results;
}

describe('端到端判题（easy-01）', () => {
  it('正确主线 → correct', () => {
    const p = loadPuzzle();
    const results = submitAll(p, p === undefined ? [] : requireMainLine(p));
    expect(results[results.length - 1]).toBe('correct');
  });

  it('错误分支（记录在案的失败着法）→ wrong', () => {
    const p = loadPuzzle();
    const fb = p.root.branches.find((b) => b.type === 'failure');
    expect(fb).toBeTruthy();
    const results = submitAll(p, [{ color: p.userColor, x: fb!.x, y: fb!.y }]);
    expect(results[0]).toBe('wrong');
  });

  it('未收录合法着法 → unlisted', () => {
    const p = loadPuzzle();
    const taken = new Set(p.initial.map((s) => `${s.x},${s.y}`));
    for (const n of p.solutionNodes) {
      for (const br of n.branches) {
        taken.add(`${br.x},${br.y}`);
        if (br.whiteReply) taken.add(`${br.whiteReply.x},${br.whiteReply.y}`);
      }
    }
    let pt = { x: 0, y: 0 };
    outer: for (let y = 0; y < p.size; y++) {
      for (let x = 0; x < p.size; x++) {
        if (!taken.has(`${x},${y}`)) {
          pt = { x, y };
          break outer;
        }
      }
    }
    const results = submitAll(p, [{ color: p.userColor, ...pt }]);
    expect(results[0]).toBe('unlisted');
  });

  it('非法（占点）→ illegal', () => {
    const p = loadPuzzle();
    const occ = p.initial.find((s) => s.color === p.userColor)!;
    const results = submitAll(p, [{ color: p.userColor, x: occ.x, y: occ.y }]);
    expect(results[0]).toBe('illegal');
  });
});

function requireMainLine(p: Puzzle): Move[] {
  // 由 conversion 阶段计算并内嵌到 puzzle 源？这里手动沿答案树收集第一条 success 路线
  const index = new Map(p.solutionNodes.map((n) => [n.id, n]));
  const moves: Move[] = [];
  let cur = p.root;
  let guard = 0;
  while (guard++ < 60) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const chosen = succ ?? cont;
    if (!chosen) break;
    moves.push({ color: p.userColor, x: chosen.x, y: chosen.y });
    if (chosen.type === 'success') break;
    if (chosen.whiteReply) moves.push({ ...chosen.whiteReply });
    const next = chosen.next ? index.get(chosen.next) ?? null : null;
    if (!next) break;
    cur = next;
  }
  return moves;
}
