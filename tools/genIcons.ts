// 生成简单 PWA 图标（棋盘圆形棋子图案），纯 Node zlib 实现，无第三方依赖
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function crc32(buf: Buffer): number {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  return (crc ^ -1) >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(size: number, draw: (x: number, y: number) => [number, number, number, number]): Buffer {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 4 + 1);
    raw[rowStart] = 0; // filter none
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = draw(x, y);
      const p = rowStart + 1 + x * 4;
      raw[p] = r;
      raw[p + 1] = g;
      raw[p + 2] = b;
      raw[p + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// 图案：木色圆角底 + 棋盘格 + 黑色棋子
function drawIcon(size: number, maskable: boolean) {
  const c = size / 2;
  const R = maskable ? c * 0.92 : c * 0.9;
  const safe = maskable ? c * 0.8 : c * 0.95;
  const stoneR = size * 0.16;
  const woodTop: [number, number, number] = [233, 184, 124];
  const woodBottom: [number, number, number] = [196, 138, 72];
  const line: [number, number, number] = [90, 58, 30];
  const gridN = 4;
  return (x: number, y: number): [number, number, number, number] => {
    const dx = x - c;
    const dy = y - c;
    const dist = Math.hypot(dx, dy);
    if (dist > R) return [0, 0, 0, 0];
    // wood gradient
    const t = (dy / R + 1) / 2;
    let r = woodTop[0] + (woodBottom[0] - woodTop[0]) * t;
    let g = woodTop[1] + (woodBottom[1] - woodTop[1]) * t;
    let b = woodTop[2] + (woodBottom[2] - woodTop[2]) * t;
    const cell = (size * 0.72) / (gridN - 1);
    const origin = c - ((gridN - 1) * cell) / 2;
    for (let i = 0; i < gridN; i++) {
      const pos = origin + i * cell;
      const d1 = Math.abs(x - pos);
      const d2 = Math.abs(y - pos);
      if (d1 < 1.2 || d2 < 1.2) {
        r = line[0];
        g = line[1];
        b = line[2];
      }
    }
    // black stone at upper-left-ish intersection
    const sx = origin + cell * 0.5;
    const sy = origin + cell * 0.5;
    const sd = Math.hypot(x - sx, y - sy);
    if (sd < stoneR && Math.hypot(x - sx, y - sy) < safe) {
      r = 20;
      g = 20;
      b = 20;
    }
    return [r, g, b, 255];
  };
}

const outDir = join(process.cwd(), 'public', 'icons');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'icon-512.png'), encodePng(512, drawIcon(512, false)));
writeFileSync(join(outDir, 'icon-192.png'), encodePng(192, drawIcon(192, false)));
writeFileSync(join(outDir, 'icon-512-maskable.png'), encodePng(512, drawIcon(512, true)));
writeFileSync(join(outDir, 'apple-touch-icon.png'), encodePng(180, drawIcon(180, false)));
console.log('icons generated');
