# 审题卡：easy/ggg-easy-12.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct
- It's bent four in the corner. http://senseis.xmp.net/?BentFourInTheCorner

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    13 14 15 16 17 18 
13   . . . . . .
14   . . O O O O
15   . . . . X X
16   . O O . X O
17   . O X . X .
18   . O X . O .

### 主变化

B(16,17) W(18,17) B(16,18)

### 终局（主变化后）

    13 14 15 16 17 18 
13   . . . . . .
14   . . O O O O
15   . . . . X X
16   . O O . X O
17   . O X X X O
18   . O X X O .

### 答案树

- continue @16,17
  - success @16,18 「Correct」
  - failure @18,18 「已记录的错误变化」
- failure @18,17 「已记录的错误变化」
- failure @16,16 「已记录的错误变化」
- failure @18,18 「已记录的错误变化」
- failure @16,18 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: