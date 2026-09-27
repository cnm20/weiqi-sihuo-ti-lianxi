// 给 src 内相对导入补 .ts 扩展名，使 Node 原生 TS 可直接运行
import { readFileSync, writeFileSync } from 'node:fs';

const files = [
  'src/rules/goBoard.ts',
  'src/rules/goBoard.test.ts',
  'src/judge/judge.ts',
  'src/judge/e2e-judge.test.ts',
  'src/timer/clock.ts',
  'src/timer/clock.test.ts',
  'src/timer/foreground.ts',
  'src/storage/storage.ts',
  'src/data/puzzles.ts',
  'src/domain/levels.ts',
];

for (const f of files) {
  if (!readFileSafe(f)) continue;
  let s = readFileSync(f, 'utf8');
  const orig = s;
  s = s.replace(/from\s+(['"])(\.\.?\/[^'"]+?)(['"])/g, (_m, q, p, q2) => {
    if (p.endsWith('.ts') || p.endsWith('.json')) return _m;
    return `from ${q}${p}.ts${q2}`;
  });
  if (s !== orig) {
    writeFileSync(f, s);
    console.log('patched', f);
  }
}

function readFileSafe(f: string): boolean {
  try {
    readFileSync(f, 'utf8');
    return true;
  } catch {
    return false;
  }
}
