// 正式题库数据完整性测试（100 题：10 档 × 10 题）
import { describe, expect, it } from 'vitest';
import { loadPuzzles, puzzlesForLevel, isOfficialBankLoaded } from './puzzles';
import { LEVELS } from '../domain/levels';

describe('正式题库完整性（100/100）', () => {
  it('载入为正式题库且共 100 题', () => {
    const all = loadPuzzles();
    expect(isOfficialBankLoaded()).toBe(true);
    expect(all).toHaveLength(100);
  });

  it('每档恰 10 题，档内 order 1..10 无重复', () => {
    for (const lv of LEVELS) {
      const items = puzzlesForLevel(lv.index);
      expect(items).toHaveLength(10);
      const orders = items.map((p) => p.orderInLevel).sort((a, b) => a - b);
      expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  });

  it('每题 id 全局唯一且格式 <档前缀>-NN', () => {
    const all = loadPuzzles();
    const ids = all.map((p) => p.id);
    expect(new Set(ids).size).toBe(100);
    for (const p of all) {
      expect(p.id).toMatch(/^(9k|8k|7k|6k|5k|4k|3k|2k|1k|1d)-\d{2}$/);
      expect(p.id.endsWith(String(p.orderInLevel).padStart(2, '0'))).toBe(true);
    }
  });

  it('每题具备中文目标/要点/标题与成功主线', () => {
    const all = loadPuzzles();
    for (const p of all) {
      expect(p.goalText.trim().length).toBeGreaterThan(0);
      expect(p.instruction.trim().length).toBeGreaterThan(0);
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.solutionNodes?.length ?? 0).toBeGreaterThan(0);
    }
  });

  it('首页在满 100 题时不显示“逐档审核发布中”提示', () => {
    const all = loadPuzzles();
    expect(all.length).toBe(100);
    // 该提示由 HomeScreen 按 puzzles.length < 100 渲染；此处仅断言数据满足条件
    expect(all.length < 10 * LEVELS.length).toBe(false);
  });
});
