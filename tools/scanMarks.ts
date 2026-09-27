// 扫描根节点标记（TR/LB/CR/SQ/MA/DD）落在哪方棋子上 → 客观目标棋筋证据
// node tools/scanMarks.ts easy
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const dir = process.argv[2] ?? 'easy';
const files = readdirSync(join(base, dir)).filter((f) => f.endsWith('.sgf')).sort();
let withMarks = 0;
for (const f of files) {
  const t = readFileSync(join(base, dir, f), 'utf8');
  // 根段：到第一个分号子节点前
  const rootSeg = t.slice(0, t.indexOf('(;'));
  const AB = new Set([...rootSeg.matchAll(/AB\[([a-s]{2})\]/g)].map((m) => m[1]));
  const AW = new Set([...rootSeg.matchAll(/AW\[([a-s]{2})\]/g)].map((m) => m[1]));
  // 注意 AB/AW 形如 AB[pq][rq]：要解析序列
  const parseProp = (k: string): string[] => {
    const out: string[] = [];
    const re = new RegExp(`\\b${k}\\[`, 'g');
    let m: RegExpExecArray | null;
    while ((m = re.exec(rootSeg))) {
      let i = m.index + m[0].length;
      while (i < rootSeg.length && rootSeg[i] === '[') {
        const j = rootSeg.indexOf(']', i);
        if (j < 0) break;
        const v = rootSeg.slice(i + 1, j);
        if (/^[a-s]{2}$/.test(v)) out.push(v);
        i = j + 1;
      }
    }
    return out;
  };
  const ab = new Set(parseProp('AB'));
  const aw = new Set(parseProp('AW'));
  const marks: { kind: string; on: 'B' | 'W' | 'empty'; pt: string }[] = [];
  for (const kind of ['TR', 'LB', 'CR', 'SQ', 'MA', 'DD']) {
    for (const v of parseProp(kind)) {
      if (v.length === 2 && /^[a-s]{2}$/.test(v)) {
        const on = ab.has(v) ? 'B' : aw.has(v) ? 'W' : 'empty';
        marks.push({ kind, on, pt: v });
      }
    }
  }
  if (marks.length) {
    withMarks++;
    const summ = marks
      .filter((m) => m.kind !== 'DD' && m.on !== 'empty')
      .map((m) => `${m.kind}@${m.on}`)
      .join(',');
    const counts: Record<string, number> = {};
    for (const m of marks) counts[`${m.kind}:${m.on}`] = (counts[`${m.kind}:${m.on}`] ?? 0) + 1;
    const c = [...Object.entries(counts)].map(([k, v]) => `${k}x${v}`).join(' ');
    console.log(`${dir}/${f}  marks: ${c}${summ ? '  → ' + summ : ''}`);
  }
}
console.log(`${dir}: ${withMarks}/${files.length} have root marks`);
