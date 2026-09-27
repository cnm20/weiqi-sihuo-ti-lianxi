# 审读材料：easy/ggg-easy-17.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct
- Correct
- Correct
- White's already alive.

## 初始局面（X=黑 O=白；坐标行/列）
     12 13 14 15 16 17 18 
14    .  .  .  .  .  .  . 
15    .  .  .  X  X  X  X 
16    .  X  X  .  .  O  X 
17    .  X  O  O  .  O  O 
18    .  X  .  .  .  O  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(15,18)",
  "W(14,18)",
  "B(16,17)",
  "W(16,18)",
  "B(16,16)"
 ],
 "successLeaves": 3,
 "nodes": 36,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(15,18)
  - continue @(16,17)
    - success @(16,16) 「Correct」
  - failure @(16,16) 「已记录的错误变化」
  - failure @(16,18) 「已记录的错误变化」
- failure @(16,17) 「已记录的错误变化」
- failure @(14,18) 「已记录的错误变化」
- failure @(16,16) 「已记录的错误变化」
- failure @(16,18) 「White's already alive.」
