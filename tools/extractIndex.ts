// Extract weekly problem links from archived GGG index
import { readFileSync, writeFileSync } from 'node:fs';
const html = readFileSync('_tools/packets/ggg-index-2016.html', 'utf8');
const re = /<a[^>]+href="([^"]+)"[^>]*>([^<]{0,160})<\/a>/g;
const out: string[] = [];
let m: RegExpExecArray | null;
while ((m = re.exec(html))) {
  const t = m[2].replace(/&#8211;|&ndash;/g, '-').trim();
  if (/weekly.*problem|problem.*\d+/i.test(t) || /get-better-at-go\/go-problems/i.test(m[1])) out.push(`${m[1]}  |  ${t}`);
}
writeFileSync('_tools/packets/ggg-index-links.txt', out.join('\n'), 'utf8');
console.log(out.length + ' candidate links');
console.log(out.slice(0, 80).join('\n'));
