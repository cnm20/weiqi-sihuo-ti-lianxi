// 审核视图：全盘初始 + 主解逐步终局（ASCII 全景，不裁剪）
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, sgfPointToXY } from './sgf.ts';
import { convertToPuzzle } from './convertSgf.ts';
import { renderBoard } from './render.ts';
import { GoBoard } from '../src/rules/goBoard.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
for (const file of process.argv.slice(2)) {
  const text = readFileSync(join(base, file), 'utf8');
  const root = parseSgf(text);
  const size = 19;
  const ab = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...sgfPointToXY(s) }));
  const aw = (root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...sgfPointToXY(s) }));
  const rep = convertToPuzzle({ file, text });
  if (!rep.ok || !rep.puzzle) {
    console.log(file, 'convert fail');
    continue;
  }
  console.log('\n==========', file, '==========');
  const b = new GoBoard(size);
  b.setup([...ab, ...aw]);
  console.log('初始(完整19路):');
  console.log(renderBoard(b, { crop: false }));
  // 终局
  const fin = new GoBoard(size);
  fin.setup([...ab, ...aw]);
  for (const m of rep.stats.mainLine) {
    const r = fin.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') break;
  }
  console.log('终局(完整19路) 主解:', rep.stats.mainLine.map((m) => `${m.color}${m.x},${m.y}`).join(' '));
  console.log(renderBoard(fin, { crop: false }));
}
