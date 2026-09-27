// 棋盘 SVG 组件：木色棋盘 + 黑白棋子 + 星位/坐标 + 预览落点
import type { Point } from '../domain/types';
import { GoBoard } from '../rules/goBoard';

export interface BoardPiece {
  x: number;
  y: number;
  color: 'B' | 'W';
}

export interface GoBoardViewProps {
  board: GoBoard;
  viewRegion: { minX: number; minY: number; maxX: number; maxY: number };
  /** 预览落点 */
  preview?: Point | null;
  /** 最后落子标记 */
  lastMove?: Point | null;
  /** 是否可交互 */
  interactive: boolean;
  onPointClick?: (p: Point) => void;
  /** 是否显示坐标（19路全盘时用） */
  showCoords?: boolean;
  disabled?: boolean;
}

const LINE_W = 1;
const PAD = 28;
const CELL = 30;

export function boardToPieces(board: GoBoard): BoardPiece[] {
  const out: BoardPiece[] = [];
  const size = board.size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const c = board.at(x, y);
      if (c) out.push({ x, y, color: c });
    }
  }
  return out;
}

const COORD_LABELS = 'ABCDEFGHJKLMNOPQRSTUVWXYZ'.split('');

function starPoints(size: number): Point[] {
  const s = size;
  if (s === 9) return [
    { x: 2, y: 2 }, { x: 6, y: 2 }, { x: 2, y: 6 }, { x: 6, y: 6 }, { x: 4, y: 4 },
  ];
  if (s === 13) return [
    { x: 3, y: 3 }, { x: 9, y: 3 }, { x: 3, y: 9 }, { x: 9, y: 9 }, { x: 6, y: 6 }, { x: 3, y: 6 }, { x: 9, y: 6 }, { x: 6, y: 3 }, { x: 6, y: 9 },
  ];
  // 19
  return [
    { x: 3, y: 3 }, { x: 9, y: 3 }, { x: 15, y: 3 },
    { x: 3, y: 9 }, { x: 9, y: 9 }, { x: 15, y: 9 },
    { x: 3, y: 15 }, { x: 9, y: 15 }, { x: 15, y: 15 },
  ];
}

export default function GoBoardView({
  board,
  viewRegion,
  preview,
  lastMove,
  interactive,
  onPointClick,
  showCoords = false,
  disabled = false,
}: GoBoardViewProps) {
  const size = board.size;
  const nCols = viewRegion.maxX - viewRegion.minX + 1;
  const nRows = viewRegion.maxY - viewRegion.minY + 1;
  const spanX = (nCols - 1) * CELL;
  const spanY = (nRows - 1) * CELL;
  const W = spanX + PAD * 2 + (showCoords ? 20 : 0);
  const H = spanY + PAD * 2 + (showCoords ? 20 : 0);
  const offset = PAD + (showCoords ? 20 : 0);

  // Only draw pieces inside the visible region. A cropped puzzle must not
  // project stones outside its viewBox onto the wood-colored margin.
  const pieces = boardToPieces(board).filter((p) =>
    p.x >= viewRegion.minX && p.x <= viewRegion.maxX &&
    p.y >= viewRegion.minY && p.y <= viewRegion.maxY,
  );
  const stars = starPoints(size).filter((p) => p.x >= viewRegion.minX && p.x <= viewRegion.maxX && p.y >= viewRegion.minY && p.y <= viewRegion.maxY);
  const px = (x: number) => offset + (x - viewRegion.minX) * CELL;
  const py = (y: number) => offset + (viewRegion.maxY - y) * CELL; // y 轴翻转：SGF y 从下往上显示

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!interactive || disabled || !onPointClick) return;
    const svg = e.currentTarget;
    const screenMatrix = svg.getScreenCTM();
    if (!screenMatrix) return;
    const screenPoint = svg.createSVGPoint();
    screenPoint.x = e.clientX;
    screenPoint.y = e.clientY;
    const point = screenPoint.matrixTransform(screenMatrix.inverse());
    const x = Math.round((point.x - offset) / CELL) + viewRegion.minX;
    const y = viewRegion.maxY - Math.round((point.y - offset) / CELL);
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    if (x < viewRegion.minX || x > viewRegion.maxX || y < viewRegion.minY || y > viewRegion.maxY) return;
    onPointClick({ x, y });
  };

  const gridLines: React.ReactNode[] = [];
  for (let i = 0; i < nCols; i++) {
    const x = offset + i * CELL;
    gridLines.push(<line key={`v${i}`} x1={x} y1={offset} x2={x} y2={offset + spanY} stroke="#5b3a1e" strokeWidth={LINE_W} />);
  }
  for (let i = 0; i < nRows; i++) {
    const y = offset + i * CELL;
    gridLines.push(<line key={`h${i}`} x1={offset} y1={y} x2={offset + spanX} y2={y} stroke="#5b3a1e" strokeWidth={LINE_W} />);
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="auto"
      style={{ touchAction: 'none', userSelect: 'none', WebkitTapHighlightColor: 'transparent', cursor: interactive ? 'pointer' : 'default' }}
      onClick={handleClick}
      role={interactive ? 'button' : undefined}
      aria-label="棋盘"
    >
      <rect x={0} y={0} width={W} height={H} rx={8} fill="#e0a96d" />
      <rect x={offset - 12} y={offset - 12} width={spanX + 24} height={spanY + 24} rx={4} fill="#eab77c" />
      {gridLines}
      {showCoords &&
        Array.from({ length: nCols }, (_, i) => {
          const label = COORD_LABELS[viewRegion.minX + i];
          const xx = offset + i * CELL;
          return <text key={`cx${i}`} x={xx} y={offset - 8} textAnchor="middle" fontSize={10} fill="#6b4a24">{label}</text>;
        })}
      {stars.map((s, i) => (
        <circle key={`s${i}`} cx={px(s.x)} cy={py(s.y)} r={4} fill="#5b3a1e" />
      ))}
      {pieces.map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <circle cx={px(p.x)} cy={py(p.y)} r={CELL / 2 - 2.2} fill={p.color === 'B' ? '#111' : '#f9f9f9'} stroke="#222" strokeWidth={0.8} />
          {lastMove && lastMove.x === p.x && lastMove.y === p.y && (
            <circle cx={px(p.x)} cy={py(p.y)} r={5} fill={p.color === 'B' ? '#eee' : '#222'} opacity={0.85} />
          )}
        </g>
      ))}
      {preview && interactive && (
        <circle cx={px(preview.x)} cy={py(preview.y)} r={CELL / 2 - 2.2} fill="none" stroke={previewColor} strokeWidth={2.4} strokeDasharray="3 2" opacity={0.9} />
      )}
    </svg>
  );
}

const previewColor = '#d00';
