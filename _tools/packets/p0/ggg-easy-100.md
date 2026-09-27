# 审读材料：easy/ggg-easy-100.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- Correct
- Correct
- Correct
- White could also tenuki now, if she wants to take sente for example, and Black will only be able to capture the number 1 (through shortage of liberties). The rest of the group is already alive.
- If White tenukis...
- The rest of White's group is still alive. White shouldn't connect at A because Black would atari at B.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 
12    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
13    .  X  .  X  .  .  X  X  X  .  .  X  X  .  .  . 
14    .  .  X  O  X  X  O  O  .  X  X  O  O  .  X  . 
15    .  X  O  O  .  O  .  .  O  .  O  .  .  O  X  . 
16    .  .  X  O  .  O  .  .  O  .  O  .  .  O  X  . 
17    .  .  X  O  X  .  O  O  .  X  X  O  O  X  X  . 
18    .  .  .  X  .  .  X  X  X  .  .  X  X  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(13,14)",
  "W(12,15)",
  "B(11,16)",
  "W(11,15)",
  "B(12,16)"
 ],
 "successLeaves": 4,
 "nodes": 67,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- continue @(13,14)
  - continue @(11,16)
    - success @(12,16) 「Correct」
- failure @(12,16) 「已记录的错误变化」
- failure @(11,16) 「已记录的错误变化」
- failure @(11,15) 「已记录的错误变化」
- failure @(12,15) 「已记录的错误变化」
- failure @(5,17) 「已记录的错误变化」
- failure @(8,14) 「已记录的错误变化」
