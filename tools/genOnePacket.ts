// 生成单题“审读材料包”（Markdown），供并行审读员使用
// node tools/genOnePacket.ts easy/ggg-easy-43.sgf > packet.md
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, walkTree, nodeComment, nodeMove } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import { convertToPuzzle, buildAnswerIndex } from './convertSgf.ts';
import type { Stone } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

function render(board: GoBoard, x0: number, y0: number, x1: number, y1: number): string {
  const lines: string[] = [];
  let head = '     ';
  for (let x = x0; x <= x1; x++) head += String(x).padStart(2) + ' ';
  lines.push(head);
  for (let y = y0; y <= y1; y++) {
    let row = String(y).padStart(2) + '   ';
    for (let x = x0; x <= x1; x++) {
      const c = board.at(x, y);
      row += (c === 'B' ? ' X' : c === 'W' ? ' O' : ' .') + ' ';
    }
    lines.push(row);
  }
  return lines.join('\n');
}

const file = process.argv[2];
if (!file) {
  console.error('usage: node tools/genOnePacket.ts easy/ggg-easy-43.sgf');
  process.exit(1);
}
const text = readFileSync(join(base, file), 'utf8');
const root = parseSgf(text);
const out: string[] = [];
out.push(`# 审读材料：${file}`);
out.push('');

const comments: string[] = [];
walkTree(root, (n) => {
  const c = nodeComment(n).trim();
  if (c) comments.push(c.replace(/\s+/g, ' '));
});
out.push('## 全部 SGF 注释（按出现顺序，含分支语义）');
comments.slice(0, 200).forEach((c) => out.push('- ' + c));
out.push('');

const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...xy(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...xy(s) }));
const initial: Stone[] = [...ab, ...aw];
const b = new GoBoard(size);
b.setup(initial);
let minX = size, maxX = -1, minY = size, maxY = -1;
for (const s of initial) { minX = Math.min(minX, s.x); maxX = Math.max(maxX, s.x); minY = Math.min(minY, s.y); maxY = Math.max(maxY, s.y); }
const pad = 1;
out.push('## 初始局面（X=黑 O=白；坐标行/列）');
out.push(render(b, Math.max(0, minX - pad), Math.max(0, minY - pad), Math.min(size - 1, maxX + pad), Math.min(size - 1, maxY + pad)));
out.push('');

const rep = convertToPuzzle({ file, text });
if (rep.ok && rep.puzzle) {
  const p = rep.puzzle!;
  out.push('## 转换统计');
  out.push(JSON.stringify({ userColor: p.userColor, mainLine: rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`), successLeaves: rep.stats.successLeaves, nodes: rep.stats.nodes, maxDepth: rep.stats.maxDepth }, null, 1));
  out.push('');
  const idx = buildAnswerIndex(p.solutionNodes);
  out.push('## 答案树（success 终点与失败分支）');
  const dump = (id: string, d: number) => {
    const n = idx.get(id);
    if (!n) return;
    for (const br of n.branches) {
      const r = br.reason ? ' 「' + br.reason.slice(0, 80) + '」' : '';
      out.push('  '.repeat(d) + `- ${br.type} @(${br.x},${br.y})${r}`);
      if (br.type === 'continue' && br.next) dump(br.next, d + 1);
    }
  };
  dump(p.root.id, 0);
}
console.log(out.join('\n'));

function xy(s: string): { x: number; y: number } {
  return { x: s.charCodeAt(0) - 97, y: s.charCodeAt(1) - 97 };
}
