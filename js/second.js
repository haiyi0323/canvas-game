function animate() {
  var pii = setInterval(function() {
    clearr();
    bg4.draw();
    ul1p.draw();
    ul2p.draw();
    p1k.drawrect("white");
    p2k.drawrect("white");
    p1text3.draw("red");
    vs2.draw();

    for (var i = 0; i < 5; i++) {
      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(50, 100 * i + 150);
      context.lineTo(550, 100 * i + 150);
      context.stroke();

      context.beginPath();
      context.lineWidth = "2";
      context.moveTo(100 * i + 50, 150);
      context.lineTo(100 * i + 50, 650);
      context.stroke();
    }
   
    for (var i = 0; i < 5; i++) {
      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(729, 100 * i + 150);
      context.lineTo(1229, 100 * i + 150);
      context.stroke();

      context.beginPath();
      context.lineWidth = "2";
      context.moveTo(100 * i + 729, 150);
      context.lineTo(100 * i + 729, 650);
      context.stroke();
    }
    p1xzk.draw();
    p2xzk.draw();
    p1xzk.speedv();
    p2xzk.speedv2();
    //
    p1xzk.play(50, 150, lb1);
    p2xzk.play3(729, 150, lb1);

    p1xzk.play2(150, 150, wk5);
    p2xzk.play4(829, 150, wk5);
    //
    p1text.draw("red");
    p1text2.draw("blue");
    //渲染角色图片
    var count = 0;
    for (let i = 0; i < objlen; i++) {
      count++;
      var zhi = "juese" + count;
      var renwu = (window.renwu = new Bg(
        zuobioapArray[i][0],
        zuobioapArray[i][1],
        R[zhi],
        100,
        100,
        0,
        1,
        1
      ));
      renwu.draw();
    }
    var count2 = 0;
    for (let i = 0; i < objlen; i++) {
      count2++;
      var zhi2 = "juese" + count2;
      var renwu2 = (window.renwu2 = new Bg(
        zuobioapArray2[i][0],
        zuobioapArray2[i][1],
        L[zhi2],
        100,
        100,
        0,
        1,
        1
      ));
      renwu2.draw();
    }
  }, 50);
  var jinru = false;


  //键盘事件
  window.onkeydown = function(event) {
    var e = event || window.event;
    var keyCode = e.keyCode;
    // console.log(keyCode);

    if (!jinru) {
      if (keyCode == 13) {
        if (jinruyouxi) {
          xt1.play();
          window.jinruyouxi = false;
        }

        zzxz.pause();
        dzks.play();
        start();
        clearInterval(pii);
        jinru = true;
      }
    }

    if (keyCode == 68 && i == false && li == false) {
      if (miss2 == true) {
        gas2.speedX = 1;
      } else if (miss2 == false) {
        gas2.speedX = 4;
      }

      jiwoss = true;
      jiwoss_l = false;
      dd = true;
    }

    if (keyCode == 65 && i == false && li == false) {
      if (miss2 == true) {
        gas2.speedX = -1;
      } else if (miss2 == false) {
        gas2.speedX = -4;
      }

      jiwoss_l = true;
      jiwoss = false;
      da = true;
    }
    if (keyCode == 87 && i == false && li == false) {
      if (miss2 == true) {
        gas2.speedY = -1;
      } else if (miss2 == false) {
        gas2.speedY = -2;
      }

      jiwoss = true;
      dw = true;
    }
    if (keyCode == 83 && i == false && li == false) {
      if (miss2 == true) {
        gas2.speedY = 1;
      } else if (miss2 == false) {
        gas2.speedY = 2;
      }

      jiwoss = true;
      ds = true;
    }

    //角色2

    if (keyCode == 39 && j4 == false && li2 == false) {
      if (miss == true) {
        gas3.speedX = 1;
      } else if (miss == false) {
        gas3.speedX = 4;
      }

      dd1 = true;

      jiwoss2 = true;
      jiwoss2_l = false;
      return false;
    }
    if (keyCode == 37 && j4 == false && li2 == false) {
      if (miss == true) {
        gas3.speedX = -2;
      } else if (miss == false) {
        gas3.speedX = -4;
      }
      da3 = true;
      jiwoss2_l = true;
      jiwoss2 = false;
      return false;
    }
    if (keyCode == 38 && j4 == false && li2 == false) {
      if (miss == true) {
        gas3.speedY = -1;
      } else if (miss == false) {
        gas3.speedY = -2;
      }

      dw2 = true;

      jiwoss2 = true;
      return false;
    }
    if (keyCode == 40 && j4 == false && li2 == false) {
      if (miss == true) {
        gas3.speedY = 1;
      } else if (miss == false) {
        gas3.speedY = 2;
      }

      ds4 = true;
      jiwoss2 = true;
      return false;
    }

    if (keyCode == 100 && j1 == false && j2 == false && j4 == false) {
      if (gas2.x < gas3.x) {
        ll2 = true;
        window.z4222 = true;
        jue2_yc.speedX = -18;
      }
      if (gas2.x > gas3.x) {
        j3 = true;
        window.z4 = true;
        jue2_yc.speedX = 18;
      }
    }
  };
  window.onkeyup = function(event) {
    var e = event || window.event;
    var keyCode = e.keyCode;

    if (keyCode == 68) {
      gas2.speedX = 0;
      jiwoss = false;
    }
    if (keyCode == 65) {
      gas2.speedX = 0;

      jiwoss_l = false;
    }
    if (keyCode == 87) {
      gas2.speedY = 0;

      jiwoss = false;
    }
    if (keyCode == 83) {
      gas2.speedY = 0;

      jiwoss = false;
    }
    if (
      keyCode == 74 &&
      i == false &&
      k == false &&
      l == false &&
      li == false
    ) {
      if (gas2.x < gas3.x) {
        n = true;
      }
      if (gas2.x > gas3.x) {
        nl = true;
      }
    }
    if (
      keyCode == 75 &&
      i == false &&
      n == false &&
      l == false &&
      li == false
    ) {
      if (gas2.x < gas3.x) {
        k = true;
      }
      if (gas2.x > gas3.x) {
        kl = true;
      }
    }
    if (
      keyCode == 76 &&
      i == false &&
      k == false &&
      n == false &&
      li == false
    ) {
      if (gas2.x < gas3.x) {
        l = true;
        window.lz = true;
        jue1_yc.speedX = 10;
      }
      if (gas2.x > gas3.x) {
        ll = true;
        window.lz222 = true;
        jue1_yc.speedX = -10;
      }
    }
    if (keyCode == 73) {
      if (window.p1nltt >= 218) {
        if (gas2.x < gas3.x) {
          i = true;
          window.dg = true;

        }
        if (gas2.x > gas3.x) {
          li = true;
          window.dglll = true;
        }
       
        window.zd1 = true;
        window.zd2 = true;
        window.zd3 = true;
        window.zd4 = true;
        window.zd5 = true;
        window.zd6 = true;
        window.zd7 = true;
        window.zd8 = true;
        window.zd9 = true;
        window.zd10 = true;
        window.zd11 = true;
        window.zd12 = true;
        window.zd13 = true;
        window.zd14 = true;
        window.zd15 = true;
        window.zd16 = true;
        window.zd17 = true;
        window.zd18 = true;
        window.zd19 = true;
        window.zd20 = true;
        window.zd21 = true;
        window.zd22 = true;
        window.zd23 = true;

        window.yd0 = true;
        window.yd1 = true;
        window.yd2 = true;
        window.yd3 = true;
        window.yd4 = true;
        window.yd5 = true;
        window.yd6 = true;
        window.yd7 = true;
        window.yd8 = true;
        window.yd9 = true;
        window.yd10 = true;
        window.yd11 = true;
        window.yd12 = true;
        window.yd13 = true;
        window.yd14 = true;
        window.yd15 = true;
        window.yd16 = true;
        window.yd17 = true;
        window.yd18 = true;
        window.yd19 = true;
        window.yd20 = true;
        window.yd21 = true;
        window.yd22 = true;
        



        window.p1nltt = 0;
      }
    }

    //
    if (keyCode == 97 && j4 == false && j2 == false && j3 == false) {
      if (gas2.x < gas3.x) {
        nl2 = true;
      }
      if (gas2.x > gas3.x) {
        j1 = true;
      }
    }
    if (keyCode == 98 && j1 == false && j4 == false && j3 == false) {
      if (gas2.x < gas3.x) {
        kl2 = true;
      }
      if (gas2.x > gas3.x) {
        j2 = true;
      }
    }
    if (keyCode == 100 && j1 == false && j2 == false && j4 == false) {
    }
    if (keyCode == 101) {
      if (window.p2nltt >= 218) {
        if (gas2.x < gas3.x) {
          gas3.speedX = 0;
          gas3.speedY = 0;
          li2 = true;
        }
        if (gas2.x > gas3.x) {
          gas3.speedX = 0;
          gas3.speedY = 0;
          j4 = true;
        }

        setTimeout(() => {
          if (isHan) {
            if (gas2.x < gas3.x) {
              wk1.play();
              jj5lll = true;
              window.isHan = false;
            }
            if (gas2.x > gas3.x) {
              wk1.play();
              jj5 = true;
              window.isHan = false;
            }
          }
        }, 1500);
        window.p2nltt = 0;
      }
    }
    //
    if (keyCode == 39) {
      gas3.speedX = 0;
      jiwoss2 = false;
    }
    if (keyCode == 37) {
      gas3.speedX = 0;
      jiwoss2_l = false;
    }
    if (keyCode == 38) {
      gas3.speedY = 0;
      jiwoss2 = false;
    }
    if (keyCode == 40) {
      gas3.speedY = 0;
      jiwoss2 = false;
    }
  };
}

var objlen = Object.keys(R).length;

var zuobioapArray = [];
var dangzp = [];
var zuobioapArray2 = [];
var dangzp2 = [];
//获取图片xy
function zheng() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      //列
      var xz = i * 100 + 50;
      var yz = j * 100 + 150;
      dangzp.push(xz, yz);
      zuobioapArray.push(dangzp);
      dangzp = [];
    }
  }

  //获得图片坐标
  console.log(zuobioapArray);
  // window.requestAnimationFrame(zheng);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      //列
      var xz2 = i * 100 + 729;
      var yz2 = j * 100 + 150;
      dangzp2.push(xz2, yz2);
      zuobioapArray2.push(dangzp2);
      dangzp2 = [];
    }
  }
  console.log(zuobioapArray2);
}
//创建人物框
//图形函数
function Tx(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}
Tx.prototype.drawrect = function(color) {
  context.beginPath();
  context.fillStyle = color;
  context.fillRect(this.x, this.y, this.w, this.h);
};

var p1k = new Tx(50, 150, 500, 500);
var p2k = new Tx(729, 150, 500, 500);
var p1text = new FontText("P1", 70 + "px", "impact", 220, 100);
var p1text2 = new FontText("P2", 70 + "px", "impact", 990, 100);
var p1text3 = new FontText(
  "请按回车键开始游戏",
  40 + "px",
  "微软雅黑",
  450,
  100
);
var ul1p = new Bg(30, 30, "./image/ul/btn_assist_on.png", 318, 84, 0, 0, 1, 1);
var ul2p = new Bg(930, 30, "./image/ul/success (1).png", 318, 84, 0, 0, 1, 1);

//选择框构建
function kkkk(color, x, y, width, height) {
  this.color = color;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
kkkk.prototype.draw = function() {
  context.beginPath();
  context.lineWidth = 5;
  context.strokeStyle = this.color;
  context.strokeRect(this.x, this.y, this.width, this.height);
};
kkkk.prototype.speedv = function() {
  if (dd) {
    this.x += 100;
    if (this.x > 450) {
      this.x = 450;
    }
    dd = false;
  }
  if (ds) {
    this.y += 100;
    if (this.y > 550) {
      this.y = 550;
    }
    ds = false;
  }
  if (da) {
    this.x -= 100;
    if (this.x <= 50) {
      this.x = 50;
    }
    da = false;
  }
  if (dw) {
    this.y -= 100;
    if (this.y < 150) {
      this.y = 150;
    }
    dw = false;
  }
};
kkkk.prototype.draw = function() {
  context.beginPath();
  context.lineWidth = 5;
  context.strokeStyle = this.color;
  context.strokeRect(this.x, this.y, this.width, this.height);
};
kkkk.prototype.speedv2 = function() {
  if (dd1) {
    this.x += 100;
    if (this.x > 1129) {
      this.x = 1129;
    }
    dd1 = false;
  }
  if (ds4) {
    this.y += 100;
    if (this.y > 550) {
      this.y = 550;
    }
    ds4 = false;
  }
  if (da3) {
    this.x -= 100;
    if (this.x <= 729) {
      this.x = 729;
    }
    da3 = false;
  }
  if (dw2) {
    this.y -= 100;
    if (this.y < 150) {
      this.y = 150;
    }
    dw2 = false;
  }
};
//播放函数
kkkk.prototype.play = function(x, y, audio) {
  if (kaiguanbl) {
    if (this.x == x && this.y == y) {
      window.kaiguanbl = false;
      audio.play();
      kaiguanbl2 = true;
    }
  }
};
kkkk.prototype.play3 = function(x, y, audio) {
  if (kaiguanbl3) {
    if (this.x == x && this.y == y) {
      window.kaiguanbl3 = false;
      audio.play();
      kaiguanbl4 = true;
    }
  }
};
kkkk.prototype.play2 = function(x, y, audio) {
  if (kaiguanbl2) {
    if (this.x == x && this.y == y) {
      window.kaiguanbl2 = false;
      audio.play();
      kaiguanbl = true;
    }
  }
};
kkkk.prototype.play4 = function(x, y, audio) {
  if (kaiguanbl4) {
    if (this.x == x && this.y == y) {
      window.kaiguanbl4 = false;
      audio.play();
      kaiguanbl3 = true;
    }
  }
};
var kaiguanbl = true;
var kaiguanbl2 = true;
var kaiguanbl3 = true;
var kaiguanbl4 = true;
var p1xzk = new kkkk("red", 50, 150, 100, 100);
var p2xzk = new kkkk("blue", 729, 150, 100, 100);

var jinruyouxi = true;

var lb1s = new (150, 50)();

var dd = false;
var dw = false;
var da = false;
var ds = false;

var dd1 = false;
var dw2 = false;
var da3 = false;
var ds4 = false;
