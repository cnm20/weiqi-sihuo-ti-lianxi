// 主解成功叶扫描（判读候选队列）：仅看“主路径成功叶”的注释
//  - 输出：主叶含方向词（dead/dies/captured/kill/alive/lives/two eyes/miai）
//    且主叶本身无 ko/seki/ladder 的未判读候选
//  - 说明：ko/seki/ladder 若只出现在次佳/失败变着，不影响主解方向判读；
//    是否入库仍需逐题视觉复核。执行：node tools/scanMainLeaf.ts
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const records = JSON.parse(readFileSync(join(process.cwd(), '_tools/candidates/review-records.json'), 'utf8')) as Record<string, any>;

for (const dir of ['easy', 'intermediate', 'hard']) {
  const hits: string[] = [];
  for (const f of readdirSync(join(base, dir)).filter((x) => x.endsWith('.sgf')).sort()) {
    const ref = `${dir}/${f}`;
    if (records[ref]) continue;
    const text = readFileSync(join(base, dir, f), 'utf8');
    const rep = convertToPuzzle({ file: ref, text });
    if (!rep.ok || !rep.puzzle) continue;
    const p = rep.puzzle;
    // 沿主路径找 success 叶（first-continue chain）
    const byId = new Map((p.solutionNodes ?? []).map((n: any) => [n.id, n]));
    let cur = byId.get(p.root?.id) ?? (p.solutionNodes ?? [])[0];
    let mainLeaf: { x: number; y: number; reason?: string } | undefined;
    let guard = 0;
    while (cur && guard++ < 300) {
      const s = cur.branches.find((b: any) => b.type === 'success');
      if (s) { mainLeaf = s; break; }
      const c = cur.branches.find((b: any) => b.type === 'continue');
      if (c) { cur = byId.get(c.next!); if (!cur) break; }
      else break;
    }
    const r = mainLeaf?.reason;
    if (!r) continue;
    if (/\bko\b|seki|ladder|ten thousand/i.test(r)) continue; // 主叶本身 ko/seki/ladder
    if (/dead|dies|is captured|captured|killed|can'?t (make two eyes|live)|alive|lives|two eyes|miai/i.test(r)) {
      hits.push(`${ref} :: ${r.slice(0, 170)}`);
    }
  }
  console.log(`\n===== ${dir} 主叶方向词且无ko/seki/ladder (${hits.length}) =====`);
  for (const h of hits.slice(0, 80)) console.log(' -', h);
}
