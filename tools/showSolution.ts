// 终局渲染：node tools/showSolution.ts <file>
// 展示初始、正解每一步与终局局面+节点注释（供内容审核）
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle, buildAnswerIndex } from './convertSgf.ts';
import { renderBoard } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const arg = process.argv[2];
const text = readFileSync(join(base, arg), 'utf8');
const rep = convertToPuzzle({ file: arg, text });
if (!rep.ok || !rep.puzzle) {
  console.log('not ok', rep.warnings);
  process.exit(1);
}
const p = rep.puzzle;
console.log('FILE', arg, '| userColor', p.userColor, '| stats', JSON.stringify({ ...rep.stats, mainLine: rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`) }));
const index = buildAnswerIndex(p.solutionNodes);
const b = new GoBoard(p.size);
b.setup(p.initial);
console.log('\n== initial ==');
console.log(renderBoard(b));

// 沿主变化走，收集分支注释
interface StepCmt {
  after: number;
  move: string;
  cmt: string;
}
const steps: StepCmt[] = [];
let cur = p.root;
let guard = 0;
const m = rep.stats.mainLine;
let mi = 0;
const cmtByMove = new Map<string, string>();
(function walkNode(id: string) {
  const n = index.get(id);
  if (!n) return;
  for (const br of n.branches) {
    if (br.type !== 'continue' && br.type !== 'success') continue;
    const mvK = `${m[mi]?.color}(${m[mi]?.x},${m[mi]?.y})`;
    if (br.x === m[mi]?.x && br.y === m[mi]?.y) {
      if (br.reason) cmtByMove.set(mvK, br.reason);
      mi++;
      if (br.type === 'success') return;
      if (br.next) walkNode(br.next);
    }
  }
})(p.root.id);

console.log('\n== mainline comments ==');
for (let i = 0; i < m.length; i++) {
  const mv = m[i];
  const cmt = cmtByMove.get(`${mv.color}(${mv.x},${mv.y})`);
  if (cmt) console.log(`${mv.color}(${mv.x},${mv.y}): ${cmt}`);
}

// 渲染终局
const bb = new GoBoard(p.size);
bb.setup(p.initial);
for (const mv of m) {
  const r = bb.tryMove(mv.color, mv.x, mv.y);
  if (r.status !== 'ok') {
    console.log('ILLEGAL at', mv.color, mv.x, mv.y, r.status);
    break;
  }
}
console.log('\n== final ==');
console.log(renderBoard(bb));
