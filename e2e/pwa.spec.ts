// PWA 离线与窄屏验收（对构建产物 dist 做检查；preview 服务在 :5188）
import { test, expect } from '@playwright/test';

const PREVIEW = 'http://localhost:5188';

test('生产产物包含 PWA 清单与 Service Worker', async ({ request }) => {
  const sw = await request.get(PREVIEW + '/sw.js');
  expect(sw.ok()).toBeTruthy();
  const manifest = await request.get(PREVIEW + '/manifest.webmanifest');
  expect(manifest.ok()).toBeTruthy();
  const html = await request.get(PREVIEW + '/');
  expect(html.ok()).toBeTruthy();
  const body = await html.text();
  expect(body).toContain('围棋死活题');
});

test('manifest 指向有效图标', async ({ request }) => {
  const manifest = await (await request.get(PREVIEW + '/manifest.webmanifest')).json();
  expect(manifest.name).toBeTruthy();
  for (const icon of manifest.icons ?? []) {
    const resp = await request.get(PREVIEW + '/' + icon.src);
    expect(resp.ok()).toBeTruthy();
  }
});

test('窄屏（手机竖屏）下首页与题目列表可用', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(PREVIEW + '/');
  await expect(page.locator('.level-card')).toHaveCount(10);
  await page.goto(PREVIEW + '/#/level/0');
  await page.waitForSelector('.puzzle-item');
  await expect(page.locator('.puzzle-item').first()).toBeVisible();
});

test('离线：断网后仍可打开应用并进入首页', async ({ page, context }) => {
  // 首次在线加载（注册 SW 并缓存）
  await page.goto(PREVIEW + '/');
  await expect(page.locator('.level-card')).toHaveCount(10);
  // 等待 SW 激活
  await page.waitForFunction(() => navigator.serviceWorker?.getRegistration() != null);
  await page.waitForTimeout(1200);
  // 断网后刷新
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator('.level-card')).toHaveCount(10);
  await context.setOffline(false);
});
