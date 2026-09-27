// 逐题审计视图：以「轮到黑(用户)」的答案树为骨架，把每个分支的完整注释、类型打印出来
// 并标注成功分支与失败分支的语义词，辅助判读目标方向（做活/杀棋）。
// node tools/branchMap.ts easy/ggg-easy-46.sgf
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle, buildAnswerIndex } from './convertSgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) { console.error('usage: node tools/branchMap.ts <file>'); process.exit(1); }
const text = readFileSync(join(base, file), 'utf8');
const rep = convertToPuzzle({ file, text });
if (!rep.ok) { console.log('convert fail', rep.warnings); process.exit(1); }
const p = rep.puzzle!;
const idx = buildAnswerIndex(p.solutionNodes, p.root);
console.log('FILE', file, '| user=', p.userColor, '| main:', rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
console.log('---');
const dump = (id: string, d: number) => {
  const n = idx.get(id)!;
  for (const b of n.branches) {
    const head = '  '.repeat(d) + `[${b.type}] @(${b.x},${b.y})`;
    const r = b.reason ? '  ← 注释: ' + b.reason.replace(/\s+/g, ' ').slice(0, 300) : '';
    console.log(head + r);
    if (b.type === 'continue' && b.next) {
      if (b.whiteReply) console.log('  '.repeat(d + 1) + `↳ 白应: (${b.whiteReply.x},${b.whiteReply.y})`);
      dump(b.next, d + 1);
    }
  }
};
dump(p.root.id, 0);
