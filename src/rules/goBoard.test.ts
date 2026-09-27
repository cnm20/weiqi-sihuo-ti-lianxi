import { describe, expect, it } from 'vitest';
import { GoBoard } from '../rules/goBoard.ts';
import type { Stone } from '../domain/types.ts';

function st(list: [string, number, number][]): Stone[] {
  return list.map(([c, x, y]) => ({ color: c as 'B' | 'W', x, y }));
}

function sgf(coord: string, color: 'B' | 'W'): Stone {
  return { color, x: coord.charCodeAt(0) - 97, y: coord.charCodeAt(1) - 97 };
}

describe('GoBoard 规则引擎', () => {
  it('拒绝越界与占点', () => {
    const b = new GoBoard(9);
    expect(b.tryMove('B', 0, 0).status).toBe('ok');
    expect(b.tryMove('W', 0, 0).status).toBe('occupied');
    expect(b.tryMove('B', 9, 0).status).toBe('suicide'); // 越界等同非法
    expect(b.tryMove('B', -1, 0).status).toBe('suicide');
  });

  it('提掉被围死的对方棋子', () => {
    const b = new GoBoard(9);
    b.setup(
      st([
        ['W', 1, 1],
        ['B', 0, 1],
        ['B', 1, 0],
        ['B', 2, 1],
      ]),
    );
    // 黑在 (1,2) 落子，白 (1,1) 只剩一口气被提
    const res = b.tryMove('B', 1, 2);
    expect(res.status).toBe('ok');
    expect(res.captured).toContainEqual({ x: 1, y: 1 });
    expect(b.at(1, 1)).toBeNull();
  });

  it('群的气计算正确', () => {
    const b = new GoBoard(9);
    b.setup(
      st([
        ['B', 1, 1],
        ['B', 2, 1],
        ['W', 1, 2],
        ['W', 0, 1],
        ['W', 3, 1],
        ['W', 1, 0],
        ['W', 2, 0],
      ]),
    );
    // B 群 {(1,1),(2,1)}：周围 W 占 (1,2)(0,1)(3,1)(1,0)(2,0)，气点仅 (2,2)
    expect(b.groupOf(1, 1).length).toBe(2);
    expect(b.libertiesOf(1, 1).map((p) => `${p.x},${p.y}`).sort()).toEqual(['2,2']);
  });

  it('自杀被拒绝（提子后能填的除外）', () => {
    const b = new GoBoard(9);
    b.setup(
      st([
        ['W', 0, 1],
        ['W', 1, 0],
        ['W', 2, 1],
        ['W', 1, 2],
      ]),
    );
    // (1,1) 四邻皆白且无提子 → 黑落此处自杀
    expect(b.tryMove('B', 1, 1).status).toBe('suicide');
    // 白方可以把黑整块围死，然后黑在别处提白
  });

  it('同时提掉两子不形成劫（无立即提回限制）', () => {
    const b = new GoBoard(9);
    b.setup(
      st([
        // 白 (1,1) 与 (3,1) 各自只剩 (2,1) 一口气
        ['W', 1, 1],
        ['B', 0, 1],
        ['B', 1, 0],
        ['B', 1, 2],
        ['W', 3, 1],
        ['B', 4, 1],
        ['B', 3, 0],
        ['B', 3, 2],
      ]),
    );
    expect(b.libertiesOf(1, 1).length).toBe(1);
    expect(b.libertiesOf(3, 1).length).toBe(1);
    const res = b.tryMove('B', 2, 1);
    expect(res.status).toBe('ok');
    expect(res.captured.length).toBe(2);
    expect(res.koPoint).toBeNull();
    expect(b.at(1, 1)).toBeNull();
    expect(b.at(3, 1)).toBeNull();
  });

  it('简单劫：立即提回被拒，间隔一手后可提', () => {
    // 经典劫形，来自 easy-02 的 SGF 局面
    const ab = 'qo ro so qp nq oq pq nr ns qs'.split(' ').map((p) => sgf(p, 'B'));
    const aw = 'rp qq sq or pr qr sr os'.split(' ').map((p) => sgf(p, 'W'));
    const b = new GoBoard(19);
    [...ab, ...aw].forEach((s) => b.placeStone(s.color, s.x, s.y));
    // 走 B(17,17)=rr, W(17,18)=rs, B(18,18)=ss → 白(17,18)被提，形成劫
    expect(b.tryMove('B', 17, 17).status).toBe('ok');
    expect(b.tryMove('W', 17, 18).status).toBe('ok');
    const cap = b.tryMove('B', 18, 18);
    expect(cap.status).toBe('ok');
    expect(cap.captured).toContainEqual({ x: 17, y: 18 });
    expect(b.koPoint).toEqual({ x: 17, y: 18 });
    // 白立即在劫点提回 → ko
    expect(b.tryMove('W', 17, 18).status).toBe('ko');
    // 白下 elsewhere 后劫解除
    expect(b.tryMove('W', 5, 5).status).toBe('ok');
    expect(b.tryMove('W', 17, 18).status).toBe('ok');
  });

  it('clone 独立性', () => {
    const b = new GoBoard(9);
    b.tryMove('B', 3, 3);
    const c = b.clone();
    c.tryMove('W', 3, 4);
    expect(b.at(3, 4)).toBeNull();
    expect(c.at(3, 4)).toBe('W');
  });
});
