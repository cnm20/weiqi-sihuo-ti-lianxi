// E2E 测试辅助：仅在测试脚本通过 addInitScript 开启时暴露数据
import type { Puzzle } from '../domain/types';
import { collectSolutionLine } from '../solver/solution';

export interface E2EHandle {
  puzzle: Puzzle;
  /** 用户需落子的逻辑坐标序列（正解主线中用户手，不含电脑应手） */
  userMoves: { x: number; y: number }[];
}

export function maybeEnableE2E(puzzle: Puzzle): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { __TSUME_ENABLE__?: boolean; __TSUME__?: E2EHandle };
  if (!w.__TSUME_ENABLE__) return;
  const steps = collectSolutionLine(puzzle).filter((s) => s.isUserMove);
  w.__TSUME__ = { puzzle, userMoves: steps.map((s) => ({ x: s.move.x, y: s.move.y })) };
}
