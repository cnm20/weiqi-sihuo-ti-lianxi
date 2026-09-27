// 审核工作台：一次渲染一题（初始/终局/每手），并打印全部英文注释
// node tools/auditOne.ts easy/ggg-easy-01.sgf
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, walkTree, nodeMove, nodeComment } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import { renderBoard } from './render.ts';
import { convertToPuzzle, buildAnswerIndex, collectMainLine } from './convertSgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) {
  console.error('usage: node tools/auditOne.ts easy/ggg-easy-01.sgf');
  process.exit(1);
}
const text = readFileSync(join(base, file), 'utf8');
const root = parseSgf(text);
console.log('### FILE', file);

// 注释
const comments: string[] = [];
walkTree(root, (n) => {
  const c = nodeComment(n).trim();
  if (c) comments.push(c.replace(/\s+/g, ' '));
});
console.log('## ALL COMMENTS:');
for (const c of comments.slice(0, 80)) console.log(' -', c);

const rep = convertToPuzzle({ file, text });
if (!rep.ok) {
  console.log('convert fail', rep.warnings);
  process.exit(1);
}
const p = rep.puzzle!;
console.log('## 目标方：', p.userColor, ' stats:', JSON.stringify({ ...rep.stats, mainLine: rep.stats.mainLine.map((m) => `${m.color}${m.x},${m.y}`) }));

const index = buildAnswerIndex(p.solutionNodes);
// 初始
const b = new GoBoard(p.size);
b.setup(p.initial);
console.log('## 初始局面:');
console.log(renderBoard(b, { coords: true }));

// 主变逐步
let cb = new GoBoard(p.size);
cb.setup(p.initial);
console.log('## 主变化:');
for (let i = 0; i < rep.stats.mainLine.length; i++) {
  const m = rep.stats.mainLine[i];
  cb.tryMove(m.color, m.x, m.y);
  console.log(`step ${i + 1} ${m.color}(${m.x},${m.y})`);
  console.log(renderBoard(cb));
}

// 答案树
console.log('## 答案树:');
const dump = (id: string, d: number) => {
  const n = index.get(id)!;
  for (const br of n.branches) {
    const r = br.reason ? ' 「' + br.reason.slice(0, 60) + '」' : '';
    console.log('  '.repeat(d) + `- ${br.type} @${br.x},${br.y}` + r);
    if (br.type === 'continue' && br.next) dump(br.next, d + 1);
  }
};
dump(p.root.id, 0);
