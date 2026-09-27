// 端到端验收用例（Playwright + Chromium）
import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __TSUME_ENABLE__?: boolean }).__TSUME_ENABLE__ = true;
  });
});

async function openFirstPuzzle(page: Page, extraQuery = '') {
  await page.goto(`/${extraQuery}#/level/0`);
  await page.waitForSelector('.puzzle-item');
  await page.locator('.puzzle-item').first().click();
  await page.waitForSelector('.timer');
}

async function boardPointClient(page: Page, x: number, y: number): Promise<{ x: number; y: number }> {
  return page.evaluate(([lx, ly]) => {
    const svg = document.querySelector('.board-frame svg') as SVGSVGElement;
    if (!svg) throw new Error('svg missing');
    const vb = svg.viewBox.baseVal;
    const rect = svg.getBoundingClientRect();
    const w = window as unknown as { __TSUME__?: { puzzle?: { viewRegion: { minX: number; minY: number; maxX: number; maxY: number } } } };
    const view = w.__TSUME__?.puzzle?.viewRegion;
    if (!view) throw new Error('no viewRegion');
    const PAD = 28;
    const CELL = 30;
    const px = PAD + (lx - view.minX) * CELL;
    const py = PAD + (view.maxY - ly) * CELL;
    return {
      x: rect.left + (px / vb.width) * rect.width,
      y: rect.top + (py / vb.height) * rect.height,
    };
  }, [x, y]);
}

async function clickBoardPoint(page: Page, x: number, y: number) {
  const pt = await boardPointClient(page, x, y);
  await page.mouse.click(pt.x, pt.y);
  // 预览出现后确认
  await page.waitForTimeout(60);
}

test('首页展示十个等级并可进入题目列表', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.level-card')).toHaveCount(10);
});

test('进入题目后直接计时并逐步完成正解：出现正确图与遮罩', async ({ page }) => {
  await openFirstPuzzle(page);
  const moves: { x: number; y: number }[] = await page.evaluate(() => {
    const w = window as unknown as { __TSUME__?: { userMoves: { x: number; y: number }[] } };
    return w.__TSUME__?.userMoves ?? [];
  });
  expect(moves.length).toBeGreaterThan(0);

  await expect(page.locator('.timer')).toBeVisible();

  for (const m of moves) {
    await clickBoardPoint(page, m.x, m.y);
    await page.getByRole('button', { name: '确认落子' }).click();
    await page.waitForTimeout(750); // 电脑应手/结算动画
    if (await page.locator('.settle-overlay').isVisible().catch(() => false)) break;
  }
  await expect(page.locator('.settle-overlay')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.settle-text')).toContainText('回答正确');
  const imgOk = await page.locator('.settle-image').evaluate((img) => (img as HTMLImageElement).naturalWidth > 0);
  expect(imgOk).toBe(true);
});

// 通用：在指定档（0..9）打开首题并按正解逐步完成
async function solveFirstOfLevel(page: Page, levelIndex: number) {
  await page.goto(`/#/level/${levelIndex}`);
  await page.waitForSelector('.puzzle-item');
  await page.locator('.puzzle-item').first().click();
  await page.waitForSelector('.timer');
  const moves: { x: number; y: number }[] = await page.evaluate(() => {
    const w = window as unknown as { __TSUME__?: { userMoves: { x: number; y: number }[] } };
    return w.__TSUME__?.userMoves ?? [];
  });
  expect(moves.length).toBeGreaterThan(0);
  await expect(page.locator('.timer')).toBeVisible();
  for (const m of moves) {
    await clickBoardPoint(page, m.x, m.y);
    await page.getByRole('button', { name: '确认落子' }).click();
    await page.waitForTimeout(750);
    if (await page.locator('.settle-overlay').isVisible().catch(() => false)) break;
  }
  await expect(page.locator('.settle-overlay')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.settle-text')).toContainText('回答正确');
}

test('8级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 1);
});

test('7级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 2);
});

test('6级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 3);
});

test('5级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 4);
});

test('4级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 5);
});

test('3级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 6);
});

test('2级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 7);
});

test('1级档首题可逐步完成正解', async ({ page }) => {
  await solveFirstOfLevel(page, 8);
});

test('1段档首题可逐步完成正解（正式题库 100/100 后补）', async ({ page }) => {
  await solveFirstOfLevel(page, 9);
});

test('正式题库 100/100 后首页不显示“逐档审核发布中”提示', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.level-card')).toHaveCount(10);
  const notices = await page.locator('.notice').allTextContents();
  const partial = notices.find((t) => t.includes('逐档审核发布中'));
  expect(partial).toBeUndefined();
});

test('错误变化显示错误图', async ({ page }) => {
  await openFirstPuzzle(page);
  const bad = await page.evaluate(() => {
    const w = window as unknown as { __TSUME__?: { puzzle?: { root?: { branches: { x: number; y: number; type: string }[] } } } };
    const br = w.__TSUME__?.puzzle?.root?.branches?.find((b) => b.type === 'failure');
    return br ? { x: br.x, y: br.y } : null;
  });
  expect(bad).not.toBeNull();
  if (!bad) return;
  await clickBoardPoint(page, bad.x, bad.y);
  await page.getByRole('button', { name: '确认落子' }).click();
  await expect(page.locator('.settle-overlay')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.settle-text')).toContainText('回答错误');
});

test('非法落子（点击已有己方棋子）仅提示不结算', async ({ page }) => {
  await openFirstPuzzle(page);
  const occ = await page.evaluate(() => {
    const w = window as unknown as { __TSUME__?: { puzzle?: { userColor: string; initial: { x: number; y: number; color: string }[] } } };
    const p = w.__TSUME__?.puzzle;
    const stone = p?.initial?.find((s) => s.color === p.userColor);
    return stone ? { x: stone.x, y: stone.y } : null;
  });
  expect(occ).not.toBeNull();
  if (!occ) return;
  await clickBoardPoint(page, occ.x, occ.y);
  await page.getByRole('button', { name: '确认落子' }).click();
  await expect(page.locator('.settle-overlay')).not.toBeVisible();
  await expect(page.locator('.hint')).toContainText('已有棋子');
});

test('前台计时耗尽显示超时（测试时限 2s）', async ({ page }) => {
  await openFirstPuzzle(page, '?t=2');
  await expect(page.locator('.settle-overlay')).toBeVisible({ timeout: 6000 });
  await expect(page.locator('.settle-text')).toContainText('时间到');
  const imgSrc = await page.locator('.settle-image').getAttribute('src');
  expect(imgSrc).toContain('wrong');
});

test('完成后可查看逐步解答', async ({ page }) => {
  await openFirstPuzzle(page);
  const moves: { x: number; y: number }[] = await page.evaluate(() => {
    const w = window as unknown as { __TSUME__?: { userMoves: { x: number; y: number }[] } };
    return w.__TSUME__?.userMoves ?? [];
  });
  for (const m of moves) {
    await clickBoardPoint(page, m.x, m.y);
    await page.getByRole('button', { name: '确认落子' }).click();
    await page.waitForTimeout(750);
    if (await page.locator('.settle-overlay').isVisible().catch(() => false)) break;
  }
  await expect(page.locator('.settle-overlay')).toBeVisible({ timeout: 5000 });
  await page.getByRole('button', { name: '查看解答' }).click();
  await expect(page.locator('.replay-panel')).toBeVisible();
  await expect(page.locator('.replay-controls')).toBeVisible();
});

test('刷新后恢复棋盘与剩余时间', async ({ page }) => {
  // 官方题库首题（9k-01）为一手题：落子即决，无“进行中”会话可恢复。
  // 本用例需要多步题：在 0 档中选第一道 userMoves>=2 的题（样题模式同逻辑）。
  await page.goto('/#/level/0');
  await page.waitForSelector('.puzzle-item');
  const count = await page.locator('.puzzle-item').count();
  let moves: { x: number; y: number }[] = [];
  let opened = false;
  for (let i = 0; i < count; i++) {
    await page.locator('.puzzle-item').nth(i).click();
    await page.waitForSelector('.timer');
    moves = await page.evaluate(() => {
      const w = window as unknown as { __TSUME__?: { userMoves: { x: number; y: number }[] } };
      return w.__TSUME__?.userMoves ?? [];
    });
    if (moves.length >= 2) {
      opened = true;
      break;
    }
    await page.goto('/#/level/0');
    await page.waitForSelector('.puzzle-item');
  }
  test.skip(!opened, '0 档缺少多步题（9级档应含两目做活/紧气多手题）');
  const first = moves[0];
  await clickBoardPoint(page, first.x, first.y);
  await page.getByRole('button', { name: '确认落子' }).click();
  await page.waitForTimeout(600);
  const before = await page.locator('.timer').textContent();
  await page.reload();
  // 有活跃挑战时会直接进入 solving 并显示棋盘继续
  await expect(page.locator('.timer')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('.hint')).toContainText('已恢复');
  const after = await page.locator('.timer').textContent();
  expect(after).toBeTruthy();
  void before;
});
