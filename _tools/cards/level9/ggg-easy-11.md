# 审题卡：easy/ggg-easy-11.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    12 13 14 15 16 17 18 
14   . . . . . . .
15   . . . . . O O
16   . O O O O . .
17   . O X X X . .
18   . . X O . X .

### 主变化

B(18,17) W(17,16) B(17,17)

### 终局（主变化后）

    12 13 14 15 16 17 18 
14   . . . . . . .
15   . . . . . O O
16   . O O O O O .
17   . O X X X X X
18   . . X O . X .

### 答案树

- continue @18,17
  - success @17,17 「Correct」
- failure @17,17 「已记录的错误变化」
- failure @17,16 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: