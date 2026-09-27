// 逐题目标证据挖掘：以“成功分支注释 vs 失败分支注释 + 主解提子”为证据源
// 输出每题 goal 自动建议（kill/live/unknown）+ 证据引文，供人工审核快速复核
// node tools/mineGoalEvidence.ts [easy|intermediate|hard]
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle, collectMainLine, buildAnswerIndex } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Puzzle, Player } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const dir = process.argv[2] ?? 'easy';

interface Rec {
  file: string;
  userColor: Player;
  goalSuggest: 'kill' | 'live' | 'unknown' | 'mixed';
  evidence: string[];
  captureBlackW: number;
  mainLen: number;
}

const rows: Rec[] = [];
for (const f of readdirSync(join(base, dir)).filter((x) => x.endsWith('.sgf')).sort()) {
  const file = `${dir}/${f}`;
  const text = readFileSync(join(base, dir, f), 'utf8');
  const rep = convertToPuzzle({ file, text });
  if (!rep.ok || !rep.puzzle) continue;
  const p = rep.puzzle;
  const idx = buildAnswerIndex(p.solutionNodes, p.root);
  // 成功分支注释
  const successC: string[] = [];
  const failureC: string[] = [];
  const contC: string[] = [];
  for (const n of p.solutionNodes ?? []) {
    for (const b of n.branches) {
      if (!b.reason) continue;
      if (b.type === 'success') successC.push(b.reason);
      else if (b.type === 'failure') failureC.push(b.reason);
      else contC.push(b.reason);
    }
  }
  const u = p.userColor === 'B' ? 'Black' : 'White';
  const opp = p.userColor === 'B' ? 'White' : 'Black';
  const ev: string[] = [];
  const SUCC_SIGNS: Array<[RegExp, string]> = [
    [new RegExp(`${u}.{0,50}?(alive|lives|living|two eyes|2 eyes|safe|can live)`, 'i'), `${u} 做活/成眼`],
    [new RegExp(`${opp}.{0,60}?(dead|dies|is captured|captured|killed|can't make two eyes|cannot make two eyes|only has one eye)`, 'i'), `${opp} 被杀/不能成眼`],
    [/kill|capture/i, 'kill/capture 字眼'],
  ];
  const FAIL_SIGNS: Array<[RegExp, string]> = [
    [new RegExp(`${opp}.{0,50}?(alive|lives|living|two eyes|2 eyes|in seki|safe|can live)`, 'i'), `失败分支:${opp}活了 ⇒ 目标应为杀${opp}`],
    [new RegExp(`${u}.{0,50}?(dead|dies|is captured|captured|killed|can't make two eyes|cannot make two eyes)`, 'i'), `失败分支:${u}死了 ⇒ 目标应为${u}做活`],
  ];
  let killEv = false, liveEv = false;
  for (const c of successC) {
    for (const [re, label] of SUCC_SIGNS) if (re.test(c)) { ev.push(`成功[${label}]: ${c.slice(0, 110)}`); if (label.includes(opp) || /kill|capture/i.test(label)) killEv = true; else liveEv = true; }
  }
  for (const c of failureC) {
    for (const [re, label] of FAIL_SIGNS) if (re.test(c)) { ev.push(`失败[${label}]: ${c.slice(0, 110)}`); if (label.includes('杀')) killEv = true; else liveEv = true; }
  }
  // 主解提子事实
  let captureBlackW = 0;
  {
    const board = new GoBoard(p.size);
    board.setup(p.initial);
    const cnt = (c: Player) => { let n = 0; for (let x = 0; x < p.size; x++) for (let y = 0; y < p.size; y++) if (board.at(x, y) === c) n++; return n; };
    for (const m of rep.stats.mainLine) {
      const w0 = cnt('W');
      board.tryMove(m.color, m.x, m.y);
      if (m.color === 'B' && cnt('W') < w0) captureBlackW += w0 - cnt('W');
    }
  }
  const goalSuggest: Rec['goalSuggest'] = killEv && liveEv ? 'mixed' : killEv ? 'kill' : liveEv ? 'live' : 'unknown';
  rows.push({ file, userColor: p.userColor, goalSuggest, evidence: ev.slice(0, 6), captureBlackW, mainLen: rep.stats.mainLine.length });
}

writeFileSync(join(process.cwd(), '_tools/candidates', `goal-evidence-${dir}.json`), JSON.stringify(rows, null, 1), 'utf8');
const tally: Record<string, number> = {};
for (const r of rows) tally[r.goalSuggest] = (tally[r.goalSuggest] ?? 0) + 1;
console.log(dir, 'tally:', JSON.stringify(tally));
console.log('sample unknowns:');
rows.filter((r) => r.goalSuggest === 'unknown').slice(0, 12).forEach((r) => console.log('  ', r.file));
console.log('kill candidates:');
rows.filter((r) => r.goalSuggest === 'kill').slice(0, 25).forEach((r) => console.log('  ', r.file, '| capB_W=', r.captureBlackW, '|', r.evidence[0]?.slice(0, 80) ?? ''));
console.log('live candidates:');
rows.filter((r) => r.goalSuggest === 'live').slice(0, 25).forEach((r) => console.log('  ', r.file, '|', r.evidence[0]?.slice(0, 80) ?? ''));
