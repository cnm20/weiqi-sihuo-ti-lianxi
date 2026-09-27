// 统计转换器 success 判定的潜在误标：
// 对每个叶节点（用户手），比较 现判成功 与 注释含 Correct 的情况。
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeMove, nodeComment } from './sgf.ts';
import { parseToSNode, minimaxOutcome, looksLikeSuccess } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Stone } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const dir = process.argv[2] ?? 'easy';
const files = readdirSync(join(base, dir)).filter((f) => f.endsWith('.sgf')).sort();

let leafUser = 0, successMarked = 0, successWithCorrect = 0, successWithoutCorrect = 0, successOppAlive = 0;
const suspect: { f: string; mv: string; c: string }[] = [];
for (const f of files) {
  const text = readFileSync(join(base, dir, f), 'utf8');
  const rootSgf = parseSgf(text);
  const size = Number.parseInt(rootSgf.props['SZ']?.[0] ?? '19', 10) || 19;
  const initial: Stone[] = [
    ...(rootSgf.props['AB'] ?? []).map((s) => ({ color: 'B' as const, x: s.charCodeAt(0) - 97, y: s.charCodeAt(1) - 97 })),
    ...(rootSgf.props['AW'] ?? []).map((s) => ({ color: 'W' as const, x: s.charCodeAt(0) - 97, y: s.charCodeAt(1) - 97 })),
  ];
  const board = new GoBoard(size);
  board.setup(initial);
  const { root } = parseToSNode(rootSgf, initial);
  const userColor: 'B' | 'W' = /White to play/i.test(nodeComment(rootSgf)) ? 'W' : 'B';
  const { outcome } = minimaxOutcome(root, userColor);
  // collect success-marked user leaves
  (function dfs(n: typeof root) {
    if (n.children.length === 0 && n.mv && n.mv.color === userColor) {
      leafUser++;
      if (outcome.get(n) === 'success' || n.successMark) {
        successMarked++;
        const hasCorrect = /Correct/i.test(n.comment);
        if (hasCorrect) successWithCorrect++;
        else {
          successWithoutCorrect++;
          if (/(white|black)\s*(is|'s|already).*(alive|lives)/i.test(n.comment)) {
            successOppAlive++;
            suspect.push({ f, mv: `${n.mv.color}(${n.mv.x},${n.mv.y})`, c: n.comment.replace(/\s+/g, ' ').slice(0, 90) });
          }
        }
      }
    }
    n.children.forEach((c) => dfs(c));
  })(root);
}
console.log(`${dir}: 用户叶=${leafUser} 判成功=${successMarked} 其中含Correct=${successWithCorrect} 不含Correct=${successWithoutCorrect} 其中“对手已活”→误标风险=${successOppAlive}`);
suspect.slice(0, 30).forEach((s) => console.log('  ', s.f, s.mv, '|', s.c));
