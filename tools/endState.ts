// 终局分析器：主解终局的客观事实（分组、气、候选眼位），供判读“做活/被杀”
// node tools/endState.ts easy/ggg-easy-01.sgf
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, sgfPointToXY } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone, Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) { console.error('usage: node tools/endState.ts <file>'); process.exit(1); }
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
for (const m of rep.stats.mainLine) {
  const r = board.tryMove(m.color, m.x, m.y);
  if (r.status !== 'ok') { console.log('replay fail', m, r.status); break; }
}
console.log('main:', rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));

// 分组与气
const seen = new Set<number>();
const groups: { color: Player; stones: { x: number; y: number }[]; libs: number }[] = [];
for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
  const c = board.at(x, y);
  if (!c || seen.has(y * size + x)) continue;
  const g = board.groupOf(x, y);
  const stones = g.map((p) => ({ x: p.x, y: p.y }));
  g.forEach((p) => seen.add(p.y * size + p.x));
  const libs = new Set<number>();
  for (const p of g) {
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
      const nx = p.x + dx, ny = p.y + dy;
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
      if (board.at(nx, ny) === null) libs.add(ny * size + nx);
    }
  }
  groups.push({ color: c, stones, libs: libs.size });
}
console.log('groups:', groups.length);
for (const g of groups) {
  const bx = Math.min(...g.stones.map((s) => s.x)), ax = Math.max(...g.stones.map((s) => s.x));
  const by = Math.min(...g.stones.map((s) => s.y)), ay = Math.max(...g.stones.map((s) => s.y));
  console.log(` ${g.color} 棋串 n=${g.stones.length} 气=${g.libs.size} 范围 x[${bx}..${ax}] y[${by}..${ay}] 石=${g.stones.slice(0, 14).map((s) => `${s.x},${s.y}`).join(' ')}`);
}

// 候选眼位：被单色完全包围的空连通域
function regionsOf(owner: Player | null): { cells: { x: number; y: number }[]; adjacent: Set<Player> }[] {
  const out: { cells: { x: number; y: number }[]; adjacent: Set<Player> }[] = [];
  const vis = new Set<number>();
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const c = board.at(x, y);
    if (c !== owner || vis.has(y * size + x)) continue;
    const cells: { x: number; y: number }[] = [];
    const adj = new Set<Player>();
    const st = [[x, y]];
    vis.add(y * size + x);
    while (st.length) {
      const [cx, cy] = st.pop()!;
      cells.push({ x: cx, y: cy });
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const nc = board.at(nx, ny);
        if (nc === null) {
          if (!vis.has(ny * size + nx)) { vis.add(ny * size + nx); st.push([nx, ny]); }
        } else adj.add(nc);
      }
    }
    out.push({ cells, adjacent: adj });
  }
  return out;
}
const emptyRegions = regionsOf(null);
console.log('空域(候选眼位):');
emptyRegions.forEach((r, i) => {
  const touch = [...r.adjacent].join('');
  console.log(` 域${i} size=${r.cells.length} 邻接=[${touch}] 起点=(${r.cells[0].x},${r.cells[0].y})`);
});
