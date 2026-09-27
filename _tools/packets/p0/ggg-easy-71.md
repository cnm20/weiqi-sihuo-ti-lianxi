# 审读材料：easy/ggg-easy-71.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. If White plays at A Black can capture at B. If White plays at B, Black connects at A, so Black's alive with two eyes.
- Correct
- Black can't make two eyes now.
- This is the vital point. Black will die after White plays here.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5 
 8    .  .  .  .  .  . 
 9    .  O  .  .  .  . 
10    .  .  .  .  .  . 
11    .  O  O  .  .  . 
12    O  X  O  .  .  . 
13    X  X  O  .  .  . 
14    .  X  X  O  .  . 
15    .  .  .  .  O  . 
16    .  X  X  O  .  . 
17    .  X  O  O  .  . 
18    .  O  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(0,15)",
  "W(2,15)",
  "B(0,17)"
 ],
 "successLeaves": 2,
 "nodes": 14,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(0,15)
  - success @(0,17) 「Correct. If White plays at A Black can capture at B. If White plays at B, Black 」
  - failure @(1,15) 「已记录的错误变化」
- failure @(2,15) 「已记录的错误变化」
- failure @(0,17) 「已记录的错误变化」
