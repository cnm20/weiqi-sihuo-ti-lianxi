// 打印一题的根部标记（TR/LB/SQ/CR/MA）与根注释、首层注释，便于判定目标棋筋
// node tools/rootMarks.ts easy/ggg-easy-01.sgf
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf } from './sgf.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const file = process.argv[2];
if (!file) { console.error('usage: node tools/rootMarks.ts <file>'); process.exit(1); }
const text = readFileSync(join(base, file), 'utf8');
const root = parseSgf(text);
const name = (k: string) => ({ TR: 'TR(三角)', LB: 'LB(字母)', SQ: 'SQ(方块)', CR: 'CR(圆圈)', MA: 'MA(X)', DD: 'DD(点)' } as Record<string, string>)[k] ?? k;
for (const k of Object.keys(root.props)) {
  if (k === 'AB' || k === 'AW') continue;
  if (/^[A-Z]{2}$/.test(k)) {
    console.log(`ROOT ${name(k)}:`, root.props[k].join(' '));
  }
}
console.log('ROOT C:', (root.props['C']?.[0] ?? '').replace(/\s+/g, ' ').slice(0, 300));
// also first non-root node comments with their move
function show(node: any, depth: number, max: number) {
  if (depth > max) return;
  const mv = node.props['B']?.[0] ?? node.props['W']?.[0];
  const c = node.props['C']?.[0];
  if (mv || c) console.log('  '.repeat(depth) + `${node.props['B'] ? 'B' : node.props['W'] ? 'W' : '?'}[${mv ?? ''}] C: ${(c ?? '').replace(/\s+/g, ' ').slice(0, 220)}`);
  const kids = node.children ?? [];
  for (const k of kids) show(k, depth + 1, max);
}
console.log('--- first 3 plies with comments ---');
show(root, 0, 3);
