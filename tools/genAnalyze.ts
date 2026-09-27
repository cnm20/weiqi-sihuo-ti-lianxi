// GTP 命令生成：放好初始+主解后，发 kata-analyze（ownership）并结束
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, sgfPointToXY } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
const outFile = process.argv[3] ?? '_tools/katago/cmds.gtp';
const visits = Number(process.argv[4] ?? 400);
const text = readFileSync(join(base, file), 'utf8');
const rep = convertToPuzzle({ file, text });
if (!rep.ok) { console.error('convert fail'); process.exit(1); }
const size = rep.puzzle!.size;
const root = parseSgf(text);
const lines: string[] = [];
lines.push('boardsize ' + size);
lines.push('clear_board');
const stones = [
  ...(root.props['AB'] ?? []).map((s) => ({ c: 'B' as const, p: sgfPointToXY(s) })),
  ...(root.props['AW'] ?? []).map((s) => ({ c: 'W' as const, p: sgfPointToXY(s) })),
];
for (const s of stones) lines.push(`play ${s.c} ${xy(s.p.x, s.p.y)}`);
for (const m of rep.stats.mainLine) lines.push(`play ${m.color} ${xy(m.x, m.y)}`);
lines.push(`kata-analyze ${visits}`);
lines.push('quit');
writeFileSync(outFile, lines.join('\n') + '\n', 'utf8');
console.log('wrote', outFile, lines.length, 'cmd');

function xy(x: number, y: number): string {
  const letters = 'abcdefghjklmnopqrst'; // GTP 跳过 i
  return letters[x] + String(y + 1);
}
