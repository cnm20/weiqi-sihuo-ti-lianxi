# 审读材料：easy/ggg-easy-46.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- It's a ko, but Black can do better.
- Black should be captured now, but this White move is a mistake...
- A and B are miai for Black (if White defends against one, Black plays the other), so Black lives.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6 
 9    .  .  .  .  .  .  . 
10    .  .  O  .  .  .  . 
11    .  O  .  .  .  .  . 
12    .  X  O  O  O  .  . 
13    .  X  X  X  .  .  . 
14    .  X  .  X  .  O  . 
15    .  .  X  O  .  .  . 
16    .  .  O  O  .  O  . 
17    .  O  .  .  .  .  . 
18    .  .  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(0,15)",
  "W(1,16)",
  "B(1,15)",
  "W(0,12)",
  "B(0,13)"
 ],
 "successLeaves": 2,
 "nodes": 38,
 "maxDepth": 9
}

## 答案树（success 终点与失败分支）
- continue @(0,15)
  - continue @(1,15)
    - success @(0,13) 「Correct」
  - failure @(0,12) 「已记录的错误变化」
- failure @(1,16) 「已记录的错误变化」
- failure @(0,12) 「已记录的错误变化」
- failure @(1,15) 「已记录的错误变化」
