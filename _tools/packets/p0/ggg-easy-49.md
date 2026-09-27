# 审读材料：easy/ggg-easy-49.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. How can Black prevent White from capturing at A while also winning the capturing race between B and C? https://gogameguru.com/
- Correct
- Correct
- Correct
- Correct
- Correct
- Not too bad, but Black can do capture some stones.

## 初始局面（X=黑 O=白；坐标行/列）
      8  9 10 11 12 13 14 15 16 17 18 
12    .  .  .  .  .  .  .  .  .  .  . 
13    .  .  .  .  O  .  .  O  .  .  . 
14    .  .  .  .  O  X  X  .  .  .  . 
15    .  X  .  .  O  X  O  O  O  .  . 
16    .  .  .  X  X  O  X  X  O  .  . 
17    .  .  .  .  .  O  .  .  X  X  . 
18    .  .  .  .  .  .  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(14,17)",
  "W(13,13)",
  "B(12,17)"
 ],
 "successLeaves": 5,
 "nodes": 52,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(14,17)
  - success @(12,17) 「Correct」
  - success @(13,18) 「Correct」
- failure @(14,18) 「已记录的错误变化」
- failure @(15,17) 「已记录的错误变化」
- failure @(15,18) 「已记录的错误变化」
- failure @(12,17) 「已记录的错误变化」
- failure @(13,18) 「已记录的错误变化」
- failure @(13,12) 「已记录的错误变化」
- failure @(14,12) 「已记录的错误变化」
- failure @(14,13) 「已记录的错误变化」
- failure @(13,13) 「已记录的错误变化」
