// 逐步模拟：node tools/simulateMainline.ts <file>
// 打印主变化每一步的棋盘，检查规则引擎与 SGF 是否一致
import { readFileSync } from 'node:fs';
import { parseSgf, nodeMove, nodeComment, sgfPointToXY } from './sgf.ts';
import { renderBoard } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';

const file = process.argv[2];
const root = parseSgf(readFileSync(file, 'utf8'));
const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
const b = new GoBoard(size);
b.setup([...ab, ...aw]);
console.log('initial:');
console.log(renderBoard(b, { coords: true }));
console.log('root comment:', nodeComment(root).replace(/\s+/g, ' ').slice(0, 300));

// 依次走第一条主线（每层取第一个 child）
let cur = root;
let depth = 0;
while (cur.children.length > 0 && depth < 300) {
  const child = cur.children[0];
  const mv = nodeMove(child);
  if (!mv) {
    console.log(`[depth ${depth}] child with no move (comment: ${nodeComment(child).replace(/\s+/g, ' ').slice(0, 120)})`);
    cur = child;
    depth++;
    continue;
  }
  const label = nodeComment(child) ? `  comment: ${nodeComment(child).replace(/\s+/g, ' ').slice(0, 200)}` : '';
  const res = b.tryMove(mv.color, mv.x, mv.y);
  console.log(`\n[depth ${depth + 1}] ${mv.color}(${mv.x},${mv.y}) status=${res.status} captured=${res.captured.map((p) => `${p.x},${p.y}`).join('|') || '-'}${label}`);
  if (res.status !== 'ok') {
    console.log('ILLEGAL MOVE ENCOUNTERED');
    break;
  }
  console.log(renderBoard(b, { coords: true }));
  cur = child;
  depth++;
}
