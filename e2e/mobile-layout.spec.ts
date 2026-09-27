import { test, expect } from '@playwright/test';
import { puzzles } from '../src/data/puzzles.generated';

test('窄屏下全部正式题都显示完整棋盘和确认落子按钮', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 640 });
  await page.addInitScript(() => {
    (window as unknown as { __TSUME_ENABLE__?: boolean }).__TSUME_ENABLE__ = true;
  });

  for (const [index, puzzle] of puzzles.entries()) {
    if (index === 0) {
      await page.goto(`/#/puzzle/${encodeURIComponent(puzzle.id)}`);
    } else {
      await page.evaluate((id) => {
        window.location.hash = `#/puzzle/${encodeURIComponent(id)}`;
      }, puzzle.id);
    }

    await page.waitForFunction((id) => {
      const w = window as unknown as { __TSUME__?: { puzzle?: { id: string } } };
      return w.__TSUME__?.puzzle?.id === id;
    }, puzzle.id);

    const layout = await page.evaluate(() => {
      const board = document.querySelector('.board-frame')?.getBoundingClientRect();
      const controls = document.querySelector('.controls')?.getBoundingClientRect();
      const confirm = [...document.querySelectorAll('.controls button')]
        .find((button) => button.textContent?.includes('确认落子'))
        ?.getBoundingClientRect();
      return {
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        board: board && { top: board.top, right: board.right, bottom: board.bottom },
        controls: controls && { top: controls.top, bottom: controls.bottom },
        confirm: confirm && { top: confirm.top, bottom: confirm.bottom },
      };
    });

    expect(layout.board, `${puzzle.id}: 棋盘未渲染`).toBeTruthy();
    expect(layout.controls, `${puzzle.id}: 按钮栏未渲染`).toBeTruthy();
    expect(layout.confirm, `${puzzle.id}: 确认按钮未渲染`).toBeTruthy();
    expect(layout.board!.right, `${puzzle.id}: 棋盘超出屏幕宽度`).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.board!.bottom, `${puzzle.id}: 棋盘超出手机首屏`).toBeLessThanOrEqual(layout.viewportHeight + 1);
    expect(layout.board!.bottom, `${puzzle.id}: 棋盘和按钮栏重叠`).toBeLessThanOrEqual(layout.controls!.top + 1);
    expect(layout.confirm!.bottom, `${puzzle.id}: 确认落子不在屏幕内`).toBeLessThanOrEqual(layout.viewportHeight + 1);
    expect(layout.confirm!.top, `${puzzle.id}: 确认落子不在屏幕内`).toBeGreaterThanOrEqual(0);
  }
});
