# 审题卡：easy/ggg-easy-10.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct
- Correct

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    10 11 12 13 14 15 16 17 18 
12   . . . . . . . . .
13   . . . . . . O . .
14   . . . . . O . . .
15   . . . O O X O O .
16   . O . O X . X O .
17   . . O X X . X X O
18   . . . . . . . X .

### 主变化

B(15,18) W(15,16) B(13,18)

### 终局（主变化后）

    10 11 12 13 14 15 16 17 18 
12   . . . . . . . . .
13   . . . . . . O . .
14   . . . . . O . . .
15   . . . O O . O O .
16   . O . O X O X O .
17   . . O X X . X X O
18   . . . X . X . X .

### 答案树

- continue @15,18
  - success @13,18 「Correct」
- failure @13,18 「已记录的错误变化」
- failure @15,16 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: