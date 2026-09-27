// 一次性诊断：对一批 refs 输出主解终局画像（提子、纯色眼区、同色同串最大真眼数）
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const refs = process.argv.slice(2);

function diag(ref: string) {
  const text = readFileSync(join(base, ref), 'utf8');
  const rep = convertToPuzzle({ file: ref, text });
  if (!rep.ok) return `FAIL ${rep.warnings[0]}`;
  const p = rep.puzzle!;
  const size = p.size;
  const b = new GoBoard(size);
  b.setup(p.initial);
  const cnt = (c: Player) => { let n = 0; for (let x = 0; x < size; x++) for (let y = 0; y < size; y++) if (b.at(x, y) === c) n++; return n; };
  let capW = 0, capB = 0;
  for (const m of rep.stats.mainLine) {
    const w0 = cnt('W'), b0 = cnt('B');
    const r = b.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') break;
    capW += m.color === 'B' ? Math.max(0, w0 - cnt('W')) : 0;
    capB += m.color === 'W' ? Math.max(0, b0 - cnt('B')) : 0;
  }
  // 分组并统计每组邻接的纯同色空域数
  const groupOfCell = (x: number, y: number): string => {
    const q: Array<[number, number]> = [[x, y]];
    const g = new Set<number>();
    const seenG = new Set<number>();
    seenG.add(y * size + x);
    while (q.length) {
      const [cx, cy] = q.pop()!;
      g.add(cy * size + cx);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const c = b.at(nx, ny);
        if (c !== null && !seenG.has(ny * size + nx) && c === b.at(x, y)) { seenG.add(ny * size + nx); q.push([nx, ny]); }
      }
    }
    return [...g].sort((a, z) => a - z).join(',');
  };
  const pureRegions: Array<{ color: 'B' | 'W'; cells: number[] }> = [];
  const seen = new Set<number>();
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    if (b.at(x, y) !== null || seen.has(y * size + x)) continue;
    const q: Array<[number, number]> = [[x, y]];
    seen.add(y * size + x);
    const cells: number[] = [];
    let tB = false, tW = false;
    while (q.length) {
      const [cx, cy] = q.pop()!;
      cells.push(cy * size + cx);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const c = b.at(nx, ny);
        if (c === null) { if (!seen.has(ny * size + nx)) { seen.add(ny * size + nx); q.push([nx, ny]); } }
        else if (c === 'B') tB = true; else tW = true;
      }
    }
    if (tB && !tW) pureRegions.push({ color: 'B', cells });
    if (tW && !tB) pureRegions.push({ color: 'W', cells });
  }
  const maxEyes = (color: 'B' | 'W') => {
    const m = new Map<string, number>();
    for (const r of pureRegions.filter((x) => x.color === color)) {
      const near = new Set<string>();
      for (const k of r.cells) {
        const x = k % size, y = Math.floor(k / size);
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
          if (b.at(nx, ny) === color) near.add(groupOfCell(nx, ny));
        }
      }
      for (const g of near) m.set(g, (m.get(g) ?? 0) + 1);
    }
    return Math.max(0, ...m.values());
  };
  const all = (c: Player) => { const n: Array<[string, number]> = []; const sc = new Set<string>(); for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (b.at(x, y) === c) { const g = groupOfCell(x, y); if (!sc.has(g)) { sc.add(g); n.push([g, g.split(',').length]); } } return n; };
  const bGroups = all('B'), wGroups = all('W');
  const fmt = (arr: Array<[string, number]>) => arr.map(([g, n]) => `${n}`).join(',');
  return `capW=${capW} capB=${capB} | 纯黑空域[${pureRegions.filter((r) => r.color === 'B').map((r) => r.cells.length).join(',')}] 纯白空域[${pureRegions.filter((r) => r.color === 'W').map((r) => r.cells.length).join(',')}] | 黑同串最大真眼=${maxEyes('B')} 白同串最大真眼=${maxEyes('W')} | 黑组[${fmt(bGroups)}] 白组[${fmt(wGroups)}]`;
}

for (const ref of refs) console.log(`${ref}\n  ${diag(ref)}`);
