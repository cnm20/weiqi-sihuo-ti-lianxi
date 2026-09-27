// 题库装配层：从正式题库加载（审核驱动）；若尚未生成/为空则回退到流程样题。
import type { Puzzle, PuzzleProgress } from '../domain/types';
import { store } from '../storage/storage';

// 正式题库（reviewStatus=reviewed，由 tools/buildFinalPuzzles.ts 审核驱动生成）
import { puzzles as reviewed } from './puzzles.generated';
// 流程样题（开发/演示用，来源 GGG，待逐题审核；非正式题库）
import { samplePuzzles } from './puzzles.samples';

let cache: { puzzles: Puzzle[]; isOfficial: boolean } | null = null;

export function loadPuzzles(): Puzzle[] {
  if (cache) return cache.puzzles;
  const official = reviewed.filter((p) => p && p.id && p.root && p.solutionNodes && p.solutionNodes.length > 0);
  const isOfficial = official.length > 0;
  cache = { puzzles: isOfficial ? official : samplePuzzles, isOfficial };
  return cache.puzzles;
}

export function isOfficialBankLoaded(): boolean {
  void loadPuzzles();
  return cache?.isOfficial ?? false;
}

export function puzzleById(id: string): Puzzle | undefined {
  return loadPuzzles().find((p) => p.id === id);
}

export function puzzlesForLevel(levelIndex: number): Puzzle[] {
  return loadPuzzles()
    .filter((p) => p.levelIndex === levelIndex)
    .sort((a, b) => a.orderInLevel - b.orderInLevel);
}

/** 首页每档“已答对”计数（只统计正式题库时按档；样题模式按档也行） */
export function levelSolvedCounts(progress: Record<string, PuzzleProgress>): number[] {
  const counts = new Array<number>(10).fill(0);
  for (const p of loadPuzzles()) {
    if (progress[p.id]?.solvedOnce) counts[p.levelIndex]++;
  }
  return counts;
}

/** 推荐继续档：从最低未满档开始 */
export function recommendedLevel(progress: Record<string, PuzzleProgress>): number {
  const solved = levelSolvedCounts(progress);
  for (let i = 0; i < 10; i++) if (solved[i] < 10) return i;
  return 0;
}

export { store };
