//板块5 血条记录 判断输赢

//血条1
// var hptext = new FontText("HP", 30+"px","impac", 50, 50)
// var hptext2 = new FontText("HP", 30+"px","impac", 650, 50)

var hpnlk = new Bg(18, -35, "./image/ul/1p.png", 709, 164, 0, 0, 1, 1);
var hpnlk2 = new Bg(580, -35, "./image/ul/2p.png", 709, 164, 0, 0, 1, 1);

var nlk1 = new Bg(388, 90, "./image/ul/nl.png", 0, 18, 0, 0, 1, 1);
var nlk2 = new Bg(702, 90, "./image/ul/nl.png", 0, 18, 0, 0, 1, 1);

var maskdz = new Bland(
  "rgba(000,000,000,0.5",
  0,
  0,
  canvas.width,
  canvas.height
);
//血条框构建"
function Bland(color, x, y, w, h) {
  this.color = color;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}
Bland.prototype.draw = function() {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.w, this.h);
};
var jue1bland = new Bland("red", 100, 25, 500, 50);
var jue2bland = new Bland("blue", 700, 25, 500, 50);
//血量更新
function updatabland() {
  jue1bland.w = hp1p * 0.125;
  jue2bland.w = hp2p * 0.125;
}
// 能量更新
var p1nltt = 0;
var p2nltt = 0;
function updatanL() {
  if (p1nltt <= 218) {
    p1nltt += 0.2;
  }
  if (p2nltt <= 218) {
    p2nltt += 0.2;
  }
}

//判断普通攻击碰撞
function penz() {
  if (
    gas2.y < gas3.y + 20 &&
    gas2.y + gas2.height < gas3.y + gas3.height + 20
  ) {
    if (gas2.x + gas2.width >= gas3.x && gas2.x <= gas3.x + gas3.width) {
      console.log(1);
    }
  }
}
