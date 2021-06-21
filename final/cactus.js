class Cactus {
  constructor() {
    // 初始障礙物圖片，隨機不同的障礙物
    this.img = imgCactus[int(random(1, 12))];
    this.w = this.img.width * 1.5;
    this.h = this.img.height * 1.5;
    //  使橫坐標為畫布寬度 讓障礙物從右邊出現
    this.x = width;
    // 縱座標對齊地面
    this.y = height - this.h;
    this.score = 0;
  }
  // 向左移動速度
  move() {
    this.x -= 8;
  }
  // 顯示圖片
  show() {
    image(this.img, this.x, this.y, this.w, this.h);
  }
}
