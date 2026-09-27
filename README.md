# 围棋死活题练习（个人非商业使用）

中文围棋死活题网页应用：手机与电脑共用一套，可浏览器访问、添加到桌面、离线练习。

## 功能

- **题库分级**：9级～1段共 10 档（档为“练习参考难度”），每档 10 题，共 100 题正式题库
  （全部逐题判读审核 + 规则引擎全树验证，2026-09-08 复排定稿）。
- **完整解题**：用户落子，程序按「答案树」自动应手；完成整条正确变化才判对。
- **计时**：进入题目立即开始前台 180 秒；切后台/锁屏暂停，返回继续；刷新保留棋盘、答案树位置与剩余时间。
- **反馈图片**：使用 `正确.jpg`（答对）与 `错误.jfif`（答错/超时），居中显示于屏幕。
- **本地记录**：每题挑战/答对记录与进行中的挑战保存在本机（`localStorage`）。
- **离线（PWA）**：首次完整加载后可离线使用全部功能。
- **Android APK**：已接入 Capacitor，可生成可安装的调试 APK：`围棋死活题-debug.apk`。

## 技术栈与结构

- React 19 + TypeScript + Vite 8；SVG 棋盘；`vite-plugin-pwa` 离线缓存。
- `src/rules/goBoard.ts`：纯 Go 规则（棋群/气/提子/禁入点/简单劫），支持 9/13/19 路。
- `src/judge/judge.ts`：答案树判题（success/failure/continue 分支、未收录策略）。
- `src/timer/`：前台计时（真实经过时间累计、可见性/焦点暂停恢复）。
- `src/storage/storage.ts`：进度与活跃挑战持久化。
- `tools/`：SGF 解析、棋盘校验、SGF→题库转换、样题生成（Node 24 原生运行 TS）。
- 测试：Vitest（规则/判题/计时/UI）+ Playwright（主流程、窄屏、离线相关交互）。

## 常用命令

```bash
npm install
npm run dev        # 本地开发（建议配合本机访问 http://localhost:5173）
npm run build      # 类型检查 + 生产构建 → dist/
npm run apk:debug  # 生成 Android 可安装 APK → 围棋死活题-debug.apk
npm run preview    # 本地预览构建产物
npm test           # Vitest 单元测试
npm run test:e2e   # Playwright 端到端（需先起 dev server 或自动拉起）
```

## 题库来源与许可

- 首选来源：GoGameGuru “Weekly Go Problems” 仓库（https://github.com/gogameguru/go-problems ），
  CC BY-NC-SA 4.0；原始难度仅 easy/intermediate/hard 三档，已按本程序 10 档重新整理为
  “练习参考难度”，属改编使用，详情见 `docs/题库来源与改编说明.md`。
- 当前随版本提交的题目为 **100 题正式题库**（10 档 × 10 题，全部逐题判读审核，
  `reviewed + published`）；题库来源与逐题审核状态见 `docs/题库审核进度.md` 与
  `docs/题库判读工作清单.md`，验收与交付说明见 `docs/验收与交付说明.md`。

## 授权

本程序仅用于个人非商业练习，不提供服务器接口、不使用在线 AI 判题。

## Android 安装包

项目包含 `android/` 封装工程。`npm run apk:debug` 会使用项目内的 Android 构建工具生成
`围棋死活题-debug.apk`，将该文件传到 Android 手机后即可安装。该 APK 用于个人测试和安装，
未配置 Google Play 发布所需的正式签名密钥。
