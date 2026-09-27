// 目标判读辅助：基于谱面注释给建议（供人工确认，非最终判定）
// node tools/suggestGoal.ts easy/ggg-easy-01.sgf ...
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, walkTree, nodeComment } from './sgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

const BLACK_LIVE = /(black\s+(lives|is alive|can live|makes life|has life)|black's alive|black is alive|makes two eyes|make two eyes)/i;
const WHITE_DEAD = /(white\s+(is dead|dies|died|is captured|can't live|cannot live|is killed)|white's dead|kills white|black kills|dead shape|unconditional)/i;
const CAPTURE_WHITE = /(capture white|capturing white|capture the white|capture.*stones|white.*(is dead|dies|dead))/i;
const WHITE_LIVE = /(white\s+(lives|is alive|can live|makes life)|white's alive|white is alive)/i;
const BLACK_DEAD = /(black\s+(is dead|dies|died|can't live|cannot live|is killed|captured in)|black's dead|black is dead)/i;
const KO_ONLY = /(ko|劫)/i;

function classify(comments: string[]): { goal: 'live' | 'kill'; reason: string } | { goal: 'unknown'; reason: string } {
  const all = comments.join(' ');
  if (WHITE_DEAD.test(all) || CAPTURE_WHITE.test(all) || (/(kill|captur|dies|dead)/i.test(all) && !BLACK_LIVE.test(all) && !WHITE_LIVE.test(all))) {
    return { goal: 'kill', reason: all.slice(0, 200) };
  }
  if (BLACK_LIVE.test(all)) {
    return { goal: 'live', reason: all.slice(0, 200) };
  }
  if (WHITE_LIVE.test(all) && !KO_ONLY.test(all)) {
    // 白活出现在讲解中，通常表示黑杀白失败分支；需要进一步看
    return { goal: 'unknown', reason: 'white-live 提示（可能是黑杀白题的失败分支说明）: ' + all.slice(0, 200) };
  }
  if (BLACK_DEAD.test(all)) {
    return { goal: 'live', reason: 'black-dead 提示（黑棋被围需做活）: ' + all.slice(0, 200) };
  }
  return { goal: 'unknown', reason: '无明显目标词: ' + all.slice(0, 200) };
}

for (const file of process.argv.slice(2)) {
  const text = readFileSync(join(base, file), 'utf8');
  const root = parseSgf(text);
  const comments: string[] = [];
  walkTree(root, (n) => {
    const c = nodeComment(n).trim();
    if (c) comments.push(c.replace(/\s+/g, ' '));
  });
  const c = classify(comments);
  console.log(file, '=> goal:', c.goal, '| 依据:', c.reason.slice(0, 180));
}
