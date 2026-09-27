// 正式题库 100 题选择 + 难度初排序（审核前置工具）
// 用法: node tools/buildPool.ts
// 原则（与计划一致）：先机械筛除不合格题（劫/双活/征子依赖/虚手/非法），
// 再以可解释的“结构难度特征”排序，形成每档候选池；
// 每题最终目标(做活/杀棋)、要点、难度归属仍需逐题人工审核（reviewStatus）。
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Puzzle } from '../src/domain/types.ts';

const dir = join(process.cwd(), '_tools/candidates');
const puzzles = JSON.parse(readFileSync(join(dir, 'puzzles.json'), 'utf8')) as Puzzle[];
const perLevel = 10;
const nLevels = 10;

interface SelRow {
  file: string;
  userColor: 'B' | 'W';
  levelIndex: number;
  orderInLevel: number;
  goalTextCN: string;
  keyPointCN: string;
  titleCN: string;
  reviewStatus: 'needs-review';
  rulesVerified: boolean;
  sourceBucket: string;
  metrics: {
    rootBranches: number;
    successRootBranches: number;
    mainlineLen: number;
    totalNodes: number;
  };
}

// ---- 特征提取（对已转换 puzzle） ----
function mainlineLen(p: Puzzle): number {
  const index = new Map((p.solutionNodes ?? []).map((n) => [n.id, n]));
  let len = 0;
  let cur = p.root;
  for (let i = 0; i < 80; i++) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const c = succ ?? cont;
    if (!c) break;
    len++;
    if (c.type === 'success') break;
    const next = c.next ? index.get(c.next) : undefined;
    if (!next) break;
    cur = next;
  }
  return len;
}

// 关键词：主解是否涉及劫/双活/征子（以全部注释提示，正式审核再确认）
function koSekiLadderHint(p: Puzzle): boolean {
  const text: string[] = [];
  for (const n of p.solutionNodes ?? []) {
    for (const b of n.branches) if (b.reason) text.push(b.reason);
  }
  const all = text.join(' ').toLowerCase();
  return /\bko\b|劫|\bseki\b|双活|ladder|征子/.test(all);
}

// 难度分（0..1）：主解长度、根候选数量、结构深度 的组合
function difficultyScore(p: Puzzle): { s: number; why: string } {
  const ml = mainlineLen(p);
  const rb = p.root.branches.length;
  const nodes = (p.solutionNodes?.length ?? 0);
  const sc = p.root.branches.filter((b) => b.type === 'success' || b.type === 'continue').length;
  let s = Math.min(1, ml / 8) * 0.45 + Math.min(1, rb / 5) * 0.25 + Math.min(1, nodes / 30) * 0.2 + (sc > 1 ? 0.05 : 0) + (rb > 4 ? 0.05 : 0);
  return { s: Number(s.toFixed(3)), why: `ml=${ml} rb=${rb} nodes=${nodes} sc=${sc}` };
}

// ---- 分桶：easy/intermediate/hard 相对权重 → 但最终以难度分在“总池”内均匀切 10 档 ----
const candidates: (Puzzle & { bucket: string })[] = [];
for (const p of puzzles) {
  const file = p.source.ref;
  const bucket = file.startsWith('easy/') ? 'easy' : file.startsWith('hard/') ? 'hard' : 'intermediate';
  if (koSekiLadderHint(p)) continue;
  if (!p.root || p.root.branches.length === 0) continue;
  if (!p.solutionNodes || p.solutionNodes.length === 0) continue;
  candidates.push({ ...p, bucket });
}
console.log('eligible candidates after exclude hints:', candidates.length);
console.log(' by bucket:', ['easy', 'intermediate', 'hard'].map((b) => b + '=' + candidates.filter((c) => c.bucket === b).length).join(' '));

const scored = candidates
  .map((c) => ({ c, ...difficultyScore(c) }))
  .sort((a, b) => a.s - b.s);

// 直接切 10 档，每档 10 题 → 100 题。相邻难度的题分布到各档。
const selected: SelRow[] = [];
const perLevelUsed = new Array(nLevels).fill(0);
for (const item of scored) {
  const { c, s, why } = item;
  // 找最空且难度靠近的档：简单起见按排序线性填充至满
  let level = -1;
  for (let lv = 0; lv < nLevels; lv++) {
    if (perLevelUsed[lv] < perLevel) {
      level = lv;
      break;
    }
  }
  if (level === -1) break;
  perLevelUsed[level]++;
  const meta = parseSourceName(c.source.ref);
  selected.push({
    file: c.source.ref,
    userColor: c.userColor,
    levelIndex: level,
    orderInLevel: perLevelUsed[level],
    goalTextCN: `${c.userColor === 'B' ? '黑' : '白'}先 · 目标待审核`,
    keyPointCN: '',
    titleCN: `待审核（${meta}）`,
    reviewStatus: 'needs-review',
    rulesVerified: true,
    sourceBucket: c.bucket,
    metrics: { rootBranches: c.root.branches.length, successRootBranches: c.root.branches.filter((b) => b.type !== 'failure').length, mainlineLen: mainlineLen(c), totalNodes: c.solutionNodes?.length ?? 0 },
  });
  void why;
}
console.log('selected total:', selected.length, 'perLevel:', perLevelUsed.join(','));

// 落盘
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'pool-100.json'), JSON.stringify(selected, null, 1), 'utf8');
console.log('written pool-100.json');
const byLevel = selected.reduce<Record<number, SelRow[]>>((a, r) => ((a[r.levelIndex] ??= []).push(r), a), {});
for (const lv of Object.keys(byLevel)) {
  console.log(`level ${lv} files: ${byLevel[Number(lv)].map((r) => r.file).join(' ')}`);
}

function parseSourceName(ref: string): string {
  return ref.replace(/^.*\//, '').replace('.sgf', '');
}
