// 会话纯逻辑测试：覆盖 正确/错误/未收录/非法 与 多步 continue
import { describe, expect, it } from 'vitest';
import type { Puzzle } from '../domain/types';
import { submitPoint } from './session';
import { convertToPuzzle } from '../../tools/convertSgf';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

function load(file: string): Puzzle {
  const rep = convertToPuzzle({ file, text: readFileSync(join(BASE, file), 'utf8') });
  if (!rep.ok || !rep.puzzle) throw new Error(rep.warnings.join(';'));
  return rep.puzzle;
}

describe('session 纯逻辑（easy-01 真实 SGF）', () => {
  const p = load('easy/ggg-easy-01.sgf');

  it('多步正解：submit continue 后落到下一节点并可 success', () => {
    // easy-01 主变化：B(17,18) → W(17,17) → B(13,18) success
    let moves: { color: 'B' | 'W'; x: number; y: number }[] = [];
    const r1 = submitPoint(p, moves, 17, 18);
    expect(r1.result.kind).toBe('accepted');
    expect(r1.result.kind === 'accepted' && r1.result.computerReply).toEqual({ color: 'W', x: 17, y: 17 });
    moves = r1.nextMoves;
    expect(moves).toHaveLength(2); // 用户 + 电脑

    const r2 = submitPoint(p, moves, 13, 18);
    expect(r2.terminal?.kind).toBe('correct');
    expect(r2.nextMoves).toHaveLength(3);
  });

  it('错误分支 → wrong，且不改动 moves', () => {
    const fb = p.root.branches.find((b) => b.type === 'failure')!;
    const r = submitPoint(p, [], fb.x, fb.y);
    expect(r.terminal?.kind).toBe('wrong');
    expect(r.nextMoves).toHaveLength(0);
  });

  it('未收录 → unrecorded', () => {
    const r = submitPoint(p, [], 0, 0);
    expect(r.terminal?.kind).toBe('unrecorded');
  });

  it('非法（占点）→ illegal', () => {
    const occ = p.initial.find((s) => s.color === p.userColor)!;
    const r = submitPoint(p, [], occ.x, occ.y);
    expect(r.result.kind).toBe('illegal');
    expect(r.terminal).toBeUndefined();
  });
});
