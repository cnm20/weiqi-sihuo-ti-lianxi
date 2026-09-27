// 答案树辅助：从 puzzle 中抽取“正解主线”（用于回放/讲解）
import type { Move, Puzzle } from '../domain/types';

export interface SolutionStep {
  move: Move;
  /** 本手说明 */
  note?: string;
  isUserMove: boolean;
}

/** 返回正解主线（含电脑应手与注释） */
export function collectSolutionLine(puzzle: Puzzle): SolutionStep[] {
  const index = new Map(puzzle.solutionNodes.map((n) => [n.id, n]));
  const steps: SolutionStep[] = [];
  let cur = puzzle.root;
  let guard = 0;
  while (guard++ < 80) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const chosen = succ ?? cont;
    if (!chosen) break;
    steps.push({ move: { color: puzzle.userColor, x: chosen.x, y: chosen.y }, note: chosen.reason, isUserMove: true });
    if (chosen.type === 'success') break;
    if (chosen.whiteReply) steps.push({ move: { ...chosen.whiteReply }, note: chosen.reason, isUserMove: false });
    const next = chosen.next ? index.get(chosen.next) : undefined;
    if (!next) break;
    cur = next;
  }
  return steps;
}

/** 是否某题为做活目标（供文案） */
export function goalLabel(p: Puzzle): string {
  return p.userColor === 'B' ? '黑先' : '白先';
}
