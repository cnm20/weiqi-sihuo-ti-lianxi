// 前台计时 React hook：绑定可见性/焦点，封装 ForegroundClock
import { useEffect, useRef, useState } from 'react';
import { ForegroundClock, TICK_MS } from './clock';
import { onForegroundChange, isBrowserForeground } from './foreground';
import { TIME_LIMIT_MS } from '../domain/types';

export interface TimerApi {
  /** 剩余毫秒（>=0） */
  remainingMs: number;
  running: boolean;
  started: boolean;
  start: (fromElapsedMs?: number) => void;
  stop: () => void;
}

export function useForegroundTimer(limitMs: number = TIME_LIMIT_MS): TimerApi {
  const clockRef = useRef<ForegroundClock | null>(null);
  if (!clockRef.current) {
    clockRef.current = new ForegroundClock(limitMs);
    clockRef.current.bindForegroundDetector(isBrowserForeground);
  }
  const [remaining, setRemaining] = useState(limitMs);
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const clock = clockRef.current!;
    const apply = () => {
      const el = clock.tick();
      setRemaining(Math.max(0, limitMs - el));
      setRunning(clock.running);
      setStarted(true);
    };
    const un = onForegroundChange(() => apply());
    const iv = setInterval(apply, TICK_MS);
    return () => {
      un();
      clearInterval(iv);
      clock.stop();
    };
  }, [limitMs]);

  return {
    remainingMs: remaining,
    running,
    started,
    start: (fromElapsedMs = 0) => {
      const clock = clockRef.current!;
      clock.restore(fromElapsedMs);
      clock.start();
      setStarted(true);
    },
    stop: () => {
      const clock = clockRef.current!;
      clock.pause();
      setRunning(false);
    },
  };
}

/** 秒表展示 mm:ss */
export function formatTime(ms: number): string {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
