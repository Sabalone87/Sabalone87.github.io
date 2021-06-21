class Bird {
  constructor() {
    this.img = imgBird[1];
    this.w = this.img.width * 1.3;
    this.h = this.img.height * 1.3;
    // x座標為畫布的寬度 確保障礙物由最右邊出現
    this.x = width;
    // 將y座標設置成隨機
    this.y = height - this.h - random((1 * height) / 8, height / 6);
    this.score = 0;
  }
  // 障礙物向左位移
  move() {
    this.x -= 10;
  }
  // 顯示圖片
  show() {
    image(imgBird[(index % 2) + 1], this.x, this.y, this.w, this.h);
  }
  // 更新圖片
  update() {
    this.img = imgBird[(index % 2) + 1];
  }
}
