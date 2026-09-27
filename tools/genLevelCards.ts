// 生成 9级 档审题卡目录（供逐题审核）
// node tools/genLevelCards.ts
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { LEVEL9_CANDIDATES } from '../_tools/registry/level9.candidates.ts';
import { auditPuzzleText } from './auditLib.ts';

const outDir = join(process.cwd(), '_tools/cards/level9');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
for (const f of LEVEL9_CANDIDATES) {
  const text = auditPuzzleText(f);
  const name = f.split('/').pop()!.replace('.sgf', '') + '.md';
  writeFileSync(join(outDir, name), text, 'utf8');
}
console.log('generated', LEVEL9_CANDIDATES.length, 'cards in', outDir);
