# 审读材料：easy/ggg-easy-29.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- White can't play here...
- Correct
- White's alive.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7  8  9 10 11 
11    .  .  .  .  .  .  .  .  .  .  .  . 
12    .  .  X  .  .  .  .  .  .  .  .  . 
13    .  .  .  .  .  .  O  .  .  .  .  . 
14    .  .  .  .  O  .  .  .  .  .  .  . 
15    .  .  X  X  X  O  O  O  .  .  .  . 
16    .  .  X  O  O  X  X  X  X  .  .  . 
17    .  X  O  .  O  O  O  O  X  .  X  . 
18    .  .  .  X  X  O  .  O  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(1,18)",
  "W(3,17)",
  "B(2,18)"
 ],
 "successLeaves": 2,
 "nodes": 36,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- continue @(1,18)
  - success @(2,18) 「Correct」
- failure @(2,18) 「已记录的错误变化」
- failure @(3,17) 「已记录的错误变化」
- failure @(8,18) 「已记录的错误变化」
