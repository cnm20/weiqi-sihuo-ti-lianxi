# 审读材料：easy/ggg-easy-126.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- White's alive. Even if Black connects at A next, White's already alive in seki.
- Correct
- It' a ko, but Black can do better.
- It' a ko, but Black can do better.

## 初始局面（X=黑 O=白；坐标行/列）
     12 13 14 15 16 17 18 
12    .  .  .  .  .  .  . 
13    .  .  .  .  X  .  . 
14    .  X  .  .  .  .  . 
15    .  .  X  .  X  X  . 
16    .  X  O  O  O  X  . 
17    .  X  O  .  .  O  O 
18    .  X  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(15,18)",
  "W(14,18)",
  "B(16,17)"
 ],
 "successLeaves": 2,
 "nodes": 58,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- continue @(15,18)
  - success @(16,17) 「Correct」
  - failure @(17,18) 「已记录的错误变化」
  - failure @(16,18) 「已记录的错误变化」
- failure @(17,18) 「已记录的错误变化」
- failure @(16,18) 「已记录的错误变化」
- failure @(16,17) 「已记录的错误变化」
- failure @(15,17) 「已记录的错误变化」
- failure @(14,18) 「已记录的错误变化」
