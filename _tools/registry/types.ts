// 题库审核注册表类型与工具：每档 10 题，每题一条记录
export type ReviewStatus = 'needs-review' | 'reviewed';

export interface PuzzleReviewRecord {
  /** 题号：9k-01 … 1d-10 */
  id: string;
  /** 来源文件 */
  file: string;
  /** 档位 0=9级…9=1段 */
  levelIndex: number;
  /** 档内序号 1..10 */
  orderInLevel: number;
  /** 目标类型：做活/杀棋/待定 */
  goal: 'live' | 'kill' | 'unknown';
  /** 做题目标（中文）如：黑先，使角上黑棋做出两只眼 */
  goalTextCN: string;
  /** 要点（中文，一句话） */
  keyPointCN: string;
  /** 审核状态 */
  reviewStatus: ReviewStatus;
  /** 审核日期/说明 */
  reviewedAt?: string;
  /** 审核说明 */
  note?: string;
  /** 是否已通过全树规则引擎校验 */
  rulesVerified: boolean;
  /** 题目名（中文） */
  titleCN: string;
}

export const LEVEL_NAMES_CN = ['9级', '8级', '7级', '6级', '5级', '4级', '3级', '2级', '1级', '1段'];
