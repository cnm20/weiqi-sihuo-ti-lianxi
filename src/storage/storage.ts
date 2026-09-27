// 本地存储：进度（每题）、活跃挑战、版本化键空间。
import type { Attempt, LocalData, PuzzleProgress, AttemptOutcome } from '../domain/types.ts';

const STORAGE_KEY = 'kejie-tsumego-v1';
const DATA_VERSION = 1;

function defaultProgress(): PuzzleProgress {
  return { attempts: 0, correct: 0, wrong: 0, timeout: 0, unrecorded: 0, solvedOnce: false, updatedAt: 0 };
}

export class LocalStore {
  private data: LocalData;
  private memoryOnly = false;

  constructor() {
    this.data = { version: DATA_VERSION, progress: {}, levelCorrect: {} };
    if (typeof localStorage === 'undefined') {
      this.memoryOnly = true;
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as LocalData;
        if (parsed && parsed.version === DATA_VERSION) {
          this.data = parsed;
          this.data.progress ??= {};
          this.data.levelCorrect ??= {};
          this.data.activeAttempts ??= {};
        }
      }
    } catch {
      // 解析失败则从空数据开始
    }
  }

  private persist(): void {
    if (this.memoryOnly) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch {
      // 存储满等异常忽略
    }
  }

  getProgress(puzzleId: string): PuzzleProgress {
    return this.data.progress[puzzleId] ?? defaultProgress();
  }

  /** 记录一次结算（无论对错都计一次尝试；超时/未收录单独计数；放弃不计尝试） */
  recordOutcome(puzzleId: string, outcome: AttemptOutcome): void {
    const p = this.getProgress(puzzleId);
    if (outcome !== 'abandoned') p.attempts += 1;
    p.lastOutcome = outcome;
    switch (outcome) {
      case 'correct':
        p.correct += 1;
        p.solvedOnce = true;
        break;
      case 'wrong':
        p.wrong += 1;
        break;
      case 'timeout':
        p.timeout += 1;
        break;
      case 'unrecorded':
        p.unrecorded += 1;
        break;
      case 'abandoned':
        break;
    }
    p.updatedAt = Date.now();
    this.data.progress[puzzleId] = p;
    this.persist();
  }

  getAllProgress(): Record<string, PuzzleProgress> {
    return { ...this.data.progress };
  }

  /** 从持久化存储恢复某题的活跃挑战 */
  getActiveAttempt(puzzleId: string): Attempt | null {
    const attempts = this.data.activeAttempts ?? {};
    return attempts[puzzleId] ?? null;
  }

  setActiveAttempt(puzzleId: string, a: Attempt | null): void {
    this.data.activeAttempts ??= {};
    if (a === null) delete this.data.activeAttempts[puzzleId];
    else this.data.activeAttempts[puzzleId] = a;
    this.persist();
  }
}

/** 全应用单例（浏览器端） */
export const store = new LocalStore();

/** 供测试用：清空内存状态 */
export function resetStoreForTest(instance: LocalStore): void {
  (instance as unknown as { data: LocalData }).data = { version: DATA_VERSION, progress: {}, levelCorrect: {} };
}
