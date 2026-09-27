# 审读材料：easy/ggg-easy-99.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. How can Black capture the cutting stones? https://gogameguru.com/
- Correct
- It's also possible, but not the best. When White pushes at A, Black can't block at B, because of cut at C.
- Correct
- Also correct.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7  8  9 
11    .  .  .  .  .  .  .  .  .  . 
12    .  .  O  .  .  .  .  .  .  . 
13    .  O  .  .  .  .  .  .  .  . 
14    .  .  O  X  X  X  .  .  .  . 
15    .  O  X  O  O  .  .  .  O  . 
16    .  .  X  X  .  O  X  .  .  . 
17    .  .  .  .  .  .  O  O  .  . 
18    .  .  .  .  .  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(5,17)",
  "W(4,17)",
  "B(4,16)",
  "W(5,18)",
  "B(5,15)"
 ],
 "successLeaves": 3,
 "nodes": 28,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(5,17)
  - continue @(4,16)
    - success @(5,15) 「Correct」
    - failure @(6,15) 「It's also possible, but not the best. When White pushes at A, Black can't block 」
- failure @(4,16) 「已记录的错误变化」
- failure @(5,15) 「已记录的错误变化」
- failure @(6,15) 「已记录的错误变化」
- failure @(4,17) 「已记录的错误变化」
- failure @(1,16) 「已记录的错误变化」
