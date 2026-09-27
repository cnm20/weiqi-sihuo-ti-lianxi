// 判读记录证据闸门（防虚标辅助）：检查每条记录是否有客观机器证据支撑 goal 标签
// 证据：根注释 / 成功叶注释 / 失败叶注释（只作“是否提到相关语义”的弱检查）
// 结论：PASS = 有支持证据；WARN = 缺机器可查证据（须人工/逐题阅读确认，可能保持 needs-review）
// 说明：不做语言级反证判词（“White can't make two eyes”与“Black”同句易误报），
//       正反语义由逐题阅读把关；本工具只查“是否无任何机器证据”。
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, nodeComment } from './sgf.ts';
import { convertToPuzzle, buildAnswerIndex } from './convertSgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import type { Player } from '../src/domain/types.ts';

const candDir = join(process.cwd(), '_tools/candidates');
const records = JSON.parse(readFileSync(join(candDir, 'review-records.json'), 'utf8')) as Record<string, { goal?: string; reviewStatus?: string }>;
const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

const KILL_HINT =
  /white.{0,70}?(dead|dies|is dead|captured|killed|can'?t make two eyes|cannot make two eyes|one eye and one false eye)|capture|kill|capturing race|提白|吃白|杀白|white.{0,40}?(only has|has only) (two|2) liberties/i;
const LIVE_HINT =
  /black.{0,70}?(lives|living|is alive|alive in|can live|two eyes|2 eyes|makes life|makes two eyes)|black'?s alive|black lives|black is alive|做活|两眼/i;
// 失败分支方向语义（F: 前缀文本）：黑杀白失败 ⇒ 目标是杀白；黑做活失败 ⇒ 目标是黑做活
const killFail = /^F:.*white.{0,80}?(already alive|alive in seki|lives|is alive)/i;
const liveFail = /^F:.*(black.{0,80}?(can'?t|cannot|can not) make two eyes|black.{0,60}?(will be captured|is captured|should be captured|dies|is dead|group.{0,30}?captured|group.{0,30}?dead))/i;

interface Row { file: string; goal?: string; hints: string[]; capturesB: number }

function main() {
  const rows: Row[] = [];
  for (const [file, rec] of Object.entries(records)) {
    if (rec.reviewStatus !== 'content-audited' && rec.reviewStatus !== 'reviewed') continue;
    const text = readFileSync(join(base, file), 'utf8');
    const rep = convertToPuzzle({ file, text });
    const rootC = nodeComment(parseSgf(text)).replace(/\s+/g, ' ');
    if (!rep.ok) { rows.push({ file, goal: rec.goal, hints: ['转换失败'], capturesB: -1 }); continue; }
    const p = rep.puzzle!;
    const board = new GoBoard(p.size);
    board.setup(p.initial);
    const cnt = (c: Player) => { let n = 0; for (let x = 0; x < p.size; x++) for (let y = 0; y < p.size; y++) if (board.at(x, y) === c) n++; return n; };
    let capturesB = 0;
    for (const m of rep.stats.mainLine) {
      const w0 = cnt('W');
      board.tryMove(m.color, m.x, m.y);
      if (m.color === 'B') capturesB += Math.max(0, w0 - cnt('W'));
    }
    const texts: string[] = [];
    if (rootC) texts.push('ROOT: ' + rootC);
    for (const n of p.solutionNodes ?? []) {
      for (const b of n.branches) {
        if (b.type === 'success' && b.reason) texts.push('S: ' + b.reason.replace(/\s+/g, ' '));
        if (b.type === 'failure' && b.reason && !/已记录的错误变化/.test(b.reason)) texts.push('F: ' + b.reason.replace(/\s+/g, ' '));
      }
    }
    const hints: string[] = [];
    for (const t of texts) {
      if (KILL_HINT.test(t)) hints.push('kill←' + t.slice(0, 100));
      if (LIVE_HINT.test(t)) hints.push('live←' + t.slice(0, 100));
      if (killFail.test(t)) hints.push('kill←' + t.slice(0, 100));
      if (liveFail.test(t)) hints.push('live←' + t.slice(0, 100));
    }
    // 结构证据（live）：主解终局后存在一个黑棋串邻接 >=2 个“只邻黑棋的空域”（真眼区）→ 该串已净活
    {
      const size = p.size;
      const seen = new Set<number>();
      const pureRegions: Array<{ cells: number[] }> = [];
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        if (board.at(x, y) !== null || seen.has(y * size + x)) continue;
        const q: Array<[number, number]> = [[x, y]];
        seen.add(y * size + x);
        const cells: number[] = [];
        let onlyB = true;
        while (q.length) {
          const [cx, cy] = q.pop()!;
          cells.push(cy * size + cx);
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
            const nx = cx + dx, ny = cy + dy;
            if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
            const c = board.at(nx, ny);
            if (c === null) { if (!seen.has(ny * size + nx)) { seen.add(ny * size + nx); q.push([nx, ny]); } }
            else if (c === 'W') onlyB = false;
          }
        }
        if (onlyB) pureRegions.push({ cells });
      }
      const groupEyes = new Map<string, number>();
      for (const r of pureRegions) {
        const seenG = new Set<string>();
        for (const key of r.cells) {
          const x = key % size, y = Math.floor(key / size);
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
            const nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
            if (board.at(nx, ny) === 'B') {
              const g = board.groupOf(nx, ny).map((s) => `${s.x},${s.y}`).sort().join('|');
              if (!seenG.has(g)) { seenG.add(g); groupEyes.set(g, (groupEyes.get(g) ?? 0) + 1); }
            }
          }
        }
      }
      const maxEyes = Math.max(0, ...groupEyes.values());
      if (maxEyes >= 2) hints.push(`live←结构:终局黑同一棋串有${maxEyes}个真眼区`);
    }
    rows.push({ file, goal: rec.goal, hints: [...new Set(hints)].slice(0, 6), capturesB });
  }
  let pass = 0, warn = 0, fail = 0;
  const lines: string[] = [];
  for (const r of rows) {
    if (!r.goal) { console.log(`FAIL ${r.file}: 缺 goal`); fail++; lines.push(`${r.file} FAIL 缺goal`); continue; }
    const has = r.hints.some((h) => h.startsWith(r.goal + '←')) || (r.goal === 'kill' && r.capturesB > 0);
    const verdict = has ? 'PASS' : 'WARN';
    if (verdict === 'PASS') pass++; else warn++;
    console.log(`${verdict} ${r.file} goal=${r.goal} 黑提白=${r.capturesB}`);
    r.hints.slice(0, 2).forEach((h) => console.log('    + ' + h));
    lines.push(`${r.file} ${verdict} goal=${r.goal} 黑提白=${r.capturesB}`);
  }
  console.log(`\nPASS=${pass} WARN=${warn} FAIL=${fail}（WARN 表示机器查不到目标词，须逐题阅读复核）`);
  writeFileSync(join(candDir, 'audit-validation-report.txt'), lines.join('\n') + '\n', 'utf8');
}
main();
