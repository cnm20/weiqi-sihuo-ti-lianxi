// 答题会话纯逻辑：单一事实来源 = 落子序列(moves)。
// 任何时刻的局面、当前答案节点都由 replayJudgeState 重放得到，
// 因此刷新/恢复 = 重新构造 moves 后重放即可。
import type { Move, Player, Puzzle, SolutionNode } from '../domain/types';
import { GoBoard } from '../rules/goBoard';
import { submitUserMove, replayJudgeState, type StepResult } from '../judge/judge';

export type SessionPhase = 'not-started' | 'solving' | 'settled';

export interface SolveResult {
  kind: 'correct' | 'wrong' | 'timeout' | 'unrecorded';
  reason?: string;
  message: string;
}

export interface SolveState {
  phase: SessionPhase;
  /** 完整落子序列（用户+电脑交替；电脑应手合并在同一次 submit 内） */
  moves: Move[];
  outcome?: SolveResult;
}

export function newSolveState(): SolveState {
  return { phase: 'not-started', moves: [] };
}

export function boardFor(puzzle: Puzzle, moves: Move[]): GoBoard {
  const b = new GoBoard(puzzle.size);
  b.setup(puzzle.initial);
  for (const m of moves) {
    const r = b.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') throw new Error('invalid move replay ' + JSON.stringify(m));
  }
  return b;
}

export function currentNodeFor(puzzle: Puzzle, moves: Move[]): SolutionNode {
  const { state } = replayJudgeState(puzzle, moves);
  return state.node;
}

export interface SubmitOutcome {
  result: StepResult;
  /** 若合法推进则产生的新 moves；否则保持原样 */
  nextMoves: Move[];
  /** 是否到达终点（correct/wrong/unlisted），需要结算 */
  terminal?: SolveResult;
}

/**
 * 提交用户着法（纯函数）。
 * 依据：答案树分支类型。返回推进后的 moves 或结算结果。
 */
export function submitPoint(puzzle: Puzzle, moves: Move[], x: number, y: number): SubmitOutcome {
  const { state } = replayJudgeState(puzzle, moves);
  const res = submitUserMove(state, puzzle, x, y);
  if (res.kind === 'accepted') {
    return { result: res, nextMoves: state.moves };
  }
  if (res.kind === 'correct') {
    return {
      result: res,
      nextMoves: state.moves, // correct 分支已把用户着 push 进 state.moves（但无电脑应手）
      terminal: { kind: 'correct', message: '回答正确' },
    };
  }
  if (res.kind === 'wrong') {
    // 错误分支不落子；moves 保持
    return { result: res, nextMoves: moves, terminal: { kind: 'wrong', reason: res.reason, message: '回答错误' } };
  }
  if (res.kind === 'unlisted') {
    return { result: res, nextMoves: moves, terminal: { kind: 'unrecorded', message: res.message } };
  }
  // illegal
  return { result: res, nextMoves: moves };
}

/** 依据 moves 判断当前轮到谁 */
export function nextToPlay(puzzle: Puzzle, moves: Move[]): Player {
  void puzzle;
  const last = moves[moves.length - 1];
  if (!last) return 'B';
  return last.color === 'B' ? 'W' : 'B';
}

/** 从持久化 Attempt 恢复：构造 moves（Attempt.moves 已含完整交替序列） */
export function solveStateFromMoves(moves: Move[], phase: SessionPhase, outcome?: SolveResult): SolveState {
  return { phase, moves: [...moves], outcome };
}
