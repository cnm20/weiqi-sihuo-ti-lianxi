// 最终整库复排：按全局结构代理（主解用户手数→树规模→根候选数）对正式题库重排档位
// 说明：仅在全库 100 题定稿后执行一次；会重写各条 reviewed 记录的 levelIndex/orderInLevel，
//       并更新 notes（追加【复排】标记）。执行：node tools/resortBands.ts
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const candDir = join(process.cwd(), '_tools/candidates');
const recFile = join(candDir, 'review-records.json');
const puzzles = JSON.parse(readFileSync(join(candDir, 'puzzles.json'), 'utf8')) as any[];
const rec = JSON.parse(readFileSync(recFile, 'utf8')) as Record<string, any>;

const proxy = (p: any): { m: number; tree: number; rb: number } => {
  const by = new Map((p.solutionNodes ?? []).map((n: any) => [n.id, n]));
  let cur = by.get(p.root?.id) ?? (p.solutionNodes ?? [])[0];
  let m = 0, g = 0;
  const startRb = (by.get(p.root?.id) ?? (p.solutionNodes ?? [])[0])?.branches?.length ?? 0;
  while (cur && g++ < 600) {
    const s = cur.branches.find((b: any) => b.type === 'success');
    const c = cur.branches.find((b: any) => b.type === 'continue');
    if (s) { m++; break; }
    if (c) { m++; cur = by.get(c.next); if (!cur) break; } else break;
  }
  return { m, tree: (p.solutionNodes ?? []).length, rb: startRb };
};

// 收集已发布
const pub: Array<{ ref: string; p: any; prox: { m: number; tree: number; rb: number } }> = [];
for (const [ref, r] of Object.entries(rec)) {
  if (r.published !== true) continue;
  const p = puzzles.find((x: any) => x.source?.ref === ref);
  if (!p) { console.error('missing puzzle', ref); process.exit(1); }
  pub.push({ ref, p, prox: proxy(p) });
}
if (pub.length !== 100) {
  console.log(`当前已发布 ${pub.length} 题，非 100；本工具设计为 100 题定稿后运行。dry-run 展示排序。`);
}
pub.sort((a, b) => a.prox.m - b.prox.m || a.prox.tree - b.prox.tree || a.prox.rb - b.prox.rb);

const LEVELS = ['9级', '8级', '7级', '6级', '5级', '4级', '3级', '2级', '1级', '1段'];
let applied = 0;
for (let i = 0; i < pub.length; i++) {
  const levelIndex = Math.min(9, Math.floor(i / 10));
  const orderInLevel = (i % 10) + 1;
  const { ref, prox } = pub[i];
  const r = rec[ref];
  const changed = r.levelIndex !== levelIndex || r.orderInLevel !== orderInLevel;
  if (pub.length === 100 && changed) {
    r.levelIndex = levelIndex;
    r.orderInLevel = orderInLevel;
    r.notes = `${r.notes ?? ''}【复排】${LEVELS[levelIndex]}(${orderInLevel})：全局代理 m=${prox.m} tree=${prox.tree} rb=${prox.rb}。`;
    applied++;
  }
  console.log(`${String(i + 1).padStart(3)} ${ref.padEnd(34)} m=${prox.m} tree=${String(prox.tree).padStart(3)} rb=${String(prox.rb).padStart(2)} -> ${LEVELS[levelIndex]}#${orderInLevel}${pub.length === 100 && changed ? ' (改)' : ''}`);
}
if (pub.length === 100) {
  writeFileSync(recFile, JSON.stringify(rec, null, 1) + '\n', 'utf8');
  console.log('applied changes:', applied);
} else {
  console.log('未写入（非 100 题）。');
}
