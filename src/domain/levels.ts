// 十个等级的定义：9级、8级…1级、1段
export interface LevelDef {
  index: number; // 0..9
  key: string; // 如 '9k'
  name: string; // 如 '9级'
  theme: string; // 训练主题说明
  order: '浅入深';
}

export const LEVELS: LevelDef[] = [
  { index: 0, key: '9k', name: '9级', theme: '气、简单眼形与直接做活', order: '浅入深' },
  { index: 1, key: '8k', name: '8级', theme: '真假眼、基本破眼', order: '浅入深' },
  { index: 2, key: '7k', name: '7级', theme: '做眼要点、眼位大小', order: '浅入深' },
  { index: 3, key: '6k', name: '6级', theme: '扑与基本牺牲手段', order: '浅入深' },
  { index: 4, key: '5k', name: '5级', theme: '倒扑及短变化', order: '浅入深' },
  { index: 5, key: '4k', name: '4级', theme: '先后次序、连续做眼与破眼', order: '浅入深' },
  { index: 6, key: '3k', name: '3级', theme: '紧气、缩眼及顽强应手', order: '浅入深' },
  { index: 7, key: '2k', name: '2级', theme: '多个候选点比较、组合手段', order: '浅入深' },
  { index: 8, key: '1k', name: '1级', theme: '多手连续计算与分支判断', order: '浅入深' },
  { index: 9, key: '1d', name: '1段', theme: '较深的综合死活变化', order: '浅入深' },
];

export const STARTING_LEVEL_INDEX = 0; // 默认推荐从 9级 开始

export function levelName(index: number): string {
  return LEVELS[index]?.name ?? String(index);
}
