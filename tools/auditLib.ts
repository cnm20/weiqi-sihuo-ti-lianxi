// 审题卡库函数：auditOne 的逻辑复用为返回文本（棋盘顶部朝上、数字坐标）
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseSgf, walkTree, nodeComment } from './sgf.ts';
import { GoBoard } from '../src/rules/goBoard.ts';
import { convertToPuzzle, buildAnswerIndex } from './convertSgf.ts';
import type { Stone } from '../src/domain/types.ts';

const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');

function renderTopDown(board: GoBoard): string {
  const size = board.size;
  const g: string[][] = Array.from({ length: size }, () => Array<string>(size).fill('.'));
  let minX = size, maxX = -1, minY = size, maxY = -1;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const c = board.at(x, y);
      if (c) {
        g[y][x] = c === 'B' ? 'X' : 'O';
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
    }
  }
  const pad = 1;
  const x0 = Math.max(0, minX - pad), x1 = Math.min(size - 1, maxX + pad);
  const y0 = Math.max(0, minY - pad), y1 = Math.min(size - 1, maxY + pad);
  const lines: string[] = [];
  let head = '    ';
  for (let x = x0; x <= x1; x++) head += String(x).padStart(2) + ' ';
  lines.push(head);
  for (let y = y0; y <= y1; y++) {
    let row = String(y).padStart(2) + '  ';
    for (let x = x0; x <= x1; x++) row += (g[y][x] === '.' ? ' .' : ' ' + g[y][x]);
    lines.push(row);
  }
  return lines.join('\n');
}

export function auditPuzzleText(file: string): string {
  const text = readFileSync(join(base, file), 'utf8');
  const root = parseSgf(text);
  const lines: string[] = [];
  lines.push('# 审题卡：' + file);
  const comments: string[] = [];
  walkTree(root, (n) => {
    const c = nodeComment(n).trim();
    if (c) comments.push(c.replace(/\s+/g, ' '));
  });
  lines.push('\n## 全部注释\n');
  for (const c of comments.slice(0, 100)) lines.push('- ' + c);

  const rep = convertToPuzzle({ file, text });
  if (!rep.ok || !rep.puzzle) {
    lines.push('\n转换失败：' + rep.warnings.join(';'));
    return lines.join('\n');
  }
  const p = rep.puzzle!;
  const initial = (root.props['AB'] ?? []).map((s) => ({ color: 'B' as const, ...xy(s) })).concat((root.props['AW'] ?? []).map((s) => ({ color: 'W' as const, ...xy(s) })));
  lines.push(`\n## 用户执子：${p.userColor === 'B' ? '黑' : '白'}\n`);
  const b = new GoBoard(p.size);
  b.setup(initial as Stone[]);
  lines.push('### 初始局面（顶部朝上，数字坐标）\n');
  lines.push(renderTopDown(b));
  lines.push('\n### 主变化\n');
  lines.push(rep.stats.mainLine.map((m) => `${m.color}(${m.x},${m.y})`).join(' '));
  const fin = new GoBoard(p.size);
  fin.setup(initial as Stone[]);
  for (const m of rep.stats.mainLine) {
    const r = fin.tryMove(m.color, m.x, m.y);
    if (r.status !== 'ok') break;
  }
  lines.push('\n### 终局（主变化后）\n');
  lines.push(renderTopDown(fin));
  const idx = buildAnswerIndex(p.solutionNodes);
  lines.push('\n### 答案树\n');
  const dump = (id: string, d: number) => {
    const n = idx.get(id);
    if (!n) return;
    for (const br of n.branches) {
      const r = br.reason ? ' 「' + br.reason.slice(0, 70) + '」' : '';
      lines.push('  '.repeat(d) + `- ${br.type} @${br.x},${br.y}${r}`);
      if (br.type === 'continue' && br.next) dump(br.next, d + 1);
    }
  };
  dump(p.root.id, 0);
  lines.push('\n### 审核填写\n');
  lines.push('goal(live/kill):\ngoalTextCN:\nkeyPointCN:\ntitleCN:\nconfirmedWrong(典型错误坐标):\nnotes:');
  return lines.join('\n');
}

function xy(s: string): { x: number; y: number } {
  return { x: s.charCodeAt(0) - 97, y: s.charCodeAt(1) - 97 };
}
