# 审读材料：easy/ggg-easy-95.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. Even if White plays at A next, Black's still alive in seki: http://senseis.xmp.net/?seki
- Correct
- White can also kill Black like this.
- Even if Black plays at A or B next, White can ignore it and Black's still dead.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5 
12    .  .  .  .  .  . 
13    O  O  O  O  .  . 
14    .  X  X  O  .  . 
15    .  .  X  O  .  . 
16    .  .  X  O  .  . 
17    O  X  O  .  O  . 
18    .  X  O  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(1,16)",
  "W(0,15)",
  "B(0,14)"
 ],
 "successLeaves": 2,
 "nodes": 41,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- continue @(1,16)
  - success @(0,14) 「Correct. Even if White plays at A next, Black's still alive in seki: http://sens」
- failure @(0,16) 「已记录的错误变化」
- failure @(0,15) 「已记录的错误变化」
- failure @(0,14) 「已记录的错误变化」
- failure @(1,15) 「已记录的错误变化」
