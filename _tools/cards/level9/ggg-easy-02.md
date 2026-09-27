# 审题卡：easy/ggg-easy-02.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct
- Correct
- It's a ko, but Black can do better.

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    12 13 14 15 16 17 18 
13   . . . . . . .
14   . . . . X X X
15   . . . . X O .
16   . X X X O . O
17   . X O O O . O
18   . X O . X . .

### 主变化

B(17,18) W(18,15) B(17,17)

### 终局（主变化后）

    12 13 14 15 16 17 18 
13   . . . . . . .
14   . . . . X X X
15   . . . . X O O
16   . X X X O . O
17   . X O O O X O
18   . X O . X X .

### 答案树

- continue @17,18
  - success @17,17 「Correct」
- failure @18,15 「已记录的错误变化」
- failure @17,16 「已记录的错误变化」
- failure @17,17 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: