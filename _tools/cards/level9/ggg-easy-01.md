# 审题卡：easy/ggg-easy-01.sgf

## 全部注释

- Black to play. https://gogameguru.com/
- Correct
- Also correct. Playing this move at A is usually better style because it leaves less bad aji (potential for bad things to happen) on the outside.

## 用户执子：黑

### 初始局面（顶部朝上，数字坐标）

    11 12 13 14 15 16 17 18 
14   . . . . . . . .
15   . . . X X X X X
16   . X . X O O . O
17   . . X O . O . O
18   . . . O . X . .

### 主变化

B(17,18) W(17,17) B(13,18)

### 终局（主变化后）

    11 12 13 14 15 16 17 18 
14   . . . . . . . .
15   . . . X X X X X
16   . X . X O O . O
17   . . X O . O O O
18   . . X O . X X .

### 答案树

- continue @17,18
  - success @13,18 「Correct」
  - success @15,18 「Also correct. Playing this move at A is usually better style because i」
- failure @17,16 「已记录的错误变化」
- failure @13,18 「已记录的错误变化」
- failure @15,18 「已记录的错误变化」

### 审核填写

goal(live/kill):
goalTextCN:
keyPointCN:
titleCN:
confirmedWrong(典型错误坐标):
notes: