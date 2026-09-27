// 题库最终生成器（审核驱动）：
// 读取候选池 + 人工审核记录(review-records.json)，生成正式题库 TS。
// 规则：只有 reviewStatus=reviewed 的题目才进入正式题库；
//       其余保持 needs-review，不计入“题库完成”。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Puzzle } from '../src/domain/types.ts';

const candDir = join(process.cwd(), '_tools/candidates');
const recFile = join(candDir, 'review-records.json');
const puzzles = JSON.parse(readFileSync(join(candDir, 'puzzles.json'), 'utf8')) as Puzzle[];
const records: Record<string, Record<string, unknown>> = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};

function applyRecords(p: Puzzle): Puzzle | null {
  const rec = records[p.source.ref];
  // 只有“reviewed 且已发布（published:true）”的题进入正式题库
  if (!rec || rec.reviewStatus !== 'reviewed' || rec.published !== true) return null;
  const out: Puzzle = { ...p };
  out.title = (rec.titleCN as string) || p.title || '';
  out.goalText = (rec.goalTextCN as string) || p.goalText || '';
  out.instruction = (rec.keyPointCN as string) || p.instruction || '';
  if (rec.goal === 'live' || rec.goal === 'kill') out.goal = rec.goal;
  out.reviewStatus = 'reviewed';
  out.levelIndex = Number(rec.levelIndex) >= 0 ? Number(rec.levelIndex) : p.levelIndex;
  out.orderInLevel = Number(rec.orderInLevel) >= 1 ? Number(rec.orderInLevel) : p.orderInLevel;
  // 正式题库需要稳定唯一 id（候选转换阶段 id 为空）
  if (!out.id) {
    const keys = ['9k', '8k', '7k', '6k', '5k', '4k', '3k', '2k', '1k', '1d'];
    const key = keys[out.levelIndex] ?? `lv${out.levelIndex}`;
    out.id = `${key}-${String(out.orderInLevel).padStart(2, '0')}`;
  }
  out.source = {
    ...p.source,
    adapted: (rec.adapted as string) ?? `已逐题审核${rec.reviewedAt ? `（${rec.reviewedAt}）` : ''}`,
  };
  if (Array.isArray(rec.targetCoords)) {
    out.targetGroup = (rec.targetCoords as string[]).map((c) => {
      const [x, y] = c.split(',').map(Number);
      return { x, y };
    });
  }
  return out;
}

const merged: Puzzle[] = [];
for (const p of puzzles) {
  const r = applyRecords(p);
  if (r) merged.push(r);
}
merged.sort((a, b) => a.levelIndex - b.levelIndex || a.orderInLevel - b.orderInLevel);

const ts = `// 自动生成：tools/buildFinalPuzzles.ts（审核驱动）—— 请勿手改
import type { Puzzle } from '../domain/types';
export const puzzles: Puzzle[] = ${JSON.stringify(merged, null, 1)} as Puzzle[];
`;
const target = join(process.cwd(), 'src', 'data', 'puzzles.generated.ts');
const dir = target.slice(0, Math.max(target.lastIndexOf('/'), target.lastIndexOf('\\')));
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
writeFileSync(target, ts, 'utf8');

const byLevel = new Array(10).fill(0) as number[];
for (const p of merged) byLevel[p.levelIndex]++;
console.log(`reviewed in 正式题库: ${merged.length}`);
console.log('byLevel:', byLevel.join(','));
