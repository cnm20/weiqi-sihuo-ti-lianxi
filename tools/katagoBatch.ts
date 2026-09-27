// 鎵归噺锛氫负澶氫釜 ref 鐢熸垚 analysis JSONL + 缁堝眬鐧芥涓茶竟杞︽暟鎹?// node tools/katagoBatch.ts easy/ggg-easy-13.sgf ...
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const refs = process.argv.slice(2);
if (!refs.length) { console.error('usage: node tools/katagoBatch.ts <ref>...'); process.exit(1); }

const letters = 'abcdefghjklmnopqrst';
const lines: string[] = [];
const sidecar: Record<string, unknown> = { queries: [] };
for (let i = 0; i < refs.length; i++) {
  const ref = refs[i];
  const text = readFileSync(join(base, ref), 'utf8');
  const rep = convertToPuzzle({ file: ref, text });
  if (!rep.ok) { console.error('fail', ref, rep.warnings); continue; }
  const p = rep.puzzle!;
  const size = p.size;
  const cells = new Map<string, string>();
  for (const s of p.initial) cells.set(`${s.x},${s.y}`, s.color);
  for (const m of rep.stats.mainLine) cells.set(`${m.x},${m.y}`, m.color);
  const board: Array<[string, string]> = [];
  for (const [k, c] of cells) { const [x, y] = k.split(',').map(Number); board.push([c, letters[x] + String(y + 1)]); }
  // 鐧芥涓?  const at = (x: number, y: number): string | null => cells.get(`${x},${y}`) ?? null;
  const seen = new Set<string>();
  const wgroups: number[][] = [];
  for (const k of cells.keys()) {
    if (cells.get(k) !== 'W' || seen.has(k)) continue;
    const [sx, sy] = k.split(',').map(Number);
    const stack: Array<[number, number]> = [[sx, sy]];
    const g: number[] = [];
    seen.add(k);
    while (stack.length) {
      const [cx, cy] = stack.pop()!;
      g.push(cy * size + cx);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const kk = `${nx},${ny}`;
        if (cells.get(kk) === 'W' && !seen.has(kk)) { seen.add(kk); stack.push([nx, ny]); }
      }
    }
    wgroups.push(g);
  }
  lines.push(JSON.stringify({ id: 'q' + i, moves: [], initialStones: board, rules: 'chinese', komi: 7.5, boardXSize: size, boardYSize: size, analyzeTurns: [0], maxVisits: Number(process.env.VISITS ?? 400), includeOwnership: true, includePolicy: false, includeMoves: false }));
  sidecar.queries!.push({ ref, wgroups: wgroups.map((g) => g.sort((a, b) => a - b)), mainLen: rep.stats.mainLine.length });
}
writeFileSync(join(process.cwd(), '_tools/katago/batch.jsonl'), lines.join('\n') + '\n', 'utf8');
writeFileSync(join(process.cwd(), '_tools/katago/batch-sidecar.json'), JSON.stringify(sidecar, null, 1), 'utf8');
console.log('wrote', lines.length, 'queries; white groups per query recorded');

