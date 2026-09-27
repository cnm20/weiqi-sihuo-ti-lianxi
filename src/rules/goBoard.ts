// 棋盘规则纯逻辑：棋群、气、提子、禁入点（占点/自杀）、简单劫。
// 支持任意逻辑尺寸（9/13/19…）。坐标为 0 起始，(x,y)。
import type { Player, Point, Stone } from '../domain/types.ts';

export type Cell = Player | null;
export type MoveStatus = 'ok' | 'occupied' | 'suicide' | 'ko';

export interface MoveResult {
  status: MoveStatus;
  /** 提掉的棋子 */
  captured: Point[];
  /** 本手后形成的劫争禁入点（简单劫：仅当对方下一手落在该点可立即提回） */
  koPoint: Point | null;
}

const DIRS: ReadonlyArray<readonly [number, number]> = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

export class GoBoard {
  readonly size: number;
  private grid: Cell[];
  /** 当前禁入点（简单劫）。每次落子后重置 */
  private ko: Point | null = null;

  constructor(size: number) {
    if (!Number.isInteger(size) || size < 2 || size > 25) {
      throw new Error(`invalid board size ${size}`);
    }
    this.size = size;
    this.grid = new Array<Cell>(size * size).fill(null);
  }

  private idx(x: number, y: number): number {
    return y * this.size + x;
  }

  inBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  at(x: number, y: number): Cell {
    if (!this.inBounds(x, y)) return null;
    return this.grid[this.idx(x, y)];
  }

  /** 直接放置棋子（用于搭建初始局面，不做合法性检查） */
  placeStone(color: Player, x: number, y: number): void {
    if (!this.inBounds(x, y)) throw new Error('out of bounds');
    if (this.grid[this.idx(x, y)] !== null) throw new Error('occupied');
    this.grid[this.idx(x, y)] = color;
  }

  /** 用初始棋子数组搭建局面 */
  setup(stones: Stone[]): void {
    for (const s of stones) this.placeStone(s.color, s.x, s.y);
  }

  private neighbors(x: number, y: number): Point[] {
    const out: Point[] = [];
    for (const [dx, dy] of DIRS) {
      const nx = x + dx;
      const ny = y + dy;
      if (this.inBounds(nx, ny)) out.push({ x: nx, y: ny });
    }
    return out;
  }

  /** 找出包含 (x,y) 的整块同色棋群，返回其所有点 */
  groupOf(x: number, y: number): Point[] {
    const color = this.at(x, y);
    if (color === null) return [];
    const seen = new Set<number>();
    const queue = [this.idx(x, y)];
    seen.add(this.idx(x, y));
    const result: Point[] = [];
    while (queue.length > 0) {
      const cur = queue.pop()!;
      const cx = cur % this.size;
      const cy = Math.floor(cur / this.size);
      result.push({ x: cx, y: cy });
      for (const n of this.neighbors(cx, cy)) {
        if (this.at(n.x, n.y) === color && !seen.has(this.idx(n.x, n.y))) {
          seen.add(this.idx(n.x, n.y));
          queue.push(this.idx(n.x, n.y));
        }
      }
    }
    return result;
  }

  /** 某棋群的气点集合 */
  libertiesOf(x: number, y: number): Point[] {
    const color = this.at(x, y);
    if (color === null) return [];
    const group = this.groupOf(x, y);
    const libs = new Map<number, Point>();
    for (const p of group) {
      for (const n of this.neighbors(p.x, p.y)) {
        if (this.at(n.x, n.y) === null) {
          libs.set(this.idx(n.x, n.y), n);
        }
      }
    }
    return [...libs.values()];
  }

  /** 移除一串棋子，返回被移除的点 */
  private removeGroup(points: Point[]): Point[] {
    for (const p of points) {
      this.grid[this.idx(p.x, p.y)] = null;
    }
    return points;
  }

  get koPoint(): Point | null {
    return this.ko;
  }

  /**
   * 尝试落子。规则：禁止占点、禁止自杀；简单劫争禁止立即提回。
   * 成功时改变棋盘状态并更新劫状态。
   */
  tryMove(color: Player, x: number, y: number): MoveResult {
    if (!this.inBounds(x, y)) {
      return { status: 'suicide', captured: [], koPoint: null };
    }
    if (this.at(x, y) !== null) {
      return { status: 'occupied', captured: [], koPoint: null };
    }
    // 简单劫：对方上一手形成劫，本手不能落在劫点
    if (this.ko && this.ko.x === x && this.ko.y === y) {
      return { status: 'ko', captured: [], koPoint: null };
    }
    const opponent: Player = color === 'B' ? 'W' : 'B';

    // 模拟落子
    this.grid[this.idx(x, y)] = color;

    // 先提对方无气棋群
    const captured: Point[] = [];
    const oppNeighbors: Point[] = [];
    for (const n of this.neighbors(x, y)) {
      if (this.at(n.x, n.y) === opponent) oppNeighbors.push(n);
    }
    const capturedGroups = new Map<number, Point[]>();
    for (const n of oppNeighbors) {
      const key = this.idx(n.x, n.y);
      if (capturedGroups.has(key)) continue;
      const group = this.groupOf(n.x, n.y);
      if (this.libertiesOf(n.x, n.y).length === 0) {
        capturedGroups.set(key, group);
      }
    }
    for (const [, group] of capturedGroups) {
      captured.push(...this.removeGroup(group));
    }

    // 再检查自己是否有气（自杀）
    if (this.libertiesOf(x, y).length === 0) {
      // 还原：移除刚落子的棋
      this.grid[this.idx(x, y)] = null;
      // 还原被提的棋（需要记住它们原先的相对位置；为简单，完整还原场景在此极少发生）
      for (const [, group] of capturedGroups) {
        for (const p of group) this.grid[this.idx(p.x, p.y)] = opponent;
      }
      return { status: 'suicide', captured: [], koPoint: null };
    }

    // 简单劫判定：本手恰好提掉对方一枚棋子，且刚落子后己方棋群仅由该单子组成、
    // 只剩一口气且该气即被提点（否则立即提回会提掉多子或不是劫形，属合法）。
    let koPoint: Point | null = null;
    if (captured.length === 1) {
      const cap = captured[0];
      const ownGroup = this.groupOf(x, y);
      if (ownGroup.length === 1) {
        const ownLibs = this.libertiesOf(x, y);
        if (ownLibs.length === 1 && ownLibs[0].x === cap.x && ownLibs[0].y === cap.y) {
          koPoint = cap;
        }
      }
    }
    this.ko = koPoint;
    return { status: 'ok', captured, koPoint };
  }

  /** 当前执 color 落子是否合法（纯检查，不修改棋盘） */
  isLegal(color: Player, x: number, y: number): boolean {
    return this.clone().tryMove(color, x, y).status === 'ok';
  }

  /** 棋盘内容快照（指纹/调试用） */
  snapshot(): (Player | null)[] {
    return [...this.grid];
  }

  clone(): GoBoard {
    const b = new GoBoard(this.size);
    b.grid = [...this.grid];
    b.ko = this.ko ? { ...this.ko } : null;
    return b;
  }
}

/** 由落子序列重建棋盘（用于从 Attempt 恢复局面） */
export function replayBoard(size: number, initial: Stone[], moves: { color: Player; x: number; y: number }[]): GoBoard {
  const board = new GoBoard(size);
  board.setup(initial);
  for (const m of moves) {
    const res = board.tryMove(m.color, m.x, m.y);
    if (res.status !== 'ok') {
      throw new Error(`replay illegal move at ${m.x},${m.y}: ${res.status}`);
    }
  }
  return board;
}
