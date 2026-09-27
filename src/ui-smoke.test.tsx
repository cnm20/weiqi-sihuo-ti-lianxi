// UI 冒烟测试：首页/题目列表/答题页渲染（jsdom）
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

// PWA virtual 模块在测试环境不可用 → mock
vi.mock('virtual:pwa-register/react', () => ({
  useRegisterSW: () => ({
    needRefresh: [false, () => {}],
    offlineReady: [false, () => {}],
    updateServiceWorker: async () => {},
  }),
}));

import App from './App';
import { store } from './storage/storage';
import { loadPuzzles } from './data/puzzles';
import type { LocalData } from './domain/types';

beforeEach(() => {
  // 重置存储为内存空状态
  (store as unknown as { data: LocalData }).data = { version: 1, progress: {}, levelCorrect: {} };
  window.location.hash = '#/';
  cleanup();
});

afterEach(() => {
  cleanup();
});

describe('App 冒烟', () => {
  it('首页渲染 10 个等级', () => {
    render(<App />);
    for (const name of ['9级', '8级', '7级', '6级', '5级', '4级', '3级', '2级', '1级', '1段']) {
      expect(screen.getAllByText(name).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('9级题目列表可渲染并含题目', () => {
    window.location.hash = '#/level/0';
    render(<App />);
    const puzzleItems = document.querySelectorAll('.puzzle-item');
    expect(puzzleItems.length).toBeGreaterThanOrEqual(1);
    expect(window.location.hash).toContain('level/0');
  });

  it('答题页进入后直接展示棋盘与计时器', () => {
    // 不依赖硬编码样题 id：从当前题库（样题或正式）取 0 档首题
    const first = loadPuzzles()[0];
    expect(first).toBeTruthy();
    window.location.hash = `#/puzzle/${first.id}`;
    render(<App />);
    expect(document.querySelector('.timer')).toBeTruthy();
    expect(screen.queryByText(/开始答题/)).toBeNull();
  });
});
