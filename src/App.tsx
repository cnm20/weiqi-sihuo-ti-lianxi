import { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LevelScreen from './screens/LevelScreen';
import SolveScreen from './screens/SolveScreen';
import { puzzleById } from './data/puzzles';
import { usePwa } from './pwa/usePwa';

export type Route =
  | { name: 'home' }
  | { name: 'level'; levelIndex: number }
  | { name: 'puzzle'; puzzleId: string };

function parseHash(hash: string): Route {
  const h = hash.replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'level') {
    const levelIndex = Number.parseInt(parts[1] ?? '0', 10);
    return { name: 'level', levelIndex: Number.isFinite(levelIndex) ? levelIndex : 0 };
  }
  if (parts[0] === 'puzzle') {
    const pid = decodeURIComponent(parts[1] ?? '');
    if (puzzleById(pid)) return { name: 'puzzle', puzzleId: pid };
    return { name: 'level', levelIndex: 0 };
  }
  return { name: 'home' };
}

export function navigate(route: Route): void {
  let hash = '';
  switch (route.name) {
    case 'home':
      hash = '#/';
      break;
    case 'level':
      hash = `#/level/${route.levelIndex}`;
      break;
    case 'puzzle':
      hash = `#/puzzle/${encodeURIComponent(route.puzzleId)}`;
      break;
  }
  window.location.hash = hash;
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  const pwa = usePwa();
  const [offlineDismissed, setOfflineDismissed] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="app">
      {pwa.offlineReady && !offlineDismissed && (
        <div className="pwa-banner ok">
          已可离线使用
          <button onClick={() => setOfflineDismissed(true)}>知道了</button>
        </div>
      )}
      {pwa.needRefresh && (
        <div className="pwa-banner refresh">
          <span>发现新版本</span>
          <button onClick={pwa.applyUpdate}>立即更新</button>
        </div>
      )}
      {route.name === 'home' && <HomeScreen />}
      {route.name === 'level' && <LevelScreen key={route.levelIndex} levelIndex={route.levelIndex} />}
      {route.name === 'puzzle' && <SolveScreen key={route.puzzleId} puzzleId={route.puzzleId} />}
    </div>
  );
}
