// 全树校验+首次冲突详情：node tools/checkTree.ts <file>
import { readFileSync } from 'node:fs';
import { parseSgf, nodeMove, nodeComment, sgfPointToXY } from './sgf.ts';
import { renderBoard } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';

const file = process.argv[2];
const root = parseSgf(readFileSync(file, 'utf8'));
const size = Number.parseInt(root.props['SZ']?.[0] ?? '19', 10) || 19;
const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
const initial = [...ab, ...aw];

let problems = 0;
function walk(node: ReturnType<typeof parseSgf>, board: GoBoard, path: string[]) {
  const mv = nodeMove(node);
  if (mv) {
    const res = board.tryMove(mv.color, mv.x, mv.y);
    if (res.status !== 'ok') {
      problems++;
      console.log(`\n*** ILLEGAL at ${path.concat(`${mv.color}(${mv.x},${mv.y})`).join(' -> ')} status=${res.status}`);
      console.log(renderBoard(board, { coords: true }));
      if (problems >= 6) process.exit(1);
      return;
    }
  }
  if (node.children.length === 0) return;
  const parentBoard = board.clone();
  for (const child of node.children) {
    const cm = nodeMove(child);
    walk(child, parentBoard.clone(), path.concat(cm ? `${cm.color}(${cm.x},${cm.y})` : '?'));
  }
}
walk(root, (() => { const b = new GoBoard(size); b.setup(initial); return b; })(), ['root']);
console.log(problems === 0 ? 'OK: all variations legal' : `problems: ${problems}`);
