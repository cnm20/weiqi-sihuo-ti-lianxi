// 结构信号扫描（辅助判读排序）：对候选做主解终局信号统计
//  - kill 候选：主解中黑提白 capW>=1（机器确认的吃子事实）
//  - live 候选：终局黑 >=2 个只邻黑的小眼区（纯色空域，排除大面积外部区域）
// 注：方向信号须经逐题阅读确认后再入库（如 easy-68 类“提子做眼”的做活题提子数>0）。
// node tools/scanStructure.ts [easy|intermediate|hard]
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const dir = process.argv[2] ?? 'easy';
const records = JSON.parse(readFileSync(join(process.cwd(), '_tools/candidates/review-records.json'), 'utf8')) as Record<string, unknown>;

const files = readdirSync(join(base, dir)).filter((x) => x.endsWith('.sgf')).sort();
const rows: any[] = [];
for (const f of files) {
  const ref = `${dir}/${f}`;
  if (records[ref]) continue;
  const text = readFileSync(join(base, dir, f), 'utf8');
  const rep = convertToPuzzle({ file: ref, text });
  if (!rep.ok || !rep.puzzle) continue;
  const p = rep.puzzle;
  const b = new GoBoard(p.size);
  b.setup(p.initial);
  const cnt = (c: Player) => { let n = 0; for (let x = 0; x < p.size; x++) for (let y = 0; y < p.size; y++) if (b.at(x, y) === c) n++; return n; };
  let capW = 0, capB = 0;
  for (const m of rep.stats.mainLine) {
    const w0 = cnt('W'), b0 = cnt('B');
    const r = b.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') break;
    capW += m.color === 'B' ? Math.max(0, w0 - cnt('W')) : 0;
    capB += m.color === 'W' ? Math.max(0, b0 - cnt('B')) : 0;
  }
  // 终局空域：只邻黑 / 只邻白 计数（真眼区）
  const size = p.size;
  const seen = new Set<number>();
  let pureB = 0, pureW = 0;
  const pureBSizes: number[] = [];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (b.at(x, y) !== null || seen.has(y * size + x)) continue;
    const q: Array<[number, number]> = [[x, y]];
    seen.add(y * size + x);
    let touchesB = false, touchesW = false, area = 0;
    while (q.length) {
      const [cx, cy] = q.pop()!;
      area++;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const c = b.at(nx, ny);
        if (c === null) { if (!seen.has(ny * size + nx)) { seen.add(ny * size + nx); q.push([nx, ny]); } }
        else if (c === 'B') touchesB = true;
        else touchesW = true;
      }
    }
    if (touchesB && !touchesW) { pureB++; pureBSizes.push(area); }
    if (touchesW && !touchesB) pureW++;
  }
  rows.push({ ref: ref.replace('.sgf', ''), capW, capB, pureB, pureW, eyes: pureBSizes.join('+'), smallEyes: pureBSizes.filter((a) => a <= 12).length, mainLen: rep.stats.mainLine.length });
}
const killCand = rows.filter((r) => r.capW >= 1).sort((a, b) => b.capW - a.capW || a.mainLen - b.mainLen);
const liveCand = rows.filter((r) => r.smallEyes >= 2 && r.capW === 0).sort((a, b) => a.mainLen - b.mainLen || a.smallEyes - b.smallEyes);
console.log(`===== ${dir} kill候选(capW>=1): ${killCand.length} =====`);
for (const r of killCand) console.log(`  ${r.ref.padEnd(28)} capW=${r.capW} capB=${r.capB} mainLen=${r.mainLen}`);
console.log(`===== ${dir} live候选(小纯黑眼区>=2 且无提子): ${liveCand.length} =====`);
for (const r of liveCand) console.log(`  ${r.ref.padEnd(28)} eyes=${r.eyes} mainLen=${r.mainLen}`);
