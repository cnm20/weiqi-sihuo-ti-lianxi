// 生成题库判读工作清单（markdown）：按来源池列出全部候选与判读状态
// node tools/genAuditPlan.ts
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const candDir = join(process.cwd(), '_tools/candidates');
const puzzles = JSON.parse(readFileSync(join(candDir, 'puzzles.json'), 'utf8'));
const verdicts = JSON.parse(readFileSync(join(candDir, 'verdicts.json'), 'utf8')) as { file: string; ok: boolean }[];
const byFile = new Map(verdicts.map((v) => [v.file, v.ok]));
const records = existsSync(join(candDir, 'review-records.json')) ? JSON.parse(readFileSync(join(candDir, 'review-records.json'), 'utf8')) : {};

const pool: Record<'easy' | 'intermediate' | 'hard', { file: string; reviewed: boolean; audited: boolean; goal?: string }[]> = { easy: [], intermediate: [], hard: [] };
for (const p of puzzles) {
  if (!byFile.get(p.source.ref) || p.source.ref.startsWith('other/')) continue;
  const poolName = p.source.ref.startsWith('easy/') ? 'easy' : p.source.ref.startsWith('hard/') ? 'hard' : 'intermediate';
  const rec = records[p.source.ref];
  pool[poolName].push({ file: p.source.ref, reviewed: rec?.reviewStatus === 'reviewed', audited: rec?.reviewStatus === 'content-audited', goal: rec?.goal });
}

const lines: string[] = [];
lines.push('# 题库判读工作清单');
lines.push('');
lines.push('> 每题入库须满足：全树规则引擎验证 ✓（自动）、主解可达 ✓（自动）、');
lines.push('> 中文目标（做活/杀棋）与要点判定（谱面证据）、难度与档位归属、来源记录。');
lines.push('> 判读结果写入 `_tools/candidates/review-records.json`（content-audited 后经复核置 reviewed）。');
lines.push('> 正式题库只含 reviewed 且 published=true 的题（整档满 10 后由 buildFinalPuzzles 发布）。');
lines.push('');
for (const name of ['easy', 'intermediate', 'hard'] as const) {
  const list = pool[name];
  const done = list.filter((x) => x.reviewed || x.audited).length;
  lines.push(`## ${name} 来源池（共 ${list.length}，已判读 ${done}）`);
  lines.push('');
  for (const s of list) {
    const state = s.reviewed ? '✅ reviewed' : s.audited ? `🔎 content-audited(${s.goal ?? '?'})` : '⬜ 待判读';
    lines.push(`- ${state} — \`${s.file}\``);
  }
  lines.push('');
}

const target = join(process.cwd(), 'docs', '题库判读工作清单.md');
const dir = target.slice(0, Math.max(target.lastIndexOf('/'), target.lastIndexOf('\\')));
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
writeFileSync(target, lines.join('\n'), 'utf8');
console.log('written', target);
