# 审读材料：easy/ggg-easy-56.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. Now, even if White captures the four stones, it won't be possible to make two eyes.
- White's alive.
- Black can't connect at A. If he could, he wouldn't have any liberties and his stones would be captured. After that, it would be White’s turn and White could play at A to make two eyes.

## 初始局面（X=黑 O=白；坐标行/列）
     11 12 13 14 15 16 17 18 
13    .  .  .  .  .  .  .  . 
14    .  .  .  .  .  .  X  . 
15    .  .  .  X  X  X  .  . 
16    .  .  .  X  O  O  O  O 
17    .  X  .  X  O  X  X  . 
18    .  .  .  .  O  X  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(17,18)"
 ],
 "successLeaves": 1,
 "nodes": 38,
 "maxDepth": 6
}

## 答案树（success 终点与失败分支）
- success @(17,18) 「Correct. Now, even if White captures the four stones, it won't be possible to ma」
- failure @(18,17) 「已记录的错误变化」
- failure @(18,18) 「已记录的错误变化」
- failure @(18,15) 「已记录的错误变化」
- failure @(14,18) 「已记录的错误变化」
- failure @(17,15) 「已记录的错误变化」
