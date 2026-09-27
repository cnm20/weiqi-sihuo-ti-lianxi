import { LEVELS } from '../domain/levels';
import { puzzlesForLevel } from '../data/puzzles';
import { getProgressMap, useProgressVersion } from './progressStore';
import { navigate } from '../App';

export default function LevelScreen({ levelIndex }: { levelIndex: number }) {
  useProgressVersion();
  const level = LEVELS[levelIndex];
  const puzzles = puzzlesForLevel(levelIndex);
  const progress = getProgressMap();

  return (
    <>
      <header className="app-header">
        <button className="back-btn" onClick={() => navigate({ name: 'home' })}>
          ← 首页
        </button>
        <span className="title">{level.name} · 题目列表</span>
      </header>
      <main>
        <div className="notice">训练主题：{level.theme}</div>
        <div className="puzzle-list">
          {puzzles.map((p) => {
            const pr = progress[p.id];
            const status = pr?.solvedOnce ? 'ok' : pr?.lastOutcome === 'wrong' || pr?.lastOutcome === 'timeout' ? 'bad' : 'todo';
            const statusText = pr?.solvedOnce ? '已做对' : pr ? '未答对' : '未做';
            return (
              <div
                key={p.id}
                className="puzzle-item"
                onClick={() => {
                  navigate({ name: 'puzzle', puzzleId: p.id });
                }}
              >
                <span className="idx">{p.orderInLevel}</span>
                <span className="title">{p.title || `死活题 ${p.id}`}</span>
                <span className={`status ${status}`}>{statusText}</span>
              </div>
            );
          })}
        </div>
        <p className="muted">{puzzles.length} 题 · 目标：{level.theme}</p>
      </main>
    </>
  );
}
