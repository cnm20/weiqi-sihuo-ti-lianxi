// 审题卡生成：把每题渲染为“可审核卡片”（棋盘+主解+注释）供逐题审核
// node tools/reviewCards.ts <file...> 或全部
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeComment, sgfPointToXY } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import { renderBoard } from './render.ts';
import type { Stone } from '../src/domain/types.ts';

function card(file: string): string {
  const text = readFileSync(join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems', file), 'utf8');
  const root = parseSgf(text);
  const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
  const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
  const initial: Stone[] = [...ab, ...aw];
  const b = new GoBoard(19);
  b.setup(initial);
  const lines: string[] = [];
  lines.push(`===== ${file} =====`);
  lines.push(nodeComment(root).replace(/\s+/g, ' ').slice(0, 300));
  lines.push(renderBoard(b, { coords: true }));
  return lines.join('\n');
}

const args = process.argv.slice(2);
const base = '_tools/dataset/go-problems-master/weekly-go-problems';
let out = '';
if (args.length === 0) {
  // 全部 easy 输出便于筛选
  for (const f of readdirSync(join(base, 'easy')).filter((x) => x.endsWith('.sgf')).sort()) {
    out += card(`easy/${f}`) + '\n\n';
  }
  const dir = join(process.cwd(), '_tools/cards');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'easy-cards.txt'), out, 'utf8');
  console.log('written', out.length, 'chars');
} else {
  out = args.map(card).join('\n\n');
  console.log(out);
}
