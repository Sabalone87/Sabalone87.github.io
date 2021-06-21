let jumpSound = new Audio("./asset/soundtrack/jump.mp3"); // 跳躍音效

// 定義統神
class GodTone {
  // 初始化
  constructor() {
    // 初始化一開始的圖
    this.img = imgGodTone[3];
    // 初始化圖片大小
    this.w = this.img.width * 1.5;
    this.h = this.img.height * 1.5;
    // 初始座標
    this.x = 80;
    this.y = height - this.h;
    // 垂直速度(跳的高度)
    this.vy = 0;
    // 重力參數（落下的速度）
    this.gravity = 1;
  }

  jump() {
    // 站在地上才能跳
    if (this.y == height - this.h) {
      // 跳得初速度
      this.vy = -18;
    }
    jumpSound.play();
  }

  move() {
    // 讓統神有垂直方向的移動,初速是起跳初速
    this.y += this.vy;
    // 垂直速度上加上重力影響
    this.vy += this.gravity;
    // 防止超出螢幕
    this.y = constrain(this.y, 0, height - this.h);
  }

  // 依照狀況的不同顯示不同圖片
  update() {
    // 無碰撞
    if (cld == 0) {
      // 跳躍
      if (this.y < height - 100) {
        this.img = imgGodTone[2];
      } else {
        // 走路
        this.img = imgGodTone[(index % 2) + 3];
      }
    } else {
      //有碰撞
      this.img = imgGodTone[5];
    }
  }
  // 顯示圖片
  show() {
    image(this.img, this.x, this.y + 2, this.w, this.h);
  }
  // 碰撞檢驗
  hits(obstacle) {
    // 8個參數 分別為兩個物體的座標和寬高（稍為減一點數字使得判定寬一點不要碰到邊就觸發）
    return collideRectRect(
      this.x - 10,
      this.y - 10,
      this.w - 10,
      this.h - 10,
      obstacle.x,
      obstacle.y,
      obstacle.w - 30,
      obstacle.h - 30
    );
  }
  // 得分
  addScore(obstacle) {
    // 通過障礙物且沒有發生碰撞
    if (obstacle.x + obstacle.w < this.x && obstacle.score == 0 && cld == 0) {
      // 將障礙物的分數納入 不要重複得分
      obstacle.score = 1;
      //分數＋1
      score += 1;
    }
  }
}
