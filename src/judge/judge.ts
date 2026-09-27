// 判题引擎：在「答案树」上推进用户与电脑回合。
// 语义：
//  - 答案树节点 = 用户轮到的局面（root = 初始局面）。
//  - 分支 = 该局面上用户已审核的候选落点（success 终点 / failure 终点 / continue）。
//  - continue 分支由电脑按 whiteReply 固定应手，进入 next 节点。
//  - 未收录合法走法按节点/题面策略处理：neutral（不计成绩）或 allFail（判错）。
//  - 非法落子（占点/自杀/劫回）仅提示不提交。
import type {
  AttemptOutcome,
  BranchType,
  Move,
  Puzzle,
  SolutionNode,
} from '../domain/types.ts';
import { GoBoard } from '../rules/goBoard.ts';

export type RejectionReason = 'occupied' | 'suicide' | 'ko';

/** 单步提交结果 */
export type StepResult =
  | { kind: 'illegal'; reason: RejectionReason; message: string }
  | { kind: 'unlisted'; message: string } // 未收录 → 停止本次挑战（不计成绩），可重试/看解答
  | { kind: 'correct' } // 完成正确变化
  | { kind: 'wrong'; reason: string } // 落入已确认错误变化
  | { kind: 'accepted'; computerReply: Move; nextNodeId: string }; // 走子正确，电脑应手后继续

export interface JudgeState {
  board: GoBoard;
  node: SolutionNode;
  /** 全部落子序列（含电脑应手），用于持久化 */
  moves: Move[];
}

export function illegalReasonText(reason: RejectionReason): string {
  switch (reason) {
    case 'occupied':
      return '此处已有棋子';
    case 'suicide':
      return '此着属于自杀，不能落子';
    case 'ko':
      return '此点受劫争限制，暂不能落子';
  }
}

function findBranch(node: SolutionNode, x: number, y: number) {
  return node.branches.find((b) => b.x === x && b.y === y);
}

function outcomeText(outcome: AttemptOutcome): string {
  switch (outcome) {
    case 'correct':
      return '回答正确';
    case 'wrong':
      return '回答错误';
    case 'timeout':
      return '时间到，本题超时';
    case 'unrecorded':
      return '此变化暂未收录，本次不计成绩';
    case 'abandoned':
      return '已退出本次挑战';
  }
}

export { outcomeText };

/**
 * 用户落子（已由 UI 保证处于 solving 阶段、且当前轮到用户）。
 * board 会随合法落子被修改。
 */
export function submitUserMove(state: JudgeState, puzzle: Puzzle, x: number, y: number): StepResult {
  const userColor = puzzle.userColor;
  // 1) 棋规合法性
  const legal = state.board.isLegal(userColor, x, y);
  if (!legal) {
    // 判别原因，给出中文提示
    const res = state.board.tryMove(userColor, x, y);
    const reason: RejectionReason = res.status === 'ok' ? 'occupied' : res.status;
    return { kind: 'illegal', reason, message: illegalReasonText(reason) };
  }
  // 2) 答案树收录情况
  const branch = findBranch(state.node, x, y);
  if (!branch) {
    const policy = state.node.unlistedOverride ?? puzzle.unlistedPolicy;
    if (policy === 'allFail') {
      return { kind: 'wrong', reason: '此着经审核确认无法完成正确变化' };
    }
    return { kind: 'unlisted', message: outcomeText('unrecorded') };
  }
  // 3) 分支类型
  if (branch.type === 'success') {
    state.board.tryMove(userColor, x, y);
    state.moves.push({ color: userColor, x, y });
    return { kind: 'correct' };
  }
  if (branch.type === 'failure') {
    // 判错：不实际落子？设计约定：错误分支不落子、直接结算。
    return { kind: 'wrong', reason: branch.reason ?? '落入已确认的错误变化' };
  }
  // 4) continue：必须提供电脑应手与下一节点
  if (!branch.next || !branch.whiteReply) {
    return { kind: 'unlisted', message: '题库数据不完整，无法继续' };
  }
  // 用户走子
  const ur = state.board.tryMove(userColor, x, y);
  if (ur.status !== 'ok') {
    return { kind: 'illegal', reason: ur.status, message: illegalReasonText(ur.status) };
  }
  state.moves.push({ color: userColor, x, y });
  // 电脑应手（固定）——校验应手落子合法
  const reply = branch.whiteReply;
  const rr = state.board.tryMove(reply.color, reply.x, reply.y);
  if (rr.status !== 'ok') {
    throw new Error(`题库错误：电脑应手 ${reply.x},${reply.y} 不合法（${rr.status}）`);
  }
  state.moves.push({ ...reply });
  // 定位下一节点
  const nextNode = findNodeById(puzzle, branch.next);
  if (!nextNode) {
    throw new Error(`题库错误：next 节点缺失 ${branch.next}`);
  }
  state.node = nextNode;
  return { kind: 'accepted', computerReply: reply, nextNodeId: nextNode.id };
}

export function findNodeById(puzzle: Puzzle, id: string): SolutionNode | null {
  const nodes = puzzle.solutionNodes;
  if (nodes) return nodes.find((n) => n.id === id) ?? null;
  const stack: SolutionNode[] = [puzzle.root];
  while (stack.length) {
    const n = stack.pop()!;
    if (n.id === id) return n;
    for (const b of n.branches) {
      if (b.type === 'continue' && b.next) {
        const next = findNodeById(puzzle, b.next);
        if (next) stack.push(next);
      }
    }
  }
  return null;
}

/** 由 moves 序列重放得到节点状态（恢复挑战用） */
export function replayJudgeState(
  puzzle: Puzzle,
  moves: Move[],
): { state: JudgeState; branchTypes: BranchType[] } {
  const board = new GoBoard(puzzle.size);
  board.setup(puzzle.initial);
  let node: SolutionNode = puzzle.root;
  // moves 是用户与电脑交替序列：用户下在 node.branches 匹配，然后电脑按 whiteReply 下。
  let i = 0;
  const branchSeq: BranchType[] = [];
  while (i < moves.length) {
    const userMove = moves[i];
    if (userMove.color !== puzzle.userColor) {
      throw new Error('replay: 非用户走子');
    }
    const br = findBranch(node, userMove.x, userMove.y);
    if (!br) throw new Error('replay: 走子不在答案树中');
    const ur = board.tryMove(userMove.color, userMove.x, userMove.y);
    if (ur.status !== 'ok') throw new Error('replay: 用户走子非法');
    branchSeq.push(br.type);
    if (br.type === 'success' || br.type === 'failure') {
      // 用户最后一手已完成/失败，序列到此结束
      i += 1;
      break;
    }
    i += 1;
    // 电脑应手
    if (i < moves.length) {
      const replyMove = moves[i];
      const rr = board.tryMove(replyMove.color, replyMove.x, replyMove.y);
      if (rr.status !== 'ok') throw new Error('replay: 电脑应手非法');
      i += 1;
    }
    if (!br.next) throw new Error('replay: continue 分支缺少 next');
    const next = findNodeById(puzzle, br.next);
    if (!next) throw new Error('replay: next 节点缺失');
    node = next;
  }
  return { state: { board, node, moves: moves.slice(0, i) }, branchTypes: branchSeq };
}
