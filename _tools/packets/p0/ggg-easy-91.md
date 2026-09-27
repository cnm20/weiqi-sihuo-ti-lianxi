# 审读材料：easy/ggg-easy-91.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. White doesn't have enough liberties to atari at A or B, so Black will win the capturing race.
- Correct
- Correct

## 初始局面（X=黑 O=白；坐标行/列）
     14 15 16 17 18 
 9    .  .  .  .  . 
10    .  O  O  X  . 
11    .  O  X  O  O 
12    .  O  X  .  . 
13    .  O  X  X  X 
14    .  X  O  O  O 
15    .  X  .  .  . 
16    .  .  X  .  . 
17    .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(18,10)",
  "W(17,9)",
  "B(16,15)"
 ],
 "successLeaves": 3,
 "nodes": 34,
 "maxDepth": 4
}

## 答案树（success 终点与失败分支）
- continue @(18,10)
  - success @(16,15) 「Correct. White doesn't have enough liberties to atari at A or B, so Black will w」
  - success @(17,15) 「Correct」
  - success @(18,15) 「Correct」
- failure @(16,15) 「已记录的错误变化」
- failure @(17,15) 「已记录的错误变化」
- failure @(18,15) 「已记录的错误变化」
- failure @(17,9) 「已记录的错误变化」
