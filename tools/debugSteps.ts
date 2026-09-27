// debug per-step: stones before/after each main-line move
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, sgfPointToXY } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone, Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) { console.error('usage'); process.exit(1); }
const text = readFileSync(join(base, file), 'utf8');
const root = parseSgf(text);
const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
const initial: Stone[] = [...ab, ...aw];
const rep = convertToPuzzle({ file, text });
if (!rep.ok) { console.log('convert fail', rep.warnings); process.exit(1); }
const board = new GoBoard(size);
board.setup(initial);
const cnt = (c: Player) => { let n = 0; for (let x = 0; x < size; x++) for (let y = 0; y < size; y++) if (board.at(x, y) === c) n++; return n; };
console.log(file, 'main:', rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
for (let i = 0; i < rep.stats.mainLine.length; i++) {
  const m = rep.stats.mainLine[i];
  const b0 = cnt('B'), w0 = cnt('W');
  const r = board.tryMove(m.color, m.x, m.y);
  const b1 = cnt('B'), w1 = cnt('W');
  const cap: string[] = [];
  if (m.color === 'B') { if (w0 - w1 > 0) cap.push(`黑提白${w0 - w1}`); if (b0 - b1 > 0) cap.push(`??黑自减${b0 - b1}`); }
  else { if (b0 - b1 > 0) cap.push(`白提黑${b0 - b1}`); if (w0 - w1 > 0) cap.push(`??白自减${w0 - w1}`); }
  console.log(`step${i + 1} ${m.color}(${m.x},${m.y}) ${r.status} B:${b0}->${b1} W:${w0}->${w1} ${cap.join(' ')}`);
}
