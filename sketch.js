let font;  // 載入字型文字
let points = [];  // 轉成點狀文字
let r = 15;  // 增加上下幅度
let angle = 0;

// ==================================================
function preload() {  // 在執行setup()前，必須先做此函數執行，主要先載入字型
    font = loadFont("NotoSansTC-VariableFont_wght.ttf"); 
}
//===================================================

function setup() {
    // 畫布的寬高與背景顏色
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    
    points = font.textToPoints("angry", -300, 80, 200, {
      sampleFactor: 0.07  // 數字越小，點數越大
  });
    
    angleMode(DEGREES);  // 宣告角度使用0~360
    
}

// ===================================================

function draw() {  // 畫圖
    background("#fefae0");
    translate(-width/2,-height/2);
    noFill();
    strokeWeight(2);
    let rect_width=50;
    let bc_w=50;
    let sc_w=25;

     let scaleFactor =map(mouseY, 0, height, 1,2);
     rectMode(CENTER);
     for(let j=0;j<30;j++){
    for(let x =0;x<width; x +=rect_width)  {
    ellipse(x,25+50*j,bc_w* scaleFactor);
    rect(x,25+50*j,rect_width* scaleFactor);
    ellipse(25+x+rect_width,50+50*j,sc_w*scaleFactor) 
    }
  }

  translate(width/2,height/2);
   rotateX(angle %360);
   for (let i =0;i<points.length-1;i++) {
    fill("#bde0fe");
    ellipse(points[i].x +r *sin(angle +i *25),points[i].y+r*sin(angle +i *25),10);
    strokeWeight(3);
    stroke("#ff8fab");
    line(points[i].x +r *sin(angle +i *25),points[i+1].x,points[i+1].y);
   }   

   angle+=10;
  }