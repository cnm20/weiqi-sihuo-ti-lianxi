# 审读材料：easy/ggg-easy-53.sgf

## 全部 SGF 注释（按出现顺序，含分支语义）
- Black to play. https://gogameguru.com/
- Correct. This is the best shape, because it gives Black the best potential for making eyes later. A and B are miai for Black now. If White tries to play A-C, Black D captures White's stones.
- White plays on the vital point and Black's group becomes weak. Notice the relationship between A and B - the point at C can only ever become a false eye now.
- If the game continues like this, Black doesn't have much room to make eyes, so the whole group may be in trouble later.
- Later on there's still a vital point here...
- Making this exchange helps White. In addition, Black still has weaknesses at A and B, so Black hasn't developed a good shape and still has to play another move here. In some situations White might choose to play at A or B immediately after Black kicks with the diagonal attachment.
- This move is uninspired.
- Later on White can play here and Black doesn't have much eyespace, so the group will be weak.

## 初始局面（X=黑 O=白；坐标行/列）
      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 
 9    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
10    .  .  X  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
11    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
12    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
13    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  X  .  . 
14    .  .  O  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
15    .  .  .  O  O  .  X  .  .  .  .  .  .  O  .  O  .  X  . 
16    .  O  O  X  X  .  .  .  O  .  .  .  .  .  .  .  .  .  . 
17    .  .  X  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 
18    .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  . 

## 转换统计
{
 "userColor": "B",
 "mainLine": [
  "B(6,17)"
 ],
 "successLeaves": 1,
 "nodes": 28,
 "maxDepth": 8
}

## 答案树（success 终点与失败分支）
- success @(6,17) 「Correct. This is the best shape, because it gives Black the best potential for m」
- failure @(5,15) 「已记录的错误变化」
- failure @(6,16) 「已记录的错误变化」
- failure @(7,16) 「已记录的错误变化」
- failure @(5,16) 「This move is uninspired.」
