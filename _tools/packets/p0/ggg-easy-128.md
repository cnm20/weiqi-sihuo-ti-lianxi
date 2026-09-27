# 审读材料：easy/ggg-easy-128.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- Correct
- White's alive. Even if Black plays at A next, White's already alive in seki.

## 初始局面（X=黑 O=白；坐标行/列）
     11 12 13 14 15 16 17 18 
14    .  .  .  .  .  .  .  . 
15    .  X  X  X  X  X  X  . 
16    .  X  O  O  O  O  X  X 
17    .  X  O  .  .  .  O  O 
18    .  X  O  X  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(16,17)",
  "W(15,17)",
  "B(16,18)",
  "W(15,18)",
  "B(14,17)"
 ],
 "successLeaves": 2,
 "nodes": 32,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(16,17)
  - continue @(16,18)
    - success @(14,17) 「Correct」
    - failure @(17,18) 「已记录的错误变化」
  - failure @(15,18) 「已记录的错误变化」
  - failure @(17,18) 「已记录的错误变化」
- failure @(15,17) 「已记录的错误变化」
- failure @(14,17) 「已记录的错误变化」
- failure @(16,18) 「已记录的错误变化」
- failure @(17,18) 「已记录的错误变化」
- failure @(15,18) 「已记录的错误变化」
