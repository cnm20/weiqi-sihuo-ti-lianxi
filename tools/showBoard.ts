// 审题渲染（顶部 y=0 在首行，与盘面真实方向一致）
// node tools/showBoard.ts <file>  —— 显示 初始/终局（主解）+ 坐标
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeComment } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

function renderTop(board: GoBoard): string {
  const size = board.size;
  const g: string[][] = Array.from({ length: size }, () => Array<string>(size).fill('.'));
  let minX = size, maxX = -1, minY = size, maxY = -1;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const c = board.at(x, y);
      if (c) {
        g[y][x] = c === 'B' ? 'X' : 'O';
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
    }
  }
  const pad = 1;
  const x0 = Math.max(0, minX - pad), x1 = Math.min(size - 1, maxX + pad);
  const y0 = Math.max(0, minY - pad), y1 = Math.min(size - 1, maxY + pad);
  const lines: string[] = [];
  let head = '    ';
  for (let x = x0; x <= x1; x++) head += String(x).padStart(2) + ' ';
  lines.push(head);
  for (let y = y0; y <= y1; y++) {
    let row = String(y).padStart(2) + '  ';
    for (let x = x0; x <= x1; x++) row += (g[y][x] === '.' ? ' .' : ' ' + g[y][x]);
    lines.push(row);
  }
  return lines.join('\n');
}

const file = process.argv[2];
if (!file) {
  console.error('usage: node tools/showBoard.ts <file>');
  process.exit(1);
}
const text = readFileSync(join(base, file), 'utf8');
const root = parseSgf(text);
const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...xy(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...xy(s) }));
const initial: Stone[] = [...ab, ...aw];

console.log('FILE', file);
console.log('ROOT C:', nodeComment(root).replace(/\s+/g, ' ').slice(0, 200));
const b = new GoBoard(size);
b.setup(initial);
console.log('== 初始 ==');
console.log(renderTop(b));

const rep = convertToPuzzle({ file, text });
if (rep.ok && rep.puzzle) {
  const p = rep.puzzle!;
  console.log('主解:', rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
  const fin = new GoBoard(size);
  fin.setup(initial);
  for (const m of rep.stats.mainLine) {
    const r = fin.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') {
      console.log('主解回放失败:', m, r.status);
      break;
    }
  }
  console.log('== 终局(主解后) ==');
  console.log(renderTop(fin));
}

function xy(s: string): { x: number; y: number } {
  return { x: s.charCodeAt(0) - 97, y: s.charCodeAt(1) - 97 };
}
