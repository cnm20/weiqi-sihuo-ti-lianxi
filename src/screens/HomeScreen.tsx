import { LEVELS } from '../domain/levels';
import { loadPuzzles, isOfficialBankLoaded, puzzlesForLevel } from '../data/puzzles';
import { useProgressVersion, getProgressMap } from './progressStore';
import { navigate } from '../App';

export default function HomeScreen() {
  const [, bump] = useProgressVersion();
  const puzzles = loadPuzzles();
  const progress = getProgressMap();
  const official = isOfficialBankLoaded();

  const totalPerLevel = LEVELS.map((lv) => puzzlesForLevel(lv.index).length);
  const solvedPerLevel = LEVELS.map((lv) => puzzles.filter((p) => p.levelIndex === lv.index && progress[p.id]?.solvedOnce).length);

  // 推荐继续：从最低档开始找未答满的
  let recommended = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (solvedPerLevel[i] < totalPerLevel[i]) {
      recommended = i;
      break;
    }
  }

  const onClick = () => {
    bump();
    navigate({ name: 'level', levelIndex: recommended });
  };

  return (
    <>
      <header className="app-header">
        <span className="title">围棋死活题练习</span>
      </header>
      <main>
        {!official && <div className="notice">当前为流程样题模式（每题档位各 1 道）。正式题库完成逐题审核后将自动载入。</div>}
        {official && puzzles.length < 10 * LEVELS.length && (
          <div className="notice">正式题库逐档审核发布中（当前 {puzzles.length}/100），未发布档位暂为空。</div>
        )}
        <div className="continue-banner" onClick={onClick}>
          <b>继续练习 → {LEVELS[recommended].name}</b>
          <span>
            已答对 {solvedPerLevel[recommended]}/{totalPerLevel[recommended]}
          </span>
        </div>
        <div className="level-grid">
          {LEVELS.map((lv) => {
            const done = solvedPerLevel[lv.index];
            const total = totalPerLevel[lv.index];
            return (
              <button
                key={lv.index}
                className="level-card"
                onClick={() => {
                  bump();
                  navigate({ name: 'level', levelIndex: lv.index });
                }}
              >
                <div className="lv">{lv.name}</div>
                <div className="theme">{lv.theme}</div>
                <div className="progress">
                  已答对 {done}/{total}
                  <div className="bar">
                    <i style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <p className="muted">等级为练习参考难度 · 进度仅保存在本机</p>
      </main>
    </>
  );
}
