// 核心共享类型：题库、答案树、挑战记录、进度
// 棋盘坐标统一为 0 起始，(x, y)，x 为列（从左到右），y 为行（从上到下），左上角为原点。

/** 棋子颜色：B 黑，W 白 */
export type Player = 'B' | 'W';

/** 题面目标 */
export type GoalType = 'live' | 'kill';

/** 坐标（0 起始） */
export interface Point {
  x: number;
  y: number;
}

/** 一枚棋子 */
export interface Stone extends Point {
  color: Player;
}

/** 棋盘上的一个落子（含颜色），用于记录走法 */
export interface Move extends Point {
  color: Player;
}

/** 显示区域（裁剪窗口，棋盘逻辑坐标，含边界） */
export interface ViewRegion {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/** 题面结果（面向答题者的结算） */
export type AttemptOutcome =
  | 'correct' // 完成正确变化
  | 'wrong' // 落入已确认的错误变化
  | 'timeout' // 时间到
  | 'unrecorded' // 未收录变化（不计成绩）
  | 'abandoned'; // 中途放弃（不含错误/超时/未收录结算）——重试或返回

/** 单个答案树节点的落子分支分类 */
export type BranchType = 'success' | 'failure' | 'continue';

/**
 * 答案树节点（以「轮到用户落子」的局面对齐）。
 * - root 节点：初始局面，用户先手。
 * - children：该局面上用户所有「已审核」的候选落点。
 *   - success 分支：用户落此点即到达成功终点（答对），无电脑应手。
 *   - failure 分支：用户落此点即落入已确认错误变化（答错），无电脑应手。
 *   - continue 分支：此点可行但尚未结束，电脑按 whiteReply 固定应手，
 *     之后进入 next 节点（用户继续落子）。
 * - 每个节点可覆盖「未收录合法走法」的处理策略（否则继承题面 unlistedPolicy）。
 */
export interface SolutionNode {
  /** 稳定节点 ID（同题内唯一） */
  id: string;
  /** 用户落子分支列表 */
  branches: SolutionBranch[];
  /** 本节点未收录走法策略覆盖；null 表示继承题面策略 */
  unlistedOverride?: UnlistedPolicy | null;
  /** 附加说明（可选，用于回放讲解） */
  note?: string;
}

export interface SolutionBranch {
  /** 用户的落点 */
  x: number;
  y: number;
  /** 分支分类 */
  type: BranchType;
  /** 到达下一节点的节点 ID（仅 continue 分支使用） */
  next?: string;
  /** 电脑固定应手（仅 continue 分支使用；应手方为电脑） */
  whiteReply?: Move;
  /** 成功/失败原因或讲解文字 */
  reason?: string;
  /** 典型错误参考变化（展示用，非交互判题）：电脑应手后用户再犯错的落子等 */
  refutation?: Move[];
}

/** 未收录合法走法的处理策略 */
export type UnlistedPolicy = 'neutral' | 'allFail';

/** 审核状态 */
export type ReviewStatus = 'reviewed' | 'needs-review';

/** 题目来源记录 */
export interface SourceRef {
  origin: 'gogameguru' | 'original';
  /** 来源文件/标识，如 ggg-easy-01.sgf */
  ref: string;
  license?: string;
  /** 对原始题目的改编说明 */
  adapted?: string;
}

/** 一道题 */
export interface Puzzle {
  /** 稳定唯一 ID，如 p001 */
  id: string;
  /** 难度档位 0=9级 … 9=1段 */
  levelIndex: number;
  /** 档内顺序（从浅到深 1..10） */
  orderInLevel: number;
  /** 棋盘逻辑尺寸（9/13/19），决定规则计算范围 */
  size: number;
  /** 初始局面棋子（不含后续走法） */
  initial: Stone[];
  /** 答题者执子颜色 */
  userColor: Player;
  /** 题面目标：做活 or 杀棋 */
  goal: GoalType;
  /** 目标棋群上的棋子坐标（用于标记/解说） */
  targetGroup: Point[];
  /** 显示区域（裁剪窗口），不改变真实棋盘边界与气的计算 */
  viewRegion: ViewRegion;
  /** 题目主题/名称 */
  title: string;
  /** 中文目标描述，如「黑先做活」 */
  goalText: string;
  /** 解题说明（要点） */
  instruction: string;
  /** 未收录合法走法默认策略 */
  unlistedPolicy: UnlistedPolicy;
  /** 来源记录 */
  source: SourceRef;
  /** 审核状态 */
  reviewStatus: ReviewStatus;
  /** 答案树根节点 */
  root: SolutionNode;
  /** 全部答案树节点（扁平表，含 root），用于按 id 快速定位（判题/回放） */
  solutionNodes: SolutionNode[];
}

/** 挑战记录（可持久化恢复） */
export interface Attempt {
  /** 挑战 ID */
  attemptId: string;
  /** 题目 ID */
  puzzleId: string;
  /** 从初始局面起完整落子序列（用户与电脑交替） */
  moves: Move[];
  /** 答案树当前位置节点 ID（根为 puzzle.root.id） */
  nodeId: string;
  /** 已累计前台毫秒数（封顶 180000） */
  elapsedMs: number;
  /** 当前阶段 */
  phase: 'not-started' | 'solving' | 'ended';
  /** 最终结果（仅 phase=ended 有意义） */
  outcome?: AttemptOutcome;
  /** 结算时间（epoch ms） */
  settledAt?: number;
  /** 题目初始局面快照版本（防止题库更新后旧挑战失效） */
  boardFingerprint?: string;
}

/** 每题进度（本地记录） */
export interface PuzzleProgress {
  attempts: number;
  correct: number;
  wrong: number;
  timeout: number;
  unrecorded: number;
  /** 最近一次结果 */
  lastOutcome?: AttemptOutcome;
  /** 是否曾独立答对 */
  solvedOnce: boolean;
  /** 最近更新时间 */
  updatedAt: number;
}

/** 整体本地数据 */
export interface LocalData {
  version: number;
  progress: Record<string, PuzzleProgress>;
  /** 每档作答统计（首页展示用） */
  levelCorrect: Record<string, number>;
  /** 进行中的挑战（按题目 ID） */
  activeAttempts?: Record<string, Attempt>;
  /** PWA 更新提示状态等 */
  ui?: Record<string, unknown>;
}

/** 常量 */
export const TOTAL_LEVELS = 10;
export const PUZZLES_PER_LEVEL = 10;
export const TOTAL_PUZZLES = 100;
export const TIME_LIMIT_MS = 180_000;
