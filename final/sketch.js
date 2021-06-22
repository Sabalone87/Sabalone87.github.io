// 三個變數分別存取該物件的圖片
let imgGodTone = [],
  imgHotpot = [],
  imgBird = [];

// 背景圖片
let imgGround, imgMountoun, imgCloud;

// 初始背景圖片的x座標
let groundX = 0,
  mountounX = 0,
  cloudX = 0;

// 存障礙物的陣列
let hotpots = [],
  birds = [];

// 當前分數和最高分數
let score = 0,
  bestScore = 0;

// 上次增加障礙物的時間
let lastAddTime = 0;

// 遊戲結束音效
let gameoverSound;

// 遊戲介面狀態
let gameScreen = 0;

// 碰撞參數 0 false 1 true
let cld = 0;

// 循環圖片的index
let index = 1;

// 初始化
function setup() {
  // 初始畫布大小
  let renderWidth = $("#render").width();
  let render = createCanvas(renderWidth, 700);
  // 宣告人物和障礙物
  render.parent("render");
  godTone = new GodTone();
  hotpot = new Hotpot();
  bird = new Bird();
}

// 開始渲染畫面
function draw() {
  // 依照模式的不同給予不同的畫面
  if (gameScreen == 0) {
    initScreen();
  } else if (gameScreen == 1) {
    gamePlayScreen();
  } else if (gameScreen == 2) {
    gameOverScreen();
  }
}

// 增加障礙物
function addObstacle() {
  // 障礙物出現的間隔 隨機800-3500毫秒
  let interval = random(800, 3500);

  // 如果與上次增加障礙物的時間超過間隔 就增加一個新的障礙物
  if (millis() - lastAddTime > interval) {
    // 若時間能被2 整除 就增加 陸地障礙物 否則就增加空中
    if (int(interval) % 2 == 0) {
      hotpots.push(new Hotpot());
    } else {
      birds.push(new Bird());
    }
    // 刷新上次呼叫障礙物的時間
    lastAddTime = millis();
  }
}

// 遊戲開始介面
function initScreen() {
  // 背景色
  background(235, 240, 240);

  // 背景圖片
  image(imgGround, 0, height - 20, imgGround.width, imgGround.height);
  image(imgCloud, 0, 0, imgCloud.width, imgCloud.height);
  image(imgMountoun, 0, 140, imgMountoun.width, imgMountoun.height);

  //每25個影格換一張圖片 使統神達到會動的效果
  if (frameCount % 25 == 0) index++;

  //循環統神圖片
  image(
    imgGodTone[(index % 4) + 2],
    80,
    height - imgGodTone[(index % 4) + 1].height * 1.5 - 10,
    imgGodTone[(index % 4) + 2].width * 1.5,
    imgGodTone[(index % 4) + 2].height * 1.5
  );

  // 遊戲標題
  textAlign(CENTER);
  fill(23, 23, 23);
  textFont("Coiny");
  textSize(100);
  text("Asia God Tone \n carries hotpot", width / 2, height / 2);

  // 開始按鈕
  fill(23, 23, 23);
  noStroke(); //無邊框
  rectMode(CENTER); //由中心開始畫
  rect(width / 2, height - 40, 200, 60, 5); //畫長方形
  fill(240, 240, 240);
  textSize(30);
  text("Start", width / 2, height - 30);
}

// 遊戲中
function gamePlayScreen() {
  // 背景色和圖片
  background(236, 240, 241);
  backGroundPicture();
  // 增加障礙物
  addObstacle();
  // 顯示分數
  printScore();
  // 人物更新、動作、顯示
  godTone.update();
  godTone.move();
  godTone.show();

  // frameCount 顯示從draw執行後被展示的影格數
  if (frameCount % 6 == 0) index++; //每六個影格換一張圖片 使統神達到會動的效果

  // 地面障礙物的移動顯示
  for (let c of hotpots) {
    c.move();
    c.show();
    // 碰撞檢定
    if (godTone.hits(c)) {
      // 撞到 就將狀態改成撞到
      cld = 1;
      // 遊戲結束
      gameOver();
    }
    // 得分
    godTone.addScore(c);
  }

  // 空中障礙物
  for (let b of birds) {
    b.update();
    b.move();
    b.show();
    // 碰撞
    if (godTone.hits(b)) {
      cld = 1;
      gameOver();
    }
    godTone.addScore(b);
  }
}
// 遊戲結束介面
function gameOverScreen() {
  image(
    imgGodTone[5],
    80,
    height - imgGodTone[5].height * 1.5 - 10,
    imgGodTone[5].width * 1.5,
    imgGodTone[5].height * 1.5
  );
  background(24, 24, 24, 3);
  textAlign(CENTER);

  // 比較得分更新最高分
  if (bestScore < score) {
    bestScore = score;
  }
  // 最高分文字
  textFont("Coiny");
  fill(255, 237, 163);
  textSize(30);
  text("Best score", width / 2, height / 10);
  textSize(40);
  text(bestScore, width / 2, height / 5);
  // 得分文字
  fill(240, 240, 240);
  textSize(30);
  text("Score", width / 2, height / 2 - 110);
  textSize(150);
  text(score, width / 2, height / 2 + 50);
  // 重新開始按鈕
  fill(240, 240, 240);
  rectMode(CENTER);
  noStroke();
  rect(width / 2, height - 40, 200, 60, 5);
  fill(23, 24, 24);
  textSize(30);
  text("Restart", width / 2, height - 30);
}

// 遊戲開始
function startGame() {
  gameScreen = 1;
}
// 遊戲結束
function gameOver() {
  gameScreen = 2;
  // 結束音效
  gameoverSound.play();
}
// 重新開始
function restart() {
  // 所有數據初始化
  gameScreen = 1;
  lastAddTime = 0;
  birds = [];
  hotpots = [];
  cld = 0;
  score = 0;
}

// preload各種資源
function preload() {
  imgGround = loadImage("./asset/background/ground.png");
  imgCloud = loadImage("./asset/background/cloud.png");
  imgMountoun = loadImage("./asset/background/mountoun.png");
  gameoverSound = new Audio("./asset/soundtrack/gameover.mp3");

  // for loop 加載 圖片
  for (let i = 1; i <= 5; i++) {
    let str1 = "./asset/godtone/godtone" + i + ".png";
    imgGodTone[i] = loadImage(str1);
  }

  for (let j = 1; j <= 12; j++) {
    let str2 = "./asset/hotpot/hotpot" + j + ".png";
    imgHotpot[j] = loadImage(str2);
  }
  for (let k = 1; k <= 2; k++) {
    let str3 = "./asset/bird/bird" + k + ".png";
    imgBird[k] = loadImage(str3);
  }
}

// 循環背景圖片
function backGroundPicture() {
  // 如果圖片在畫布上
  if (groundX > (-1 * imgGround.width) / 2) {
    // 將圖片向左移動
    groundX -= 8;
  } else groundX = 0; // 圖片完全離開畫布 就設置為初始位置
  image(imgGround, groundX, height - 20, imgGround.width, imgGround.height);

  if (cloudX > (-1 * imgCloud.width) / 2) {
    cloudX -= 1;
  } else cloudX = 0;
  image(imgCloud, cloudX, 0, imgCloud.width, imgCloud.height);

  if (mountounX > (-1 * imgMountoun.width) / 2) {
    mountounX -= 0.3;
  } else mountX = 0;
  image(imgMountoun, mountounX, 150, imgMountoun.width, imgMountoun.height);
}

// 空白鍵控制跳躍
function keyPressed() {
  if (gameScreen == 1) {
    if (key == " ") {
      // 跳躍
      godTone.jump();
    }
  }
}

// 點擊事件
$("#render").click(() => {
  // 在初始介面時 點擊開始遊戲
  if (gameScreen == 0) {
    startGame();
  }
  // 結束介面時 重新開始
  if (gameScreen == 2) {
    restart();
  }
  // 遊戲中 跳躍
  if (gameScreen == 1) {
    godTone.jump();
  }
});
// 將分數顯示在右上角
function printScore() {
  textAlign(LEFT);
  textFont("Coiny");
  fill(50);
  textSize(30);
  text("Score: " + score, (5 * width) / 6, height / 9);
}
