// 自动生成：tools/buildFinalPuzzles.ts —— 请勿手改
import type { Puzzle } from '../domain/types';
export const samplePuzzles: Puzzle[] = [
 {
  id: "s001",
  levelIndex: 0,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 14,
    y: 15
   },
   {
    color: "B",
    x: 15,
    y: 15
   },
   {
    color: "B",
    x: 16,
    y: 15
   },
   {
    color: "B",
    x: 17,
    y: 15
   },
   {
    color: "B",
    x: 18,
    y: 15
   },
   {
    color: "B",
    x: 12,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 13,
    y: 17
   },
   {
    color: "B",
    x: 16,
    y: 18
   },
   {
    color: "W",
    x: 15,
    y: 16
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 18,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 17
   },
   {
    color: "W",
    x: 16,
    y: 17
   },
   {
    color: "W",
    x: 18,
    y: 17
   },
   {
    color: "W",
    x: 14,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 10,
   minY: 13,
   maxX: 18,
   maxY: 18
  },
  title: "9级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-01.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n1",
   branches: [
    {
     x: 17,
     y: 18,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 17,
      y: 17
     },
     next: "n0"
    },
    {
     x: 17,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 16
      },
      {
       color: "W",
       x: 17,
       y: 17
      },
      {
       color: "B",
       x: 13,
       y: 18
      },
      {
       color: "W",
       x: 17,
       y: 18
      }
     ]
    },
    {
     x: 13,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 13,
       y: 18
      },
      {
       color: "W",
       x: 17,
       y: 18
      },
      {
       color: "B",
       x: 17,
       y: 16
      },
      {
       color: "W",
       x: 17,
       y: 17
      },
      {
       color: "B",
       x: 15,
       y: 18
      },
      {
       color: "W",
       x: 15,
       y: 17
      }
     ]
    },
    {
     x: 15,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 18
      },
      {
       color: "W",
       x: 17,
       y: 18
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n0",
    branches: [
     {
      x: 13,
      y: 18,
      type: "success",
      reason: "Correct"
     },
     {
      x: 15,
      y: 18,
      type: "success",
      reason: "Also correct. Playing this move at A is usually better style because it leaves less bad aji (potential for bad things to happen) on the outside."
     }
    ]
   },
   {
    id: "n1",
    branches: [
     {
      x: 17,
      y: 18,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 17,
       y: 17
      },
      next: "n0"
     },
     {
      x: 17,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 16
       },
       {
        color: "W",
        x: 17,
        y: 17
       },
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 17,
        y: 18
       }
      ]
     },
     {
      x: 13,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 17,
        y: 18
       },
       {
        color: "B",
        x: 17,
        y: 16
       },
       {
        color: "W",
        x: 17,
        y: 17
       },
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 17
       }
      ]
     },
     {
      x: 15,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 17,
        y: 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s002",
  levelIndex: 1,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 16,
    y: 14
   },
   {
    color: "B",
    x: 17,
    y: 14
   },
   {
    color: "B",
    x: 18,
    y: 14
   },
   {
    color: "B",
    x: 16,
    y: 15
   },
   {
    color: "B",
    x: 13,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 15,
    y: 16
   },
   {
    color: "B",
    x: 13,
    y: 17
   },
   {
    color: "B",
    x: 13,
    y: 18
   },
   {
    color: "B",
    x: 16,
    y: 18
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 18,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 17
   },
   {
    color: "W",
    x: 15,
    y: 17
   },
   {
    color: "W",
    x: 16,
    y: 17
   },
   {
    color: "W",
    x: 18,
    y: 17
   },
   {
    color: "W",
    x: 14,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 11,
   minY: 12,
   maxX: 18,
   maxY: 18
  },
  title: "8级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-02.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n3",
   branches: [
    {
     x: 17,
     y: 18,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 18,
      y: 15
     },
     next: "n2"
    },
    {
     x: 18,
     y: 15,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 18,
       y: 15
      },
      {
       color: "W",
       x: 17,
       y: 18
      }
     ]
    },
    {
     x: 17,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 16
      },
      {
       color: "W",
       x: 18,
       y: 15
      }
     ]
    },
    {
     x: 17,
     y: 17,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 17
      },
      {
       color: "W",
       x: 17,
       y: 18
      },
      {
       color: "B",
       x: 18,
       y: 18
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n2",
    branches: [
     {
      x: 17,
      y: 17,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n3",
    branches: [
     {
      x: 17,
      y: 18,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 18,
       y: 15
      },
      next: "n2"
     },
     {
      x: 18,
      y: 15,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 18,
        y: 15
       },
       {
        color: "W",
        x: 17,
        y: 18
       }
      ]
     },
     {
      x: 17,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 16
       },
       {
        color: "W",
        x: 18,
        y: 15
       }
      ]
     },
     {
      x: 17,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 17
       },
       {
        color: "W",
        x: 17,
        y: 18
       },
       {
        color: "B",
        x: 18,
        y: 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s003",
  levelIndex: 2,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 18,
    y: 17
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 17
   },
   {
    color: "B",
    x: 14,
    y: 18
   },
   {
    color: "B",
    x: 16,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 17
   },
   {
    color: "B",
    x: 18,
    y: 18
   },
   {
    color: "W",
    x: 13,
    y: 18
   },
   {
    color: "W",
    x: 13,
    y: 17
   },
   {
    color: "W",
    x: 13,
    y: 16
   },
   {
    color: "W",
    x: 13,
    y: 15
   },
   {
    color: "W",
    x: 14,
    y: 15
   },
   {
    color: "W",
    x: 15,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 17,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 11,
   minY: 13,
   maxX: 18,
   maxY: 18
  },
  title: "7级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-05.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n9",
   branches: [
    {
     x: 15,
     y: 16,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 15,
      y: 18
     },
     next: "n8"
    },
    {
     x: 16,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 18
      },
      {
       color: "W",
       x: 15,
       y: 17
      },
      {
       color: "B",
       x: 15,
       y: 16
      },
      {
       color: "W",
       x: 15,
       y: 18
      }
     ]
    },
    {
     x: 15,
     y: 17,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 17
      },
      {
       color: "W",
       x: 16,
       y: 18
      }
     ]
    },
    {
     x: 15,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 18
      },
      {
       color: "W",
       x: 15,
       y: 16
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n8",
    branches: [
     {
      x: 15,
      y: 17,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n9",
    branches: [
     {
      x: 15,
      y: 16,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 15,
       y: 18
      },
      next: "n8"
     },
     {
      x: 16,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 17
       },
       {
        color: "B",
        x: 15,
        y: 16
       },
       {
        color: "W",
        x: 15,
        y: 18
       }
      ]
     },
     {
      x: 15,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 17
       },
       {
        color: "W",
        x: 16,
        y: 18
       }
      ]
     },
     {
      x: 15,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s004",
  levelIndex: 3,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 13,
    y: 15
   },
   {
    color: "B",
    x: 13,
    y: 16
   },
   {
    color: "B",
    x: 13,
    y: 17
   },
   {
    color: "B",
    x: 13,
    y: 18
   },
   {
    color: "B",
    x: 14,
    y: 15
   },
   {
    color: "B",
    x: 15,
    y: 14
   },
   {
    color: "B",
    x: 16,
    y: 14
   },
   {
    color: "B",
    x: 17,
    y: 15
   },
   {
    color: "B",
    x: 17,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 18
   },
   {
    color: "W",
    x: 14,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 17
   },
   {
    color: "W",
    x: 15,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 16,
    y: 17
   },
   {
    color: "W",
    x: 17,
    y: 17
   },
   {
    color: "W",
    x: 18,
    y: 17
   },
   {
    color: "W",
    x: 16,
    y: 18
   },
   {
    color: "W",
    x: 15,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 11,
   minY: 12,
   maxX: 18,
   maxY: 18
  },
  title: "6级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-06.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n11",
   branches: [
    {
     x: 15,
     y: 16,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 15,
      y: 17
     },
     next: "n10"
    },
    {
     x: 16,
     y: 15,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 15
      },
      {
       color: "W",
       x: 15,
       y: 16
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n10",
    branches: [
     {
      x: 16,
      y: 15,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n11",
    branches: [
     {
      x: 15,
      y: 16,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 15,
       y: 17
      },
      next: "n10"
     },
     {
      x: 16,
      y: 15,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 15
       },
       {
        color: "W",
        x: 15,
        y: 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s005",
  levelIndex: 4,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 15,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 17
   },
   {
    color: "B",
    x: 15,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 17
   },
   {
    color: "B",
    x: 18,
    y: 17
   },
   {
    color: "W",
    x: 14,
    y: 15
   },
   {
    color: "W",
    x: 15,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 15
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 12,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 16
   },
   {
    color: "W",
    x: 17,
    y: 16
   },
   {
    color: "W",
    x: 18,
    y: 16
   },
   {
    color: "W",
    x: 13,
    y: 17
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 10,
   minY: 13,
   maxX: 18,
   maxY: 18
  },
  title: "5级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-08.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n19",
   branches: [
    {
     x: 16,
     y: 16,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 16,
      y: 18
     },
     next: "n18"
    },
    {
     x: 14,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 14,
       y: 18
      },
      {
       color: "W",
       x: 16,
       y: 17
      },
      {
       color: "B",
       x: 16,
       y: 16
      },
      {
       color: "W",
       x: 16,
       y: 18
      },
      {
       color: "B",
       x: 17,
       y: 18
      },
      {
       color: "W",
       x: 18,
       y: 18
      }
     ]
    },
    {
     x: 16,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 18
      },
      {
       color: "W",
       x: 16,
       y: 16
      },
      {
       color: "B",
       x: 16,
       y: 17
      },
      {
       color: "W",
       x: 14,
       y: 18
      }
     ]
    },
    {
     x: 17,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 18
      },
      {
       color: "W",
       x: 15,
       y: 18
      },
      {
       color: "B",
       x: 14,
       y: 18
      },
      {
       color: "W",
       x: 16,
       y: 17
      },
      {
       color: "B",
       x: 16,
       y: 16
      },
      {
       color: "W",
       x: 13,
       y: 18
      }
     ]
    },
    {
     x: 16,
     y: 17,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 17
      },
      {
       color: "W",
       x: 14,
       y: 18
      },
      {
       color: "B",
       x: 15,
       y: 18
      },
      {
       color: "W",
       x: 17,
       y: 18
      },
      {
       color: "B",
       x: 13,
       y: 18
      },
      {
       color: "W",
       x: 11,
       y: 17
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n16",
    branches: [
     {
      x: 15,
      y: 18,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n17",
    branches: [
     {
      x: 16,
      y: 17,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 13,
       y: 18
      },
      next: "n16"
     },
     {
      x: 15,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 16,
        y: 17
       }
      ]
     }
    ]
   },
   {
    id: "n18",
    branches: [
     {
      x: 17,
      y: 18,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 14,
       y: 18
      },
      next: "n17"
     },
     {
      x: 16,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 17
       },
       {
        color: "W",
        x: 17,
        y: 18
       }
      ]
     },
     {
      x: 15,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 17,
        y: 18
       }
      ]
     },
     {
      x: 14,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 14,
        y: 18
       },
       {
        color: "W",
        x: 16,
        y: 17
       },
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 13,
        y: 18
       }
      ]
     }
    ]
   },
   {
    id: "n19",
    branches: [
     {
      x: 16,
      y: 16,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 16,
       y: 18
      },
      next: "n18"
     },
     {
      x: 14,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 14,
        y: 18
       },
       {
        color: "W",
        x: 16,
        y: 17
       },
       {
        color: "B",
        x: 16,
        y: 16
       },
       {
        color: "W",
        x: 16,
        y: 18
       },
       {
        color: "B",
        x: 17,
        y: 18
       },
       {
        color: "W",
        x: 18,
        y: 18
       }
      ]
     },
     {
      x: 16,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 18
       },
       {
        color: "W",
        x: 16,
        y: 16
       },
       {
        color: "B",
        x: 16,
        y: 17
       },
       {
        color: "W",
        x: 14,
        y: 18
       }
      ]
     },
     {
      x: 17,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 18
       },
       {
        color: "B",
        x: 14,
        y: 18
       },
       {
        color: "W",
        x: 16,
        y: 17
       },
       {
        color: "B",
        x: 16,
        y: 16
       },
       {
        color: "W",
        x: 13,
        y: 18
       }
      ]
     },
     {
      x: 16,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 17
       },
       {
        color: "W",
        x: 14,
        y: 18
       },
       {
        color: "B",
        x: 15,
        y: 18
       },
       {
        color: "W",
        x: 17,
        y: 18
       },
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 11,
        y: 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s006",
  levelIndex: 5,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 15,
    y: 16
   },
   {
    color: "B",
    x: 17,
    y: 16
   },
   {
    color: "B",
    x: 15,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 17
   },
   {
    color: "B",
    x: 15,
    y: 18
   },
   {
    color: "W",
    x: 14,
    y: 15
   },
   {
    color: "W",
    x: 15,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 15
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 18,
    y: 15
   },
   {
    color: "W",
    x: 14,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 17
   },
   {
    color: "W",
    x: 14,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 12,
   minY: 13,
   maxX: 18,
   maxY: 18
  },
  title: "4级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-09.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n20",
   branches: [
    {
     x: 17,
     y: 18,
     type: "success",
     reason: "Correct"
    },
    {
     x: 18,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 18,
       y: 16
      },
      {
       color: "W",
       x: 16,
       y: 16
      },
      {
       color: "B",
       x: 16,
       y: 17
      },
      {
       color: "W",
       x: 17,
       y: 18
      },
      {
       color: "B",
       x: 18,
       y: 18
      },
      {
       color: "W",
       x: 18,
       y: 17
      }
     ]
    },
    {
     x: 16,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 16
      },
      {
       color: "W",
       x: 17,
       y: 18
      },
      {
       color: "B",
       x: 18,
       y: 16
      },
      {
       color: "W",
       x: 16,
       y: 18
      },
      {
       color: "B",
       x: 18,
       y: 18
      },
      {
       color: "W",
       x: 18,
       y: 17
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n20",
    branches: [
     {
      x: 17,
      y: 18,
      type: "success",
      reason: "Correct"
     },
     {
      x: 18,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 18,
        y: 16
       },
       {
        color: "W",
        x: 16,
        y: 16
       },
       {
        color: "B",
        x: 16,
        y: 17
       },
       {
        color: "W",
        x: 17,
        y: 18
       },
       {
        color: "B",
        x: 18,
        y: 18
       },
       {
        color: "W",
        x: 18,
        y: 17
       }
      ]
     },
     {
      x: 16,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 16
       },
       {
        color: "W",
        x: 17,
        y: 18
       },
       {
        color: "B",
        x: 18,
        y: 16
       },
       {
        color: "W",
        x: 16,
        y: 18
       },
       {
        color: "B",
        x: 18,
        y: 18
       },
       {
        color: "W",
        x: 18,
        y: 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s007",
  levelIndex: 6,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 15,
    y: 15
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 16,
    y: 16
   },
   {
    color: "B",
    x: 13,
    y: 17
   },
   {
    color: "B",
    x: 14,
    y: 17
   },
   {
    color: "B",
    x: 16,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 18
   },
   {
    color: "W",
    x: 16,
    y: 13
   },
   {
    color: "W",
    x: 15,
    y: 14
   },
   {
    color: "W",
    x: 13,
    y: 15
   },
   {
    color: "W",
    x: 14,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 15
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 11,
    y: 16
   },
   {
    color: "W",
    x: 13,
    y: 16
   },
   {
    color: "W",
    x: 17,
    y: 16
   },
   {
    color: "W",
    x: 12,
    y: 17
   },
   {
    color: "W",
    x: 18,
    y: 17
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 9,
   minY: 11,
   maxX: 18,
   maxY: 18
  },
  title: "3级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-10.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n22",
   branches: [
    {
     x: 15,
     y: 18,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 15,
      y: 16
     },
     next: "n21"
    },
    {
     x: 13,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 13,
       y: 18
      },
      {
       color: "W",
       x: 15,
       y: 18
      }
     ]
    },
    {
     x: 15,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 16
      },
      {
       color: "W",
       x: 15,
       y: 18
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n21",
    branches: [
     {
      x: 13,
      y: 18,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n22",
    branches: [
     {
      x: 15,
      y: 18,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 15,
       y: 16
      },
      next: "n21"
     },
     {
      x: 13,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 18
       }
      ]
     },
     {
      x: 15,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 16
       },
       {
        color: "W",
        x: 15,
        y: 18
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s008",
  levelIndex: 7,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 14,
    y: 17
   },
   {
    color: "B",
    x: 15,
    y: 17
   },
   {
    color: "B",
    x: 16,
    y: 17
   },
   {
    color: "B",
    x: 14,
    y: 18
   },
   {
    color: "B",
    x: 17,
    y: 18
   },
   {
    color: "W",
    x: 17,
    y: 15
   },
   {
    color: "W",
    x: 18,
    y: 15
   },
   {
    color: "W",
    x: 13,
    y: 16
   },
   {
    color: "W",
    x: 14,
    y: 16
   },
   {
    color: "W",
    x: 15,
    y: 16
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 13,
    y: 17
   },
   {
    color: "W",
    x: 15,
    y: 18
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 11,
   minY: 13,
   maxX: 18,
   maxY: 18
  },
  title: "2级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "easy/ggg-easy-11.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n50",
   branches: [
    {
     x: 18,
     y: 17,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 17,
      y: 16
     },
     next: "n49"
    },
    {
     x: 17,
     y: 17,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 17
      },
      {
       color: "W",
       x: 18,
       y: 17
      }
     ]
    },
    {
     x: 17,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 17,
       y: 16
      },
      {
       color: "W",
       x: 18,
       y: 17
      },
      {
       color: "B",
       x: 18,
       y: 16
      },
      {
       color: "W",
       x: 17,
       y: 17
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n49",
    branches: [
     {
      x: 17,
      y: 17,
      type: "success",
      reason: "Correct"
     }
    ]
   },
   {
    id: "n50",
    branches: [
     {
      x: 18,
      y: 17,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 17,
       y: 16
      },
      next: "n49"
     },
     {
      x: 17,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 17
       },
       {
        color: "W",
        x: 18,
        y: 17
       }
      ]
     },
     {
      x: 17,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 17,
        y: 16
       },
       {
        color: "W",
        x: 18,
        y: 17
       },
       {
        color: "B",
        x: 18,
        y: 16
       },
       {
        color: "W",
        x: 17,
        y: 17
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s009",
  levelIndex: 8,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 12,
    y: 14
   },
   {
    color: "B",
    x: 13,
    y: 14
   },
   {
    color: "B",
    x: 14,
    y: 15
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 17
   },
   {
    color: "B",
    x: 14,
    y: 18
   },
   {
    color: "W",
    x: 14,
    y: 13
   },
   {
    color: "W",
    x: 14,
    y: 14
   },
   {
    color: "W",
    x: 16,
    y: 14
   },
   {
    color: "W",
    x: 13,
    y: 15
   },
   {
    color: "W",
    x: 15,
    y: 15
   },
   {
    color: "W",
    x: 13,
    y: 16
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 13,
    y: 17
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 9,
   minY: 11,
   maxX: 18,
   maxY: 18
  },
  title: "1级流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "intermediate/ggg-intermediate-01.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n368",
   branches: [
    {
     x: 12,
     y: 17,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 12,
      y: 16
     },
     next: "n367"
    },
    {
     x: 11,
     y: 16,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 11,
       y: 16
      },
      {
       color: "W",
       x: 15,
       y: 17
      },
      {
       color: "B",
       x: 12,
       y: 17
      },
      {
       color: "W",
       x: 13,
       y: 18
      },
      {
       color: "B",
       x: 12,
       y: 15
      },
      {
       color: "W",
       x: 15,
       y: 16
      },
      {
       color: "B",
       x: 12,
       y: 16
      },
      {
       color: "W",
       x: 15,
       y: 18
      }
     ]
    },
    {
     x: 12,
     y: 15,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 12,
       y: 15
      },
      {
       color: "W",
       x: 11,
       y: 16
      }
     ]
    },
    {
     x: 11,
     y: 17,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 11,
       y: 17
      },
      {
       color: "W",
       x: 11,
       y: 16
      },
      {
       color: "B",
       x: 10,
       y: 16
      },
      {
       color: "W",
       x: 11,
       y: 15
      }
     ]
    },
    {
     x: 11,
     y: 15,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 11,
       y: 15
      },
      {
       color: "W",
       x: 15,
       y: 17
      }
     ]
    },
    {
     x: 13,
     y: 18,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 13,
       y: 18
      },
      {
       color: "W",
       x: 11,
       y: 16
      },
      {
       color: "B",
       x: 11,
       y: 15
      },
      {
       color: "W",
       x: 10,
       y: 16
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n365",
    branches: [
     {
      x: 13,
      y: 18,
      type: "success",
      reason: "Correct"
     },
     {
      x: 10,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 10,
        y: 16
       },
       {
        color: "W",
        x: 13,
        y: 18
       },
       {
        color: "B",
        x: 10,
        y: 17
       },
       {
        color: "W",
        x: 15,
        y: 17
       },
       {
        color: "B",
        x: 10,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 16
       },
       {
        color: "B",
        x: 11,
        y: 18
       },
       {
        color: "W",
        x: 15,
        y: 18
       }
      ]
     }
    ]
   },
   {
    id: "n366",
    branches: [
     {
      x: 12,
      y: 15,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 12,
       y: 18
      },
      next: "n365"
     },
     {
      x: 13,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 12,
        y: 18
       },
       {
        color: "B",
        x: 12,
        y: 15
       }
      ]
     },
     {
      x: 12,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 12,
        y: 18
       },
       {
        color: "W",
        x: 11,
        y: 15
       },
       {
        color: "B",
        x: 10,
        y: 16
       },
       {
        color: "W",
        x: 12,
        y: 15
       }
      ]
     }
    ]
   },
   {
    id: "n367",
    branches: [
     {
      x: 11,
      y: 16,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 11,
       y: 17
      },
      next: "n366"
     },
     {
      x: 11,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 11,
        y: 17
       },
       {
        color: "W",
        x: 11,
        y: 16
       }
      ]
     }
    ]
   },
   {
    id: "n368",
    branches: [
     {
      x: 12,
      y: 17,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 12,
       y: 16
      },
      next: "n367"
     },
     {
      x: 11,
      y: 16,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 11,
        y: 16
       },
       {
        color: "W",
        x: 15,
        y: 17
       },
       {
        color: "B",
        x: 12,
        y: 17
       },
       {
        color: "W",
        x: 13,
        y: 18
       },
       {
        color: "B",
        x: 12,
        y: 15
       },
       {
        color: "W",
        x: 15,
        y: 16
       },
       {
        color: "B",
        x: 12,
        y: 16
       },
       {
        color: "W",
        x: 15,
        y: 18
       }
      ]
     },
     {
      x: 12,
      y: 15,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 12,
        y: 15
       },
       {
        color: "W",
        x: 11,
        y: 16
       }
      ]
     },
     {
      x: 11,
      y: 17,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 11,
        y: 17
       },
       {
        color: "W",
        x: 11,
        y: 16
       },
       {
        color: "B",
        x: 10,
        y: 16
       },
       {
        color: "W",
        x: 11,
        y: 15
       }
      ]
     },
     {
      x: 11,
      y: 15,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 11,
        y: 15
       },
       {
        color: "W",
        x: 15,
        y: 17
       }
      ]
     },
     {
      x: 13,
      y: 18,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 13,
        y: 18
       },
       {
        color: "W",
        x: 11,
        y: 16
       },
       {
        color: "B",
        x: 11,
        y: 15
       },
       {
        color: "W",
        x: 10,
        y: 16
       }
      ]
     }
    ]
   }
  ]
 },
 {
  id: "s010",
  levelIndex: 9,
  orderInLevel: 1,
  size: 19,
  initial: [
   {
    color: "B",
    x: 16,
    y: 11
   },
   {
    color: "B",
    x: 14,
    y: 12
   },
   {
    color: "B",
    x: 15,
    y: 12
   },
   {
    color: "B",
    x: 17,
    y: 12
   },
   {
    color: "B",
    x: 13,
    y: 13
   },
   {
    color: "B",
    x: 18,
    y: 13
   },
   {
    color: "B",
    x: 13,
    y: 14
   },
   {
    color: "B",
    x: 13,
    y: 15
   },
   {
    color: "B",
    x: 13,
    y: 16
   },
   {
    color: "B",
    x: 14,
    y: 16
   },
   {
    color: "B",
    x: 18,
    y: 16
   },
   {
    color: "B",
    x: 15,
    y: 17
   },
   {
    color: "B",
    x: 16,
    y: 17
   },
   {
    color: "B",
    x: 17,
    y: 17
   },
   {
    color: "B",
    x: 18,
    y: 17
   },
   {
    color: "W",
    x: 14,
    y: 13
   },
   {
    color: "W",
    x: 17,
    y: 13
   },
   {
    color: "W",
    x: 14,
    y: 14
   },
   {
    color: "W",
    x: 17,
    y: 14
   },
   {
    color: "W",
    x: 14,
    y: 15
   },
   {
    color: "W",
    x: 16,
    y: 15
   },
   {
    color: "W",
    x: 18,
    y: 15
   },
   {
    color: "W",
    x: 15,
    y: 16
   },
   {
    color: "W",
    x: 16,
    y: 16
   },
   {
    color: "W",
    x: 17,
    y: 16
   }
  ],
  userColor: "B",
  goal: "live",
  targetGroup: [],
  viewRegion: {
   minX: 11,
   minY: 9,
   maxX: 18,
   maxY: 18
  },
  title: "1段流程样题",
  goalText: "黑先",
  instruction: "流程样题：请在棋盘上走出正解变化。目标说明与难度分级待逐题审核后完善。",
  unlistedPolicy: "neutral",
  source: {
   origin: "gogameguru",
   ref: "intermediate/ggg-intermediate-02.sgf",
   license: "CC BY-NC-SA 4.0",
   adapted: "样题占位：待逐题审核目标/要点与难度。原题来自 GoGameGuru，CC BY-NC-SA 4.0。"
  },
  reviewStatus: "needs-review",
  root: {
   id: "n370",
   branches: [
    {
     x: 16,
     y: 13,
     type: "continue",
     whiteReply: {
      color: "W",
      x: 16,
      y: 14
     },
     next: "n369"
    },
    {
     x: 18,
     y: 12,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 18,
       y: 12
      },
      {
       color: "W",
       x: 18,
       y: 14
      },
      {
       color: "B",
       x: 16,
       y: 13
      },
      {
       color: "W",
       x: 16,
       y: 14
      },
      {
       color: "B",
       x: 15,
       y: 14
      }
     ]
    },
    {
     x: 15,
     y: 13,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 13
      },
      {
       color: "W",
       x: 15,
       y: 14
      },
      {
       color: "B",
       x: 16,
       y: 13
      },
      {
       color: "W",
       x: 16,
       y: 14
      }
     ]
    },
    {
     x: 15,
     y: 14,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 15,
       y: 14
      },
      {
       color: "W",
       x: 15,
       y: 13
      },
      {
       color: "B",
       x: 16,
       y: 13
      },
      {
       color: "W",
       x: 15,
       y: 15
      },
      {
       color: "B",
       x: 16,
       y: 12
      },
      {
       color: "W",
       x: 16,
       y: 14
      }
     ]
    },
    {
     x: 16,
     y: 14,
     type: "failure",
     reason: "已记录的错误变化",
     refutation: [
      {
       color: "B",
       x: 16,
       y: 14
      },
      {
       color: "W",
       x: 16,
       y: 13
      },
      {
       color: "B",
       x: 15,
       y: 14
      },
      {
       color: "W",
       x: 15,
       y: 13
      }
     ]
    }
   ]
  },
  solutionNodes: [
   {
    id: "n369",
    branches: [
     {
      x: 15,
      y: 14,
      type: "success",
      reason: "Correct"
     },
     {
      x: 15,
      y: 13,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 13
       },
       {
        color: "W",
        x: 15,
        y: 14
       }
      ]
     }
    ]
   },
   {
    id: "n370",
    branches: [
     {
      x: 16,
      y: 13,
      type: "continue",
      whiteReply: {
       color: "W",
       x: 16,
       y: 14
      },
      next: "n369"
     },
     {
      x: 18,
      y: 12,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 18,
        y: 12
       },
       {
        color: "W",
        x: 18,
        y: 14
       },
       {
        color: "B",
        x: 16,
        y: 13
       },
       {
        color: "W",
        x: 16,
        y: 14
       },
       {
        color: "B",
        x: 15,
        y: 14
       }
      ]
     },
     {
      x: 15,
      y: 13,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 13
       },
       {
        color: "W",
        x: 15,
        y: 14
       },
       {
        color: "B",
        x: 16,
        y: 13
       },
       {
        color: "W",
        x: 16,
        y: 14
       }
      ]
     },
     {
      x: 15,
      y: 14,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 15,
        y: 14
       },
       {
        color: "W",
        x: 15,
        y: 13
       },
       {
        color: "B",
        x: 16,
        y: 13
       },
       {
        color: "W",
        x: 15,
        y: 15
       },
       {
        color: "B",
        x: 16,
        y: 12
       },
       {
        color: "W",
        x: 16,
        y: 14
       }
      ]
     },
     {
      x: 16,
      y: 14,
      type: "failure",
      reason: "已记录的错误变化",
      refutation: [
       {
        color: "B",
        x: 16,
        y: 14
       },
       {
        color: "W",
        x: 16,
        y: 13
       },
       {
        color: "B",
        x: 15,
        y: 14
       },
       {
        color: "W",
        x: 15,
        y: 13
       }
      ]
     }
    ]
   }
  ]
 }
] as Puzzle[];
