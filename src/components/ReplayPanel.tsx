// 解答回放组件：逐步展示正解主线
import { useMemo, useState } from 'react';
import type { Puzzle } from '../domain/types';
import { GoBoard } from '../rules/goBoard';
import GoBoardView from './GoBoardView';
import { collectSolutionLine, type SolutionStep } from '../solver/solution';

export function ReplayPanel({ puzzle, onClose }: { puzzle: Puzzle; onClose: () => void }) {
  const steps = useMemo(() => collectSolutionLine(puzzle), [puzzle]);
  const [index, setIndex] = useState(0);

  const shown = steps.slice(0, index + 1);
  const board = useMemo(() => {
    const b = new GoBoard(puzzle.size);
    b.setup(puzzle.initial);
    for (const s of shown) {
      const r = b.tryMove(s.move.color, s.move.x, s.move.y);
      if (r.status !== 'ok') break;
    }
    return b;
  }, [puzzle, index]);

  const last = shown[shown.length - 1];
  const note = last?.note ?? (last ? (last.isUserMove ? '正解' : '黑应') : '');

  return (
    <div className="settle-overlay">
      <div className="replay-panel">
        <div className="solve-goal" style={{ marginBottom: 8 }}>
          正解演示 · {steps.length} 手
        </div>
        <div className="board-frame">
          <GoBoardView board={board} viewRegion={puzzle.viewRegion} interactive={false} showCoords={false} />
        </div>
        <div className="move-note">{note || (index === 0 ? '初始局面' : '')}</div>
        <div className="replay-controls">
          <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
            上一步
          </button>
          <span className="cnt">
            {index + 1}/{steps.length}
          </span>
          <button disabled={index >= steps.length - 1} onClick={() => setIndex(index + 1)}>
            下一步
          </button>
          <button onClick={onClose}>关闭</button>
        </div>
        <p className="muted" style={{ marginTop: 8 }}>
          完整可回放的主线共 {steps.length} 手
        </p>
      </div>
    </div>
  );
}

export type { SolutionStep };
