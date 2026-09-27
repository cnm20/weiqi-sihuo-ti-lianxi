// 批量转换：候选输出 + 审核工作清单
// node tools/buildCandidates.ts
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle, type ConvertReport } from './convertSgf.ts';
import type { Puzzle } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const outDir = join(process.cwd(), '_tools/candidates');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

interface Row {
  file: string;
  size: number;
  userColor: 'B' | 'W';
  successLeaves: number;
  silentLeaves: number;
  maxDepth: number;
  nodes: number;
  mainLineLen: number;
  correct1?: number;
  ok: boolean;
  warnings: string[];
}

const rows: Row[] = [];
const puzzles: Puzzle[] = [];
for (const sub of ['easy', 'intermediate', 'hard', 'other']) {
  const d = join(base, sub);
  if (!existsSync(d)) continue;
  for (const f of readdirSync(d)) {
    if (!f.endsWith('.sgf')) continue;
    const file = `${sub}/${f}`;
    const text = readFileSync(join(d, f), 'utf8');
    const rep: ConvertReport = convertToPuzzle({ file, text });
    if (rep.ok && rep.puzzle) {
      const p = rep.puzzle;
      puzzles.push(p);
      rows.push({
        file,
        size: p.size,
        userColor: p.userColor,
        successLeaves: rep.stats.successLeaves,
        silentLeaves: rep.stats.silentLeaves,
        maxDepth: rep.stats.maxDepth,
        nodes: rep.stats.nodes,
        mainLineLen: rep.stats.mainLine.length,
        ok: true,
        warnings: rep.warnings,
      });
    } else {
      rows.push({ file, size: 0, userColor: 'B', successLeaves: 0, silentLeaves: 0, maxDepth: 0, nodes: 0, mainLineLen: 0, ok: false, warnings: rep.warnings });
    }
  }
}
rows.sort((a, b) => a.file.localeCompare(b.file));
writeFileSync(join(outDir, 'candidate-index.json'), JSON.stringify(rows, null, 1), 'utf8');
writeFileSync(join(outDir, 'puzzles.json'), JSON.stringify(puzzles, null, 1), 'utf8');

console.log(`total=${rows.length} ok=${rows.filter((r) => r.ok).length}`);
console.log('bad:', rows.filter((r) => !r.ok).map((r) => r.file + ':' + r.warnings.join('|')).join('; ').slice(0, 600));
// 简单统计
const withSilent = rows.filter((r) => r.ok && r.silentLeaves > 0);
const noSilent = rows.filter((r) => r.ok && r.silentLeaves === 0);
console.log(`ok-with-silent-leaves=${withSilent.length} clean=${noSilent.length}`);
