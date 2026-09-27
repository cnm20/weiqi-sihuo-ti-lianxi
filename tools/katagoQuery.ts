// 鐢熸垚 KataGo analysis JSONL 鏌ヨ锛堜富瑙ｇ粓灞€灞€闈級锛岄厤鍚堝紩鎿庡仛鎵€鏈夋潈澶嶆牳銆?//
// 杩愯涓ゆ锛堟矙绠卞唴椤?danger-full-access锛岀敤 Start-Process 鏂囦欢閲嶅畾鍚戦伩鍏嶇閬撻檺鍒讹級锛?//  1) node tools/katagoQuery.ts easy/ggg-easy-56.sgf
//     -> 鍐欏嚭 _tools/katago/query.jsonl锛堜竴琛?JSON锛歩nitialStones=鍒濆+涓昏В缁堝眬锛宎nalyzeTurns=[0]锛?//  2) Start-Process katago.exe analysis -model kata1-b6c96.txt.gz -config analysis_example.cfg
//     -RedirectStandardInput query.jsonl -RedirectStandardOutput analysis-out.txt ...
//     锛堝紩鎿庣粡 stdin 閫愯璇诲叆銆乻tdout 閫愯杈撳嚭 JSON锛涘惈 ownership 瀛楁锛?//      鍙栧€肩害 [-1,1]锛?0 琛ㄧず榛戞柟鎵€鏈夋潈锛堝惈姝荤櫧瀛愯惤鐐瑰綊榛戯級锛?0 琛ㄧず鐧芥柟鎵€鏈夋潈锛?//
// 鐢ㄩ€旓細瀵瑰垽璇讳腑鐨勮竟鐣屽眬闈㈠仛"缁堝眬姝绘椿/鎵€鏈夋潈"鏈哄櫒鎶芥煡锛堥敊璇彂鐜板櫒锛夛紝
//       涓嶄綔涓烘柟鍚戝垽瀹氱殑鍞竴渚濇嵁锛堣瑷€/鐩爣璇箟浠嶇敱閫愰闃呰鎶婂叧锛夈€?import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { convertToPuzzle } from './convertSgf.ts';

const ref = process.argv[2] ?? 'easy/ggg-easy-56.sgf';
const base = join(process.cwd(), '_tools/dataset/go-problems-master/weekly-go-problems');
const text = readFileSync(join(base, ref), 'utf8');
const rep = convertToPuzzle({ file: ref, text });
if (!rep.ok) { console.error('convert fail', rep.warnings); process.exit(1); }
const p = rep.puzzle!;
const stones = new Map<string, string>();
for (const s of p.initial) stones.set(`${s.x},${s.y}`, s.color);
for (const m of rep.stats.mainLine) stones.set(`${m.x},${m.y}`, m.color);
const letters = 'abcdefghjklmnopqrst';
const board: Array<[string, string]> = [];
for (const [k, c] of stones) {
  const [x, y] = k.split(',').map(Number);
  board.push([c, letters[x] + String(y + 1)]);
}
const query = {
  id: 'q1',
  moves: [],
  initialStones: board,
  rules: 'chinese',
  komi: 7.5,
  boardXSize: p.size,
  boardYSize: p.size,
  analyzeTurns: [0],
  maxVisits: 300,
  includeOwnership: true,
  includePolicy: false,
  includeMoves: false,
};
writeFileSync(join(process.cwd(), '_tools/katago/query.jsonl'), JSON.stringify(query) + '\n', 'utf8');
console.log('query len', board.length, 'for', ref, 'mainline', rep.stats.mainLine.length);

