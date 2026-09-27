# 审读材料：easy/ggg-easy-132.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. Even if White connects at A next, she'll lose the capturing race because it's 'one eye vs no eye'.
- Even if Black connects at A next, White's already alive in seki.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7 
11    .  .  .  .  .  .  .  . 
12    .  X  .  .  .  .  .  . 
13    .  .  X  .  .  .  .  . 
14    .  X  .  .  .  .  .  . 
15    X  O  X  X  X  .  .  . 
16    O  O  O  O  X  .  X  . 
17    X  .  O  X  O  X  .  . 
18    .  .  .  .  O  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(2,18)",
  "W(3,18)",
  "B(1,18)",
  "W(0,14)",
  "B(5,18)"
 ],
 "successLeaves": 1,
 "nodes": 32,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- continue @(2,18)
  - continue @(1,18)
    - success @(5,18) 「Correct. Even if White connects at A next, she'll lose the capturing race becaus」
    - failure @(0,13) 「已记录的错误变化」
  - failure @(1,17) 「已记录的错误变化」
  - failure @(5,18) 「已记录的错误变化」
- failure @(1,18) 「已记录的错误变化」
- failure @(1,17) 「已记录的错误变化」
- failure @(5,18) 「已记录的错误变化」
- failure @(3,18) 「已记录的错误变化」
- failure @(0,14) 「已记录的错误变化」
