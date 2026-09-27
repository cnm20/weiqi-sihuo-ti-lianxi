# 审题卡：easy/ggg-easy-06.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    12 13 14 15 16 17 18 
13   . . . . . . .
14   . . . X X . .
15   . X X O . X .
16   . X O . O X .
17   . X O . O O O
18   . X X O O . .

### 主变化

B(15,16) W(15,17) B(16,15)

### 终局（主变化后）

    12 13 14 15 16 17 18 
13   . . . . . . .
14   . . . X X . .
15   . X X O X X .
16   . X O . O X .
17   . X O O O O O
18   . X X O O . .

### 答案树

- continue @15,16
  - success @16,15 「Correct」
- failure @16,15 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: