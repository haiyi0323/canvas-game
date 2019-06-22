//游戏页面
function start() {
  setInterval(function() {
    Gameline();
  }, 10);
}

function Gameline() {
  map.draw();
  //不动的画面

  if (gas2.x < gas3.x) {
    speet++;
    if (speet % 10 == 0) {
      nvrr += 1;
      if (nvrr >= 28) {
        nvrr = 25;
      }
      gas2.src = jue1[nvrr];
 
    }
  }

  if (gas2.x < gas3.x) {
    speet2++;
    if (speet2 % 12 == 0) {
      nvrr2 += 1;
      if (nvrr2 >= 18) {
        nvrr2 = 10;
      }
      gas3.src = jue2_leftdon[nvrr2];
    }
  }

  if (gas2.x > gas3.x) {
    if (!jiwoss_l) {
      speet++;
      if (speet % 10 == 0) {
        nvrr += 1;
        if (nvrr >= 28) {
          nvrr = 25;
        }
        gas2.src = jue1_leftdon[nvrr];
      }
    }
    if (!jiwoss2) {
      speet2++;
      if (speet2 % 12 == 0) {
        nvrr2 += 1;
        if (nvrr2 >= 18) {
          nvrr2 = 10;
        }
        gas3.src = jue2[nvrr2];
      }
    }
  }

  //如果放大敌方不许动
  if (dg == true || dglll == true ||hp1p <=0 ||hp2p <=0) {
    gas3.speedX = 0;
    gas3.speedY = 0;
    maskdz.draw();
    jiwoss2 = false;
    jiwoss2_l = false;
    (j1 = false), (nl2 = false);
    j2 = false;
    kl2 = false;
    j3 = false;
    ll2 = false;

    z4 = false;
    z4222 = false;
  }
  if (j4 == true || li2 == true) {
    gas2.speedX = 0;
    gas2.speedY = 0;
    maskdz.draw();
    jiwoss = false;
    jiwoss_l = false;
    n = false;
    nl = false;
    k = false;
    kl = false;
    l = false;
    ll = false;
    lz = false;
    lz222 = false;
  }

  //奔跑的画面
  if (jiwoss) {
    Imgupdata(gas2, jue1_run);
  }
  if (jiwoss2) {
    Imgupdata2(gas3, jue2_run);
  }
  if (jiwoss_l) {
    Imgupdata(gas2, jue1_leftrun);
  }
  if (jiwoss2_l) {
    Imgupdata2(gas3, jue2_leftrun);
  }

  //受伤动画
  p2ss(gas3, miss, 10, jue2_ss);
  p2ss2(gas2, miss2, 10, jue1_ss);
  //角色1技能1
  imgupdataClass(gas2, n, 7, ju1_j1, lb1);
  imgupdataClass(gas2, nl, 7, jue1_leftjn1, lb1);
  //技能2
  imgupdataClass(gas2, k, 8, ju1_j2, lb1);
  imgupdataClass(gas2, kl, 8, jue1_leftjn2, lb1);
  //远程攻击
  imgupdataClassl(gas2, l, 10, ju1_j3, lb1);
  imgupdataClassl(gas2, ll, 10, jue1_leftjn3, lb1);
  //大招
  imgupdataClass(gas2, i, 10, jue1_dz, lb4);
  imgupdataClass(gas2, li, 10, jue1_leftdz, lb4);

  //角色2技能
  imgupdataClass2(gas3, j1, 7, jue2_j1, wk3);
  imgupdataClass2(gas3, nl2, 7, jue2_leftjn1, wk3);
  //技能2
  imgupdataClass2(gas3, j2, 6, jue2_j2, wk4);
  imgupdataClass2(gas3, kl2, 6, jue2_leftjn2, wk4);
  //远程
  imgupdataClass2(gas3, j3, 10, jue2_j3, wk7);
  imgupdataClass2l(gas3, ll2, 10, jue2_leftjn3, wk7);
  //大招
  imgupdataClass555(gas3, j4, 6, jue2_j4);
  imgupdataClass555(gas3, li2, 6, jue2_leftdz);

  //飞镖
  longgj1(lz, jue1_yc);
  longgj1lll(lz222, jue1_yc);

  longgj2(z4, jue2_yc);
  longgj2lll(z4222, jue2_yc);

  // if ( jue1_fbl) {
  //   jue1_yc.x = gas2.x;
  //   jue1_yc.y = gas2.y + gas2.height / 2;
  // }
  // if ( jue1_fb) {
  //   jue1_yc.x = gas3.x + gas3.width;
  //   jue1_yc.y = gas2.y + gas2.height / 2;
  // }

  //lb的动感攻击
  dggb(
    dg,
    jue1_dg,
    jue1_dg1,
    jue1_dg2,
    jue1_dg3,
    jue1_dg4,
    jue1_dg5,
    jue1_dg6,
    jue1_dg7,
    jue1_dg8,
    jue1_dg9,
    jue1_dg10,
    jue1_dg11,
    jue1_dg12,
    jue1_dg13,
    jue1_dg14,
    jue1_dg15,
    jue1_dg16,
    jue1_dg17,
    jue1_dg18,
    jue1_dg19,
    jue1_dg20,
    jue1_dg21,
    jue1_dg22
  );

  dggblll(
    dglll,
    jue1_dgl,
    jue1_dg1l,
    jue1_dg2l,
    jue1_dg3l,
    jue1_dg4l,
    jue1_dg5l,
    jue1_dg6l,
    jue1_dg7l,
    jue1_dg8l,
    jue1_dg9l,
    jue1_dg10l,
    jue1_dg11l,
    jue1_dg12l,
    jue1_dg13l,
    jue1_dg14l,
    jue1_dg15l,
    jue1_dg16l,
    jue1_dg17l,
    jue1_dg18l,
    jue1_dg19l,
    jue1_dg20l,
    jue1_dg21l,
    jue1_dg22l
  );

  //

  //冲击波
  imgupdataClass4(ju2_qigong, jj5, 4, jue2_zdr);
  imgupdataClass4lll(ju2_qigong, jj5lll, 4, jue2_leftzd);

  //血条
  // hptext.draw("red");
  // hptext2.draw("blue");
  updatabland();
  updatanL();
  nlk1.width = p1nltt;
  nlk2.width = p2nltt;
  hpnlk.draw();
  hpnlk2.draw();
  jue1bland.draw();
  jue2bland.draw();

  nlk1.draw();
  nlk2.draw();

  //

  if (hp1p <= 0) {
    dzks.pause()
    godie(gas2, did1, 8, jue1_dide);
    gas2.speedX = 0;
    gas2.speedY = 0;

    if (dfsdaa) {
      dzks.pause()
      setTimeout(() => {
        lb5.play()
      }, 2000);
      
      wk9.play()
      
      dfsdaa = false;

    }
    hp1p = 0;
  }
  if (hp2p <= 0) {
    
    gas3.speedX = 0;
    gas3.speedY = 0;
    godie(gas3, did2, 6, jue2_dide);
    if (dfsdaa2) {
      dzks.pause()
    lb2.play()
    wk8.play()
      dfsdaa2 = false;
     
    }
    hp2p = 0;
  }

  gas3.drawjue();
  gas2.drawjue();
  if (gas2.x > gas3.x) {
    if (beginfszd) {
      jue1_dgl.x = gas2.x - 130;
      jue1_dgl.y = gas2.y + 50;
    }
    if (beginfszd1) {
      jue1_dg1l.x = gas2.x - 130;
      jue1_dg1l.y = gas2.y + 50;
    }
    if (beginfszd2) {
      jue1_dg2l.x = gas2.x - 130;
      jue1_dg2l.y = gas2.y + 50;
    }
    if (beginfszd3) {
      jue1_dg3l.x = gas2.x - 130;
      jue1_dg3l.y = gas2.y + 50;
    }
    if (beginfszd4) {
      jue1_dg4l.x = gas2.x - 130;
      jue1_dg4l.y = gas2.y + 50;
    }
    if (beginfszd5) {
      jue1_dg5l.x = gas2.x - 130;
      jue1_dg5l.y = gas2.y + 50;
    }
    if (beginfszd6) {
      jue1_dg6l.x = gas2.x - 130;
      jue1_dg6l.y = gas2.y + 50;
    }
    if (beginfszd7) {
      jue1_dg7l.x = gas2.x - 130;
      jue1_dg7l.y = gas2.y + 50;
    }
    if (beginfszd8) {
      jue1_dg8l.x = gas2.x - 130;
      jue1_dg8l.y = gas2.y + 50;
    }
    if (beginfszd9) {
      jue1_dg9l.x = gas2.x - 130;
      jue1_dg9l.y = gas2.y + 50;
    }
    if (beginfszd10) {
      jue1_dg10l.x = gas2.x - 130;
      jue1_dg10l.y = gas2.y + 50;
    }
    if (beginfszd11) {
      jue1_dg11l.x = gas2.x - 130;
      jue1_dg11l.y = gas2.y + 50;
    }
    if (beginfszd12) {
      jue1_dg12l.x = gas2.x - 130;
      jue1_dg12l.y = gas2.y + 50;
    }
    if (beginfszd13) {
      jue1_dg13l.x = gas2.x - 130;
      jue1_dg13l.y = gas2.y + 50;
    }
  
    if (beginfszd14) {
      jue1_dg14l.x = gas2.x - 130;
      jue1_dg14l.y = gas2.y + 50;
    }
    if (beginfszd15) {
      jue1_dg15l.x = gas2.x - 130;
      jue1_dg15l.y = gas2.y + 50;
    }
  
    if (beginfszd16) {
      jue1_dg16l.x = gas2.x - 130;
      jue1_dg16l.y = gas2.y + 50;
    }
    if (beginfszd17) {
      jue1_dg17l.x = gas2.x - 130;
      jue1_dg17l.y = gas2.y + 50;
    }
    if (beginfszd18) {
      jue1_dg18l.x = gas2.x - 130;
      jue1_dg18l.y = gas2.y + 50;
    }
    if (beginfszd19) {
      jue1_dg19l.x = gas2.x - 130;
      jue1_dg19l.y = gas2.y + 50;
    }
    if (beginfszd20) {
      jue1_dg20l.x = gas2.x - 130;
      jue1_dg20l.y = gas2.y + 50;
    }
    if (beginfszd21) {
      jue1_dg21l.x = gas2.x - 130;
      jue1_dg21l.y = gas2.y + 50;
    }
  
    if (beginfszd22) {
      jue1_dg22l.x = gas2.x - 130;
      jue1_dg22l.y = gas2.y + 50;
    }
  }
 
//
if (gas2.x < gas3.x) {
  if (lebeginfszd) {
    jue1_dg.x = gas2.x + 150;
    
    jue1_dg.y = gas2.y + 50;
   
  }
  if (lebeginfszd1) {
    jue1_dg1.x = gas2.x + 150;
    jue1_dg1.y = gas2.y + 50;
  }
  if (lebeginfszd2) {
    jue1_dg2.x = gas2.x + 150;
    jue1_dg2.y = gas2.y + 50;
  }
  if (lebeginfszd3) {
    jue1_dg3.x = gas2.x + 150;
    jue1_dg3.y = gas2.y + 50;
  }
  if (lebeginfszd4) {
    jue1_dg4.x = gas2.x + 150;
    jue1_dg4.y = gas2.y + 50;
  }
  if (lebeginfszd5) {
    jue1_dg5.x = gas2.x + 150;
    jue1_dg5.y = gas2.y + 50;
  }
  if (lebeginfszd6) {
    jue1_dg6.x = gas2.x + 150;
    jue1_dg6.y = gas2.y + 50;
  }
  if (lebeginfszd7) {
    jue1_dg7.x = gas2.x + 150;
    jue1_dg7.y = gas2.y + 50;
  }
  if (lebeginfszd8) {
    jue1_dg8.x = gas2.x + 150;
    jue1_dg8.y = gas2.y + 50;
  }
  if (lebeginfszd9) {
    jue1_dg9.x = gas2.x + 150;
    jue1_dg9.y = gas2.y + 50;
  }
  if (lebeginfszd10) {
    jue1_dg10.x = gas2.x + 150;
    jue1_dg10.y = gas2.y + 50;
  }
  if (lebeginfszd11) {
    jue1_dg11.x = gas2.x + 150;
    jue1_dg11.y = gas2.y + 50;
  }
  if (lebeginfszd12) {
    jue1_dg12.x = gas2.x +150;
    jue1_dg12.y = gas2.y + 50;
  }
  if (lebeginfszd13) {
    jue1_dg13.x = gas2.x + 150;
    jue1_dg13.y = gas2.y + 50;
  }
  
  if (lebeginfszd14) {
    jue1_dg14.x = gas2.x + 150;
    jue1_dg14.y = gas2.y + 50;
  }
  if (lebeginfszd15) {
    jue1_dg15.x = gas2.x + 150;
    jue1_dg15.y = gas2.y + 50;
  }
  
  if (lebeginfszd16) {
    jue1_dg16.x = gas2.x + 150;
    jue1_dg16.y = gas2.y + 50;
  }
  if (lebeginfszd17) {
    jue1_dg17.x = gas2.x + 150;
    jue1_dg17.y = gas2.y + 50;
  }
  if (lebeginfszd18) {
    jue1_dg18.x = gas2.x + 150;
    jue1_dg18.y = gas2.y + 50;
  }
  if (lebeginfszd19) {
    jue1_dg19.x = gas2.x + 150;
    jue1_dg19.y = gas2.y + 50;
  }
  if (lebeginfszd20) {
    jue1_dg20.x = gas2.x + 150;
    jue1_dg20.y = gas2.y + 50;
  }
  if (lebeginfszd21) {
    jue1_dg21.x = gas2.x + 150;
    jue1_dg21.y = gas2.y + 50;
  }
  
  if (lebeginfszd22) {
    jue1_dg22.x = gas2.x + 150;
    jue1_dg22.y = gas2.y + 50;
  }
}

  window.cancelAnimationFrame(Gameline);
}

var dfsdaa = true;
var dfsdaa2 = true;
var speed = 0;
var speed2 = 0;
var speet = 0;
var speet2 = 0;
var speet3 = 0;
var n = false;
var i = false;
var l = false;
var k = false;
//
var j1 = false;
var j2 = false;
var j3 = false;
var j4 = false;
var nvrr = 0;
var nvrr2 = 0;
var nvrr3 = 0;

var beginfszd = true;
var beginfszd1 = true;
var beginfszd2 = true;
var beginfszd3 = true;
var beginfszd4 = true;
var beginfszd5 = true;
var beginfszd6 = true;
var beginfszd7 = true;
var beginfszd8 = true;
var beginfszd9 = true;
var beginfszd10 = true;
var beginfszd11 = true;
var beginfszd12 = true;
var beginfszd13 = true;
var beginfszd14 = true;
var beginfszd15 = true;
var beginfszd16 = true;
var beginfszd17 = true;
var beginfszd18 = true;
var beginfszd19 = true;
var beginfszd20 = true;
var beginfszd21 = true;
var beginfszd22 = true;
// setInterval(() => {

// }, 250);

//地图
var map = new Bg(0, 0, "./image/beijing.png", 2600, 820, 0, 0, 1);
//r人物2
var gas2 = new Bg(100, 500, "", 100, 110, 0, 0, 1.5);
//r 人物3
var gas3 = new Bg(800, 500, "", 100, 110, 0, 0, 0);

var did2 = true;

//图片数据更新函数
var num = -1;
var num2 = -1;

var did1 = true;

//长按动作执行器

function Imgupdata(jue, array) {
  speed++;
  if (speed % 5 == 0) {
    num++;
  }
  if (num >= array.length) {
    num = 0;
  }
  jue.src = array[num];

  // Gameline()
}
function Imgupdata2(jue, array) {
  speed2++;
  if (speed2 % 5 == 0) {
    num2++;
  }
  if (num2 >= array.length) {
    num2 = 0;
  }
  jue.src = array[num2];

  // Gameline()
}
//  开始动作动作计时器
var jiwoss = false;
var jiwoss2 = false;
//单击动作执行器
function imgupdataClass(jue, n, num, array, lll) {
  if (n) {
    lll.play();
    speet4++;
    if (speet4 % num == 0) {
      nvrr4 += 1;
    }
    if (nvrr4 >= array.length) {
      window.n = false;
      window.k = false;
      window.l = false;
      window.i = false;
      window.did1 = false;
      window.nl = false;
      window.kl = false;
      window.ll = false;
      window.li = false;
      // window.j2 = false;
      nvrr4 = 0;
      speet4 = 0;
    }
    jue.src = array[nvrr4];

    if (
      gas2.y > gas3.y - 20 &&
      gas2.y + gas2.height < gas3.y + gas3.height + 20
    ) {
      if (gas2.x + gas2.width >= gas3.x && gas2.x <= gas3.x + gas3.width) {
        hp2p--;
        console.log("2p血量" + hp2p);
        miss = true;
      }
    }
  }
}
var miss = false;
var nvrr9 = 0;
var speet9 = 0;
function imgupdataClassl(jue, n, num, array) {
  if (n) {
    lb1.play();
    speet9++;
    if (speet9 % num == 0) {
      nvrr9 += 1;
    }
    if (nvrr9 >= array.length) {
      window.n = false;
      window.k = false;
      window.l = false;
      window.i = false;
      window.ll = false;

      // window.j2 = false;
      nvrr9 = 0;
      speet9 = 0;
    }
    jue.src = array[nvrr9];
  }
}
function imgupdataClass3(jue, n, num, array) {
  if (n) {
    speet6++;
    if (speet6 % num == 0) {
      nvrr6 += 1;
    }
    if (nvrr6 >= array.length) {
      window.n = false;
      window.k = false;
      window.l = false;
      nvrr6 = 0;
      speet6 = 0;
    }
    jue.src = array[nvrr6];
  }
}
function imgupdataClass2(jue, n, num, array, lll) {
  if (n) {
    lll.play();
    speet5++;
    if (speet5 % num == 0) {
      nvrr5 += 1;
    }
    if (nvrr5 >= array.length) {
      window.j1 = false;
      window.j2 = false;
      window.j3 = false;
      window.j4 = false;
      window.miss = false;
      window.nl2 = false;
      window.kl2 = false;
      window.ll2 = false;
      window.li2 = false;
      nvrr5 = 0;
      speet5 = 0;
    }
    jue.src = array[nvrr5];

    if (
      gas2.y > gas3.y - 20 &&
      gas2.y + gas2.height < gas3.y + gas3.height + 20
    ) {
      if (gas2.x + gas2.width >= gas3.x && gas2.x <= gas3.x + gas3.width) {
        hp1p--;
        miss2 = true;

        console.log("1p血量" + hp1p);
      }
    }
  }
}
var speet55 = 0;
var nvrr55 = 0;
function imgupdataClass555(jue, n, num, array) {
  if (n) {
    wk6.play();
    speet55++;
    if (speet55 % num == 0) {
      nvrr55 += 1;
    }
    if (nvrr55 >= array.length) {
      window.j1 = false;
      window.j2 = false;
      window.j3 = false;
      window.j4 = false;
      window.miss = false;
      window.nl2 = false;
      window.kl2 = false;
      window.ll2 = false;
      window.li2 = false;
      nvrr55 = 0;
      speet55 = 0;
    }
    jue.src = array[nvrr55];

    if (
      gas2.y > gas3.y - 20 &&
      gas2.y + gas2.height < gas3.y + gas3.height + 20
    ) {
      if (gas2.x + gas2.width >= gas3.x && gas2.x <= gas3.x + gas3.width) {
        hp1p--;
     

        console.log("1p血量" + hp1p);
      }
    }
  }
}
function imgupdataClass2l(jue, n, num, array, lll) {
  if (n) {
    lll.play();
    speet5++;
    if (speet5 % num == 0) {
      nvrr5 += 1;
    }
    if (nvrr5 >= array.length) {
      window.j1 = false;
      window.j2 = false;
      window.j3 = false;
      window.j4 = false;
      window.miss = false;
      window.nl2 = false;
      window.kl2 = false;
      window.ll2 = false;
      window.li2 = false;
      nvrr5 = 0;
      speet5 = 0;
    }
    jue.src = array[nvrr5];
  }
}
var speet19 = 0;
var nvrr19 = 0;
function p2ss(jue, n, num, array) {
  if (n) {
    wk2.play();
    //受伤事不能攻击
    j1 = false;
    nl2 = false;
    j2 = false;
    kl2 = false;
    j3 = false;
    ll2 = false;
    // j4 = false;
    // li2 = false;
    // z4 = false;
    // z4222 = false;
    speet19++;
    if (speet19 % num == 0) {
      nvrr19 += 1;
    }
    if (nvrr19 >= array.length) {
      window.miss = false;
      nvrr19 = 0;
      speet19 = 0;
    }
    jue.src = array[nvrr19];
  }
}
var speet20 = 0;
var nvrr20 = 0;
var miss2 = false;
function p2ss2(jue, n, num, array) {
  if (n) {
    wk2.play();
    window.n = false;
    nl = false;
    k = false;
    kl = false;
    l = false;
    ll = false;
    // i = false;
    // li = false;
    // lz = false;
    // lz222 = false;
    speet20++;
    if (speet20 % num == 0) {
      nvrr20 += 1;
    }
    if (nvrr20 >= array.length) {
      window.miss2 = false;
      nvrr20 = 0;
      speet20 = 0;
    }
    jue.src = array[nvrr20];
  }
}

function godie(jue, n, num, array) {
  if (n) {
    speet14++;
    if (speet14 % num == 0) {
      nvrr14 += 1;
    }
    if (nvrr14 >= array.length) {
      nvrr14 = array.length - 1;
      // window.j2 = false;
      speet14 = 0;
    }
    jue.src = array[nvrr14];

    // if (gas2.y < gas3.y+20 && gas2.y+gas2.height <gas3.y +gas3.height+20) {
    //     if(gas2.x+gas2.width >=gas3.x && gas2.x<=gas3.x+gas3.width){
    //         hp2p--
    //         console.log("2p血量"+hp2p);

    //     }
    // }
  }
}
var speet14 = 0;
var nvrr14 = 0;

var speet4 = 0;
var speet5 = 0;
var speet6 = 0;
var nvrr4 = 0;
var nvrr5 = 0;
var nvrr6 = 0;

var hp1p = 4000;
var hp2p = 4000;
