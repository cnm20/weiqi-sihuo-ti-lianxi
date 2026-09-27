# 审读材料：easy/ggg-easy-57.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. Black wins the capturing race.
- Correct. Black wins the capturing race.
- Correct. Black captures the cutting stones.
- Correct. Black captures the cutting stones.
- Now Black has to fight a ko here. If Black just conntects at A, White will atari at B and it's still a ko.
- This is a seki, and Black has to worry about the weakness at A now.
- This is a seki, and Black has to worry about the weakness at A now.
- Black doesn't have enough liberties to make a ko, so Black dies.
- Now Black has to fight a ko, but Black can do better.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7  8 
10    .  .  .  .  .  .  .  .  . 
11    .  .  .  .  .  O  .  .  . 
12    .  .  .  .  .  O  X  .  . 
13    .  .  .  O  .  O  X  .  . 
14    .  O  .  .  O  X  .  X  . 
15    O  .  O  O  X  X  .  .  . 
16    O  O  X  X  O  O  X  .  . 
17    X  X  X  O  .  O  X  .  . 
18    .  .  .  .  .  O  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(4,18)",
  "W(3,18)",
  "B(6,18)",
  "W(4,17)",
  "B(2,18)"
 ],
 "successLeaves": 4,
 "nodes": 29,
 "maxDepth": 5
}

## 答案树（success 终点与失败分支）
- continue @(4,18)
  - continue @(6,18)
    - success @(2,18) 「Correct. Black wins the capturing race.」
  - failure @(2,18) 「已记录的错误变化」
- failure @(3,18) 「已记录的错误变化」
- failure @(6,18) 「已记录的错误变化」
- failure @(2,18) 「已记录的错误变化」
