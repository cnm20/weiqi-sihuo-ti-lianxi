// 可视化检查工具：node tools/inspectSgf.ts <file> —— 打印初始局面与首层变化
import { readFileSync } from 'node:fs';
import { parseSgf, nodeMove, nodeComment, sgfPointToXY } from './sgf.ts';
import { renderBoard, renderMoveTrace } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Move } from '../src/domain/types.ts';

const file = process.argv[2];
if (!file) {
  console.error('usage: node tools/inspectSgf.ts <path.sgf>');
  process.exit(1);
}
const root = parseSgf(readFileSync(file, 'utf8'));
const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
const comment = nodeComment(root);
console.log('== file:', file);
console.log('== size:', size, ' comment:', comment.replace(/\s+/g, ' ').slice(0, 200));
const b = new GoBoard(size);
b.setup([...ab, ...aw]);
console.log('== initial position ==');
console.log(renderBoard(b));

// 遍历根节点各子变化（首手），重放验证合法性
console.log('\n== first-move variations ==');
for (const child of root.children) {
  const mv = nodeMove(child);
  if (!mv) continue;
  const bb = b.clone();
  const res = bb.tryMove(mv.color, mv.x, mv.y);
  const childComment = nodeComment(child).replace(/\s+/g, ' ').slice(0, 120);
  console.log(`- ${mv.color}(${mv.x},${mv.y}) status=${res.status} children=${child.children.length} comment="${childComment}"`);
}

// 第一条主线重放
console.log('\n== main line replay ==');
const moves: Move[] = [];
let cur = root;
let guard = 0;
while (cur.children.length > 0 && guard++ < 200) {
  const mv = nodeMove(cur.children[0]);
  if (!mv) break;
  moves.push({ color: mv.color, x: mv.x, y: mv.y });
  cur = cur.children[0];
}
console.log('mainline moves:', moves.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
if (moves.length > 0) {
  console.log(renderMoveTrace(size, [...ab, ...aw], moves).split('\n\n').slice(0, 6).join('\n\n'));
}
