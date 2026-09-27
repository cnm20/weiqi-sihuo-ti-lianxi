// 审核浏览工具：node tools/reviewCandidate.ts <file> ...
// 打印：主变化 + 各节点注释 + 答案树摘要（供人工审核中文目标/分级）
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle, collectMainLine, buildAnswerIndex } from './convertSgf.ts';
import { parseSgf, nodeComment, nodeMove } from './sgf.ts';
import { renderBoard, renderMoveTrace } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

for (const arg of process.argv.slice(2)) {
  const text = readFileSync(join(base, arg), 'utf8');
  const rep = convertToPuzzle({ file: arg, text });
  console.log('\n================================================================');
  console.log('FILE:', arg, ' ok:', rep.ok);
  if (!rep.ok) {
    console.log('warnings:', rep.warnings);
    continue;
  }
  const p = rep.puzzle!;
  console.log('userColor:', p.userColor, ' size:', p.size, ' stats:', JSON.stringify(rep.stats, (k, v) => (k === 'mainLine' ? v.map((m) => `${m.color}${m.x},${m.y}`) : v)));
  // root comment
  const root = parseSgf(text);
  console.log('ROOT C:', nodeComment(root).replace(/\s+/g, ' ').slice(0, 400));

  // 主变化逐节点注释
  const index = buildAnswerIndex(p.solutionNodes);
  const moves = rep.stats.mainLine;
  console.log('MAINLINE:', moves.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
  // 初始局面渲染
  const b = new GoBoard(p.size);
  b.setup(p.initial);
  console.log(renderBoard(b));

  // 答案树 root 分支摘要
  const dump = (id: string, depth: number) => {
    const n = index.get(id)!;
    for (const br of n.branches) {
      const loc = `${br.x},${br.y}`;
      const extra = br.type === 'continue' ? ` reply=${br.whiteReply?.color}${br.whiteReply?.x},${br.whiteReply?.y}` : '';
      const reason = br.reason ? ` "${br.reason.slice(0, 80)}"` : '';
      console.log('  '.repeat(depth) + `- ${br.type} @${loc}${extra}${reason}`);
      if (br.type === 'continue' && br.next) dump(br.next, depth + 1);
    }
  };
  console.log('ANSWER TREE:');
  dump(p.root.id, 0);
}
