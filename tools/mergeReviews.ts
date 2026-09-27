// 逐题审核：读取审题卡信息并由审核记录(JSON)覆盖 puzzle 元数据。
// 审核记录结构: _tools/registry/review-records.json
// {
//   "easy/ggg-easy-01.sgf": {
//     "goal": "kill"|"live",            // 做题目标（黑做活 or 黑杀白等）
//     "goalTextCN": "黑先，吃掉右上的白棋",
//     "keyPointCN": "先于 A 位紧气，防止白棋连接",
//     "titleCN": "紧气吃白",
//     "targetDescCN": "目标：右上白棋",
//     "confirmedWrong": [["17,16"],["13,18"]...],  // 已确认的典型错误（坐标）
//     "notes": "…"
//   }
// }
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Puzzle } from '../src/domain/types.ts';

const candDir = join(process.cwd(), '_tools/candidates');
const recFile = join(candDir, 'review-records.json');
const poolFile = join(candDir, 'puzzles.json');

const records: Record<string, unknown> = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};
const puzzles = JSON.parse(readFileSync(poolFile, 'utf8')) as Puzzle[];

// ---- 用审题记录重写 puzzle（标题/目标/要点/reviewStatus），并保留失败分支确认 ----
export function applyRecords(p: Puzzle): Puzzle {
  const rec = (records as Record<string, Record<string, unknown>>)[p.source.ref];
  if (!rec) return p;
  const out: Puzzle = { ...p };
  if (rec.titleCN) out.title = rec.titleCN as string;
  if (rec.goalTextCN) out.goalText = rec.goalTextCN as string;
  if (rec.keyPointCN) out.instruction = (rec.keyPointCN as string) + (out.instruction ? ` ${out.instruction}` : '');
  if (rec.goal) out.goal = rec.goal as 'live' | 'kill';
  out.reviewStatus = 'reviewed';
  out.source = { ...p.source, adapted: `已逐题审核：${(rec.notes as string) ?? ''}` };
  // 目标棋群说明（若给坐标则标记）
  if (rec.targetCoords) {
    out.targetGroup = (rec.targetCoords as string[]).map((c) => {
      const [x, y] = c.split(',').map(Number);
      return { x, y };
    });
  }
  return out;
}

export function getRecords(): Record<string, unknown> {
  return records;
}

export function ensureOutDir(p: string): void {
  const d = p.slice(0, Math.max(p.lastIndexOf('/'), p.lastIndexOf('\\')));
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

// CLI：合并后输出到 src/data/puzzles.generated.ts
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`) {
  const merged = puzzles.map(applyRecords);
  const ts = `// 自动生成：tools/mergeReviews.ts —— 请勿手改
import type { Puzzle } from '../domain/types';
export const puzzles: Puzzle[] = ${JSON.stringify(merged, null, 1)} as Puzzle[];
`;
  const target = join(process.cwd(), 'src', 'data', 'puzzles.generated.ts');
  ensureOutDir(target);
  writeFileSync(target, ts, 'utf8');
  const reviewed = merged.filter((p) => p.reviewStatus === 'reviewed').length;
  console.log(`merged=${merged.length} reviewed=${reviewed} needsReview=${merged.length - reviewed}`);
}
