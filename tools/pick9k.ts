// 9级档选题：easy 且 注释含明确目标词(capture/alive/lives/dead/race) 的题，
// 按主解长度/树规模筛选出最简 12 题作为候选（便于先做齐一档）
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), '_tools/candidates');
const puzzles = JSON.parse(readFileSync(join(dir, 'puzzles.json'), 'utf8'));
const verdicts = JSON.parse(readFileSync(join(dir, 'verdicts.json'), 'utf8')) as { file: string; ok: boolean; hasDeadRoot: boolean }[];
const byFile = new Map(verdicts.map((v) => [v.file, v]));
const goalWord = /capture|captures|capturing|alive|lives|make life|two eyes|dead|dies|race|connect|cut/i;

const rows = [];
for (const p of puzzles) {
  const v = byFile.get(p.source.ref);
  if (!v || !v.ok || v.hasDeadRoot) continue;
  if (!p.source.ref.startsWith('easy/')) continue;
  let comments = '';
  for (const n of p.solutionNodes ?? []) for (const b of n.branches) if (b.reason) comments += ' ' + b.reason;
  const m = comments.match(goalWord);
  if (!m) continue;
  const ko = /ko|seki|ladder/i.test(comments) && !/captur|race/i.test(comments);
  rows.push({
    file: p.source.ref,
    hint: m[0],
    koHint: ko,
    mainLen: mainlineLen(p),
    nodes: p.solutionNodes?.length ?? 0,
  });
}
rows.sort((a, b) => a.mainLen - b.mainLen || a.nodes - b.nodes);
writeFileSync(join(dir, 'candidates-9k-v2.json'), JSON.stringify(rows, null, 1), 'utf8');
console.log(rows.length, 'goal-word easy candidates');
for (const r of rows.slice(0, 40)) console.log(`${r.file} hint=${r.hint} ko=${r.koHint} len=${r.mainLen} nodes=${r.nodes}`);

function mainlineLen(p: { root: { branches: { type: string; next?: string }[] }; solutionNodes?: { id: string }[] }): number {
  const index = new Map((p.solutionNodes ?? []).map((n) => [n.id, n]));
  let len = 0;
  let cur = p.root;
  for (let i = 0; i < 80; i++) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const c = succ ?? cont;
    if (!c) break;
    len++;
    if (c.type === 'success') break;
    const nx = c.next ? index.get(c.next) : undefined;
    if (!nx) break;
    cur = nx;
  }
  return len;
}
