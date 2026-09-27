import path from 'node:path';
import { defineConfig } from '@playwright/test';

// Keep the browser cache inside the project so the acceptance suite works in
// this workspace without relying on a machine-wide Playwright installation.
process.env.PLAYWRIGHT_BROWSERS_PATH ??= path.resolve('_tools', '.playwright-browsers');

export default defineConfig({
  testDir: './e2e',
  timeout: 90000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:5199',
    viewport: { width: 400, height: 800 },
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  webServer: [
    {
      command: 'node node_modules/vite/bin/vite.js --port 5199 --strictPort',
      url: 'http://localhost:5199',
      reuseExistingServer: true,
      timeout: 60000,
    },
    {
      // PWA/离线用例基于构建产物 preview（需先 build）
      command: 'node node_modules/vite/bin/vite.js preview --port 5188 --strictPort',
      url: 'http://localhost:5188',
      reuseExistingServer: true,
      timeout: 60000,
    },
  ],
});
