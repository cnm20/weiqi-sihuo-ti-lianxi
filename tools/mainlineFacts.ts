// 主解客观事实：重放主变化，报告每一步是否提子(谁被提)、终局盘面、参与棋串气数
// node tools/mainlineFacts.ts easy/ggg-easy-46.sgf
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, sgfPointToXY } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone, Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) { console.error('usage: node tools/mainlineFacts.ts <file>'); process.exit(1); }
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
const countColor = (c: Player) => {
  let n = 0;
  for (let x = 0; x < size; x++) for (let y = 0; y < size; y++) if (board.at(x, y) === c) n++;
  return n;
};
console.log('initial stones B=', countColor('B'), 'W=', countColor('W'), ' mainLen=', rep.stats.mainLine.length);
console.log('main:', rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
let bCap = 0, wCap = 0;
const capLog: string[] = [];
for (let i = 0; i < rep.stats.mainLine.length; i++) {
  const m = rep.stats.mainLine[i];
  const beforeB = countColor('B'), beforeW = countColor('W');
  const r = board.tryMove(m.color, m.x, m.y);
  if (r.status !== 'ok') { console.log(`REPLAY FAIL at step ${i + 1}:`, m, r.status); break; }
  const dB = beforeB - countColor('B'), dW = beforeW - countColor('W');
  if (dB > 0) { bCap += dB; capLog.push(`黑${m.color}(${m.x},${m.y}) 提白${dB}子`); }
  if (dW > 0) { wCap += dW; capLog.push(`白${m.color}(${m.x},${m.y}) 提黑${dW}子`); }
}
console.log('captures along main: 黑提白=', wCap ? wCap : 0, ' 白提黑=', bCap ? bCap : 0);
if (capLog.length) capLog.forEach((c) => console.log('  ', c));
// 终局局面：打印子力与黑/白气最多的棋串大小
const fin = board;
let bStones = 0, wStones = 0;
for (let x = 0; x < size; x++) for (let y = 0; y < size; y++) {
  const c = fin.at(x, y);
  if (c === 'B') bStones++; else if (c === 'W') wStones++;
}
console.log(`final: B=${bStones} W=${wStones} (空=${size * size - bStones - wStones})`);
