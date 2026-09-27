// SGF 解析工具：解析并遍历 SGF 博弈树
// 供题库导入脚本使用（Node 24 原生可运行 TypeScript）
//
// 语法要点：GameTree = "(" Sequence GameTree* ")"
// Sequence 中的连续节点 `;A;B;C` 构成链（B 是 A 的延续节点，C 是 B 的延续）；
// 该 GameTree 末尾的每个子 GameTree 作为「最后一个序列节点」的变化分支挂载。

export interface SgfNode {
  props: Record<string, string[]>;
  children: SgfNode[];
}

/** 转义还原 */
function unescape(s: string): string {
  return s.replace(/\\]/g, ']').replace(/\\\\/g, '\\');
}

/** 解析一个 SGF 文件文本，返回根节点 */
export function parseSgf(text: string): SgfNode {
  let i = 0;
  const n = text.length;

  function skipWs() {
    while (i < n && /\s/.test(text[i])) i++;
  }

  /** 解析单个 Node：以 ';' 开头，包含若干 Property */
  function parseNode(): SgfNode {
    const node: SgfNode = { props: {}, children: [] };
    if (text[i] === ';') i++;
    while (i < n) {
      skipWs();
      const ch = text[i];
      if (ch === '(' || ch === ')' || ch === ';') break;
      if (ch === undefined) break;
      let ident = '';
      while (i < n && /[A-Za-z0-9_]/.test(text[i])) {
        ident += text[i];
        i++;
      }
      if (!ident) {
        i++;
        continue;
      }
      ident = ident.toUpperCase();
      const values: string[] = [];
      skipWs();
      while (text[i] === '[') {
        i++;
        let v = '';
        while (i < n && text[i] !== ']') {
          if (text[i] === '\\' && i + 1 < n) {
            v += text[i + 1];
            i += 2;
          } else {
            v += text[i];
            i++;
          }
        }
        if (text[i] === ']') i++;
        values.push(unescape(v));
        skipWs();
      }
      node.props[ident] = values;
    }
    return node;
  }

  /**
   * 解析一个 GameTree：
   * - 读一段序列（若干 ';' 节点），按顺序链式挂接；
   * - 后续子 GameTree 全部挂到序列的最后一个节点上。
   */
  function parseGameTree(): SgfNode {
    skipWs();
    if (text[i] === '(') i++;
    // 序列（至少一个节点）
    const seq: SgfNode[] = [];
    seq.push(parseNode());
    skipWs();
    while (text[i] === ';') {
      seq.push(parseNode());
      skipWs();
    }
    // 链式：seq[k+1] 是 seq[k] 的延续节点
    for (let k = 0; k + 1 < seq.length; k++) {
      seq[k].children.push(seq[k + 1]);
    }
    const last = seq[seq.length - 1];
    // 子博弈树挂到最后节点
    while (text[i] === '(') {
      last.children.push(parseGameTree());
      skipWs();
    }
    if (text[i] === ')') i++;
    return seq[0];
  }

  skipWs();
  return parseGameTree();
}

/** 遍历树（先序），包含根。注意：连续节点链现在体现为父子关系。 */
export function walkTree(root: SgfNode, visit: (node: SgfNode, depth: number) => void): void {
  visit(root, 0);
  for (const c of root.children) walkTree(c, visit);
}

/** SGF 坐标字母 → 0 起始数字。
 * 本语料（CGoban 生成）实测：字母 i 会被使用、最大字母为 s，
 * 说明坐标约定为「不跳过 i」，a..s 直接映射 0..18（19 路棋盘）。 */
export function sgfLetterToNum(ch: string): number {
  const code = ch.charCodeAt(0);
  if (code >= 97 && code <= 122) return code - 97;
  if (code >= 65 && code <= 90) return code - 65;
  throw new Error(`invalid coordinate letter: ${ch}`);
}

export function sgfPointToXY(s: string): { x: number; y: number } {
  return { x: sgfLetterToNum(s[0]), y: sgfLetterToNum(s[1]) };
}

export function numToSgfLetter(v: number): string {
  return String.fromCharCode(v + 97);
}

export function xyToSgfPoint(x: number, y: number): string {
  return numToSgfLetter(x) + numToSgfLetter(y);
}

/** 取节点中的落子（B 或 W）。坐标为空串时表示虚手（pass），返回 pass: true */
export function nodeMove(node: SgfNode): { color: 'B' | 'W'; x: number; y: number; pass?: boolean } | null {
  const p = node.props;
  if (p['B'] && p['B'].length > 0) {
    const raw = p['B'][0];
    if (raw === '' || raw.length < 2) return { color: 'B', x: -1, y: -1, pass: true };
    const { x, y } = sgfPointToXY(raw);
    return { color: 'B', x, y };
  }
  if (p['W'] && p['W'].length > 0) {
    const raw = p['W'][0];
    if (raw === '' || raw.length < 2) return { color: 'W', x: -1, y: -1, pass: true };
    const { x, y } = sgfPointToXY(raw);
    return { color: 'W', x, y };
  }
  return null;
}

export function nodeComment(node: SgfNode): string {
  const c = node.props['C'];
  return c && c.length > 0 ? c[0] : '';
}
