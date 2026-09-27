// 进度状态管理：让进度变化触发页面刷新（简单事件总线）
import { useEffect, useState } from 'react';
import type { PuzzleProgress } from '../domain/types';
import { store } from '../storage/storage';

let listeners = new Set<() => void>();

function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function notifyProgressChanged(): void {
  for (const fn of listeners) fn();
}

export function getProgressMap(): Record<string, PuzzleProgress> {
  return store.getAllProgress();
}

export function useProgressVersion(): [number, () => void] {
  const [version, setVersion] = useState(0);
  useEffect(() => subscribe(() => setVersion((v) => v + 1)), []);
  const bump = () => notifyProgressChanged();
  return [version, bump];
}
