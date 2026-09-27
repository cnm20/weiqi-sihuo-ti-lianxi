// 自动生成：tools/buildFinalPuzzles.ts（审核驱动）—— 请勿手改
import type { Puzzle } from '../domain/types';
export const puzzles: Puzzle[] = [
 {
  "id": "9k-01",
  "levelIndex": 0,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "B",
    "x": 5,
    "y": 18
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 13,
   "maxX": 8,
   "maxY": 18
  },
  "title": "左下角做活（两手要点）",
  "goalText": "黑先，使左下角被围黑棋做成两眼成活。",
  "instruction": "急所为首手 (1,18)：黑占此后角上两气点均成真眼（白落子即自杀且不能提），黑净活；若黑先走他处，白抢要点后黑只能打劫或被杀（变着注 \"It's a ko, but Black can do better.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-21.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n183",
   "branches": [
    {
     "x": 1,
     "y": 18,
     "type": "success",
     "reason": "Correct"
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n183",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-02",
  "levelIndex": 0,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右下角做活（先手急所）",
  "goalText": "黑先，使被白墙围在右下角的黑棋两小块净活。",
  "instruction": "黑 (17,18) 抢占底线急所成要点：白只能在此打劫（次佳线注 ko、可更好），黑先走此处即净活，无劫/征子/双活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-09.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n20",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "success",
     "reason": "Correct"
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n20",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-03",
  "levelIndex": 0,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "一手成两眼（做活）",
  "goalText": "黑先，一手使被围黑棋做出两眼成活。",
  "instruction": "主解单手 (17,18)：占住要点后黑棋整串具两个真眼区（结构事实），白无法继续破眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-13.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n121",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "success",
     "reason": "Correct"
    },
    {
     "x": 17,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n121",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 17,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-04",
  "levelIndex": 0,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 9
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 11,
    "y": 13
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "一手成两眼（做活）",
  "goalText": "黑先，使被围黑棋做出两眼成活。",
  "instruction": "主解单手 (16,18) 后黑整串具两个真眼区（结构事实），白无法杀黑。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-38.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n218",
   "branches": [
    {
     "x": 16,
     "y": 18,
     "type": "success",
     "reason": "Correct"
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    },
    {
     "x": 18,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n218",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-05",
  "levelIndex": 0,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 18
   },
   {
    "color": "B",
    "x": 6,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 9,
   "maxY": 18
  },
  "title": "补断做活（成两眼）",
  "goalText": "黑先，补断成活（使白无法切断，黑整块做成两眼）。",
  "instruction": "主解单手 (4,18)：补住断点后黑同一棋串具两个真眼区（结构证据），白既切不断也杀不掉（成功叶 \"White can't cut at A because she'll atari herself.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-74.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n311",
   "branches": [
    {
     "x": 4,
     "y": 18,
     "type": "success",
     "reason": "Correct. White can't cut at A because she'll atari herself."
    },
    {
     "x": 5,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      }
     ]
    },
    {
     "x": 5,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n311",
    "branches": [
     {
      "x": 4,
      "y": 18,
      "type": "success",
      "reason": "Correct. White can't cut at A because she'll atari herself."
     },
     {
      "x": 5,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       }
      ]
     },
     {
      "x": 5,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-06",
  "levelIndex": 0,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 10
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 8,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活：抢眼形要点成见合",
  "goalText": "黑先，使被白威胁的黑大块整形做活。",
  "instruction": "黑 (6,17) 抢占眼形要点后 (5,16)/(5,15) 成见合，黑大块保有充足做眼空间净活；勿先自紧让白占 (6,17)（白占急所则黑弱）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-53.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n258",
   "branches": [
    {
     "x": 6,
     "y": 17,
     "type": "success",
     "reason": "Correct. This is the best shape, because it gives Black the best potential for making eyes later. A and B are miai for Black now. If White tries to play A-C, Black D captures White's stones."
    },
    {
     "x": 5,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 15
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      }
     ]
    },
    {
     "x": 6,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    },
    {
     "x": 7,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 7,
       "y": 16
      },
      {
       "color": "W",
       "x": 8,
       "y": 15
      }
     ]
    },
    {
     "x": 5,
     "y": 16,
     "type": "failure",
     "reason": "This move is uninspired.",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n258",
    "branches": [
     {
      "x": 6,
      "y": 17,
      "type": "success",
      "reason": "Correct. This is the best shape, because it gives Black the best potential for making eyes later. A and B are miai for Black now. If White tries to play A-C, Black D captures White's stones."
     },
     {
      "x": 5,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 15
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       }
      ]
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     },
     {
      "x": 7,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 16
       },
       {
        "color": "W",
        "x": 8,
        "y": 15
       }
      ]
     },
     {
      "x": 5,
      "y": 16,
      "type": "failure",
      "reason": "This move is uninspired.",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-07",
  "levelIndex": 0,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 18,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "角部杀白：破眼急所",
  "goalText": "黑先，杀掉角上白棋，使其无法做出两只眼。",
  "instruction": "黑在 A 位(17,18)落子破眼：即使白提掉黑四子，仍无法形成两只眼，白整块不活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-56.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n264",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "success",
     "reason": "Correct. Now, even if White captures the four stones, it won't be possible to make two eyes."
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n264",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "success",
      "reason": "Correct. Now, even if White captures the four stones, it won't be possible to make two eyes."
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-08",
  "levelIndex": 0,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 9,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 7,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右上净杀白（连络避劫）",
  "goalText": "黑先，净杀右上白棋（避免走成劫）。",
  "instruction": "主解单手 (18,17)：连络两块黑棋并占住白开劫/双打要点；此后白即便于 A 位打吃也气不足，白角/白筋被净杀。其余首着白皆可逼成劫（次佳线注 \"…avoid ko completely\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-84.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n337",
   "branches": [
    {
     "x": 18,
     "y": 17,
     "type": "success",
     "reason": "Correct. Now White doesn't have enough liberties to atari at A."
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "This move helps White.",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 16
      }
     ]
    },
    {
     "x": 13,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 12,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n337",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "success",
      "reason": "Correct. Now White doesn't have enough liberties to atari at A."
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "This move helps White.",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       }
      ]
     },
     {
      "x": 13,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-09",
  "levelIndex": 0,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 0,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 9
   },
   {
    "color": "W",
    "x": 1,
    "y": 11
   },
   {
    "color": "W",
    "x": 2,
    "y": 11
   },
   {
    "color": "W",
    "x": 0,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 6,
   "maxY": 18
  },
  "title": "边路做活：A/B 两要点",
  "goalText": "黑先，使左侧被白围的黑棋做出两只眼成活。",
  "instruction": "黑依主解 (0,15)→(0,17) 在左边贴边连棋并预留做眼要点；白无论占 A(1,15) 或另一要点，黑都能相应提子/连回，最终两眼成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-71.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n305",
   "branches": [
    {
     "x": 0,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 2,
      "y": 15
     },
     "next": "n304"
    },
    {
     "x": 2,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n304",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "success",
      "reason": "Correct. If White plays at A Black can capture at B. If White plays at B, Black connects at A, so Black's alive with two eyes."
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n305",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 15
      },
      "next": "n304"
     },
     {
      "x": 2,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "9k-10",
  "levelIndex": 0,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 8,
   "maxY": 18
  },
  "title": "对杀吃白（紧气）",
  "goalText": "黑先，在对杀/紧气中获胜，吃掉气短的白棋。",
  "instruction": "黑依主解 (1,17)→(1,14) 紧住自己气并把白棋气逼至 2 口：白无论怎么走，黑都能打吃收气将其提掉。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-76.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n314",
   "branches": [
    {
     "x": 1,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 15
     },
     "next": "n313"
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n313",
    "branches": [
     {
      "x": 1,
      "y": 14,
      "type": "success",
      "reason": "Correct. White only has two liberties and all of Black's groups have more than that. No matter what White does next, Black can atari."
     }
    ]
   },
   {
    "id": "n314",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n313"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-01",
  "levelIndex": 1,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "下边做活（底边两眼）",
  "goalText": "黑先，使下边被白压住的黑棋做出两只眼成活。",
  "instruction": "依主解 (15,18)→(13,18) 次序在底边连棋做成两眼，白无法继续破眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-10.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n22",
   "branches": [
    {
     "x": 15,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 16
     },
     "next": "n21"
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n21",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n22",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 16
      },
      "next": "n21"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-02",
  "levelIndex": 1,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右边做活（贴边两眼）",
  "goalText": "黑先，使右边被围的黑棋做出两只眼成活。",
  "instruction": "依主解 (17,18)→(17,16) 次序在右边线连棋做成两眼，白杀不掉。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-20.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n182",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n181"
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 17,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n181",
    "branches": [
     {
      "x": 17,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n182",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n181"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-03",
  "levelIndex": 1,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 8,
   "maxX": 18,
   "maxY": 18
  },
  "title": "净杀白（急所封气）",
  "goalText": "黑先，净杀角上/被围白棋（避免走成劫）。",
  "instruction": "依主解次序先占白方连回/做眼急所再封气，白大块仅余少量气且自填即自杀（无眼可做）；若黑先走角上最要点（ss 类）白可成劫（次佳线）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-105.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n37",
   "branches": [
    {
     "x": 16,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n36"
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n36",
    "branches": [
     {
      "x": 15,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n37",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n36"
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-04",
  "levelIndex": 1,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 11,
    "y": 14
   },
   {
    "color": "B",
    "x": 12,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 10,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 18
   },
   {
    "color": "W",
    "x": 11,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "紧气净杀白大块",
  "goalText": "黑先，净杀被围的白方大块（避免走成双活）。",
  "instruction": "黑 (12,18) 先占白大块最下端一气（次序关键），再紧气提净；若次序错白可成后手双活（次佳线注 seki、可做得更好）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-103.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n32",
   "branches": [
    {
     "x": 12,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n31"
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 12,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n31",
    "branches": [
     {
      "x": 12,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n32",
    "branches": [
     {
      "x": 12,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n31"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-05",
  "levelIndex": 1,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "对杀吃白（角部）",
  "goalText": "黑先，在对杀中获胜，吃掉白棋。",
  "instruction": "黑先占要点（主解 (18,17)→(18,16)）紧气并保持气长；白棋在对杀中气不足而被吃。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-69.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n300",
   "branches": [
    {
     "x": 18,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 16
     },
     "next": "n299"
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n299",
    "branches": [
     {
      "x": 18,
      "y": 16,
      "type": "success",
      "reason": "Correct. Black wins the capturing race."
     }
    ]
   },
   {
    "id": "n300",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 16
      },
      "next": "n299"
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-06",
  "levelIndex": 1,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 12
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 5,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "B",
    "x": 4,
    "y": 18
   },
   {
    "color": "W",
    "x": 6,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   },
   {
    "color": "W",
    "x": 7,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 12,
   "maxY": 18
  },
  "title": "对杀杀白（单眼成杀）",
  "goalText": "黑先，在对杀中获胜：杀吃上方被围的白棋大块。",
  "instruction": "黑 (1,18)→(2,18) 先从左上收紧白棋大块的气并补掉白的潜在眼点；白大块只在 (6,18) 能成一眼，余气不足，对杀必败被吃。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-29.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n199",
   "branches": [
    {
     "x": 1,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 17
     },
     "next": "n198"
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 8,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n198",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n199",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 17
      },
      "next": "n198"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 8,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-07",
  "levelIndex": 1,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 10
   },
   {
    "color": "B",
    "x": 2,
    "y": 10
   },
   {
    "color": "B",
    "x": 3,
    "y": 10
   },
   {
    "color": "B",
    "x": 4,
    "y": 10
   },
   {
    "color": "B",
    "x": 0,
    "y": 11
   },
   {
    "color": "B",
    "x": 2,
    "y": 11
   },
   {
    "color": "B",
    "x": 5,
    "y": 11
   },
   {
    "color": "B",
    "x": 5,
    "y": 12
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 11
   },
   {
    "color": "W",
    "x": 3,
    "y": 11
   },
   {
    "color": "W",
    "x": 4,
    "y": 11
   },
   {
    "color": "W",
    "x": 0,
    "y": 12
   },
   {
    "color": "W",
    "x": 1,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 4,
    "y": 12
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 7,
   "maxY": 18
  },
  "title": "紧气提白五子",
  "goalText": "黑先，紧气提掉白方被围的棋子。",
  "instruction": "依主解 (0,14)→(1,15) 次序收气，白五子无处延气被黑整体提掉（主解末手黑提白 5 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-87.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n344",
   "branches": [
    {
     "x": 0,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 0,
      "y": 15
     },
     "next": "n343"
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 0,
     "y": 10,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 10
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 4,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n343",
    "branches": [
     {
      "x": 1,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n344",
    "branches": [
     {
      "x": 0,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 15
      },
      "next": "n343"
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 10
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 4,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-08",
  "levelIndex": 1,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 6,
   "maxY": 18
  },
  "title": "角部做活（左下两眼）",
  "goalText": "黑先，救活被白封住的角部黑棋（做出两只眼）。",
  "instruction": "依主解 (1,18)→(1,17) 次序在左下角连棋做眼，黑整块成形两眼成活；若落点错黑无法成两眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-35.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n212",
   "branches": [
    {
     "x": 1,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 2,
      "y": 18
     },
     "next": "n211"
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n211",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n212",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 18
      },
      "next": "n211"
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-09",
  "levelIndex": 1,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "B",
    "x": 5,
    "y": 18
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 13,
   "maxX": 8,
   "maxY": 18
  },
  "title": "角部做活（次序成活）",
  "goalText": "黑先，救活角部黑棋（次序正确则净活）。",
  "instruction": "依主解 (1,17)→(1,18) 次序在左下角连回并做眼，白无法杀黑；次序错则黑只能打劫/被吃（变着含 ko 提示）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-22.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n185",
   "branches": [
    {
     "x": 1,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 16
     },
     "next": "n184"
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n184",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n185",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 16
      },
      "next": "n184"
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "8k-10",
  "levelIndex": 1,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 11,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 12
   },
   {
    "color": "W",
    "x": 10,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 18
   },
   {
    "color": "W",
    "x": 12,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 7,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "下方对杀吃白",
  "goalText": "黑先，在对杀/封锁中吃住白棋（次序正确则黑活、白被提）。",
  "instruction": "依主解 (15,18)→(13,18) 次序在下方连回并收紧，白四子被提（机器回放确认）；若黑次序错，白可反过来吃黑角（失败注 \"…Black's corner stones are captured.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-78.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n321",
   "branches": [
    {
     "x": 15,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 18
     },
     "next": "n320"
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 10,
     "y": 14,
     "type": "failure",
     "reason": "Turning like this is often a good move, but in this case,",
     "refutation": [
      {
       "color": "B",
       "x": 10,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n320",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n321",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n320"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 10,
      "y": 14,
      "type": "failure",
      "reason": "Turning like this is often a good move, but in this case,",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-01",
  "levelIndex": 2,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右上角做活（封口成两眼）",
  "goalText": "黑先，使右上角被围黑棋做成两只眼成活。",
  "instruction": "主解 (15,16)→(15,17)：先占要点封口，白两子成共享唯一气的必死子，黑提后形成两只独立真眼（白无法点入），净活无劫。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-05.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n9",
   "branches": [
    {
     "x": 15,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n8"
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n8",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n9",
    "branches": [
     {
      "x": 15,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n8"
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-02",
  "levelIndex": 2,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右下杀白：次序紧气提净",
  "goalText": "黑先，净杀被围白棋（右上白四子 + 下边白三子）。",
  "instruction": "黑 (15,17) 先紧下边白棋之气并防白 (18,18) 反扑黑墙（次序关键），再 (16,13)（或 (17,13)/(18,13)）提净右上白四子，随后白其余子一并被提；无劫/征子/双活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-60.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n274",
   "branches": [
    {
     "x": 15,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 17
     },
     "next": "n273"
    },
    {
     "x": 16,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 17,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n273",
    "branches": [
     {
      "x": 16,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 17,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 18,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n274",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n273"
     },
     {
      "x": 16,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-03",
  "levelIndex": 2,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 18,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 12
   },
   {
    "color": "W",
    "x": 17,
    "y": 12
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 18,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右边杀白：封边断气净杀",
  "goalText": "黑先，净杀白棋靠右一路的大块。",
  "instruction": "黑 (18,17) 封白沿边一路气；白连边则黑断气，白整块仅剩一气自紧而死（提净前白无处增气）；劫仅出现在黑更劣变例。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-61.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n276",
   "branches": [
    {
     "x": 18,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 11
     },
     "next": "n275"
    },
    {
     "x": 18,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n275",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n276",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 11
      },
      "next": "n275"
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-04",
  "levelIndex": 2,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 9,
    "y": 9
   },
   {
    "color": "W",
    "x": 1,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 11,
   "maxY": 18
  },
  "title": "吃白断子（封锁）",
  "goalText": "黑先，设法吃住白棋那颗断点上的棋子（A 位）。",
  "instruction": "利用封锁/紧气次序，避免白子向外逃出；谱中征子分支被标记为不成立，须选封锁变化。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-41.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n225",
   "branches": [
    {
     "x": 5,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 14
     },
     "next": "n224"
    },
    {
     "x": 6,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 5,
       "y": 13
      }
     ]
    },
    {
     "x": 5,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 14
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 5,
       "y": 16
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 4,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 14
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 14
      },
      {
       "color": "B",
       "x": 5,
       "y": 13
      },
      {
       "color": "W",
       "x": 7,
       "y": 15
      }
     ]
    },
    {
     "x": 6,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n224",
    "branches": [
     {
      "x": 5,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 4,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 13
       },
       {
        "color": "W",
        "x": 5,
        "y": 14
       },
       {
        "color": "B",
        "x": 6,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       },
       {
        "color": "B",
        "x": 5,
        "y": 12
       },
       {
        "color": "W",
        "x": 6,
        "y": 13
       },
       {
        "color": "B",
        "x": 7,
        "y": 13
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       },
       {
        "color": "B",
        "x": 6,
        "y": 11
       },
       {
        "color": "W",
        "x": 7,
        "y": 12
       }
      ]
     },
     {
      "x": 5,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 14
       },
       {
        "color": "W",
        "x": 4,
        "y": 13
       },
       {
        "color": "B",
        "x": 4,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       },
       {
        "color": "B",
        "x": 6,
        "y": 13
       },
       {
        "color": "W",
        "x": 5,
        "y": 12
       },
       {
        "color": "B",
        "x": 5,
        "y": 11
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       },
       {
        "color": "B",
        "x": 7,
        "y": 12
       },
       {
        "color": "W",
        "x": 6,
        "y": 11
       }
      ]
     },
     {
      "x": 6,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 13
       },
       {
        "color": "W",
        "x": 4,
        "y": 13
       },
       {
        "color": "B",
        "x": 4,
        "y": 12
       },
       {
        "color": "W",
        "x": 3,
        "y": 12
       }
      ]
     },
     {
      "x": 5,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 14
       },
       {
        "color": "B",
        "x": 6,
        "y": 14
       },
       {
        "color": "W",
        "x": 6,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 6,
        "y": 13
       },
       {
        "color": "B",
        "x": 7,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n225",
    "branches": [
     {
      "x": 5,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 14
      },
      "next": "n224"
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       }
      ]
     },
     {
      "x": 5,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 16
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 4,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 14
       },
       {
        "color": "B",
        "x": 5,
        "y": 13
       },
       {
        "color": "W",
        "x": 7,
        "y": 15
       }
      ]
     },
     {
      "x": 6,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-05",
  "levelIndex": 2,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 10
   },
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 18,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 10
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 18,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 12
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 13,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "对杀吃白（紧气）",
  "goalText": "黑先，在对杀中获胜，吃掉白棋。",
  "instruction": "黑先手紧住自己气并限制白延气点（A/B 均被白自撞气）：白无气可加，黑在对杀中胜出吃白。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-91.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n353",
   "branches": [
    {
     "x": 18,
     "y": 10,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 17,
      "y": 9
     },
     "next": "n352"
    },
    {
     "x": 16,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 16,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    },
    {
     "x": 17,
     "y": 9,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 9
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 18,
       "y": 10
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n352",
    "branches": [
     {
      "x": 16,
      "y": 15,
      "type": "success",
      "reason": "Correct. White doesn't have enough liberties to atari at A or B, so Black will win the capturing race."
     },
     {
      "x": 17,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 18,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n353",
    "branches": [
     {
      "x": 18,
      "y": 10,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 9
      },
      "next": "n352"
     },
     {
      "x": 16,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 16,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     },
     {
      "x": 17,
      "y": 9,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 9
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-06",
  "levelIndex": 2,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 18
   },
   {
    "color": "W",
    "x": 0,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 5,
   "maxY": 18
  },
  "title": "角部做活（守左缘眼位）",
  "goalText": "黑先，救活左下角被白围住的黑棋（做出两眼）。",
  "instruction": "依主解 (0,15)→(1,14) 在左边缘占住要点：黑先 (0,15) 保住 (0,14)/(0,16) 两个眼位，白只能单方面收气无法破眼，黑角整块成活。若黑随手补假眼点或断点（A），整块会被白提掉。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-73.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n310",
   "branches": [
    {
     "x": 0,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 15
     },
     "next": "n309"
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 1,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 3,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 13
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n309",
    "branches": [
     {
      "x": 1,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n310",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n309"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 3,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 13
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-07",
  "levelIndex": 2,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 0,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 18
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 13,
   "maxX": 7,
   "maxY": 18
  },
  "title": "角部做活（两眼成形）",
  "goalText": "黑先，在被白围住的角部做出两只眼成活。",
  "instruction": "依主解 (2,18)→(3,17) 次序先占左缘眼位再把黑块补成整块：终局黑具 (2,17) 单点眼与 (0,18)/(1,18) 角部眼区两眼成活；次序错则黑只能打劫或被杀。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-26.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n192",
   "branches": [
    {
     "x": 2,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 18
     },
     "next": "n191"
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    },
    {
     "x": 2,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n191",
    "branches": [
     {
      "x": 3,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n192",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n191"
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     },
     {
      "x": 2,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-08",
  "levelIndex": 2,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 3,
    "y": 10
   },
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 3,
    "y": 12
   },
   {
    "color": "B",
    "x": 4,
    "y": 12
   },
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 9
   },
   {
    "color": "W",
    "x": 3,
    "y": 9
   },
   {
    "color": "W",
    "x": 2,
    "y": 10
   },
   {
    "color": "W",
    "x": 2,
    "y": 11
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 9,
   "maxY": 18
  },
  "title": "弃子提白三子",
  "goalText": "黑先，以弃子妙手提回白方三子。",
  "instruction": "黑先 (3,14) 投入弃子，待白提后原位打回（主解两次落于 (3,14)），一气提掉白三子。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-42.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n227",
   "branches": [
    {
     "x": 3,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 14
     },
     "next": "n226"
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 11
      },
      {
       "color": "W",
       "x": 0,
       "y": 11
      },
      {
       "color": "B",
       "x": 0,
       "y": 12
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 10
      },
      {
       "color": "W",
       "x": 0,
       "y": 10
      },
      {
       "color": "B",
       "x": 0,
       "y": 9
      },
      {
       "color": "W",
       "x": 0,
       "y": 10
      }
     ]
    },
    {
     "x": 1,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 11
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 10
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 10
      },
      {
       "color": "B",
       "x": 0,
       "y": 11
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 4,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 14
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n226",
    "branches": [
     {
      "x": 3,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n227",
    "branches": [
     {
      "x": 3,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 14
      },
      "next": "n226"
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 11
       },
       {
        "color": "W",
        "x": 0,
        "y": 11
       },
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 10
       },
       {
        "color": "W",
        "x": 0,
        "y": 10
       },
       {
        "color": "B",
        "x": 0,
        "y": 9
       },
       {
        "color": "W",
        "x": 0,
        "y": 10
       }
      ]
     },
     {
      "x": 1,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 11
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 10
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 10
       },
       {
        "color": "B",
        "x": 0,
        "y": 11
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 4,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 14
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-09",
  "levelIndex": 2,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活（连棋成两眼）",
  "goalText": "黑先，救活被白围住的黑棋（做出两只眼）。",
  "instruction": "依主解 (13,18)→(14,17) 次序在下边连棋做眼，黑整块成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-23.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n187",
   "branches": [
    {
     "x": 13,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 16
     },
     "next": "n186"
    },
    {
     "x": 14,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 16
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 14
      },
      {
       "color": "B",
       "x": 13,
       "y": 15
      },
      {
       "color": "W",
       "x": 12,
       "y": 15
      }
     ]
    },
    {
     "x": 14,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 14
      }
     ]
    },
    {
     "x": 12,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n186",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n187",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 16
      },
      "next": "n186"
     },
     {
      "x": 14,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       },
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 12,
        "y": 15
       }
      ]
     },
     {
      "x": 14,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "7k-10",
  "levelIndex": 2,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 12
   },
   {
    "color": "W",
    "x": 17,
    "y": 12
   },
   {
    "color": "W",
    "x": 14,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右边做活（次序成两眼）",
  "goalText": "黑先，使右边被围的黑棋做出两只眼成活。",
  "instruction": "依主解 (18,14)→(17,15) 次序在右边线连棋做眼，黑整块成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-10.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n407",
   "branches": [
    {
     "x": 18,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 18
     },
     "next": "n406"
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      }
     ]
    },
    {
     "x": 17,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n406",
    "branches": [
     {
      "x": 17,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n407",
    "branches": [
     {
      "x": 18,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n406"
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       }
      ]
     },
     {
      "x": 17,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-01",
  "levelIndex": 3,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右侧做活（成两眼）",
  "goalText": "黑先，使右侧被围黑棋做出两只眼成活。",
  "instruction": "依主解 (18,15)→(18,13) 次序连棋做眼，黑整串具两个真眼区（结构事实），白无法杀黑。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-58.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n269",
   "branches": [
    {
     "x": 18,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 13
     },
     "next": "n268"
    },
    {
     "x": 16,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    },
    {
     "x": 18,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      }
     ]
    },
    {
     "x": 18,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n268",
    "branches": [
     {
      "x": 18,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n269",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 13
      },
      "next": "n268"
     },
     {
      "x": 16,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-02",
  "levelIndex": 3,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 14,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 18,
    "y": 13
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活（成两眼）",
  "goalText": "黑先，使被围黑棋做成两只眼成活。",
  "instruction": "依主解 (16,13)→(15,14) 次序连棋做眼，黑串具两个纯黑真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-02.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n387",
   "branches": [
    {
     "x": 16,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 14
     },
     "next": "n386"
    },
    {
     "x": 18,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      },
      {
       "color": "B",
       "x": 15,
       "y": 14
      }
     ]
    },
    {
     "x": 15,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      }
     ]
    },
    {
     "x": 15,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 14
      },
      {
       "color": "W",
       "x": 15,
       "y": 13
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 12
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      }
     ]
    },
    {
     "x": 16,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 13
      },
      {
       "color": "B",
       "x": 15,
       "y": 14
      },
      {
       "color": "W",
       "x": 15,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n386",
    "branches": [
     {
      "x": 15,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 15,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n387",
    "branches": [
     {
      "x": 16,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 14
      },
      "next": "n386"
     },
     {
      "x": 18,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 15,
        "y": 14
       }
      ]
     },
     {
      "x": 15,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       }
      ]
     },
     {
      "x": 15,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 14
       },
       {
        "color": "W",
        "x": 15,
        "y": 13
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 12
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       }
      ]
     },
     {
      "x": 16,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 13
       },
       {
        "color": "B",
        "x": 15,
        "y": 14
       },
       {
        "color": "W",
        "x": 15,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-03",
  "levelIndex": 3,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右下做活（连底线成眼）",
  "goalText": "黑先，使右下被围黑棋做成两眼成活。",
  "instruction": "依主解 (17,18)→(17,17) 次序连棋至底线，黑整块成两眼（含 (18,18) 眼位与底线眼形），白无法杀黑。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-31.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n203",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 16
     },
     "next": "n202"
    },
    {
     "x": 17,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 11,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 11,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n202",
    "branches": [
     {
      "x": 17,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n203",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n202"
     },
     {
      "x": 17,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-04",
  "levelIndex": 3,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "角部做活（连回成眼）",
  "goalText": "黑先，使被白厚势围住的黑棋做活。",
  "instruction": "依主解 (17,18)→(18,16)：先占角部要点，白 (16,18) 应后黑连回，角上黑块成两眼（必要时可反提白子成眼）净活；走其他首手白均有杀棋应手。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-33.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n207",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 18
     },
     "next": "n206"
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n206",
    "branches": [
     {
      "x": 18,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n207",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n206"
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-05",
  "levelIndex": 3,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 12,
    "y": 13
   },
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 11,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 9
   },
   {
    "color": "W",
    "x": 14,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "破眼杀白（一眼一假眼）",
  "goalText": "黑先，杀白棋大块——使其只有一只眼（另一只是假眼）而无法做活。",
  "instruction": "黑按主解 (13,17)→(12,16) 次序落子后，白棋只能形成一眼+假眼；白无论再走哪里都无法补成两只眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-55.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n263",
   "branches": [
    {
     "x": 13,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 17
     },
     "next": "n262"
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 12,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 12,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n262",
    "branches": [
     {
      "x": 12,
      "y": 16,
      "type": "success",
      "reason": "Correct. White has one eye and one false eye."
     },
     {
      "x": 12,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 12,
      "y": 18,
      "type": "success",
      "reason": "Also correct."
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 14
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n263",
    "branches": [
     {
      "x": 13,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n262"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-06",
  "levelIndex": 3,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "净吃白二子",
  "goalText": "黑先，净吃被围的白棋两子。",
  "instruction": "黑 (14,16) 抢占白子唯一逃路要点；白无论向何处应，黑均封锁收气净提白子（无劫）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-101.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n27",
   "branches": [
    {
     "x": 14,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 17
     },
     "next": "n26"
    },
    {
     "x": 13,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 13,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 16
      },
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n26",
    "branches": [
     {
      "x": 15,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 13,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n27",
    "branches": [
     {
      "x": 14,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n26"
     },
     {
      "x": 13,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-07",
  "levelIndex": 3,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 5,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 7,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 8,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 11,
   "maxY": 18
  },
  "title": "中央黑棋做活（连底线）",
  "goalText": "黑先，使被围黑棋连接并做成两眼成活。",
  "instruction": "依主解 (5,18)→(7,18) 次序把中央黑块连到底线并做出两眼（含 (6,18) 眼位），白无法杀黑。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-32.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n205",
   "branches": [
    {
     "x": 5,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 18
     },
     "next": "n204"
    },
    {
     "x": 6,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 7,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      }
     ]
    },
    {
     "x": 7,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 7,
       "y": 18
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 8,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 18
      },
      {
       "color": "W",
       "x": 7,
       "y": 18
      },
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 10,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 5,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n204",
    "branches": [
     {
      "x": 7,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     },
     {
      "x": 5,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n205",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n204"
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 7,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 8,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 18
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 10,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-08",
  "levelIndex": 3,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 13,
    "y": 9
   },
   {
    "color": "B",
    "x": 7,
    "y": 10
   },
   {
    "color": "B",
    "x": 8,
    "y": 10
   },
   {
    "color": "B",
    "x": 12,
    "y": 10
   },
   {
    "color": "B",
    "x": 15,
    "y": 10
   },
   {
    "color": "B",
    "x": 16,
    "y": 10
   },
   {
    "color": "B",
    "x": 17,
    "y": 10
   },
   {
    "color": "B",
    "x": 1,
    "y": 11
   },
   {
    "color": "B",
    "x": 4,
    "y": 11
   },
   {
    "color": "B",
    "x": 5,
    "y": 11
   },
   {
    "color": "B",
    "x": 6,
    "y": 11
   },
   {
    "color": "B",
    "x": 7,
    "y": 11
   },
   {
    "color": "B",
    "x": 9,
    "y": 11
   },
   {
    "color": "B",
    "x": 10,
    "y": 11
   },
   {
    "color": "B",
    "x": 11,
    "y": 11
   },
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 3,
    "y": 12
   },
   {
    "color": "B",
    "x": 11,
    "y": 12
   },
   {
    "color": "B",
    "x": 12,
    "y": 12
   },
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 12,
    "y": 13
   },
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 8,
    "y": 15
   },
   {
    "color": "B",
    "x": 9,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 9
   },
   {
    "color": "W",
    "x": 5,
    "y": 9
   },
   {
    "color": "W",
    "x": 7,
    "y": 9
   },
   {
    "color": "W",
    "x": 1,
    "y": 10
   },
   {
    "color": "W",
    "x": 3,
    "y": 10
   },
   {
    "color": "W",
    "x": 2,
    "y": 11
   },
   {
    "color": "W",
    "x": 3,
    "y": 11
   },
   {
    "color": "W",
    "x": 8,
    "y": 11
   },
   {
    "color": "W",
    "x": 12,
    "y": 11
   },
   {
    "color": "W",
    "x": 14,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 16,
    "y": 11
   },
   {
    "color": "W",
    "x": 4,
    "y": 12
   },
   {
    "color": "W",
    "x": 7,
    "y": 12
   },
   {
    "color": "W",
    "x": 8,
    "y": 12
   },
   {
    "color": "W",
    "x": 10,
    "y": 12
   },
   {
    "color": "W",
    "x": 13,
    "y": 12
   },
   {
    "color": "W",
    "x": 17,
    "y": 12
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 8,
    "y": 13
   },
   {
    "color": "W",
    "x": 10,
    "y": 13
   },
   {
    "color": "W",
    "x": 11,
    "y": 13
   },
   {
    "color": "W",
    "x": 18,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 8,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "吃白四断子（次序断吃）",
  "goalText": "黑先，吃住白方的四颗切断之子。",
  "instruction": "黑依主解 (6,13)→(5,14) 以正确次序封锁断吃，白四断子无法外逃、终成死子被提；谱注：次序松缓虽也能吃子但落后手，非最佳。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-52.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1438",
   "branches": [
    {
     "x": 6,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 7,
      "y": 14
     },
     "next": "n1437"
    },
    {
     "x": 6,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 7,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 13
      },
      {
       "color": "W",
       "x": 5,
       "y": 14
      },
      {
       "color": "B",
       "x": 7,
       "y": 14
      },
      {
       "color": "W",
       "x": 8,
       "y": 14
      },
      {
       "color": "B",
       "x": 7,
       "y": 13
      },
      {
       "color": "W",
       "x": 6,
       "y": 12
      }
     ]
    },
    {
     "x": 7,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 7,
       "y": 14
      },
      {
       "color": "W",
       "x": 6,
       "y": 13
      },
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 7,
       "y": 15
      }
     ]
    },
    {
     "x": 5,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 14
      },
      {
       "color": "W",
       "x": 5,
       "y": 13
      },
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 7,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      }
     ]
    },
    {
     "x": 2,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      }
     ]
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1437",
    "branches": [
     {
      "x": 5,
      "y": 14,
      "type": "success",
      "reason": "Correct. Black captures White's four cutting stones."
     }
    ]
   },
   {
    "id": "n1438",
    "branches": [
     {
      "x": 6,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 7,
       "y": 14
      },
      "next": "n1437"
     },
     {
      "x": 6,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 7,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 13
       },
       {
        "color": "W",
        "x": 5,
        "y": 14
       },
       {
        "color": "B",
        "x": 7,
        "y": 14
       },
       {
        "color": "W",
        "x": 8,
        "y": 14
       },
       {
        "color": "B",
        "x": 7,
        "y": 13
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       }
      ]
     },
     {
      "x": 7,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 14
       },
       {
        "color": "W",
        "x": 6,
        "y": 13
       },
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 7,
        "y": 15
       }
      ]
     },
     {
      "x": 5,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       },
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 7,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     },
     {
      "x": 2,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-09",
  "levelIndex": 3,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 9,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 7,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "对杀救子吃白",
  "goalText": "黑先，在对杀中胜出：救出己方被叫吃的棋子，同时吃住对杀中的白棋。",
  "instruction": "依主解 (14,17)→(12,17) 次序：黑先护住自身关键子避免被白于 A 位提掉，随后收紧白 B/C 的气——白对杀气短被吃。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-49.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n246",
   "branches": [
    {
     "x": 14,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 13,
      "y": 13
     },
     "next": "n245"
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      }
     ]
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      }
     ]
    },
    {
     "x": 12,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 12
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 14,
       "y": 12
      }
     ]
    },
    {
     "x": 14,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 12
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 12
      }
     ]
    },
    {
     "x": 14,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 14,
       "y": 12
      },
      {
       "color": "B",
       "x": 13,
       "y": 12
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 13,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 12
      },
      {
       "color": "B",
       "x": 14,
       "y": 12
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n245",
    "branches": [
     {
      "x": 12,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 13,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n246",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 13,
       "y": 13
      },
      "next": "n245"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 12
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 12
       }
      ]
     },
     {
      "x": 14,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 12
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 12
       }
      ]
     },
     {
      "x": 14,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 12
       },
       {
        "color": "B",
        "x": 13,
        "y": 12
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 12
       },
       {
        "color": "B",
        "x": 14,
        "y": 12
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "6k-10",
  "levelIndex": 3,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "紧气吃白两子",
  "goalText": "黑先，设法吃住白方的两子。",
  "instruction": "用送吃/紧气次序切断白棋外逃之路，使两子无处增加气而被提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-28.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n197",
   "branches": [
    {
     "x": 18,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 17,
      "y": 18
     },
     "next": "n196"
    },
    {
     "x": 17,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n195",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 18,
      "y": 16,
      "type": "success",
      "reason": "Also correct. Playing A at B is better style though because White might play C as a ko threat later. If you ignore the ko threat, would you rather lose two stones or three?"
     }
    ]
   },
   {
    "id": "n196",
    "branches": [
     {
      "x": 17,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n195"
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n197",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 18
      },
      "next": "n196"
     },
     {
      "x": 17,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-01",
  "levelIndex": 4,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 10
   },
   {
    "color": "W",
    "x": 1,
    "y": 11
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 12
   },
   {
    "color": "W",
    "x": 4,
    "y": 12
   },
   {
    "color": "W",
    "x": 5,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 7,
   "maxY": 18
  },
  "title": "左侧做活：A/B 见合成眼",
  "goalText": "黑先，救活左方被白分断的黑棋并做成两只眼。",
  "instruction": "黑依主解次序 (0,15)→(1,15)→(0,13) 紧气并把左右黑棋连成整块；终局黑在左侧形成两眼（见合要点 A(0,17)/B(2,17)），白无法杀棋。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-46.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n240",
   "branches": [
    {
     "x": 0,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 16
     },
     "next": "n239"
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 12
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 12
      },
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n238",
    "branches": [
     {
      "x": 0,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n239",
    "branches": [
     {
      "x": 1,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 12
      },
      "next": "n238"
     },
     {
      "x": 0,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n240",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 16
      },
      "next": "n239"
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 12
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-02",
  "levelIndex": 4,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 6,
    "y": 12
   },
   {
    "color": "B",
    "x": 6,
    "y": 13
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 7,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 11
   },
   {
    "color": "W",
    "x": 5,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 5,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 0,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 9,
   "maxX": 9,
   "maxY": 18
  },
  "title": "对杀吃白断子",
  "goalText": "黑先，在对杀中获胜，吃住白方的切断之子。",
  "instruction": "从下边紧气发起对杀：主解黑(4,18)→(6,18)→(2,18) 收气，白无法延气，黑在对杀中把白切断之子提掉。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-57.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n267",
   "branches": [
    {
     "x": 4,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 18
     },
     "next": "n266"
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      }
     ]
    },
    {
     "x": 6,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n265",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "success",
      "reason": "Correct. Black wins the capturing race."
     }
    ]
   },
   {
    "id": "n266",
    "branches": [
     {
      "x": 6,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 17
      },
      "next": "n265"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n267",
    "branches": [
     {
      "x": 4,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n266"
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       }
      ]
     },
     {
      "x": 6,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-03",
  "levelIndex": 4,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右侧做活（提子成两眼）",
  "goalText": "黑先，使右侧被围的黑棋整块做出两只眼成活。",
  "instruction": "依主解 (17,18)→(15,18)→(18,18) 次序先在左侧/上方扩出眼位，末手在右上成眼；白侵入之子被提，黑终局有 (16,18) 与 (18,16) 一带两个眼区。次序或落点错（如直接 (18,16)）则黑只能成假眼/单眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-68.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n298",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 17
     },
     "next": "n297"
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n296",
    "branches": [
     {
      "x": 18,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n297",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n296"
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n298",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 17
      },
      "next": "n297"
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-04",
  "levelIndex": 4,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 0,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 5,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 7,
   "maxY": 18
  },
  "title": "紧气提白（角部）",
  "goalText": "黑先，紧气提掉角上白棋（使其无法延气）。",
  "instruction": "依主解 (0,13)→(1,15)→(0,15) 次序自下而上紧气，白角棋子气尽被提（主解末手黑提白 4 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-54.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n261",
   "branches": [
    {
     "x": 0,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 14
     },
     "next": "n260"
    },
    {
     "x": 1,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 12
      },
      {
       "color": "W",
       "x": 1,
       "y": 10
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n259",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n260",
    "branches": [
     {
      "x": 1,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 14
      },
      "next": "n259"
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n261",
    "branches": [
     {
      "x": 0,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 14
      },
      "next": "n260"
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 1,
        "y": 10
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-05",
  "levelIndex": 4,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 18,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右缘净杀白（避劫双活）",
  "goalText": "黑先，净杀白棋（避免走成劫或双活）。",
  "instruction": "依主解沿右缘 (18,14)→(18,12)→(18,15) 次序紧气收尽白棋外气后提掉白 6 子；若黑次序错白可成劫/双活（\"White can resist with a ko. Can you do better?\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-85.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n340",
   "branches": [
    {
     "x": 18,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 16
     },
     "next": "n339"
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      }
     ]
    },
    {
     "x": 18,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 15,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n338",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n339",
    "branches": [
     {
      "x": 18,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 14
      },
      "next": "n338"
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 17,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n340",
    "branches": [
     {
      "x": 18,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n339"
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       }
      ]
     },
     {
      "x": 18,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 15,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-06",
  "levelIndex": 4,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 6,
   "maxY": 18
  },
  "title": "做活（连棋成两眼）",
  "goalText": "黑先，救活被白封住的黑棋（做出两只眼）。",
  "instruction": "依主解 (1,18)→(1,17)→(0,17) 次序在左下扩展并连棋，黑整块做出两眼成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-36.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n215",
   "branches": [
    {
     "x": 1,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 2,
      "y": 18
     },
     "next": "n214"
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 16
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n213",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n214",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n213"
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n215",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 18
      },
      "next": "n214"
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-07",
  "levelIndex": 4,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 18,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 9
   },
   {
    "color": "W",
    "x": 14,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 16,
    "y": 11
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 14,
    "y": 12
   },
   {
    "color": "W",
    "x": 18,
    "y": 12
   },
   {
    "color": "W",
    "x": 14,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "次序紧气提白（弃子）",
  "goalText": "黑先，以次序紧气提掉白棋（含弃子）。",
  "instruction": "依主解 (17,14)→(14,14)→(16,14) 次序在右侧弃子后收紧，白三子被提（主解累计提白 3 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-50.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n249",
   "branches": [
    {
     "x": 17,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 14
     },
     "next": "n248"
    },
    {
     "x": 15,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 14
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 11
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n247",
    "branches": [
     {
      "x": 16,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n248",
    "branches": [
     {
      "x": 14,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 14
      },
      "next": "n247"
     }
    ]
   },
   {
    "id": "n249",
    "branches": [
     {
      "x": 17,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 14
      },
      "next": "n248"
     },
     {
      "x": 15,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 11
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-08",
  "levelIndex": 4,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活（成两眼）",
  "goalText": "黑先，使被围黑棋做成两眼成活。",
  "instruction": "依主解 (15,18)→(13,18)→(18,17) 次序做眼连棋，黑整串具两个真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-34.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n210",
   "branches": [
    {
     "x": 15,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 13,
      "y": 16
     },
     "next": "n209"
    },
    {
     "x": 13,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n208",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n209",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 15
      },
      "next": "n208"
     }
    ]
   },
   {
    "id": "n210",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 13,
       "y": 16
      },
      "next": "n209"
     },
     {
      "x": 13,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-09",
  "levelIndex": 4,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "角部净杀白",
  "goalText": "黑先，净杀角上被围的白棋。",
  "instruction": "黑 (17,18) 先扳封死白角底线眼位，再依次收气（次序不可颠倒，否则成劫）；白角仅余一气、自填即自杀，黑提净。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-139.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n161",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 17
     },
     "next": "n160"
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n159",
    "branches": [
     {
      "x": 18,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n160",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n159"
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n161",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 17
      },
      "next": "n160"
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "5k-10",
  "levelIndex": 4,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 9,
   "maxY": 18
  },
  "title": "下边做活",
  "goalText": "黑先，救活下方被围的黑棋。",
  "instruction": "利用下边做眼与连接要点，先手把黑棋连成整块并形成两只眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-70.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n303",
   "branches": [
    {
     "x": 1,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 18
     },
     "next": "n302"
    },
    {
     "x": 2,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 4,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n301",
    "branches": [
     {
      "x": 3,
      "y": 18,
      "type": "success",
      "reason": "Correct. Black lives with two eyes."
     }
    ]
   },
   {
    "id": "n302",
    "branches": [
     {
      "x": 2,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 18
      },
      "next": "n301"
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n303",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n302"
     },
     {
      "x": 2,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-01",
  "levelIndex": 5,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "破眼杀白（阻断连接）",
  "goalText": "黑先，杀掉上方被围的白棋（使其无法做成两只眼）。",
  "instruction": "依主解 (15,18)→(16,17)→(16,16) 连续抢占眼的要点并阻断白左右两块连通：白两块既连不通、也各自做不出第二只眼，终局只剩单点眼位而死。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-17.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n175",
   "branches": [
    {
     "x": 15,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 18
     },
     "next": "n174"
    },
    {
     "x": 16,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "White's already alive.",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n173",
    "branches": [
     {
      "x": 16,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n174",
    "branches": [
     {
      "x": 16,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n173"
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n175",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n174"
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "White's already alive.",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-02",
  "levelIndex": 5,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 6,
   "maxY": 18
  },
  "title": "紧气提白两子",
  "goalText": "黑先，紧气提掉白方的棋子。",
  "instruction": "依主解 (0,13)→(1,14)→(0,16) 次序收气，白两子被提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-97.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n373",
   "branches": [
    {
     "x": 0,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 15
     },
     "next": "n372"
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 12
      }
     ]
    },
    {
     "x": 1,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n371",
    "branches": [
     {
      "x": 0,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n372",
    "branches": [
     {
      "x": 1,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 12
      },
      "next": "n371"
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n373",
    "branches": [
     {
      "x": 0,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n372"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 12
       }
      ]
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-03",
  "levelIndex": 5,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 14,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 14,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 16,
    "y": 11
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 12
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 18,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右缘切断提白",
  "goalText": "黑先，沿右缘切断并提掉白棋。",
  "instruction": "依主解 (18,13)→(18,17)→(18,14) 次序占住右缘并收紧，白四子被提；变化注释提示走缓则成劫（黑可做得更好）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-116.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n77",
   "branches": [
    {
     "x": 18,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 12
     },
     "next": "n76"
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      }
     ]
    },
    {
     "x": 18,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      }
     ]
    },
    {
     "x": 17,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      }
     ]
    },
    {
     "x": 17,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n75",
    "branches": [
     {
      "x": 18,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n76",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 13
      },
      "next": "n75"
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n77",
    "branches": [
     {
      "x": 18,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 12
      },
      "next": "n76"
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       }
      ]
     },
     {
      "x": 17,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-04",
  "levelIndex": 5,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 14,
    "y": 10
   },
   {
    "color": "B",
    "x": 16,
    "y": 10
   },
   {
    "color": "B",
    "x": 13,
    "y": 11
   },
   {
    "color": "B",
    "x": 17,
    "y": 11
   },
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 12
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 8,
   "maxX": 18,
   "maxY": 18
  },
  "title": "中腹杀白（暂双活终死）",
  "goalText": "黑先，杀死中腹白棋（白整块最终无活路）。",
  "instruction": "依主解次序 (18,12)→(16,13)→(17,12) 收紧白外气：白 A/B 两块即便暂成双活形，外气被收尽后整块仍死（成功叶明示 \"White's dead.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-108.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n441",
   "branches": [
    {
     "x": 18,
     "y": 12,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 13
     },
     "next": "n440"
    },
    {
     "x": 16,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      }
     ]
    },
    {
     "x": 18,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 12
      },
      {
       "color": "B",
       "x": 18,
       "y": 11
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      }
     ]
    },
    {
     "x": 17,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 12
      },
      {
       "color": "W",
       "x": 16,
       "y": 13
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n439",
    "branches": [
     {
      "x": 17,
      "y": 12,
      "type": "success",
      "reason": "Correct. Even if White plays at A now, the groups at A and B are in a temporary seki, but because White's outside stones will eventually be captured, White's dead."
     }
    ]
   },
   {
    "id": "n440",
    "branches": [
     {
      "x": 16,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 12
      },
      "next": "n439"
     }
    ]
   },
   {
    "id": "n441",
    "branches": [
     {
      "x": 18,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 13
      },
      "next": "n440"
     },
     {
      "x": 16,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       }
      ]
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 12
       },
       {
        "color": "B",
        "x": 18,
        "y": 11
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       }
      ]
     },
     {
      "x": 17,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 16,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-05",
  "levelIndex": 5,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 8,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 10,
   "maxY": 18
  },
  "title": "吃白断子（紧气）",
  "goalText": "黑先，吃住白方的断子。",
  "instruction": "抓住白断子气紧之机连续紧气：主解黑(5,17)→(4,16)→(5,15) 把白断子与外面切断后提吃。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-99.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n381",
   "branches": [
    {
     "x": 5,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 17
     },
     "next": "n380"
    },
    {
     "x": 4,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 14
      },
      {
       "color": "W",
       "x": 7,
       "y": 15
      }
     ]
    },
    {
     "x": 5,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      }
     ]
    },
    {
     "x": 6,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      }
     ]
    },
    {
     "x": 4,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n379",
    "branches": [
     {
      "x": 5,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 6,
      "y": 15,
      "type": "failure",
      "reason": "It's also possible, but not the best. When White pushes at A, Black can't block at B, because of cut at C.",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n380",
    "branches": [
     {
      "x": 4,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 18
      },
      "next": "n379"
     }
    ]
   },
   {
    "id": "n381",
    "branches": [
     {
      "x": 5,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 17
      },
      "next": "n380"
     },
     {
      "x": 4,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 14
       },
       {
        "color": "W",
        "x": 7,
        "y": 15
       }
      ]
     },
     {
      "x": 5,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     },
     {
      "x": 6,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       }
      ]
     },
     {
      "x": 4,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-06",
  "levelIndex": 5,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 18
   },
   {
    "color": "B",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "紧气提白大块",
  "goalText": "黑先，杀吃被围住的白棋整块（使其无法做活）。",
  "instruction": "先点入要害收紧白棋气（(16,17)→(16,18)），再于 (14,17) 一击提掉白整块；若黑先在 A 位(16,18)动手，白可成劫活/双活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-128.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n117",
   "branches": [
    {
     "x": 16,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 17
     },
     "next": "n116"
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n115",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n116",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n115"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n117",
    "branches": [
     {
      "x": 16,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 17
      },
      "next": "n116"
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-07",
  "levelIndex": 5,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 0,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 8,
   "maxY": 18
  },
  "title": "对杀：一眼杀无眼",
  "goalText": "黑先，在对杀中吃住白棋（利用“一眼杀无眼”的气差取胜）。",
  "instruction": "黑先手紧气并在下边做出一眼，白无眼且气不足：主解黑(2,18)→(1,18)→(5,18) 后白对杀必败被吃；失败分支说明若次序错，白可双活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-132.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n132",
   "branches": [
    {
     "x": 2,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 18
     },
     "next": "n131"
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    },
    {
     "x": 5,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n130",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "success",
      "reason": "Correct. Even if White connects at A next, she'll lose the capturing race because it's 'one eye vs no eye'."
     },
     {
      "x": 0,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n131",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 14
      },
      "next": "n130"
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 5,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n132",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n131"
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     },
     {
      "x": 5,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-08",
  "levelIndex": 5,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 17,
    "y": 11
   },
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 18,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 17,
    "y": 10
   },
   {
    "color": "W",
    "x": 18,
    "y": 10
   },
   {
    "color": "W",
    "x": 14,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 18,
    "y": 11
   },
   {
    "color": "W",
    "x": 14,
    "y": 12
   },
   {
    "color": "W",
    "x": 16,
    "y": 12
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 8,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右上杀白（次序破眼）",
  "goalText": "黑先，杀掉右上白棋（使其无处做活）。",
  "instruction": "依主解 (18,14)→(16,13)→(18,13) 次序在右上收紧并抢占眼位要点，白整块做不出两只眼（变着注释 \"After White 4 here, there's no way to live.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-40.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n223",
   "branches": [
    {
     "x": 18,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 17,
      "y": 13
     },
     "next": "n222"
    },
    {
     "x": 17,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 16,
       "y": 12
      }
     ]
    },
    {
     "x": 16,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 14,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 13
      },
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 12
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 13
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 16,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 13
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n221",
    "branches": [
     {
      "x": 18,
      "y": 13,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n222",
    "branches": [
     {
      "x": 16,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n221"
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n223",
    "branches": [
     {
      "x": 18,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 13
      },
      "next": "n222"
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 12
       }
      ]
     },
     {
      "x": 16,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 14,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 16,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-09",
  "levelIndex": 5,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 2,
    "y": 18
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 9,
   "maxY": 18
  },
  "title": "紧气提白（左下）",
  "goalText": "黑先，紧气提掉左下方白棋。",
  "instruction": "依主解 (0,15)→(1,16)→(1,17) 次序从左下收气，白四子气尽被提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-129.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n120",
   "branches": [
    {
     "x": 0,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 0,
      "y": 16
     },
     "next": "n119"
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n118",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n119",
    "branches": [
     {
      "x": 1,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n118"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n120",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 16
      },
      "next": "n119"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "4k-10",
  "levelIndex": 5,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 3,
    "y": 12
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 18
   },
   {
    "color": "B",
    "x": 5,
    "y": 18
   },
   {
    "color": "W",
    "x": 3,
    "y": 11
   },
   {
    "color": "W",
    "x": 4,
    "y": 11
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 5,
    "y": 13
   },
   {
    "color": "W",
    "x": 6,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 9,
   "maxX": 9,
   "maxY": 18
  },
  "title": "做活（连棋成两眼）",
  "goalText": "黑先，救活被白围住的黑棋（做出两只眼）。",
  "instruction": "依主解 (3,14)→(4,15)→(4,14) 次序连棋做眼，黑整块成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-26.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n634",
   "branches": [
    {
     "x": 3,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 5,
      "y": 15
     },
     "next": "n633"
    },
    {
     "x": 4,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 13
      },
      {
       "color": "W",
       "x": 3,
       "y": 15
      },
      {
       "color": "B",
       "x": 3,
       "y": 14
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 5,
       "y": 15
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 14
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      }
     ]
    },
    {
     "x": 5,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 14
      },
      {
       "color": "B",
       "x": 4,
       "y": 13
      },
      {
       "color": "W",
       "x": 4,
       "y": 12
      }
     ]
    },
    {
     "x": 4,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 14
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 4,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 13
      }
     ]
    },
    {
     "x": 4,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 13
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n632",
    "branches": [
     {
      "x": 4,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n633",
    "branches": [
     {
      "x": 4,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 14
      },
      "next": "n632"
     }
    ]
   },
   {
    "id": "n634",
    "branches": [
     {
      "x": 3,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 15
      },
      "next": "n633"
     },
     {
      "x": 4,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 13
       },
       {
        "color": "W",
        "x": 3,
        "y": 15
       },
       {
        "color": "B",
        "x": 3,
        "y": 14
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 14
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       }
      ]
     },
     {
      "x": 5,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 14
       },
       {
        "color": "B",
        "x": 4,
        "y": 13
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 4,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 13
       }
      ]
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 13
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-01",
  "levelIndex": 6,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 12
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 6,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 8,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 8,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 10,
   "maxY": 18
  },
  "title": "吃白标记子（见合）",
  "goalText": "黑先，吃住/杀灭白方标记之子（使其无法做活）。",
  "instruction": "依主解次序 (5,17)→(4,17)→(3,16) 封锁白标记子并见合紧气（A/B miai），白无法逃出或成两眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-126.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n519",
   "branches": [
    {
     "x": 5,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 5,
      "y": 16
     },
     "next": "n518"
    },
    {
     "x": 4,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 16
      }
     ]
    },
    {
     "x": 3,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      }
     ]
    },
    {
     "x": 4,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    },
    {
     "x": 5,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      },
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n517",
    "branches": [
     {
      "x": 3,
      "y": 16,
      "type": "success",
      "reason": "Correct. A and B are miai next."
     }
    ]
   },
   {
    "id": "n518",
    "branches": [
     {
      "x": 4,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 17
      },
      "next": "n517"
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n519",
    "branches": [
     {
      "x": 5,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 16
      },
      "next": "n518"
     },
     {
      "x": 4,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 16
       }
      ]
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       }
      ]
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-02",
  "levelIndex": 6,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 12,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活（吃子成两眼）",
  "goalText": "黑先，使被围黑棋做出两只眼成活。",
  "instruction": "依主解次序 (16,18)→(17,15)→(15,18) 以吃子/连回次序做眼，黑整串具两个真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-19.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n180",
   "branches": [
    {
     "x": 16,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 18
     },
     "next": "n179"
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 17,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 17,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n178",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 17,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n179",
    "branches": [
     {
      "x": 17,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n178"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n180",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n179"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 17,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-03",
  "levelIndex": 6,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 18
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 9,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 18
   },
   {
    "color": "W",
    "x": 12,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 7,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "弃子紧气提白",
  "goalText": "黑先，紧气提吃白棋。",
  "instruction": "依主解 (17,18)→(16,17)→回 (17,18) 次序先弃后取、收紧白气，白棋被提（累计提白 3 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-79.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n324",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 17
     },
     "next": "n323"
    },
    {
     "x": 13,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 12,
       "y": 14
      },
      {
       "color": "B",
       "x": 14,
       "y": 14
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 14
      }
     ]
    },
    {
     "x": 14,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 12,
       "y": 14
      },
      {
       "color": "W",
       "x": 12,
       "y": 13
      }
     ]
    },
    {
     "x": 12,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 14
      },
      {
       "color": "W",
       "x": 12,
       "y": 13
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 12,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 13
      },
      {
       "color": "W",
       "x": 12,
       "y": 14
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 8,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n322",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n323",
    "branches": [
     {
      "x": 16,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 18
      },
      "next": "n322"
     }
    ]
   },
   {
    "id": "n324",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n323"
     },
     {
      "x": 13,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 12,
        "y": 14
       },
       {
        "color": "B",
        "x": 14,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 14
       }
      ]
     },
     {
      "x": 14,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 12,
        "y": 14
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       }
      ]
     },
     {
      "x": 12,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 14
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 12,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 12,
        "y": 14
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 8,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-04",
  "levelIndex": 6,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 6,
    "y": 13
   },
   {
    "color": "B",
    "x": 7,
    "y": 13
   },
   {
    "color": "B",
    "x": 8,
    "y": 13
   },
   {
    "color": "B",
    "x": 11,
    "y": 13
   },
   {
    "color": "B",
    "x": 12,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 9,
    "y": 14
   },
   {
    "color": "B",
    "x": 10,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 9,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 18
   },
   {
    "color": "B",
    "x": 6,
    "y": 18
   },
   {
    "color": "B",
    "x": 7,
    "y": 18
   },
   {
    "color": "B",
    "x": 8,
    "y": 18
   },
   {
    "color": "B",
    "x": 11,
    "y": 18
   },
   {
    "color": "B",
    "x": 12,
    "y": 18
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 7,
    "y": 14
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 8,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 15
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 8,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 16,
   "maxY": 18
  },
  "title": "紧气吃白标记子",
  "goalText": "黑先，吃住白方被围的标记之子（紧气/接不归）。",
  "instruction": "依主解次序 (13,14)→(11,16)→(12,16) 收紧白标记子气，使其无处延气被提（主解累计提白 2 子）；谱注白若脱先，黑只能吃到标记 1 子，其余白仍活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-100.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n25",
   "branches": [
    {
     "x": 13,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 12,
      "y": 15
     },
     "next": "n24"
    },
    {
     "x": 12,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      },
      {
       "color": "B",
       "x": 12,
       "y": 15
      },
      {
       "color": "W",
       "x": 11,
       "y": 15
      }
     ]
    },
    {
     "x": 11,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 11,
       "y": 16
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 11,
       "y": 15
      }
     ]
    },
    {
     "x": 11,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 11,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      }
     ]
    },
    {
     "x": 12,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 11,
       "y": 15
      },
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      }
     ]
    },
    {
     "x": 5,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      },
      {
       "color": "B",
       "x": 12,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 8,
       "y": 14
      },
      {
       "color": "W",
       "x": 6,
       "y": 15
      }
     ]
    },
    {
     "x": 8,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 14
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      },
      {
       "color": "B",
       "x": 12,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n23",
    "branches": [
     {
      "x": 12,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n24",
    "branches": [
     {
      "x": 11,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 11,
       "y": 15
      },
      "next": "n23"
     }
    ]
   },
   {
    "id": "n25",
    "branches": [
     {
      "x": 13,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 15
      },
      "next": "n24"
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       },
       {
        "color": "B",
        "x": 12,
        "y": 15
       },
       {
        "color": "W",
        "x": 11,
        "y": 15
       }
      ]
     },
     {
      "x": 11,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 11,
        "y": 15
       }
      ]
     },
     {
      "x": 11,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       }
      ]
     },
     {
      "x": 12,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 11,
        "y": 15
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       },
       {
        "color": "B",
        "x": 12,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 8,
        "y": 14
       },
       {
        "color": "W",
        "x": 6,
        "y": 15
       }
      ]
     },
     {
      "x": 8,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 14
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       },
       {
        "color": "B",
        "x": 12,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-05",
  "levelIndex": 6,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "边上做活（成两眼）",
  "goalText": "黑先，使被围黑棋做出两只眼成活。",
  "instruction": "依主解次序 (18,18)→(18,16)→(16,18) 在边上连棋做眼，黑整串具两个真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-110.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n57",
   "branches": [
    {
     "x": 18,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 15
     },
     "next": "n56"
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n55",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n56",
    "branches": [
     {
      "x": 18,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n55"
     }
    ]
   },
   {
    "id": "n57",
    "branches": [
     {
      "x": 18,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 15
      },
      "next": "n56"
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-06",
  "levelIndex": 6,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 13,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右边做活（成两眼）",
  "goalText": "黑先，使右边被围黑棋做出两眼成活。",
  "instruction": "依主解次序 (18,16)→(16,18)→(18,18) 连棋做眼并提白 1 子，黑串具多个真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-117.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n80",
   "branches": [
    {
     "x": 18,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 17,
      "y": 18
     },
     "next": "n79"
    },
    {
     "x": 16,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n78",
    "branches": [
     {
      "x": 18,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n79",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 17
      },
      "next": "n78"
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n80",
    "branches": [
     {
      "x": 18,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 18
      },
      "next": "n79"
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-07",
  "levelIndex": 6,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 6,
    "y": 12
   },
   {
    "color": "B",
    "x": 7,
    "y": 12
   },
   {
    "color": "B",
    "x": 8,
    "y": 12
   },
   {
    "color": "B",
    "x": 10,
    "y": 12
   },
   {
    "color": "B",
    "x": 11,
    "y": 12
   },
   {
    "color": "B",
    "x": 12,
    "y": 12
   },
   {
    "color": "B",
    "x": 14,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 6,
    "y": 13
   },
   {
    "color": "B",
    "x": 8,
    "y": 13
   },
   {
    "color": "B",
    "x": 9,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 18,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 18,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "B",
    "x": 9,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 18
   },
   {
    "color": "B",
    "x": 10,
    "y": 18
   },
   {
    "color": "B",
    "x": 11,
    "y": 18
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 7,
    "y": 9
   },
   {
    "color": "W",
    "x": 11,
    "y": 9
   },
   {
    "color": "W",
    "x": 15,
    "y": 9
   },
   {
    "color": "W",
    "x": 6,
    "y": 10
   },
   {
    "color": "W",
    "x": 8,
    "y": 10
   },
   {
    "color": "W",
    "x": 10,
    "y": 10
   },
   {
    "color": "W",
    "x": 12,
    "y": 10
   },
   {
    "color": "W",
    "x": 14,
    "y": 10
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 5,
    "y": 11
   },
   {
    "color": "W",
    "x": 13,
    "y": 11
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 4,
    "y": 12
   },
   {
    "color": "W",
    "x": 13,
    "y": 12
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 7,
    "y": 13
   },
   {
    "color": "W",
    "x": 10,
    "y": 13
   },
   {
    "color": "W",
    "x": 11,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 7,
    "y": 14
   },
   {
    "color": "W",
    "x": 9,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 9,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 1,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "中央连棋成活（整块成眼）",
  "goalText": "黑先，把中央被白隔开的黑棋连成整块成活。",
  "instruction": "依主解 (14,13)→(12,13)→(13,13) 连通中央黑块：连成整块后内部空间皆为眼/气，白无从着手杀棋；若次序或落点错，黑只剩一眼而整块死。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-100.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1001",
   "branches": [
    {
     "x": 14,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 14
     },
     "next": "n1000"
    },
    {
     "x": 12,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 13
      },
      {
       "color": "W",
       "x": 10,
       "y": 14
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      },
      {
       "color": "B",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 8,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 14
      },
      {
       "color": "W",
       "x": 8,
       "y": 15
      },
      {
       "color": "B",
       "x": 10,
       "y": 16
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      },
      {
       "color": "B",
       "x": 10,
       "y": 15
      },
      {
       "color": "W",
       "x": 10,
       "y": 14
      },
      {
       "color": "B",
       "x": 12,
       "y": 13
      },
      {
       "color": "W",
       "x": 11,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      }
     ]
    },
    {
     "x": 8,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 8,
       "y": 15
      },
      {
       "color": "W",
       "x": 8,
       "y": 14
      },
      {
       "color": "B",
       "x": 10,
       "y": 16
      },
      {
       "color": "W",
       "x": 11,
       "y": 16
      },
      {
       "color": "B",
       "x": 10,
       "y": 15
      },
      {
       "color": "W",
       "x": 10,
       "y": 14
      },
      {
       "color": "B",
       "x": 12,
       "y": 13
      },
      {
       "color": "W",
       "x": 11,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      }
     ]
    },
    {
     "x": 10,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 10,
       "y": 14
      },
      {
       "color": "W",
       "x": 10,
       "y": 16
      },
      {
       "color": "B",
       "x": 12,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 15,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 14
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 9,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 9,
       "y": 11
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      }
     ]
    },
    {
     "x": 9,
     "y": 10,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 9,
       "y": 10
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 9,
       "y": 9
      },
      {
       "color": "W",
       "x": 9,
       "y": 11
      },
      {
       "color": "B",
       "x": 10,
       "y": 11
      },
      {
       "color": "W",
       "x": 8,
       "y": 11
      }
     ]
    },
    {
     "x": 13,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 12,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n999",
    "branches": [
     {
      "x": 13,
      "y": 13,
      "type": "success",
      "reason": "Correct. It may look like Black's group only has false eyes. But Black's stones are all connected, so there's no way for White to atari Black to make him close the apparently 'false' eyes.\n\nIn fact, since an eye is really just a liberty inside a group of stones that are all connected around the outside, Black actually has plenty of eyes, and lives with at least 9 points in this special case."
     }
    ]
   },
   {
    "id": "n1000",
    "branches": [
     {
      "x": 12,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 11,
       "y": 14
      },
      "next": "n999"
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n1001",
    "branches": [
     {
      "x": 14,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 14
      },
      "next": "n1000"
     },
     {
      "x": 12,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 10,
        "y": 14
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       },
       {
        "color": "B",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 8,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 14
       },
       {
        "color": "W",
        "x": 8,
        "y": 15
       },
       {
        "color": "B",
        "x": 10,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       },
       {
        "color": "B",
        "x": 10,
        "y": 15
       },
       {
        "color": "W",
        "x": 10,
        "y": 14
       },
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 11,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       }
      ]
     },
     {
      "x": 8,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 15
       },
       {
        "color": "W",
        "x": 8,
        "y": 14
       },
       {
        "color": "B",
        "x": 10,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 16
       },
       {
        "color": "B",
        "x": 10,
        "y": 15
       },
       {
        "color": "W",
        "x": 10,
        "y": 14
       },
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 11,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       }
      ]
     },
     {
      "x": 10,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 14
       },
       {
        "color": "W",
        "x": 10,
        "y": 16
       },
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 15,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 14
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 9,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 9,
        "y": 11
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 9,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 9,
        "y": 10
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 9,
        "y": 9
       },
       {
        "color": "W",
        "x": 9,
        "y": 11
       },
       {
        "color": "B",
        "x": 10,
        "y": 11
       },
       {
        "color": "W",
        "x": 8,
        "y": 11
       }
      ]
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-08",
  "levelIndex": 6,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 17
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "B",
    "x": 9,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 8,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 9,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 13,
   "maxX": 13,
   "maxY": 18
  },
  "title": "下边做活（次序连棋）",
  "goalText": "黑先，使下边被白围住的黑棋做活。",
  "instruction": "依主解次序 (2,17)→(1,18)→(4,18)→(6,18) 在下边连棋做眼，黑整块成活；次序错则黑整块死（变着注 \"Black's already died.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-01.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n958",
   "branches": [
    {
     "x": 2,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 17
     },
     "next": "n957"
    },
    {
     "x": 6,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      },
      {
       "color": "B",
       "x": 7,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      }
     ]
    },
    {
     "x": 7,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 7,
       "y": 18
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 18
      }
     ]
    },
    {
     "x": 6,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 7,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 8,
       "y": 18
      },
      {
       "color": "B",
       "x": 7,
       "y": 17
      },
      {
       "color": "W",
       "x": 8,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n955",
    "branches": [
     {
      "x": 6,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n956",
    "branches": [
     {
      "x": 4,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 18
      },
      "next": "n955"
     }
    ]
   },
   {
    "id": "n957",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 18
      },
      "next": "n956"
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 7,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n958",
    "branches": [
     {
      "x": 2,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 17
      },
      "next": "n957"
     },
     {
      "x": 6,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 7,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 8,
        "y": 18
       },
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 8,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-09",
  "levelIndex": 6,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 13
   },
   {
    "color": "B",
    "x": 11,
    "y": 14
   },
   {
    "color": "B",
    "x": 12,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 18
   },
   {
    "color": "B",
    "x": 15,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "断吃白两子（次序）",
  "goalText": "黑先，切断并吃住白棋两子。",
  "instruction": "依主解 (14,15)→(13,17)→(13,18)→(13,15) 次序在右侧断吃白两子（主解 7 手）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-76.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1561",
   "branches": [
    {
     "x": 14,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 16
     },
     "next": "n1560"
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 16
      },
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      }
     ]
    },
    {
     "x": 13,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 15
      }
     ]
    },
    {
     "x": 12,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1558",
    "branches": [
     {
      "x": 13,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n1559",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n1558"
     },
     {
      "x": 13,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1560",
    "branches": [
     {
      "x": 13,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 17
      },
      "next": "n1559"
     },
     {
      "x": 13,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 15
       },
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n1561",
    "branches": [
     {
      "x": 14,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 16
      },
      "next": "n1560"
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       },
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       }
      ]
     },
     {
      "x": 13,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 15
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "3k-10",
  "levelIndex": 6,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 18,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 18,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 18,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "弃子连环提白（回点急所）",
  "goalText": "黑先，在对杀中连续弃子回提，吃住白棋。",
  "instruction": "主解多次回点 (17,16)：黑弃一子被提后原位回提并继续收气，白无气可延（累计提白 12 子，白曾提黑 3 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-65.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n290",
   "branches": [
    {
     "x": 17,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 16
     },
     "next": "n289"
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n287",
    "branches": [
     {
      "x": 17,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n288",
    "branches": [
     {
      "x": 17,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 15
      },
      "next": "n287"
     },
     {
      "x": 17,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n289",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 14
      },
      "next": "n288"
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n290",
    "branches": [
     {
      "x": 17,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 16
      },
      "next": "n289"
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-01",
  "levelIndex": 7,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "B",
    "x": 18,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右缘弃子提白",
  "goalText": "黑先，在右缘对杀中弃子回提吃白。",
  "instruction": "主解在 (18,17) 多次弃子回提（黑三次落于该点），白无气可延被提（累计提白 3 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-07.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n15",
   "branches": [
    {
     "x": 16,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 16
     },
     "next": "n14"
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n12",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n13",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 18
      },
      "next": "n12"
     }
    ]
   },
   {
    "id": "n14",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 18
      },
      "next": "n13"
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n15",
    "branches": [
     {
      "x": 16,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n14"
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-02",
  "levelIndex": 7,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 13
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 18,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 18,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 15,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 10,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右侧杀白（见合破眼）",
  "goalText": "黑先，杀掉右侧白棋（使其只能做出一只眼）。",
  "instruction": "依主解次序 (17,17)→(15,18)→(17,18)→(16,18) 在右侧封锁提形要点，白即使提子也仅能成一眼（成功叶 \"Even if White captures at A, she can only make one eye by doing so.\"）；A/B 见合，白无法做出第二眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-102.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1011",
   "branches": [
    {
     "x": 17,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 17
     },
     "next": "n1010"
    },
    {
     "x": 16,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1008",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "success",
      "reason": "Correct. A and B are miai for Black."
     },
     {
      "x": 18,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1009",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n1008"
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1010",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 16
      },
      "next": "n1009"
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1011",
    "branches": [
     {
      "x": 17,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 17
      },
      "next": "n1010"
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-03",
  "levelIndex": 7,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 8,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 12,
   "maxX": 10,
   "maxY": 18
  },
  "title": "破眼杀白（下边）",
  "goalText": "黑先，杀下边白棋整块（使其无法做出两只眼）。",
  "instruction": "依主解次序（在 (5,17) 一带先弃后取/争夺）抢占白眼位要害：白整块仅余 (5,17) 单真眼、(4,16) 一带又受黑紧逼，做不出第二只眼（主叶 \"A and B are miai next.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-89.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n909",
   "branches": [
    {
     "x": 5,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 18
     },
     "next": "n908"
    },
    {
     "x": 4,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 15
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 16
      },
      {
       "color": "W",
       "x": 7,
       "y": 18
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 16
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      }
     ]
    },
    {
     "x": 7,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 7,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n906",
    "branches": [
     {
      "x": 4,
      "y": 15,
      "type": "success",
      "reason": "Correct. A and B are miai next."
     }
    ]
   },
   {
    "id": "n907",
    "branches": [
     {
      "x": 5,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 18
      },
      "next": "n906"
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     },
     {
      "x": 4,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n908",
    "branches": [
     {
      "x": 5,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 18
      },
      "next": "n907"
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n909",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n908"
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 16
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     },
     {
      "x": 7,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-04",
  "levelIndex": 7,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 9,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 5,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 10
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 11,
   "maxY": 18
  },
  "title": "左下角做活（成两眼）",
  "goalText": "黑先，使角部黑棋做出两只眼成活（避免劫/双活）。",
  "instruction": "依主解次序 (1,17)→(2,18)→(3,16)→(0,17) 在左下角连棋做眼，黑串具两个纯黑真眼区（结构事实）成活；次佳线多落 ko/seki/bent four（谱注 \"…can do better\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-127.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n523",
   "branches": [
    {
     "x": 1,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 15
     },
     "next": "n522"
    },
    {
     "x": 1,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n520",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 0,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n521",
    "branches": [
     {
      "x": 3,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 15
      },
      "next": "n520"
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n522",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 16
      },
      "next": "n521"
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n523",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n522"
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-05",
  "levelIndex": 7,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "紧气提白一串",
  "goalText": "黑先，净吃被围的一串白棋。",
  "instruction": "依主解次序从外侧紧气并封住出路（首解区域含 紧气/兜底提子次序），白串 7 子无活路被净提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-122.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n98",
   "branches": [
    {
     "x": 13,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 18
     },
     "next": "n97"
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n95",
    "branches": [
     {
      "x": 18,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n96",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n95"
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n97",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 17
      },
      "next": "n96"
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n98",
    "branches": [
     {
      "x": 13,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n97"
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-06",
  "levelIndex": 7,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 18
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 18,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 13,
   "maxX": 18,
   "maxY": 18
  },
  "title": "中央杀白（弃子次序紧气）",
  "goalText": "黑先，净杀被夹在两道黑墙间的白棋数块。",
  "instruction": "黑 (15,18)→(15,17) 连续弃子投扑封口（白两提），末 (14,16) 连通两块黑棋并收白气成杀；白无眼位、无劫/征子/双活，后续紧气即净提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-16.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n172",
   "branches": [
    {
     "x": 15,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 18
     },
     "next": "n171"
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n169",
    "branches": [
     {
      "x": 14,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n170",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n169"
     },
     {
      "x": 14,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n171",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n170"
     },
     {
      "x": 14,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n172",
    "branches": [
     {
      "x": 15,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n171"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-07",
  "levelIndex": 7,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 11,
    "y": 13
   },
   {
    "color": "B",
    "x": 12,
    "y": 13
   },
   {
    "color": "B",
    "x": 13,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 13
   },
   {
    "color": "B",
    "x": 10,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 8,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 9,
    "y": 18
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 14
   },
   {
    "color": "W",
    "x": 11,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 10,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 6,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "刀把五杀白",
  "goalText": "黑先，利用 A 位弃子把白棋做成“刀把五”死形。",
  "instruction": "黑在 A 位（主解首手 (13,15)）是白形急所：此后黑随时可把白做成刀把五（bulky five，死形）；白若于 A 走子会自撞气被提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-73.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1546",
   "branches": [
    {
     "x": 13,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 15
     },
     "next": "n1545"
    },
    {
     "x": 13,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      },
      {
       "color": "B",
       "x": 13,
       "y": 15
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 11,
       "y": 17
      }
     ]
    },
    {
     "x": 12,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 15
      },
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 11,
       "y": 17
      }
     ]
    },
    {
     "x": 14,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 15
      },
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 13,
       "y": 16
      },
      {
       "color": "B",
       "x": 11,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    },
    {
     "x": 12,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 13,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 15
      },
      {
       "color": "B",
       "x": 11,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1543",
    "branches": [
     {
      "x": 12,
      "y": 16,
      "type": "success",
      "reason": "Correct. Black can play at A and make a bulky five shape whenever he wants to (which is dead - http://senseis.xmp.net/?BulkyFive). If White plays at A, she ataris herself and Black can capture."
     }
    ]
   },
   {
    "id": "n1544",
    "branches": [
     {
      "x": 14,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 11,
       "y": 18
      },
      "next": "n1543"
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1545",
    "branches": [
     {
      "x": 13,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 18
      },
      "next": "n1544"
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n1546",
    "branches": [
     {
      "x": 13,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 15
      },
      "next": "n1545"
     },
     {
      "x": 13,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       },
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 11,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 15
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 11,
        "y": 17
       }
      ]
     },
     {
      "x": 14,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 15
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 12,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 13,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 15
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-08",
  "levelIndex": 7,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 0,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 6,
    "y": 14
   },
   {
    "color": "B",
    "x": 7,
    "y": 14
   },
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 7,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 18
   },
   {
    "color": "B",
    "x": 6,
    "y": 18
   },
   {
    "color": "W",
    "x": 1,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 5,
    "y": 13
   },
   {
    "color": "W",
    "x": 6,
    "y": 13
   },
   {
    "color": "W",
    "x": 5,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 0,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 18
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 11,
   "maxY": 18
  },
  "title": "左侧对杀杀白",
  "goalText": "黑先，在左侧对杀中杀吃白棋（避免走成双方都活）。",
  "instruction": "依主解次序 (3,17)→(3,18)→(1,17)→(1,18) 连续弃子紧气，白大块无气可延被吃（主解累计提白 5 子）；若黑走缓，白亦可成活（变着注 \"Black's alive, but White's alive too.\" ⇒ 目标须净杀白）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-75.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1557",
   "branches": [
    {
     "x": 3,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 0,
      "y": 18
     },
     "next": "n1556"
    },
    {
     "x": 0,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 16
      }
     ]
    },
    {
     "x": 4,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      },
      {
       "color": "B",
       "x": 5,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      }
     ]
    },
    {
     "x": 4,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 16
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 7,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1554",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n1555",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n1554"
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1556",
    "branches": [
     {
      "x": 3,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 17
      },
      "next": "n1555"
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1557",
    "branches": [
     {
      "x": 3,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 18
      },
      "next": "n1556"
     },
     {
      "x": 0,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       },
       {
        "color": "B",
        "x": 5,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     },
     {
      "x": 4,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 16
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-09",
  "levelIndex": 7,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 8,
    "y": 15
   },
   {
    "color": "W",
    "x": 9,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 15
   },
   {
    "color": "W",
    "x": 12,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 8,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 5,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "下方吃白（A 子被提）",
  "goalText": "黑先，吃住白方之子（A 子被提，黑有见合）。",
  "instruction": "依主解次序 (15,17)→(13,17)→(13,18)→(11,18) 封锁下方，白 A 子无法逃出将被提（谱注 A/B 见合）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-104.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n427",
   "branches": [
    {
     "x": 15,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 17
     },
     "next": "n426"
    },
    {
     "x": 14,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      },
      {
       "color": "B",
       "x": 9,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 16
      }
     ]
    },
    {
     "x": 11,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 9,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 16
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 12,
       "y": 16
      },
      {
       "color": "W",
       "x": 9,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n424",
    "branches": [
     {
      "x": 11,
      "y": 18,
      "type": "success",
      "reason": "Correct. Next A and B are miai for Black."
     }
    ]
   },
   {
    "id": "n425",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n424"
     }
    ]
   },
   {
    "id": "n426",
    "branches": [
     {
      "x": 13,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 17
      },
      "next": "n425"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n427",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 17
      },
      "next": "n426"
     },
     {
      "x": 14,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       },
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 16
       }
      ]
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 16
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 12,
        "y": 16
       },
       {
        "color": "W",
        "x": 9,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "2k-10",
  "levelIndex": 7,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 11,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 18
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 11
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 16,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 9,
   "minY": 9,
   "maxX": 18,
   "maxY": 18
  },
  "title": "弃子收气杀白",
  "goalText": "黑先，净杀被围白棋（弃子收气）。",
  "instruction": "依主解次序以扑/弃子收紧白气，白两块无眼可做、公气被收尽后整块死（Correct 各分支均净杀）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-109.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n52",
   "branches": [
    {
     "x": 14,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n51"
    },
    {
     "x": 11,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 11,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n49",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n50",
    "branches": [
     {
      "x": 11,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n49"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n51",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 17
      },
      "next": "n50"
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n52",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n51"
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-01",
  "levelIndex": 8,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 5,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 5,
    "y": 18
   },
   {
    "color": "B",
    "x": 6,
    "y": 18
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 8,
   "maxY": 18
  },
  "title": "角部净杀白（紧气成杀）",
  "goalText": "黑先，净杀角上被围的白棋大块。",
  "instruction": "依主解次序先占角部眼位要害再逐手紧气（含提子次序），白大块无两只真眼、仅余少量气被全提；无劫（ko 均只在败着）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-131.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n129",
   "branches": [
    {
     "x": 0,
     "y": 16,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 0,
      "y": 17
     },
     "next": "n128"
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      }
     ]
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 17
      }
     ]
    },
    {
     "x": 4,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n126",
    "branches": [
     {
      "x": 4,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n127",
    "branches": [
     {
      "x": 3,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 17
      },
      "next": "n126"
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n128",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 18
      },
      "next": "n127"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n129",
    "branches": [
     {
      "x": 0,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 17
      },
      "next": "n128"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 17
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-02",
  "levelIndex": 8,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 1,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 8,
   "maxY": 18
  },
  "title": "左下做活（底线成两眼）",
  "goalText": "黑先，使左下被白厚壁封住的黑棋净活。",
  "instruction": "黑 (0,17) 先占底线急所；白 (1,18) 后黑 (0,15)，再 (2,18)→(1,17) 连回整块，终成两只真眼净活（避免打劫）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-133.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-08）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n136",
   "branches": [
    {
     "x": 0,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 18
     },
     "next": "n135"
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      }
     ]
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n133",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n134",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n133"
     }
    ]
   },
   {
    "id": "n135",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 17
      },
      "next": "n134"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n136",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 18
      },
      "next": "n135"
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-03",
  "levelIndex": 8,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 0,
    "y": 10
   },
   {
    "color": "B",
    "x": 1,
    "y": 10
   },
   {
    "color": "B",
    "x": 2,
    "y": 10
   },
   {
    "color": "B",
    "x": 3,
    "y": 10
   },
   {
    "color": "B",
    "x": 3,
    "y": 11
   },
   {
    "color": "B",
    "x": 3,
    "y": 12
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 0,
    "y": 11
   },
   {
    "color": "W",
    "x": 1,
    "y": 11
   },
   {
    "color": "W",
    "x": 2,
    "y": 11
   },
   {
    "color": "W",
    "x": 0,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 0,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 5,
   "maxY": 18
  },
  "title": "提角上白大块（次序紧气）",
  "goalText": "黑先，提掉角上被围的白棋大块。",
  "instruction": "依主解次序 (1,15)→(0,16)→(0,14)→(1,12) 点入白形要害并依次收紧，白大块无气可延、整块被提（主解累计提白 14 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-51.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n253",
   "branches": [
    {
     "x": 1,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 2,
      "y": 15
     },
     "next": "n252"
    },
    {
     "x": 2,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 2,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n250",
    "branches": [
     {
      "x": 1,
      "y": 12,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n251",
    "branches": [
     {
      "x": 0,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 14
      },
      "next": "n250"
     }
    ]
   },
   {
    "id": "n252",
    "branches": [
     {
      "x": 0,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 15
      },
      "next": "n251"
     }
    ]
   },
   {
    "id": "n253",
    "branches": [
     {
      "x": 1,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 15
      },
      "next": "n252"
     },
     {
      "x": 2,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-04",
  "levelIndex": 8,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 11
   },
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 9,
   "maxX": 7,
   "maxY": 18
  },
  "title": "吃白断子（封锁）",
  "goalText": "黑先，吃住白方的切断之子。",
  "instruction": "依主解次序 (4,12)→(5,13)→(5,14)→(5,15) 在右侧封锁断子使其无法逃出而被提；若黑先断 A 或走 C，白可反吃黑两子或延气（谱注 \"Black had a way to capture the cutting stones instead.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-52.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n257",
   "branches": [
    {
     "x": 4,
     "y": 12,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 3,
      "y": 13
     },
     "next": "n256"
    },
    {
     "x": 3,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 13
      },
      {
       "color": "W",
       "x": 3,
       "y": 12
      },
      {
       "color": "B",
       "x": 4,
       "y": 12
      },
      {
       "color": "W",
       "x": 3,
       "y": 11
      },
      {
       "color": "B",
       "x": 5,
       "y": 13
      },
      {
       "color": "W",
       "x": 2,
       "y": 10
      }
     ]
    },
    {
     "x": 3,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 11
      },
      {
       "color": "W",
       "x": 4,
       "y": 12
      }
     ]
    },
    {
     "x": 4,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 11
      },
      {
       "color": "W",
       "x": 4,
       "y": 12
      }
     ]
    },
    {
     "x": 3,
     "y": 10,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 10
      },
      {
       "color": "W",
       "x": 4,
       "y": 12
      }
     ]
    },
    {
     "x": 3,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 12
      },
      {
       "color": "W",
       "x": 3,
       "y": 13
      },
      {
       "color": "B",
       "x": 4,
       "y": 12
      },
      {
       "color": "W",
       "x": 5,
       "y": 13
      }
     ]
    },
    {
     "x": 5,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 13
      },
      {
       "color": "W",
       "x": 4,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n254",
    "branches": [
     {
      "x": 5,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n255",
    "branches": [
     {
      "x": 5,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 15
      },
      "next": "n254"
     },
     {
      "x": 3,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 14
       },
       {
        "color": "B",
        "x": 6,
        "y": 14
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n256",
    "branches": [
     {
      "x": 5,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 14
      },
      "next": "n255"
     },
     {
      "x": 3,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       }
      ]
     },
     {
      "x": 5,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       },
       {
        "color": "B",
        "x": 6,
        "y": 13
       },
       {
        "color": "W",
        "x": 3,
        "y": 11
       }
      ]
     }
    ]
   },
   {
    "id": "n257",
    "branches": [
     {
      "x": 4,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 13
      },
      "next": "n256"
     },
     {
      "x": 3,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 13
       },
       {
        "color": "W",
        "x": 3,
        "y": 12
       },
       {
        "color": "B",
        "x": 4,
        "y": 12
       },
       {
        "color": "W",
        "x": 3,
        "y": 11
       },
       {
        "color": "B",
        "x": 5,
        "y": 13
       },
       {
        "color": "W",
        "x": 2,
        "y": 10
       }
      ]
     },
     {
      "x": 3,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 11
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 4,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 11
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 3,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 10
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 3,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 12
       },
       {
        "color": "W",
        "x": 3,
        "y": 13
       },
       {
        "color": "B",
        "x": 4,
        "y": 12
       },
       {
        "color": "W",
        "x": 5,
        "y": 13
       }
      ]
     },
     {
      "x": 5,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 13
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-05",
  "levelIndex": 8,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 12,
    "y": 14
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 9,
    "y": 15
   },
   {
    "color": "B",
    "x": 10,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 11,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 9,
    "y": 18
   },
   {
    "color": "B",
    "x": 16,
    "y": 18
   },
   {
    "color": "B",
    "x": 17,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 7,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "做活（成两眼）",
  "goalText": "黑先，使被围黑棋做出两只眼成活。",
  "instruction": "依主解次序连棋做眼，黑串具两个纯黑真眼区（结构事实）成活。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-93.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1690",
   "branches": [
    {
     "x": 14,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 17
     },
     "next": "n1689"
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 10,
       "y": 18
      },
      {
       "color": "W",
       "x": 11,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 13,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 15
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      },
      {
       "color": "B",
       "x": 10,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 15
      }
     ]
    },
    {
     "x": 10,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 10,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      }
     ]
    },
    {
     "x": 11,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 11,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      }
     ]
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 15,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      }
     ]
    },
    {
     "x": 12,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 15
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 15,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 15
      },
      {
       "color": "W",
       "x": 13,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1687",
    "branches": [
     {
      "x": 13,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 15,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1688",
    "branches": [
     {
      "x": 15,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 10,
       "y": 18
      },
      "next": "n1687"
     },
     {
      "x": 10,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 15
       },
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1689",
    "branches": [
     {
      "x": 13,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 18
      },
      "next": "n1688"
     },
     {
      "x": 15,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     },
     {
      "x": 10,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 15
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1690",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 17
      },
      "next": "n1689"
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 15
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       },
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 15
       }
      ]
     },
     {
      "x": 10,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 15,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 15
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 15,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 15
       },
       {
        "color": "W",
        "x": 13,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-06",
  "levelIndex": 8,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 9
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 17,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 14,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 18,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 10,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右下做活（次序成两眼）",
  "goalText": "黑先，使右下角被围的黑棋做出两只眼成活。",
  "instruction": "依主解次序 (18,17)→(16,16)→(16,18)→(15,17) 先占要点再做眼连棋，黑净活；次序错黑只能打劫或整块死（变着注 \"Black doesn't have enough room to make two eyes now.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-72.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1542",
   "branches": [
    {
     "x": 18,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 17,
      "y": 16
     },
     "next": "n1541"
    },
    {
     "x": 17,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 16,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    },
    {
     "x": 17,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1538",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n1539",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 18
      },
      "next": "n1538"
     },
     {
      "x": 15,
      "y": 17,
      "type": "success",
      "reason": "Correct. It's a good time to exchange A for B before making two eyes here, but that's a small detail."
     }
    ]
   },
   {
    "id": "n1540",
    "branches": [
     {
      "x": 16,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 16
      },
      "next": "n1539"
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1541",
    "branches": [
     {
      "x": 16,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 17
      },
      "next": "n1540"
     },
     {
      "x": 17,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n1542",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 16
      },
      "next": "n1541"
     },
     {
      "x": 17,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 16,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-07",
  "levelIndex": 8,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 17,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 17,
    "y": 14
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 11,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "紧气提白大块（两翼收气）",
  "goalText": "黑先，紧气提吃被围的白棋大块。",
  "instruction": "依主解次序 (15,17)→(15,16)→(13,18)→(18,17)→(17,18) 在两翼收紧外气，白大块无气可延、整块被提（主解累计提白 10 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-123.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n103",
   "branches": [
    {
     "x": 15,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 15,
      "y": 18
     },
     "next": "n102"
    },
    {
     "x": 14,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n99",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n100",
    "branches": [
     {
      "x": 18,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 15
      },
      "next": "n99"
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n101",
    "branches": [
     {
      "x": 13,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n100"
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 17,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n102",
    "branches": [
     {
      "x": 15,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 18
      },
      "next": "n101"
     },
     {
      "x": 13,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n103",
    "branches": [
     {
      "x": 15,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n102"
     },
     {
      "x": 14,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-08",
  "levelIndex": 8,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 0,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 10
   },
   {
    "color": "W",
    "x": 2,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 0,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 7,
   "maxY": 18
  },
  "title": "弃子紧气提白（大块）",
  "goalText": "黑先，提掉被围的白棋（含弃子反打次序）。",
  "instruction": "依主解次序先弃一子、再于两侧连续收气并回提（主解末手回到 (1,17)），白大块无气被提（主解累计提白 9 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-77.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n319",
   "branches": [
    {
     "x": 1,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 18
     },
     "next": "n318"
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 13
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 13
      }
     ]
    },
    {
     "x": 3,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 2,
       "y": 13
      }
     ]
    },
    {
     "x": 1,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 12
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 2,
       "y": 13
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n315",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n316",
    "branches": [
     {
      "x": 3,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 13
      },
      "next": "n315"
     }
    ]
   },
   {
    "id": "n317",
    "branches": [
     {
      "x": 3,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 13
      },
      "next": "n316"
     }
    ]
   },
   {
    "id": "n318",
    "branches": [
     {
      "x": 0,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 16
      },
      "next": "n317"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n319",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 18
      },
      "next": "n318"
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 13
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 2,
        "y": 13
       }
      ]
     },
     {
      "x": 1,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 12
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 2,
        "y": 13
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-09",
  "levelIndex": 8,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 10
   },
   {
    "color": "B",
    "x": 1,
    "y": 11
   },
   {
    "color": "B",
    "x": 2,
    "y": 12
   },
   {
    "color": "B",
    "x": 2,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 14
   },
   {
    "color": "W",
    "x": 1,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 1,
    "y": 17
   },
   {
    "color": "W",
    "x": 1,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 8,
   "maxX": 6,
   "maxY": 18
  },
  "title": "破眼杀白（要点压缩）",
  "goalText": "黑先，压缩白棋眼位并杀掉角上白棋。",
  "instruction": "先在 A 位占要点，使白棋眼位最小；后续无论白如何应，均无法做出两只眼。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-43.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n232",
   "branches": [
    {
     "x": 0,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 1,
      "y": 13
     },
     "next": "n231",
     "reason": "This is the vital point."
    },
    {
     "x": 0,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 12
      },
      {
       "color": "B",
       "x": 1,
       "y": 12
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 1,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 0,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 0,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n228",
    "branches": [
     {
      "x": 0,
      "y": 12,
      "type": "success",
      "reason": "Correct. If White plays A, Black can just play B (or atari at C in some situations). White can't make two eyes."
     },
     {
      "x": 0,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 10
       },
       {
        "color": "W",
        "x": 0,
        "y": 12
       }
      ]
     }
    ]
   },
   {
    "id": "n229",
    "branches": [
     {
      "x": 0,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 11
      },
      "next": "n228"
     }
    ]
   },
   {
    "id": "n230",
    "branches": [
     {
      "x": 0,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 12
      },
      "next": "n229"
     },
     {
      "x": 0,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 1,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n231",
    "branches": [
     {
      "x": 0,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 14
      },
      "next": "n230",
      "reason": "Good move, this makes White's eyespace as small as possible."
     },
     {
      "x": 1,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 12
       },
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n232",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 13
      },
      "next": "n231",
      "reason": "This is the vital point."
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 12
       },
       {
        "color": "B",
        "x": 1,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1k-10",
  "levelIndex": 8,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 4,
    "y": 11
   },
   {
    "color": "B",
    "x": 1,
    "y": 12
   },
   {
    "color": "B",
    "x": 2,
    "y": 12
   },
   {
    "color": "B",
    "x": 3,
    "y": 13
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 9,
   "maxX": 8,
   "maxY": 18
  },
  "title": "角部杀白：见合破眼",
  "goalText": "黑先，杀掉角上白棋（使其无法做出两只眼）。",
  "instruction": "黑先手从角外连回并封锁，A/B 两点成为黑的见合要点，白无论如何补都只能被吃。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-69.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n829",
   "branches": [
    {
     "x": 0,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 0,
      "y": 15
     },
     "next": "n828"
    },
    {
     "x": 1,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 13
      },
      {
       "color": "W",
       "x": 1,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 16
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      }
     ]
    },
    {
     "x": 1,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 0,
       "y": 14
      },
      {
       "color": "B",
       "x": 0,
       "y": 12
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    },
    {
     "x": 1,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 13
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 0,
       "y": 12
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      }
     ]
    },
    {
     "x": 2,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n825",
    "branches": [
     {
      "x": 0,
      "y": 17,
      "type": "success",
      "reason": "Correct. A and B are miai for Black. White's is dead."
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n826",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 18
      },
      "next": "n825"
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n827",
    "branches": [
     {
      "x": 1,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 17
      },
      "next": "n826"
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 0,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n828",
    "branches": [
     {
      "x": 0,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 14
      },
      "next": "n827"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 13
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n829",
    "branches": [
     {
      "x": 0,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 15
      },
      "next": "n828"
     },
     {
      "x": 1,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 13
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       }
      ]
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 0,
        "y": 14
       },
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 13
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 12
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     },
     {
      "x": 2,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-01",
  "levelIndex": 9,
  "orderInLevel": 1,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 1,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 4,
    "y": 14
   },
   {
    "color": "B",
    "x": 1,
    "y": 15
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 7,
    "y": 15
   },
   {
    "color": "B",
    "x": 0,
    "y": 16
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "B",
    "x": 1,
    "y": 18
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 1,
    "y": 16
   },
   {
    "color": "W",
    "x": 2,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   },
   {
    "color": "W",
    "x": 0,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 9,
   "maxY": 18
  },
  "title": "提白大块（弃子次序）",
  "goalText": "黑先，提掉被围的白棋大块（次序含弃子）。",
  "instruction": "依主解次序 (4,17)→(5,18)→(1,14)→(3,18)→(0,16) 先弃后取、收紧白棋外气，白大块被整体提吃（主解累计提白 13 子）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "easy/ggg-easy-134.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n141",
   "branches": [
    {
     "x": 4,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 16
     },
     "next": "n140"
    },
    {
     "x": 4,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      },
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      }
     ]
    },
    {
     "x": 0,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      },
      {
       "color": "B",
       "x": 0,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 0,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 0,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    },
    {
     "x": 5,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 0,
       "y": 15
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      },
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      }
     ]
    },
    {
     "x": 4,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 4,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n137",
    "branches": [
     {
      "x": 0,
      "y": 16,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n138",
    "branches": [
     {
      "x": 3,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 17
      },
      "next": "n137"
     },
     {
      "x": 6,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n139",
    "branches": [
     {
      "x": 1,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n138"
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     },
     {
      "x": 0,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n140",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 15
      },
      "next": "n139"
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n141",
    "branches": [
     {
      "x": 4,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 16
      },
      "next": "n140"
     },
     {
      "x": 4,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       }
      ]
     },
     {
      "x": 0,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 0,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 0,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-02",
  "levelIndex": 9,
  "orderInLevel": 2,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 4,
    "y": 13
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 6,
    "y": 13
   },
   {
    "color": "B",
    "x": 7,
    "y": 13
   },
   {
    "color": "B",
    "x": 1,
    "y": 14
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 7,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 7,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 5,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 2,
    "y": 17
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 5,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 3,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 4,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 7,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 11,
   "maxX": 10,
   "maxY": 18
  },
  "title": "弃子打吃杀白（标记子被提）",
  "goalText": "黑先，杀掉白棋并吃住白方标记之子。",
  "instruction": "黑以弃子/打吃次序（主解 (5,18)→(4,15)→(5,17)→(3,16)→再回 (4,15)）迫使白自紧气：白标记子无法脱逃必被提；若黑次序松懈，白可复活（\"White can live now\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-14.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1227",
   "branches": [
    {
     "x": 5,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 18
     },
     "next": "n1226"
    },
    {
     "x": 6,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      }
     ]
    },
    {
     "x": 4,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 15
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      }
     ]
    },
    {
     "x": 5,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 5,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 18
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 6,
       "y": 17
      }
     ]
    },
    {
     "x": 3,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 5,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 6,
       "y": 16
      }
     ]
    },
    {
     "x": 6,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      }
     ]
    },
    {
     "x": 4,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 18
      },
      {
       "color": "W",
       "x": 5,
       "y": 18
      },
      {
       "color": "B",
       "x": 6,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 15
      },
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 5,
       "y": 17
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1223",
    "branches": [
     {
      "x": 4,
      "y": 15,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 5,
      "y": 17,
      "type": "success",
      "reason": "This move also kills White, it's second best to the throw in at 'A' though.\n\nPlaying this move as the throw in at 'A' would be better style. That's because Black stands to lose less if White brings this group back to life (e.g. using a ko elsewhere on the board to get two moves in a row later). Also, White has three ko threats here now, but if Black had played A, there would only be two. It's a small difference, but accumulating small advantages can eventually give you a big advantage in Go."
     }
    ]
   },
   {
    "id": "n1224",
    "branches": [
     {
      "x": 3,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 18
      },
      "next": "n1223"
     }
    ]
   },
   {
    "id": "n1225",
    "branches": [
     {
      "x": 5,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 17
      },
      "next": "n1224"
     }
    ]
   },
   {
    "id": "n1226",
    "branches": [
     {
      "x": 4,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 6,
       "y": 16
      },
      "next": "n1225"
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       }
      ]
     }
    ]
   },
   {
    "id": "n1227",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n1226"
     },
     {
      "x": 6,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     },
     {
      "x": 4,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 15
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 15
       },
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-03",
  "levelIndex": 9,
  "orderInLevel": 3,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 12,
    "y": 14
   },
   {
    "color": "B",
    "x": 13,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 17,
    "y": 14
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 10,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 17
   },
   {
    "color": "B",
    "x": 13,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 18
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 17
   },
   {
    "color": "W",
    "x": 10,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 14,
    "y": 17
   },
   {
    "color": "W",
    "x": 8,
    "y": 18
   },
   {
    "color": "W",
    "x": 13,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 5,
   "minY": 11,
   "maxX": 18,
   "maxY": 18
  },
  "title": "弃子成杀白（提后仍死）",
  "goalText": "黑先，杀死白棋（次序正确则白无论如何做不出活形）。",
  "instruction": "依主解次序沿下方收紧（主解多次在 (14,18)/(18,17) 一带弃子反打），谱注白即使提掉黑七子仍是死形（\"White can't live, even though she captured seven Black stones\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-104.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1020",
   "branches": [
    {
     "x": 17,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 17
     },
     "next": "n1019"
    },
    {
     "x": 9,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 9,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 15,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    },
    {
     "x": 12,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 17,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      }
     ]
    },
    {
     "x": 16,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      },
      {
       "color": "B",
       "x": 9,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    },
    {
     "x": 18,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 15
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 9,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 16,
       "y": 18
      },
      {
       "color": "W",
       "x": 18,
       "y": 17
      },
      {
       "color": "B",
       "x": 18,
       "y": 18
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 16
      },
      {
       "color": "W",
       "x": 18,
       "y": 15
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    },
    {
     "x": 18,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 18
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 12,
       "y": 18
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1016",
    "branches": [
     {
      "x": 10,
      "y": 18,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 10,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1017",
    "branches": [
     {
      "x": 14,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 18
      },
      "next": "n1016"
     }
    ]
   },
   {
    "id": "n1018",
    "branches": [
     {
      "x": 9,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 18
      },
      "next": "n1017"
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       },
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1019",
    "branches": [
     {
      "x": 14,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 18
      },
      "next": "n1018"
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 9,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1020",
    "branches": [
     {
      "x": 17,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 17
      },
      "next": "n1019"
     },
     {
      "x": 9,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 15,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 12,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     },
     {
      "x": 18,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 15
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 9,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 18,
        "y": 17
       },
       {
        "color": "B",
        "x": 18,
        "y": 18
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 18,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 18
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-04",
  "levelIndex": 9,
  "orderInLevel": 4,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 9
   },
   {
    "color": "B",
    "x": 17,
    "y": 9
   },
   {
    "color": "B",
    "x": 18,
    "y": 9
   },
   {
    "color": "B",
    "x": 16,
    "y": 10
   },
   {
    "color": "B",
    "x": 15,
    "y": 11
   },
   {
    "color": "B",
    "x": 14,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 14,
    "y": 14
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 17
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 10
   },
   {
    "color": "W",
    "x": 17,
    "y": 11
   },
   {
    "color": "W",
    "x": 16,
    "y": 12
   },
   {
    "color": "W",
    "x": 17,
    "y": 13
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 16,
    "y": 15
   },
   {
    "color": "W",
    "x": 18,
    "y": 15
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 12,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右上角杀白：次序紧气",
  "goalText": "黑先，杀死右上角白棋（打吃收气次序正确则白无眼可做）。",
  "instruction": "按次序紧气并封锁：主解中黑在 (17,12)/(18,12)/(16,11) 一带连续打吃收气，白棋延气不及最终被杀。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-67.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1514",
   "branches": [
    {
     "x": 17,
     "y": 14,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 16,
      "y": 14
     },
     "next": "n1513"
    },
    {
     "x": 16,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 14
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 18,
       "y": 13
      }
     ]
    },
    {
     "x": 18,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    },
    {
     "x": 18,
     "y": 10,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 10
      },
      {
       "color": "W",
       "x": 16,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 11
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1509",
    "branches": [
     {
      "x": 17,
      "y": 12,
      "type": "success",
      "reason": "Correct. White's dead."
     }
    ]
   },
   {
    "id": "n1510",
    "branches": [
     {
      "x": 16,
      "y": 11,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 13
      },
      "next": "n1509"
     },
     {
      "x": 18,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n1511",
    "branches": [
     {
      "x": 18,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 11
      },
      "next": "n1510"
     }
    ]
   },
   {
    "id": "n1512",
    "branches": [
     {
      "x": 17,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 14
      },
      "next": "n1511"
     },
     {
      "x": 18,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 11
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 11
       },
       {
        "color": "B",
        "x": 17,
        "y": 12
       },
       {
        "color": "W",
        "x": 16,
        "y": 11
       }
      ]
     }
    ]
   },
   {
    "id": "n1513",
    "branches": [
     {
      "x": 16,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 15
      },
      "next": "n1512"
     }
    ]
   },
   {
    "id": "n1514",
    "branches": [
     {
      "x": 17,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 16,
       "y": 14
      },
      "next": "n1513"
     },
     {
      "x": 16,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 14
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     },
     {
      "x": 18,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     },
     {
      "x": 18,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 16,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 11
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-05",
  "levelIndex": 9,
  "orderInLevel": 5,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 12
   },
   {
    "color": "B",
    "x": 11,
    "y": 13
   },
   {
    "color": "B",
    "x": 16,
    "y": 13
   },
   {
    "color": "B",
    "x": 11,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 16
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 14,
    "y": 17
   },
   {
    "color": "B",
    "x": 15,
    "y": 17
   },
   {
    "color": "W",
    "x": 10,
    "y": 10
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 12,
    "y": 12
   },
   {
    "color": "W",
    "x": 12,
    "y": 14
   },
   {
    "color": "W",
    "x": 15,
    "y": 14
   },
   {
    "color": "W",
    "x": 13,
    "y": 15
   },
   {
    "color": "W",
    "x": 14,
    "y": 15
   },
   {
    "color": "W",
    "x": 15,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 15,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 17
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 8,
   "minY": 8,
   "maxX": 18,
   "maxY": 18
  },
  "title": "中腹吃白（封锁紧气）",
  "goalText": "黑先，在中腹对杀/紧气中吃住白棋（避免走成征子）。",
  "instruction": "依主解次序 (15,13)→(13,12)→(14,11)→(12,13)→(13,14)→(14,14) 封锁紧气，白无气可延被提（主解累计提白 6 子）；次佳若试图征吃白，因 A 位白子而不可行（谱注 \"This ladder doesn't work for Black because of A.\"）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-137.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1212",
   "branches": [
    {
     "x": 15,
     "y": 13,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 14,
      "y": 13
     },
     "next": "n1211"
    },
    {
     "x": 13,
     "y": 14,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 13
      },
      {
       "color": "B",
       "x": 13,
       "y": 12
      },
      {
       "color": "W",
       "x": 14,
       "y": 12
      },
      {
       "color": "B",
       "x": 14,
       "y": 11
      },
      {
       "color": "W",
       "x": 15,
       "y": 13
      },
      {
       "color": "B",
       "x": 16,
       "y": 12
      },
      {
       "color": "W",
       "x": 13,
       "y": 11
      },
      {
       "color": "B",
       "x": 14,
       "y": 10
      },
      {
       "color": "W",
       "x": 12,
       "y": 13
      }
     ]
    },
    {
     "x": 14,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 13
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 14,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 12
      },
      {
       "color": "W",
       "x": 12,
       "y": 13
      },
      {
       "color": "B",
       "x": 13,
       "y": 14
      },
      {
       "color": "W",
       "x": 13,
       "y": 13
      },
      {
       "color": "B",
       "x": 14,
       "y": 13
      },
      {
       "color": "W",
       "x": 14,
       "y": 14
      },
      {
       "color": "B",
       "x": 15,
       "y": 13
      },
      {
       "color": "W",
       "x": 13,
       "y": 14
      },
      {
       "color": "B",
       "x": 12,
       "y": 11
      },
      {
       "color": "W",
       "x": 11,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1207",
    "branches": [
     {
      "x": 14,
      "y": 14,
      "type": "success",
      "reason": "Correct"
     }
    ]
   },
   {
    "id": "n1208",
    "branches": [
     {
      "x": 13,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 10
      },
      "next": "n1207"
     },
     {
      "x": 14,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 10
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       }
      ]
     },
     {
      "x": 14,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n1209",
    "branches": [
     {
      "x": 12,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 13,
       "y": 11
      },
      "next": "n1208"
     },
     {
      "x": 13,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       },
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 11
       }
      ]
     },
     {
      "x": 13,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 11
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       },
       {
        "color": "B",
        "x": 11,
        "y": 11
       },
       {
        "color": "W",
        "x": 12,
        "y": 11
       },
       {
        "color": "B",
        "x": 12,
        "y": 10
       },
       {
        "color": "W",
        "x": 13,
        "y": 10
       },
       {
        "color": "B",
        "x": 14,
        "y": 10
       },
       {
        "color": "W",
        "x": 11,
        "y": 10
       },
       {
        "color": "B",
        "x": 13,
        "y": 9
       },
       {
        "color": "W",
        "x": 11,
        "y": 12
       }
      ]
     }
    ]
   },
   {
    "id": "n1210",
    "branches": [
     {
      "x": 14,
      "y": 11,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 13,
       "y": 13
      },
      "next": "n1209"
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 11
       }
      ]
     },
     {
      "x": 13,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       },
       {
        "color": "B",
        "x": 14,
        "y": 11
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 11
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n1211",
    "branches": [
     {
      "x": 13,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 12
      },
      "next": "n1210"
     },
     {
      "x": 14,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 12
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       }
      ]
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 12
       },
       {
        "color": "B",
        "x": 13,
        "y": 12
       },
       {
        "color": "W",
        "x": 14,
        "y": 11
       }
      ]
     },
     {
      "x": 12,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 12
       },
       {
        "color": "B",
        "x": 14,
        "y": 11
       },
       {
        "color": "W",
        "x": 13,
        "y": 12
       }
      ]
     }
    ]
   },
   {
    "id": "n1212",
    "branches": [
     {
      "x": 15,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 14,
       "y": 13
      },
      "next": "n1211"
     },
     {
      "x": 13,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 12
       },
       {
        "color": "W",
        "x": 14,
        "y": 12
       },
       {
        "color": "B",
        "x": 14,
        "y": 11
       },
       {
        "color": "W",
        "x": 15,
        "y": 13
       },
       {
        "color": "B",
        "x": 16,
        "y": 12
       },
       {
        "color": "W",
        "x": 13,
        "y": 11
       },
       {
        "color": "B",
        "x": 14,
        "y": 10
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       }
      ]
     },
     {
      "x": 14,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 13
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 12
       },
       {
        "color": "W",
        "x": 12,
        "y": 13
       },
       {
        "color": "B",
        "x": 13,
        "y": 14
       },
       {
        "color": "W",
        "x": 13,
        "y": 13
       },
       {
        "color": "B",
        "x": 14,
        "y": 13
       },
       {
        "color": "W",
        "x": 14,
        "y": 14
       },
       {
        "color": "B",
        "x": 15,
        "y": 13
       },
       {
        "color": "W",
        "x": 13,
        "y": 14
       },
       {
        "color": "B",
        "x": 12,
        "y": 11
       },
       {
        "color": "W",
        "x": 11,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-06",
  "levelIndex": 9,
  "orderInLevel": 6,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 2,
    "y": 9
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 16,
    "y": 14
   },
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 14,
    "y": 15
   },
   {
    "color": "B",
    "x": 15,
    "y": 15
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 13,
    "y": 16
   },
   {
    "color": "W",
    "x": 14,
    "y": 16
   },
   {
    "color": "W",
    "x": 17,
    "y": 17
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "右侧杀白：见合封锁",
  "goalText": "黑先，杀掉右侧被围的白棋（A/B 见合破眼）。",
  "instruction": "黑先在关键点压缩白棋眼位，A/B 两点见合：白若占其一黑占另一，白始终无法成两眼而被杀。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-81.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1627",
   "branches": [
    {
     "x": 14,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 13,
      "y": 17
     },
     "next": "n1626"
    },
    {
     "x": 17,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 17,
       "y": 15
      },
      {
       "color": "W",
       "x": 12,
       "y": 17
      },
      {
       "color": "B",
       "x": 11,
       "y": 17
      },
      {
       "color": "W",
       "x": 11,
       "y": 18
      },
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 10,
       "y": 17
      },
      {
       "color": "B",
       "x": 11,
       "y": 16
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      }
     ]
    },
    {
     "x": 12,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 15
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 13,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 12,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 15
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      }
     ]
    },
    {
     "x": 16,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 16,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 18
      }
     ]
    },
    {
     "x": 15,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 17
      },
      {
       "color": "W",
       "x": 15,
       "y": 16
      },
      {
       "color": "B",
       "x": 16,
       "y": 16
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 14,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 18
      },
      {
       "color": "W",
       "x": 15,
       "y": 18
      },
      {
       "color": "B",
       "x": 12,
       "y": 18
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      }
     ]
    },
    {
     "x": 15,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 15,
       "y": 16
      },
      {
       "color": "W",
       "x": 15,
       "y": 17
      },
      {
       "color": "B",
       "x": 14,
       "y": 17
      },
      {
       "color": "W",
       "x": 16,
       "y": 16
      },
      {
       "color": "B",
       "x": 15,
       "y": 18
      },
      {
       "color": "W",
       "x": 16,
       "y": 17
      },
      {
       "color": "B",
       "x": 13,
       "y": 17
      },
      {
       "color": "W",
       "x": 17,
       "y": 15
      },
      {
       "color": "B",
       "x": 17,
       "y": 14
      },
      {
       "color": "W",
       "x": 18,
       "y": 16
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1622",
    "branches": [
     {
      "x": 9,
      "y": 17,
      "type": "success",
      "reason": "Correct. A and B are miai for Black. If White plays C, Black plays D. White's dead."
     },
     {
      "x": 10,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 10,
        "y": 16
       },
       {
        "color": "W",
        "x": 8,
        "y": 17
       },
       {
        "color": "B",
        "x": 9,
        "y": 17
       },
       {
        "color": "W",
        "x": 9,
        "y": 18
       },
       {
        "color": "B",
        "x": 10,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1623",
    "branches": [
     {
      "x": 11,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 11,
       "y": 18
      },
      "next": "n1622"
     },
     {
      "x": 11,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 11,
        "y": 18
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       },
       {
        "color": "B",
        "x": 10,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1624",
    "branches": [
     {
      "x": 11,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 10,
       "y": 17
      },
      "next": "n1623"
     }
    ]
   },
   {
    "id": "n1625",
    "branches": [
     {
      "x": 16,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 12,
       "y": 17
      },
      "next": "n1624"
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1626",
    "branches": [
     {
      "x": 16,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 15,
       "y": 17
      },
      "next": "n1625"
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 18
       },
       {
        "color": "B",
        "x": 16,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 12,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1627",
    "branches": [
     {
      "x": 14,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 13,
       "y": 17
      },
      "next": "n1626"
     },
     {
      "x": 17,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 17,
        "y": 15
       },
       {
        "color": "W",
        "x": 12,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 17
       },
       {
        "color": "W",
        "x": 11,
        "y": 18
       },
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 10,
        "y": 17
       },
       {
        "color": "B",
        "x": 11,
        "y": 16
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       }
      ]
     },
     {
      "x": 12,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 15
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 13,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 12,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 15
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       }
      ]
     },
     {
      "x": 16,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 16,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 18
       }
      ]
     },
     {
      "x": 15,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 17
       },
       {
        "color": "W",
        "x": 15,
        "y": 16
       },
       {
        "color": "B",
        "x": 16,
        "y": 16
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 14,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 18
       },
       {
        "color": "W",
        "x": 15,
        "y": 18
       },
       {
        "color": "B",
        "x": 12,
        "y": 18
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       }
      ]
     },
     {
      "x": 15,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 15,
        "y": 16
       },
       {
        "color": "W",
        "x": 15,
        "y": 17
       },
       {
        "color": "B",
        "x": 14,
        "y": 17
       },
       {
        "color": "W",
        "x": 16,
        "y": 16
       },
       {
        "color": "B",
        "x": 15,
        "y": 18
       },
       {
        "color": "W",
        "x": 16,
        "y": 17
       },
       {
        "color": "B",
        "x": 13,
        "y": 17
       },
       {
        "color": "W",
        "x": 17,
        "y": 15
       },
       {
        "color": "B",
        "x": 17,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-07",
  "levelIndex": 9,
  "orderInLevel": 7,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 16,
    "y": 11
   },
   {
    "color": "B",
    "x": 16,
    "y": 12
   },
   {
    "color": "B",
    "x": 15,
    "y": 13
   },
   {
    "color": "B",
    "x": 15,
    "y": 14
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 16
   },
   {
    "color": "B",
    "x": 17,
    "y": 17
   },
   {
    "color": "W",
    "x": 15,
    "y": 10
   },
   {
    "color": "W",
    "x": 16,
    "y": 10
   },
   {
    "color": "W",
    "x": 15,
    "y": 11
   },
   {
    "color": "W",
    "x": 15,
    "y": 12
   },
   {
    "color": "W",
    "x": 16,
    "y": 13
   },
   {
    "color": "W",
    "x": 16,
    "y": 14
   },
   {
    "color": "W",
    "x": 17,
    "y": 15
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 13,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "吃白断子（连续紧气）",
  "goalText": "黑先，吃住白方的切断之子。",
  "instruction": "黑从右侧对白断子连续紧气封锁：主解 (17,12)→(18,14)→(18,11)→(17,13)→(18,15) 收气，白延气不及最终被提。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-57.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1465",
   "branches": [
    {
     "x": 17,
     "y": 12,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 18,
      "y": 13
     },
     "next": "n1464"
    },
    {
     "x": 17,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 10
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 11
      },
      {
       "color": "W",
       "x": 17,
       "y": 9
      },
      {
       "color": "B",
       "x": 17,
       "y": 8
      },
      {
       "color": "W",
       "x": 18,
       "y": 10
      },
      {
       "color": "B",
       "x": 16,
       "y": 9
      },
      {
       "color": "W",
       "x": 18,
       "y": 9
      }
     ]
    },
    {
     "x": 17,
     "y": 10,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 10
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 11
      },
      {
       "color": "W",
       "x": 17,
       "y": 9
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 13
      },
      {
       "color": "B",
       "x": 17,
       "y": 8
      },
      {
       "color": "W",
       "x": 16,
       "y": 9
      },
      {
       "color": "B",
       "x": 18,
       "y": 9
      },
      {
       "color": "W",
       "x": 18,
       "y": 10
      }
     ]
    },
    {
     "x": 17,
     "y": 11,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 17,
       "y": 11
      },
      {
       "color": "W",
       "x": 18,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 10
      },
      {
       "color": "W",
       "x": 17,
       "y": 9
      },
      {
       "color": "B",
       "x": 17,
       "y": 8
      },
      {
       "color": "W",
       "x": 18,
       "y": 10
      },
      {
       "color": "B",
       "x": 16,
       "y": 9
      },
      {
       "color": "W",
       "x": 18,
       "y": 9
      },
      {
       "color": "B",
       "x": 18,
       "y": 8
      },
      {
       "color": "W",
       "x": 18,
       "y": 11
      }
     ]
    },
    {
     "x": 18,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 18,
       "y": 12
      },
      {
       "color": "W",
       "x": 17,
       "y": 12
      },
      {
       "color": "B",
       "x": 17,
       "y": 11
      },
      {
       "color": "W",
       "x": 17,
       "y": 13
      },
      {
       "color": "B",
       "x": 18,
       "y": 13
      },
      {
       "color": "W",
       "x": 17,
       "y": 14
      },
      {
       "color": "B",
       "x": 17,
       "y": 16
      },
      {
       "color": "W",
       "x": 17,
       "y": 10
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1459",
    "branches": [
     {
      "x": 18,
      "y": 15,
      "type": "success",
      "reason": "Correct. Black captured the cutting stones."
     }
    ]
   },
   {
    "id": "n1460",
    "branches": [
     {
      "x": 17,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 11
      },
      "next": "n1459"
     }
    ]
   },
   {
    "id": "n1461",
    "branches": [
     {
      "x": 17,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 10
      },
      "next": "n1460"
     }
    ]
   },
   {
    "id": "n1462",
    "branches": [
     {
      "x": 18,
      "y": 11,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 9
      },
      "next": "n1461"
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 10
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       }
      ]
     }
    ]
   },
   {
    "id": "n1463",
    "branches": [
     {
      "x": 17,
      "y": 10,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 9
      },
      "next": "n1462"
     }
    ]
   },
   {
    "id": "n1464",
    "branches": [
     {
      "x": 18,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 17,
       "y": 14
      },
      "next": "n1463"
     },
     {
      "x": 17,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 11
       },
       {
        "color": "B",
        "x": 17,
        "y": 9
       },
       {
        "color": "W",
        "x": 17,
        "y": 11
       },
       {
        "color": "B",
        "x": 18,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       }
      ]
     },
     {
      "x": 18,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 10
       },
       {
        "color": "W",
        "x": 17,
        "y": 9
       },
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 18,
        "y": 11
       },
       {
        "color": "B",
        "x": 18,
        "y": 14
       },
       {
        "color": "W",
        "x": 18,
        "y": 15
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 18,
        "y": 13
       }
      ]
     }
    ]
   },
   {
    "id": "n1465",
    "branches": [
     {
      "x": 17,
      "y": 12,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 18,
       "y": 13
      },
      "next": "n1464"
     },
     {
      "x": 17,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 11
       },
       {
        "color": "W",
        "x": 17,
        "y": 9
       },
       {
        "color": "B",
        "x": 17,
        "y": 8
       },
       {
        "color": "W",
        "x": 18,
        "y": 10
       },
       {
        "color": "B",
        "x": 16,
        "y": 9
       },
       {
        "color": "W",
        "x": 18,
        "y": 9
       }
      ]
     },
     {
      "x": 17,
      "y": 10,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 10
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 11
       },
       {
        "color": "W",
        "x": 17,
        "y": 9
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       },
       {
        "color": "B",
        "x": 17,
        "y": 8
       },
       {
        "color": "W",
        "x": 16,
        "y": 9
       },
       {
        "color": "B",
        "x": 18,
        "y": 9
       },
       {
        "color": "W",
        "x": 18,
        "y": 10
       }
      ]
     },
     {
      "x": 17,
      "y": 11,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 17,
        "y": 11
       },
       {
        "color": "W",
        "x": 18,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 10
       },
       {
        "color": "W",
        "x": 17,
        "y": 9
       },
       {
        "color": "B",
        "x": 17,
        "y": 8
       },
       {
        "color": "W",
        "x": 18,
        "y": 10
       },
       {
        "color": "B",
        "x": 16,
        "y": 9
       },
       {
        "color": "W",
        "x": 18,
        "y": 9
       },
       {
        "color": "B",
        "x": 18,
        "y": 8
       },
       {
        "color": "W",
        "x": 18,
        "y": 11
       }
      ]
     },
     {
      "x": 18,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 18,
        "y": 12
       },
       {
        "color": "W",
        "x": 17,
        "y": 12
       },
       {
        "color": "B",
        "x": 17,
        "y": 11
       },
       {
        "color": "W",
        "x": 17,
        "y": 13
       },
       {
        "color": "B",
        "x": 18,
        "y": 13
       },
       {
        "color": "W",
        "x": 17,
        "y": 14
       },
       {
        "color": "B",
        "x": 17,
        "y": 16
       },
       {
        "color": "W",
        "x": 17,
        "y": 10
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-08",
  "levelIndex": 9,
  "orderInLevel": 8,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 15,
    "y": 9
   },
   {
    "color": "B",
    "x": 2,
    "y": 10
   },
   {
    "color": "B",
    "x": 4,
    "y": 10
   },
   {
    "color": "B",
    "x": 6,
    "y": 10
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 5,
    "y": 15
   },
   {
    "color": "B",
    "x": 11,
    "y": 15
   },
   {
    "color": "B",
    "x": 12,
    "y": 15
   },
   {
    "color": "B",
    "x": 13,
    "y": 15
   },
   {
    "color": "B",
    "x": 16,
    "y": 15
   },
   {
    "color": "B",
    "x": 2,
    "y": 16
   },
   {
    "color": "B",
    "x": 3,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 8,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "B",
    "x": 10,
    "y": 16
   },
   {
    "color": "B",
    "x": 12,
    "y": 16
   },
   {
    "color": "B",
    "x": 1,
    "y": 17
   },
   {
    "color": "B",
    "x": 10,
    "y": 17
   },
   {
    "color": "B",
    "x": 12,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 13
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 13
   },
   {
    "color": "W",
    "x": 2,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 11,
    "y": 14
   },
   {
    "color": "W",
    "x": 2,
    "y": 15
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 8,
    "y": 15
   },
   {
    "color": "W",
    "x": 9,
    "y": 15
   },
   {
    "color": "W",
    "x": 10,
    "y": 15
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 7,
    "y": 16
   },
   {
    "color": "W",
    "x": 11,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 8,
    "y": 17
   },
   {
    "color": "W",
    "x": 11,
    "y": 17
   },
   {
    "color": "W",
    "x": 2,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "live",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 7,
   "maxX": 18,
   "maxY": 18
  },
  "title": "左下角做活（次序连棋做眼）",
  "goalText": "黑先，救活左下的黑棋（因白 A 位次序偏差，黑得以趁隙成活）。",
  "instruction": "按主解次序沿下边/左边连通整块并做出眼位（主解自 (4,17) 一带逐步连出，末手 (7,17)）；白若强行杀黑只能落入 ko 或无后续，黑净活；次序错则整块被白杀。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-78.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1577",
   "branches": [
    {
     "x": 4,
     "y": 17,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 4,
      "y": 18
     },
     "next": "n1576"
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 4,
       "y": 17
      },
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      },
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      }
     ]
    },
    {
     "x": 1,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 15
      },
      {
       "color": "W",
       "x": 1,
       "y": 18
      },
      {
       "color": "B",
       "x": 1,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 13
      },
      {
       "color": "B",
       "x": 0,
       "y": 14
      },
      {
       "color": "W",
       "x": 0,
       "y": 16
      }
     ]
    },
    {
     "x": 1,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 1,
       "y": 18
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      },
      {
       "color": "B",
       "x": 4,
       "y": 17
      },
      {
       "color": "W",
       "x": 0,
       "y": 17
      }
     ]
    },
    {
     "x": 5,
     "y": 13,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 5,
       "y": 13
      },
      {
       "color": "W",
       "x": 5,
       "y": 12
      },
      {
       "color": "B",
       "x": 6,
       "y": 13
      },
      {
       "color": "W",
       "x": 7,
       "y": 12
      },
      {
       "color": "B",
       "x": 7,
       "y": 13
      },
      {
       "color": "W",
       "x": 8,
       "y": 13
      },
      {
       "color": "B",
       "x": 7,
       "y": 14
      },
      {
       "color": "W",
       "x": 6,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1571",
    "branches": [
     {
      "x": 7,
      "y": 17,
      "type": "success",
      "reason": "Correct"
     },
     {
      "x": 6,
      "y": 17,
      "type": "success",
      "reason": "Also correct. Playing this move at A is slightly more certain and connects Black along the edge. White might connect at A now and try to kill Black."
     }
    ]
   },
   {
    "id": "n1572",
    "branches": [
     {
      "x": 4,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 0,
       "y": 17
      },
      "next": "n1571"
     },
     {
      "x": 7,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 16
       },
       {
        "color": "B",
        "x": 8,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 9,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1573",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n1572"
     }
    ]
   },
   {
    "id": "n1574",
    "branches": [
     {
      "x": 2,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n1573"
     }
    ]
   },
   {
    "id": "n1575",
    "branches": [
     {
      "x": 1,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n1574"
     },
     {
      "x": 2,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n1576",
    "branches": [
     {
      "x": 3,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 17
      },
      "next": "n1575"
     }
    ]
   },
   {
    "id": "n1577",
    "branches": [
     {
      "x": 4,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n1576"
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 4,
        "y": 17
       },
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 13
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 16
       }
      ]
     },
     {
      "x": 1,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 4,
        "y": 17
       },
       {
        "color": "W",
        "x": 0,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 13,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 13
       },
       {
        "color": "W",
        "x": 5,
        "y": 12
       },
       {
        "color": "B",
        "x": 6,
        "y": 13
       },
       {
        "color": "W",
        "x": 7,
        "y": 12
       },
       {
        "color": "B",
        "x": 7,
        "y": 13
       },
       {
        "color": "W",
        "x": 8,
        "y": 13
       },
       {
        "color": "B",
        "x": 7,
        "y": 14
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-09",
  "levelIndex": 9,
  "orderInLevel": 9,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 7,
    "y": 12
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 5,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 15
   },
   {
    "color": "B",
    "x": 6,
    "y": 15
   },
   {
    "color": "B",
    "x": 4,
    "y": 16
   },
   {
    "color": "B",
    "x": 6,
    "y": 16
   },
   {
    "color": "B",
    "x": 4,
    "y": 17
   },
   {
    "color": "B",
    "x": 6,
    "y": 17
   },
   {
    "color": "B",
    "x": 7,
    "y": 17
   },
   {
    "color": "W",
    "x": 6,
    "y": 14
   },
   {
    "color": "W",
    "x": 7,
    "y": 14
   },
   {
    "color": "W",
    "x": 5,
    "y": 15
   },
   {
    "color": "W",
    "x": 7,
    "y": 15
   },
   {
    "color": "W",
    "x": 3,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 16
   },
   {
    "color": "W",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 3,
    "y": 17
   },
   {
    "color": "W",
    "x": 5,
    "y": 17
   },
   {
    "color": "W",
    "x": 8,
    "y": 17
   },
   {
    "color": "W",
    "x": 4,
    "y": 18
   },
   {
    "color": "W",
    "x": 5,
    "y": 18
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 10,
   "maxX": 11,
   "maxY": 18
  },
  "title": "封网吃白（左下）",
  "goalText": "黑先，封网吃住左下白棋（避免走成不成立的征子）。",
  "instruction": "依主解次序 (2,18)→(6,18)→(1,17)→(1,16)→(2,14)→(0,15)→(1,13)→(0,14) 沿左侧封网收气，白被围棋子无法逃出终被提（主解成功叶 \"White's stones are captured.\"）；次佳若走征子次序，白可延气成活（谱注征子不行）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "intermediate/ggg-intermediate-67.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n821",
   "branches": [
    {
     "x": 2,
     "y": 18,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 2,
      "y": 17
     },
     "next": "n820"
    },
    {
     "x": 2,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 16
      },
      {
       "color": "W",
       "x": 7,
       "y": 16
      },
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 7,
       "y": 18
      }
     ]
    },
    {
     "x": 6,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 16
      },
      {
       "color": "W",
       "x": 7,
       "y": 16
      }
     ]
    },
    {
     "x": 3,
     "y": 18,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 2,
       "y": 18
      },
      {
       "color": "B",
       "x": 2,
       "y": 16
      },
      {
       "color": "W",
       "x": 7,
       "y": 16
      },
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 1,
       "y": 17
      },
      {
       "color": "B",
       "x": 3,
       "y": 18
      },
      {
       "color": "W",
       "x": 3,
       "y": 17
      }
     ]
    },
    {
     "x": 2,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 2,
       "y": 17
      },
      {
       "color": "W",
       "x": 2,
       "y": 16
      },
      {
       "color": "B",
       "x": 1,
       "y": 16
      },
      {
       "color": "W",
       "x": 2,
       "y": 15
      },
      {
       "color": "B",
       "x": 2,
       "y": 14
      },
      {
       "color": "W",
       "x": 1,
       "y": 15
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n814",
    "branches": [
     {
      "x": 0,
      "y": 14,
      "type": "success",
      "reason": "Correct. White's stones are captured."
     }
    ]
   },
   {
    "id": "n815",
    "branches": [
     {
      "x": 1,
      "y": 13,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 18
      },
      "next": "n814"
     }
    ]
   },
   {
    "id": "n816",
    "branches": [
     {
      "x": 0,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 14
      },
      "next": "n815"
     },
     {
      "x": 1,
      "y": 14,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 0,
        "y": 15
       },
       {
        "color": "B",
        "x": 0,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n817",
    "branches": [
     {
      "x": 2,
      "y": 14,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 1,
       "y": 15
      },
      "next": "n816"
     },
     {
      "x": 1,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 15
       },
       {
        "color": "W",
        "x": 2,
        "y": 14
       }
      ]
     }
    ]
   },
   {
    "id": "n818",
    "branches": [
     {
      "x": 1,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 15
      },
      "next": "n817"
     },
     {
      "x": 2,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 15
       },
       {
        "color": "W",
        "x": 1,
        "y": 16
       },
       {
        "color": "B",
        "x": 0,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       },
       {
        "color": "B",
        "x": 1,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n819",
    "branches": [
     {
      "x": 1,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 16
      },
      "next": "n818"
     },
     {
      "x": 2,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n820",
    "branches": [
     {
      "x": 6,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 3,
       "y": 18
      },
      "next": "n819"
     },
     {
      "x": 1,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 16
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 18
       }
      ]
     },
     {
      "x": 1,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 16
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 1,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       }
      ]
     }
    ]
   },
   {
    "id": "n821",
    "branches": [
     {
      "x": 2,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 2,
       "y": 17
      },
      "next": "n820"
     },
     {
      "x": 2,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 16
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 18
       }
      ]
     },
     {
      "x": 6,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 16
       }
      ]
     },
     {
      "x": 3,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 2,
        "y": 18
       },
       {
        "color": "B",
        "x": 2,
        "y": 16
       },
       {
        "color": "W",
        "x": 7,
        "y": 16
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 1,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       }
      ]
     },
     {
      "x": 2,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 2,
        "y": 16
       },
       {
        "color": "B",
        "x": 1,
        "y": 16
       },
       {
        "color": "W",
        "x": 2,
        "y": 15
       },
       {
        "color": "B",
        "x": 2,
        "y": 14
       },
       {
        "color": "W",
        "x": 1,
        "y": 15
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "1d-10",
  "levelIndex": 9,
  "orderInLevel": 10,
  "size": 19,
  "initial": [
   {
    "color": "B",
    "x": 4,
    "y": 13
   },
   {
    "color": "B",
    "x": 5,
    "y": 13
   },
   {
    "color": "B",
    "x": 6,
    "y": 13
   },
   {
    "color": "B",
    "x": 2,
    "y": 14
   },
   {
    "color": "B",
    "x": 3,
    "y": 14
   },
   {
    "color": "B",
    "x": 6,
    "y": 14
   },
   {
    "color": "B",
    "x": 7,
    "y": 15
   },
   {
    "color": "B",
    "x": 7,
    "y": 16
   },
   {
    "color": "B",
    "x": 9,
    "y": 16
   },
   {
    "color": "W",
    "x": 5,
    "y": 11
   },
   {
    "color": "W",
    "x": 3,
    "y": 12
   },
   {
    "color": "W",
    "x": 7,
    "y": 12
   },
   {
    "color": "W",
    "x": 3,
    "y": 13
   },
   {
    "color": "W",
    "x": 7,
    "y": 13
   },
   {
    "color": "W",
    "x": 4,
    "y": 14
   },
   {
    "color": "W",
    "x": 7,
    "y": 14
   },
   {
    "color": "W",
    "x": 4,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 15
   },
   {
    "color": "W",
    "x": 6,
    "y": 16
   }
  ],
  "userColor": "B",
  "goal": "kill",
  "targetGroup": [],
  "viewRegion": {
   "minX": 0,
   "minY": 9,
   "maxX": 11,
   "maxY": 18
  },
  "title": "对杀吃白（紧气）",
  "goalText": "黑先，在对杀中获胜，吃住白棋。",
  "instruction": "黑先收紧外侧气并保持自己气长：主解沿右侧连续紧气，白对杀气短失败，白棋被提（末手黑提白2）。",
  "unlistedPolicy": "neutral",
  "source": {
   "origin": "gogameguru",
   "ref": "hard/ggg-hard-59.sgf",
   "license": "CC BY-NC-SA 4.0",
   "adapted": "已逐题审核（2026-09-07）"
  },
  "reviewStatus": "reviewed",
  "root": {
   "id": "n1477",
   "branches": [
    {
     "x": 5,
     "y": 15,
     "type": "continue",
     "whiteReply": {
      "color": "W",
      "x": 5,
      "y": 16
     },
     "next": "n1476"
    },
    {
     "x": 4,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 16
      },
      {
       "color": "W",
       "x": 5,
       "y": 15
      }
     ]
    },
    {
     "x": 6,
     "y": 17,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 6,
       "y": 17
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      }
     ]
    },
    {
     "x": 3,
     "y": 16,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 16
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      }
     ]
    },
    {
     "x": 3,
     "y": 15,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 3,
       "y": 15
      },
      {
       "color": "W",
       "x": 4,
       "y": 16
      }
     ]
    },
    {
     "x": 4,
     "y": 12,
     "type": "failure",
     "reason": "已记录的错误变化",
     "refutation": [
      {
       "color": "B",
       "x": 4,
       "y": 12
      },
      {
       "color": "W",
       "x": 4,
       "y": 11
      },
      {
       "color": "B",
       "x": 3,
       "y": 11
      },
      {
       "color": "W",
       "x": 2,
       "y": 11
      },
      {
       "color": "B",
       "x": 3,
       "y": 10
      },
      {
       "color": "W",
       "x": 2,
       "y": 12
      }
     ]
    }
   ]
  },
  "solutionNodes": [
   {
    "id": "n1469",
    "branches": [
     {
      "x": 6,
      "y": 17,
      "type": "success",
      "reason": "Correct. Black wins the capturing race."
     }
    ]
   },
   {
    "id": "n1470",
    "branches": [
     {
      "x": 8,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 12
      },
      "next": "n1469"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       },
       {
        "color": "B",
        "x": 8,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1471",
    "branches": [
     {
      "x": 8,
      "y": 17,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 18
      },
      "next": "n1470"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 8,
        "y": 17
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1472",
    "branches": [
     {
      "x": 6,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 7,
       "y": 18
      },
      "next": "n1471"
     },
     {
      "x": 8,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 8,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 18
       }
      ]
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 8,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       }
      ]
     }
    ]
   },
   {
    "id": "n1473",
    "branches": [
     {
      "x": 5,
      "y": 18,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 7,
       "y": 17
      },
      "next": "n1472"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 17
       },
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 8,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 5,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 18
       }
      ]
     },
     {
      "x": 4,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 7,
        "y": 17
       },
       {
        "color": "B",
        "x": 8,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       }
      ]
     },
     {
      "x": 6,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 7,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       },
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 5,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 7,
        "y": 17
       },
       {
        "color": "W",
        "x": 5,
        "y": 18
       },
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 18
       },
       {
        "color": "B",
        "x": 3,
        "y": 18
       },
       {
        "color": "W",
        "x": 3,
        "y": 17
       },
       {
        "color": "B",
        "x": 2,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       }
      ]
     },
     {
      "x": 7,
      "y": 18,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 7,
        "y": 18
       },
       {
        "color": "W",
        "x": 5,
        "y": 17
       }
      ]
     }
    ]
   },
   {
    "id": "n1474",
    "branches": [
     {
      "x": 3,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 15
      },
      "next": "n1473"
     },
     {
      "x": 3,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 17
       },
       {
        "color": "W",
        "x": 7,
        "y": 17
       },
       {
        "color": "B",
        "x": 8,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 12
       },
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       },
       {
        "color": "B",
        "x": 5,
        "y": 17
       },
       {
        "color": "W",
        "x": 6,
        "y": 17
       },
       {
        "color": "B",
        "x": 4,
        "y": 18
       },
       {
        "color": "W",
        "x": 6,
        "y": 12
       }
      ]
     }
    ]
   },
   {
    "id": "n1475",
    "branches": [
     {
      "x": 3,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 14
      },
      "next": "n1474"
     }
    ]
   },
   {
    "id": "n1476",
    "branches": [
     {
      "x": 4,
      "y": 16,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 4,
       "y": 17
      },
      "next": "n1475"
     }
    ]
   },
   {
    "id": "n1477",
    "branches": [
     {
      "x": 5,
      "y": 15,
      "type": "continue",
      "whiteReply": {
       "color": "W",
       "x": 5,
       "y": 16
      },
      "next": "n1476"
     },
     {
      "x": 4,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 16
       },
       {
        "color": "W",
        "x": 5,
        "y": 15
       }
      ]
     },
     {
      "x": 6,
      "y": 17,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 6,
        "y": 17
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       }
      ]
     },
     {
      "x": 3,
      "y": 16,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 16
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       }
      ]
     },
     {
      "x": 3,
      "y": 15,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 3,
        "y": 15
       },
       {
        "color": "W",
        "x": 4,
        "y": 16
       }
      ]
     },
     {
      "x": 4,
      "y": 12,
      "type": "failure",
      "reason": "已记录的错误变化",
      "refutation": [
       {
        "color": "B",
        "x": 4,
        "y": 12
       },
       {
        "color": "W",
        "x": 4,
        "y": 11
       },
       {
        "color": "B",
        "x": 3,
        "y": 11
       },
       {
        "color": "W",
        "x": 2,
        "y": 11
       },
       {
        "color": "B",
        "x": 3,
        "y": 10
       },
       {
        "color": "W",
        "x": 2,
        "y": 12
       }
      ]
     }
    ]
   }
  ]
 }
] as Puzzle[];
