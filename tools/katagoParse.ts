// 解析 KataGo batch-out.txt：打印每题每个白棋串的平均所有权（[-1,1]，>0 表示黑占/死白倾向）
// 依赖 katagoBatch.ts 生成的 batch-sidecar.json 与引擎输出 batch-out.txt
// node tools/katagoParse.ts
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), '_tools/katago');
const side = JSON.parse(readFileSync(join(dir, 'batch-sidecar.json'), 'utf8'));
const outs = readFileSync(join(dir, 'batch-out.txt'), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));

interface Query { ref: string; wgroups: number[][]; mainLen: number }
const queries = (side.queries ?? []) as Query[];

function avgOwn(own: number[], idxs: number[], size: number, xMajor: boolean): number {
  let s = 0;
  for (const flat of idxs) {
    const y = Math.floor(flat / size), x = flat % size;
    const ix = xMajor ? y * size + x : x * size + y;
    s += own[ix] ?? 0;
  }
  return idxs.length ? s / idxs.length : 0;
}

for (let i = 0; i < queries.length; i++) {
  const q = queries[i];
  const out = outs.find((o) => o.id === 'q' + i);
  if (!out) { console.log(q.ref, '(no output)'); continue; }
  const own = out.ownership as number[];
  const size = out.boardXSize ?? 19;
  // 黑棋整体应明显为正，用于判断索引方向
  const size2 = size;
  void size2;
  const reports = q.wgroups.map((g, gi) => {
    const ym = avgOwn(own, g, size, false);
    const xm = avgOwn(own, g, size, true);
    return { gi, n: g.length, ym, xm };
  });
  reports.sort((a, b) => b.n - a.n);
  console.log(`== q${i} ${q.ref} (mainLen=${q.mainLen}) white groups ${q.wgroups.length} ==`);
  for (const r of reports.slice(0, 6)) {
    console.log(`   n=${String(r.n).padStart(2)} own(ym)=${r.ym.toFixed(3)} own(xm)=${r.xm.toFixed(3)}`);
  }
}
