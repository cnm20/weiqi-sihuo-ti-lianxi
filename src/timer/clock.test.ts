import { describe, expect, it } from 'vitest';
import { ForegroundClock } from '../timer/clock.ts';
import { TIME_LIMIT_MS } from '../domain/types.ts';

function makeDetector(initial = true) {
  let value = initial;
  return {
    isForeground: () => value,
    set(v: boolean) {
      value = v;
    },
  };
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

describe('ForegroundClock 前台计时', () => {
  it('前台时累计经过时间', async () => {
    const det = makeDetector(true);
    const clock = new ForegroundClock(1000);
    clock.bindForegroundDetector(det.isForeground);
    clock.restore(0);
    clock.start();
    await wait(250);
    const el = clock.elapsedMs;
    expect(el).toBeGreaterThanOrEqual(200);
    expect(el).toBeLessThan(1000);
    clock.stop();
  });

  it('切后台后暂停、返回后继续（后台时间不累计）', async () => {
    const det = makeDetector(true);
    const clock = new ForegroundClock(TIME_LIMIT_MS);
    clock.bindForegroundDetector(det.isForeground);
    clock.restore(0);
    clock.start();
    await wait(80);
    det.set(false);
    clock.tick(); // 后台 → 暂停
    const pausedAt = clock.elapsedMs;
    expect(pausedAt).toBeGreaterThanOrEqual(40);
    await wait(200);
    expect(clock.elapsedMs).toBe(pausedAt); // 后台不累计
    det.set(true);
    clock.tick(); // 恢复
    await wait(80);
    const resumed = clock.elapsedMs;
    expect(resumed).toBeGreaterThan(pausedAt + 30);
    clock.stop();
  });

  it('恢复累计值后继续走表', async () => {
    const det = makeDetector(true);
    const clock = new ForegroundClock(TIME_LIMIT_MS);
    clock.bindForegroundDetector(det.isForeground);
    clock.restore(5000);
    clock.start();
    await wait(120);
    expect(clock.elapsedMs).toBeGreaterThan(5000);
    clock.stop();
  });

  it('达上限触发 onLimit 并停表', async () => {
    const det = makeDetector(true);
    let limited = 0;
    const clock = new ForegroundClock(300, { onLimit: () => (limited += 1) });
    clock.bindForegroundDetector(det.isForeground);
    clock.restore(290);
    clock.start();
    await wait(400);
    expect(limited).toBeGreaterThanOrEqual(1);
    expect(clock.running).toBe(false);
    clock.stop();
  });
});
