// 前台计时纯逻辑：累计「页面可见且窗口聚焦」的有效时间。
// 不依赖 setInterval 减一，而是基于真实经过的时间（performance.now）累计；
// 计时上限 TIME_LIMIT_MS，达到即触发 onLimit。
export const TICK_MS = 200;

export interface ClockSnapshot {
  /** 已累计前台毫秒数（封顶上限） */
  elapsedMs: number;
  running: boolean;
}

interface ClockEvents {
  /** 每秒(约)与每次状态变化时上报 */
  onTick?: (elapsedMs: number) => void;
  /** 达到上限 */
  onLimit?: () => void;
}

export class ForegroundClock {
  private limitMs: number;
  private events: ClockEvents;
  private accumulated = 0;
  private lastRunStart: number | null = null; // performance.now()
  private runningFlag = false;
  private timerId: ReturnType<typeof setInterval> | null = null;

  constructor(limitMs: number, events: ClockEvents = {}) {
    this.limitMs = limitMs;
    this.events = events;
  }

  /** 前台与否由外部判定器提供（浏览器中 = document.visibilityState==='visible' && document.hasFocus()） */
  private isForeground: (() => boolean) | null = null;

  bindForegroundDetector(fn: () => boolean): void {
    this.isForeground = fn;
  }

  get elapsedMs(): number {
    return this.capped(this.accumulated + (this.runningFlag ? this.now() - (this.lastRunStart ?? this.now()) : 0));
  }

  get running(): boolean {
    return this.runningFlag;
  }

  /** 由外部定时器驱动（每 TICK_MS）检查前台状态并同步 */
  tick(): number {
    if (this.isForeground && this.isForeground()) {
      if (!this.runningFlag) this.resume();
    } else {
      if (this.runningFlag) this.pause();
    }
    const el = this.elapsedMs;
    return el;
  }

  /** 从某个已保存的累计值恢复（页面刷新后） */
  restore(elapsedMs: number): void {
    this.pause();
    this.accumulated = Math.min(elapsedMs, this.limitMs);
  }

  start(): void {
    if (this.runningFlag) return;
    if (this.isForeground && this.isForeground()) {
      this.resume();
    }
  }

  resume(): void {
    if (this.runningFlag) return;
    if (this.accumulated >= this.limitMs) {
      this.fireLimit();
      return;
    }
    this.runningFlag = true;
    this.lastRunStart = this.now();
    this.startInterval();
  }

  pause(): void {
    if (!this.runningFlag) return;
    const now = this.now();
    this.accumulated = this.capped(this.accumulated + (now - (this.lastRunStart ?? now)));
    this.lastRunStart = null;
    this.runningFlag = false;
    this.stopInterval();
  }

  stop(): void {
    this.pause();
  }

  private startInterval(): void {
    if (this.timerId) return;
    this.timerId = setInterval(() => {
      const el = this.elapsedMs;
      this.events.onTick?.(el);
      if (el >= this.limitMs) {
        this.pause();
        this.fireLimit();
      }
    }, TICK_MS);
  }

  private stopInterval(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private fireLimit(): void {
    this.events.onLimit?.();
  }

  private capped(v: number): number {
    return Math.min(v, this.limitMs);
  }

  private now(): number {
    return typeof performance !== 'undefined' ? performance.now() : Date.now();
  }

  dispose(): void {
    this.stopInterval();
    this.runningFlag = false;
    this.accumulated = 0;
  }
}
