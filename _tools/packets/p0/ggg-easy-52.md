# 审读材料：easy/ggg-easy-52.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- Correct
- Correct
- Next if Black cuts at A, White can atari at B and capture two stones. If Black plays C instead, White can keep fighting at D, or just connect at A. Black had a way to capture the cutting stones instead.
- Correct
- Correct
- Correct

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5 
10    .  .  .  .  .  . 
11    .  .  X  .  .  . 
12    .  X  O  .  .  . 
13    .  X  O  .  O  . 
14    .  O  X  X  .  . 
15    .  O  O  X  .  . 
16    .  .  O  X  X  . 
17    .  .  O  O  X  . 
18    .  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(4,12)",
  "W(3,13)",
  "B(5,13)",
  "W(4,14)",
  "B(5,14)",
  "W(4,15)",
  "B(5,15)"
 ],
 "successLeaves": 6,
 "nodes": 58,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- continue @(4,12)
  - continue @(5,13)
    - continue @(5,14)
      - success @(5,15) 「Correct」
    - failure @(3,12) 「已记录的错误变化」
  - failure @(3,12) 「已记录的错误变化」
  - failure @(5,12) 「已记录的错误变化」
- failure @(3,13) 「已记录的错误变化」
- failure @(3,11) 「已记录的错误变化」
- failure @(4,11) 「已记录的错误变化」
- failure @(3,10) 「已记录的错误变化」
- failure @(3,12) 「已记录的错误变化」
- failure @(5,13) 「已记录的错误变化」
