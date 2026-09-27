// 答题页：进入即计时 / 落子 / 电脑应手 / 结算遮罩 / 本地恢复
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { puzzleById, puzzlesForLevel } from '../data/puzzles';
import { levelName } from '../domain/levels';
import { TIME_LIMIT_MS } from '../domain/types';
import type { Attempt, Move, Point } from '../domain/types';
import GoBoardView from '../components/GoBoardView';
import { ReplayPanel } from '../components/ReplayPanel';
import { useForegroundTimer, formatTime } from '../timer/useForegroundTimer';
import { boardFor, submitPoint } from '../solver/session';
import type { SolveResult } from '../solver/session';
import { store } from '../storage/storage';
import { navigate } from '../App';
import { notifyProgressChanged } from './progressStore';
import { maybeEnableE2E } from '../dev/e2eHooks';

type Phase = 'solving' | 'settled';
type SettleKind = 'correct' | 'wrong' | 'timeout' | 'unrecorded';

interface SettleView {
  kind: SettleKind;
  headline: string;
  detail?: string;
}

const IMG_CORRECT = '/feedback/correct.jpg';
const IMG_WRONG = '/feedback/wrong.jfif';

function resultToSettle(r: SolveResult): SettleView {
  switch (r.kind) {
    case 'correct':
      return { kind: 'correct', headline: '回答正确', detail: r.reason };
    case 'wrong':
      return { kind: 'wrong', headline: '回答错误', detail: r.reason };
    case 'timeout':
      return { kind: 'timeout', headline: '时间到，本题超时' };
    case 'unrecorded':
      return { kind: 'unrecorded', headline: '此变化暂未收录', detail: '本次不计成绩，你可以查看解答或重新挑战。' };
  }
}

export default function SolveScreen({ puzzleId }: { puzzleId: string }) {
  const puzzle = puzzleById(puzzleId);
  // 测试模式可缩短时限（仅 E2E：?t=2 秒）
  const shortLimit = useMemo(() => {
    if (import.meta.env.DEV) {
      const p = new URLSearchParams(window.location.search).get('t');
      const n = Number(p);
      if (Number.isFinite(n) && n > 0 && n < TIME_LIMIT_MS / 1000) return n * 1000;
    }
    return TIME_LIMIT_MS;
  }, []);
  // 进入题目后立即开始挑战；刷新时下面的恢复 effect 会替换为已保存的局面。
  const [phase, setPhase] = useState<Phase>('solving');
  const [moves, setMoves] = useState<Move[]>([]);
  const [preview, setPreview] = useState<Point | null>(null);
  const [hint, setHint] = useState('');
  const [busy, setBusy] = useState(false);
  const [settle, setSettle] = useState<SettleView | null>(null);
  const [showReplay, setShowReplay] = useState(false);

  const settledRef = useRef(false);
  const busyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const attemptIdRef = useRef<string>('');
  const timer = useForegroundTimer(shortLimit);

  const ensureAttemptId = useCallback(() => {
    if (!attemptIdRef.current) attemptIdRef.current = `att-${puzzle?.id ?? 'x'}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    return attemptIdRef.current;
  }, [puzzle?.id]);

  // 持久化当前挑战
  const persistAttempt = useCallback(
    (mv: Move[], ph: Phase, elapsed: number) => {
      if (!puzzle || ph !== 'solving') return;
      const att: Attempt = {
        attemptId: ensureAttemptId(),
        puzzleId: puzzle.id,
        moves: mv,
        nodeId: puzzle.root.id,
        elapsedMs: Math.min(elapsed, shortLimit),
        phase: 'solving',
      };
      store.setActiveAttempt(puzzle.id, att);
    },
    [puzzle, ensureAttemptId],
  );

  // 进入页面：恢复进行中的挑战；没有恢复记录时从零开始计时。
  useEffect(() => {
    if (!puzzle) return;
    const att = store.getActiveAttempt(puzzle.id);
    if (att && att.phase === 'solving') {
      attemptIdRef.current = att.attemptId;
      setMoves(att.moves ?? []);
      setPhase('solving');
      setHint('已恢复上次未完成的挑战，点击棋盘继续');
      timer.start(Math.min(att.elapsedMs ?? 0, shortLimit));
    } else {
      setHint('点击棋盘选择落点，再按“确认落子”');
      timer.start(0);
      persistAttempt([], 'solving', 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puzzle?.id]);

  const doSettle = useCallback(
    (r: SolveResult) => {
      if (settledRef.current) return;
      settledRef.current = true;
      timer.stop();
      const view = resultToSettle(r);
      setSettle(view);
      setPhase('settled');
      setPreview(null);
      setBusy(false);
      if (busyTimer.current) clearTimeout(busyTimer.current);
      // 记录进度并清除活跃挑战
      store.recordOutcome(puzzle!.id, r.kind === 'timeout' ? 'timeout' : r.kind === 'unrecorded' ? 'unrecorded' : r.kind);
      store.setActiveAttempt(puzzle!.id, null);
      notifyProgressChanged();
    },
    [puzzle, timer],
  );

  // 超时结算
  useEffect(() => {
    if (phase !== 'solving' || settledRef.current) return;
    if (timer.remainingMs <= 0) {
      doSettle({ kind: 'timeout', message: '时间到' });
    }
  }, [timer.remainingMs, phase, doSettle]);

  // 状态变化时保存（每次落子/阶段/计时跳变）
  useEffect(() => {
    persistAttempt(moves, phase, shortLimit - timer.remainingMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves, phase]);

  // 每秒自动保存
  useEffect(() => {
    if (phase !== 'solving') return;
    const iv = setInterval(() => {
      persistAttempt(moves, phase, shortLimit - timer.remainingMs);
    }, 1000);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // 页面可见性/离开页面前保存
  useEffect(() => {
    const onHide = () => persistAttempt(moves, phase, shortLimit - timer.remainingMs);
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onHide);
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves, phase]);

  // 组件卸载清理
  useEffect(() => {
    return () => {
      timer.stop();
      if (busyTimer.current) clearTimeout(busyTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const board = useMemo(() => (puzzle ? boardFor(puzzle, moves) : null), [puzzle, moves]);
  const lastMove = moves.length > 0 ? moves[moves.length - 1] : null;
  const remaining = timer.remainingMs;
  const canInteract = phase === 'solving' && !busy && !settledRef.current && remaining > 0;

  useEffect(() => {
    if (puzzle) maybeEnableE2E(puzzle);
  }, [puzzle]);

  function handlePointClick(p: Point) {
    if (!canInteract) return;
    setPreview((prev) => (prev && prev.x === p.x && prev.y === p.y ? null : p));
  }

  function handleConfirm() {
    if (!puzzle || !preview || !canInteract) return;
    const { result, nextMoves, terminal } = submitPoint(puzzle, moves, preview.x, preview.y);
    if (result.kind === 'illegal') {
      setHint(result.message + '（不提交，不判错）');
      setPreview(null);
      return;
    }
    if (terminal) {
      if (result.kind === 'correct') {
        // 到达成功终点
        setMoves(nextMoves);
      }
      // 先保存最终局面再结算
      persistAttempt(nextMoves, 'solving', shortLimit - remaining);
      doSettle(terminal);
      return;
    }
    // accepted：更新棋盘（已含电脑应手），短暂防重复提交
    setMoves(nextMoves);
    setPreview(null);
    setHint('应手后继续');
    setBusy(true);
    if (busyTimer.current) clearTimeout(busyTimer.current);
    busyTimer.current = setTimeout(() => setBusy(false), 450);
  }

  function handleRetry() {
    attemptIdRef.current = '';
    settledRef.current = false;
    setMoves([]);
    setPhase('solving');
    setSettle(null);
    setPreview(null);
    setHint('点击棋盘选择落点，再按“确认落子”');
    setShowReplay(false);
    timer.start(0);
    persistAttempt([], 'solving', 0);
  }

  function handleNext() {
    if (!puzzle) return;
    const list = [...puzzlesForLevel(puzzle.levelIndex)].sort((a, b) => a.orderInLevel - b.orderInLevel);
    const idx = list.findIndex((p) => p.id === puzzle.id);
    const next = list[(idx + 1) % Math.max(1, list.length)] ?? puzzle;
    if (next.id === puzzle.id) {
      navigate({ name: 'level', levelIndex: puzzle.levelIndex });
      return;
    }
    navigate({ name: 'puzzle', puzzleId: next.id });
  }

  function handleExit() {
    // 未结算直接退出：若正在答题则清除挑战但不计成绩
    if (puzzle && phase === 'solving' && !settledRef.current) {
      store.setActiveAttempt(puzzle.id, null);
    }
    navigate({ name: 'level', levelIndex: puzzle?.levelIndex ?? 0 });
  }

  if (!puzzle) {
    return (
      <main>
        <p>未找到题目（{puzzleId}）</p>
        <button className="btn-primary" onClick={() => navigate({ name: 'home' })}>
          返回首页
        </button>
      </main>
    );
  }

  const lv = levelName(puzzle.levelIndex);
  const displayRemaining = remaining;

  return (
    <>
      <header className="app-header">
        <button className="back-btn" onClick={handleExit}>
          ← 退出
        </button>
        <span className="title">
          {lv} · {puzzle.orderInLevel} 题 · {puzzle.title || puzzle.goalText}
        </span>
      </header>
      <main className="solve-page">
        <div className="solve-meta">
          <span className="badge lv">{lv}</span>
          <span className="badge goal">{puzzle.goalText || (puzzle.userColor === 'B' ? '黑先' : '白先')}</span>
          <span className={`timer ${displayRemaining < 30000 && phase === 'solving' ? 'warn' : ''}`}>{formatTime(displayRemaining)}</span>
        </div>
        <div className="solve-goal">
          {puzzle.title || puzzle.goalText} · {busy ? '电脑应手中…' : `请${puzzle.userColor === 'B' ? '黑' : '白'}方落子`}
        </div>
        {board && (
          <div className="board-frame">
            <GoBoardView
              board={board}
              viewRegion={puzzle.viewRegion}
              interactive={canInteract}
              preview={preview}
              lastMove={lastMove}
              onPointClick={handlePointClick}
            />
          </div>
        )}
        <div className="hint">{hint}</div>
        <div className="controls">
          {phase === 'solving' && (
            <>
              <button className="btn-plain" disabled={!preview} onClick={() => setPreview(null)}>
                取消
              </button>
              <button className="btn-primary" disabled={!preview || !canInteract} onClick={handleConfirm}>
                确认落子
              </button>
            </>
          )}
        </div>
      </main>

      {/* 结算遮罩 */}
      {settle && (
        <div className="settle-overlay">
          <div className="settle-card">
            {settle.kind !== 'unrecorded' && (
              <img className="settle-image" src={settle.kind === 'correct' ? IMG_CORRECT : IMG_WRONG} alt="" draggable={false} />
            )}
            <div className={`settle-text ${settle.kind === 'correct' ? 'ok' : 'bad'}`}>{settle.headline}</div>
            {settle.detail && <div className="settle-sub">{settle.detail}</div>}
            <div className="settle-buttons">
              <button style={{ background: '#5b8a3f' }} onClick={() => setShowReplay(true)}>
                查看解答
              </button>
              <button style={{ background: '#b0743f' }} onClick={handleRetry}>
                重新挑战
              </button>
              <button style={{ background: '#4a6fa5' }} onClick={handleNext}>
                下一题
              </button>
            </div>
          </div>
        </div>
      )}

      {showReplay && puzzle && <ReplayPanel puzzle={puzzle} onClose={() => setShowReplay(false)} />}
    </>
  );
}
