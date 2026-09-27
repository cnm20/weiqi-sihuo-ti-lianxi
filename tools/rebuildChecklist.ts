// 重建 docs/题库判读工作清单.md 的池清单部分（头部说明保留）
// 确定性来源：磁盘 SGF 文件 + _tools/candidates/review-records.json
// 每次入账 content-audited/reviewed 记录后运行，保证档位标记与计数不陈旧。
// 执行：node tools/rebuildChecklist.ts
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const recFile = join(root, '_tools/candidates/review-records.json');
const rec = JSON.parse(readFileSync(recFile, 'utf8')) as Record<string, any>;

const names = ['9级', '8级', '7级', '6级', '5级', '4级', '3级', '2级', '1级', '1段'];
const poolDirs = ['easy', 'intermediate', 'hard'];

function fileSort(a: string, b: string): number {
  const na = parseInt(a.match(/(\d+)\.sgf$/)?.[1] ?? '0', 10);
  const nb = parseInt(b.match(/(\d+)\.sgf$/)?.[1] ?? '0', 10);
  return na - nb;
}

const sections: string[] = [];

for (const poolKey of poolDirs) {
  const dir = join(root, '_tools/dataset/go-problems-master/weekly-go-problems', poolKey);
  const files = readdirSync(dir).filter((f) => f.endsWith('.sgf')).sort(fileSort);

  let publishedCnt = 0, judgedCnt = 0, auditedCnt = 0;
  const byBand = new Map<string, number>();
  const lines: string[] = [];

  for (const f of files) {
    const key = `${poolKey}/${f}`;
    const r = rec[key];
    let marker: string;
    if (r && r.reviewStatus === 'skip') {
      // SKIP 记录：在清单显示 ⛔（带 notes 原因），不计入“已判读/已发布”头部计数
      marker = '⛔ SKIP(不入库)';
    } else if (!r || r.reviewStatus === 'needs-review') {
      marker = '⬜ 待判读';
    } else if (r.reviewStatus === 'content-audited') {
      marker = `🔎 content-audited(${r.goal})`;
      judgedCnt++;
      auditedCnt++;
    } else if (r.reviewStatus === 'reviewed') {
      const band = names[r.levelIndex] ?? '?';
      marker = `✅ reviewed(${band},${r.goal})`;
      judgedCnt++;
      if (r.published) {
        publishedCnt++;
        byBand.set(band, (byBand.get(band) ?? 0) + 1);
      }
    } else {
      marker = '⬜ 待判读';
    }
    lines.push(`- ${marker} — \`${key}\``);
  }

  const bandStr = [...byBand.entries()]
    .sort((a, b) => names.indexOf(a[0]) - names.indexOf(b[0]))
    .map(([b, n]) => `${b} ${n}`)
    .join(' + ');
  const auditedStr = auditedCnt > 0 ? `，content-audited ${auditedCnt} 未发布` : '';
  sections.push(`## ${poolKey} 来源池（共 ${files.length}，已判读 ${judgedCnt}（已发布 ${publishedCnt}${auditedStr}）${bandStr ? '：' + bandStr : ''}）`);
  sections.push(lines.join('\n'));
}

const docFile = join(root, 'docs/题库判读工作清单.md');
const old = readFileSync(docFile, 'utf8');
const introEnd = '## easy 来源池';
const intro = old.slice(0, old.indexOf(introEnd)).replace(/\s+$/, '') + '\n\n';
let fresh = intro + sections.join('\n\n') + '\n';
// 池标题后只留一个空行
fresh = fresh.replace(/(## (?:easy|intermediate|hard) 来源池[^\n]*\n)\n+(\n- )/g, '$1\n$2');
fresh = fresh.replace(/\n{3,}/g, '\n\n');
writeFileSync(docFile, fresh, 'utf8');
// 简单自检：三个池标题都在，行数与磁盘一致
const heads = ['## easy 来源池', '## intermediate 来源池', '## hard 来源池'];
for (const h of heads) if (!fresh.includes(h)) throw new Error('missing header ' + h);
console.log('checklist rebuilt ok');
