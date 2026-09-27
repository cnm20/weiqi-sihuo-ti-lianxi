// ASCII 棋盘渲染工具：用于校核 SGF 局面/分支（调试与内容审核用）
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Player, Stone } from '../src/domain/types.ts';

/** 将棋盘渲染为带坐标标尺的 ASCII 图 */
export function renderBoard(board: GoBoard, opts?: { crop?: boolean; coords?: boolean }): string {
  const size = board.size;
  const cells: string[][] = Array.from({ length: size }, () => Array<string>(size).fill('.'));
  let minX = size,
    maxX = -1,
    minY = size,
    maxY = -1;
  let any = false;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const c = board.at(x, y);
      if (c) {
        cells[y][x] = c === 'B' ? 'X' : 'O';
        any = true;
        if (opts?.crop !== false) {
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
        }
      }
    }
  }
  if (!any || opts?.crop === false) {
    minX = 0;
    maxX = size - 1;
    minY = 0;
    maxY = size - 1;
  }
  const pad = 1;
  const x0 = Math.max(0, minX - pad);
  const x1 = Math.min(size - 1, maxX + pad);
  const y0 = Math.max(0, minY - pad);
  const y1 = Math.min(size - 1, maxY + pad);
  const lines: string[] = [];
  // 顶部列标（在非 crop 模式下省略 0..9 大量无用列时也省略标尺，避免误导）
  const colLabel = (x: number): string => (x < 10 ? String(x) : String.fromCharCode(97 + x - 10));
  if (opts?.coords) {
    let head = '   ';
    for (let x = x0; x <= x1; x++) head += colLabel(x).padStart(2);
    lines.push(head);
  }
  for (let y = y1; y >= y0; y--) {
    let row = opts?.coords ? String(y).padStart(2) + ' ' : '';
    for (let x = x0; x <= x1; x++) {
      row += (cells[y][x] === '.' ? ' .' : ' ' + cells[y][x]);
    }
    lines.push(row);
  }
  return lines.join('\n');
}

export interface RenderPosition {
  stones: Stone[];
  size?: number;
}

export function renderPosition(pos: RenderPosition): string {
  const size = pos.size ?? 19;
  const b = new GoBoard(size);
  b.setup(pos.stones);
  return renderBoard(b);
}

/** 渲染当前棋盘与最后一步 */
export function renderMoveTrace(size: number, initial: Stone[], moves: { color: Player; x: number; y: number }[]): string {
  const b = new GoBoard(size);
  b.setup(initial);
  const out: string[] = [];
  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    const res = b.tryMove(m.color, m.x, m.y);
    out.push(`step ${i + 1}: ${m.color}(${m.x},${m.y}) => ${res.status} captured=${res.captured.length}`);
    out.push(renderBoard(b));
  }
  return out.join('\n\n');
}
