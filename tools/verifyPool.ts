// 逐题校验器：对候选池每题的转换结果做结构完整性检查
// 验证点：
//  1) solutionNodes 自洽：每个 continue.next 都能解析到节点
//  2) 主解每步在规则引擎下合法（含提子、交替）
//  3) 每个 success/failure/continue 分类的一致性（mainline 可达 success）
//  4) 未收录策略默认 neutral
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Puzzle } from '../src/domain/types.ts';
import { replayBoard } from '../src/rules/goBoard.ts';

const dir = join(process.cwd(), '_tools/candidates');
const puzzles = JSON.parse(readFileSync(join(dir, 'puzzles.json'), 'utf8')) as Puzzle[];

interface Verdict {
  file: string;
  ok: boolean;
  errors: string[];
  mainlineLen: number;
  successReachable: boolean;
  /** 冲突：全树存在 success 叶，但某用户轮节点没有任何可达 success 的分支 */
  hasDeadRoot: boolean;
  /** 无 success 叶 */
  noSuccessLeaf: boolean;
}

function verify(p: Puzzle): Verdict {
  const errors: string[] = [];
  const index = new Map<string, Puzzle['root']>();
  for (const n of p.solutionNodes ?? []) index.set(n.id, n);
  // 1) next 解析
  const stack: Puzzle['root'][] = [p.root];
  const seen = new Set<string>();
  while (stack.length) {
    const n = stack.pop()!;
    if (seen.has(n.id)) continue;
    seen.add(n.id);
    for (const b of n.branches) {
      if (b.type === 'continue') {
        if (!b.next || !index.has(b.next)) errors.push(`continue 缺 next: ${b.x},${b.y}`);
        else stack.push(index.get(b.next)!);
      }
    }
  }
  // 主解合法性
  const line: { color: 'B' | 'W'; x: number; y: number }[] = [];
  let cur = p.root;
  let guard = 0;
  let successReachable = false;
  while (guard++ < 80) {
    const succ = cur.branches.find((b) => b.type === 'success');
    const cont = cur.branches.find((b) => b.type === 'continue');
    const c = succ ?? cont;
    if (!c) break;
    line.push({ color: p.userColor, x: c.x, y: c.y });
    if (c.type === 'success') {
      successReachable = true;
      break;
    }
    if (!c.whiteReply) {
      errors.push('continue 缺 whiteReply');
      break;
    }
    line.push({ ...c.whiteReply });
    const nx = c.next ? index.get(c.next) : undefined;
    if (!nx) {
      errors.push('continue 缺 next 节点');
      break;
    }
    cur = nx;
  }
  if (!successReachable) errors.push('主解未到达 success 终点');
  try {
    replayBoard(p.size, p.initial, line);
  } catch (e) {
    errors.push('主解重放失败: ' + (e as Error).message);
  }
  // 全树是否存在 success 分支
  let anySuccess = false;
  const scan: Puzzle['root'][] = [p.root];
  while (scan.length) {
    const n = scan.pop()!;
    for (const b of n.branches) {
      if (b.type === 'success') anySuccess = true;
      if (b.type === 'continue' && b.next) {
        const nn = index.get(b.next);
        if (nn) scan.push(nn);
      }
    }
  }
  const hasDeadRoot = anySuccess && p.root.branches.length > 0 && p.root.branches.every((b) => b.type !== 'success' && b.type !== 'continue');
  return { file: p.source.ref, ok: errors.length === 0, errors, mainlineLen: line.length, successReachable, hasDeadRoot, noSuccessLeaf: !anySuccess };
}

const verdicts = puzzles.map(verify);
const bad = verdicts.filter((v) => !v.ok);
console.log(`total=${verdicts.length} ok=${verdicts.length - bad.length} bad=${bad.length}`);
for (const v of bad.slice(0, 25)) {
  console.log(`  BAD ${v.file}: ${v.errors.slice(0, 3).join('; ')}`);
}

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'verdicts.json'), JSON.stringify(verdicts, null, 1), 'utf8');
console.log('written verdicts.json');
