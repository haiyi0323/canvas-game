var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//图片构造函数
function Bg(x, y, src, width, height, speedX, speedY, scalea) {
  this.x = x;
  this.y = y;
  this.src = src;
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
  this.scalea = scalea;
}
Bg.prototype.draw = function() {
  var image = new Image();
  image.src = this.src;
  if (
    this.x + this.speedX < canvas.width - this.width &&
    this.x + this.speedX > 0
  ) {
    this.x += this.speedX;
  }
  if (
    this.y + this.speedY < canvas.height - this.height &&
    this.y + this.speedY > 450
  ) {
    this.y += this.speedY;
  }
  context.drawImage(image, this.x, this.y, this.width, this.height);
};
Bg.prototype.drawjue = function() {
  var image = new Image();
  image.src = this.src;
  if (
    this.x + this.speedX < canvas.width - this.width &&
    this.x + this.speedX > 0
  ) {
    this.x += this.speedX;
  }
  if (
    this.y + this.speedY < canvas.height - this.height &&
    this.y + this.speedY > 450
  ) {
    this.y += this.speedY;
  }
  context.drawImage(
    image,
    this.x,
    this.y

    // this.width,
    // this.height,
  );
};
Bg.prototype.drawycgj = function() {
  var image = new Image();
  image.src = this.src;

  this.x += this.speedX;
  this.y += this.speedY;

  context.drawImage(image, this.x, this.y);
};
Bg.prototype.drawimgg = function(imgx, imgy, imgw, imgh) {
  var image = new Image();
  image.src = this.src;
  if (
    this.x + this.speedX < canvas.width - this.width &&
    this.x + this.speedX > 0
  ) {
    this.x += this.speedX;
  }
  if (
    this.y + this.speedY < canvas.height - this.height &&
    this.y + this.speedY > 0
  ) {
    this.y += this.speedY;
  }
  context.drawImage(
    //图片剪裁位置
    image,
    imgx,
    imgy,
    imgw,
    imgh,
    this.x,
    this.y,
    this.width * this.scalea,
    this.height * this.scalea
  );
};
Bg.prototype.move = function() {
  this.x += this.speedX;
  this.y += this.speedY;
  if (bg3.y <= 10) {
    this.speedY *= -1;
  }
  if (bg3.y >= 40) {
    this.speedY *= -1;
  }
};
var bg1 = new Bg(
  -50,
  0,
  "./Skullgirls-16_爱给网_aigei_com.png",
  1380,
  720,
  0,
  0,
  1,
  1
);
var bg4 = new Bg(0, 0, "./opening.png", 1480, 720, 0, 0, 1, 1);
var bg2 = new Bg(475, 500, "./image/zone_text.png", 371, 170, 0, 0, 1, 1);
var bg3 = new Bg(280, 20, "./image/title.png", 719, 217, 0, 0.5, 1, 1);
var bg5 = new Bg(15, 220, "./image/title_bg.png", 1250, 72, 0, 0, 1, 1);
var vs2 = new Bg(550, 300, "./image/vs.png", 206, 174, 0, 0, 1, 1);
var num = 0;

//鼠标移入
// canvas.onmousemove = function(event) {
//   var e = event || window.event;
//   var x = e.clientX - canvas.offsetLeft
//   var y = e.clientY - canvas.offsetTop;

//   //开始按钮的范围
//   // console.log(x , y);

//   if (y > bg2.y && y < bg2.y + bg2.height) {
//     if (x > bg2.x && x < bg2.x + bg2.width) {
//       canvas.style.cursor = "pointer";
//       var btns = (window.btns = setInterval(() => {
//         if (bg2.width * bg2.scalea < 450) {
//           bg2.scalea += 0.05;
//           text1.size = "50px";
//           text1.y += 4;
//           bg2.x = (canvas.offsetWidth - bg2.width * bg2.scalea) / 2;
//           text1.x = (canvas.offsetWidth - bg2.width * bg2.scalea) / 1.35;
//         } else if (bg2.width * bg2.scalea >= 450) {
//           clearInterval(btns);
//         }
//       }, 50));
//     }
//   }
// };
//鼠标移出
canvas.onmouseover = function() {};
//鼠标点击
kaiguan = false;
canvas.onmouseup = function(event) {
  var e = event || window.event;
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  if (!kaiguan) {
    if (y > bg2.y && y < bg2.y + bg2.height) {
      if (x > bg2.x && x < bg2.x + bg2.width) {
        canvas.style.cursor = "pointer";
        clearInterval(timer);

        clearr();
        zheng();
        animate();
        xzyx.pause();
        zzxz.play();
        kaiguan = true;
      } else {
      }
    }
  }
};

function clearr() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

//鼠标 抬起
canvas.onmousedown = function(event) {
  var e = event || window.event;
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
};

var timer = setInterval(() => {
  num++;
  bg1.draw();
  bg2.draw();
  bg3.draw();
  bg3.move();
  bg5.draw();
  text1.draw("black");
  vs.draw("red");
  xzyx.play();
}, 50);

//文字函数

function FontText(text, size, famliy, x, y) {
  this.text = text;
  this.size = size;
  this.famliy = famliy;
  this.x = x;
  this.y = y;
}
FontText.prototype.draw = function(color) {
  context.beginPath();
  context.fillStyle = color;

  context.font = "" + this.size + " " + this.famliy + "";
  context.fillText("" + this.text + "", this.x, this.y);
};
var text1 = new FontText("开始游戏", 40 + "px", "微软雅黑", 620, 600);
//游戏选项
//pvp双人对战
var vs = new FontText(
  "全明星究极大乱斗终极奥义之混沌世界  - PVP VS PVP",
  "35px",
  "方正剪纸简体",
  180,
  270
);
