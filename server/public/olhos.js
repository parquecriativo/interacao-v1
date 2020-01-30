let leftEyeX;
let rightEyeX;
let heightEye;

let lX;
let rX;
let y;
let counter =0;
let counterSpeed=0;

function setup() {
  createCanvas(700, 400);
  noStroke();
  leftEyeX= (width/2) -150;
  rightEyeX= (width/2) +150;
  heightEye= height/2;
  
  lX = leftEyeX;
  rX = rightEyeX;
  y = heightEye;
  //counter = random(100);
  //counterSpeed = random(0.1);

  
  }


function draw() {
      background(100,100,100);     
      fill(0,0,0);
      text("mouseX= "+ mouseX + " mouseY= "+ mouseY, 10,10);
  
    
      eyes(lX,rX,y);
  
    
  }


function eyes(lex,rex,ye){
  
  
      this.lex = lex;
      this.rex = rex;
      this.y = ye;
  
      this.size = 80;
  
  
  
  
  
    //controla a animação das palpebras
    this.alternate = sin(counter+=counterSpeed);
    text(this.alternate, 50,50);

    this.topLblink = map(this.alternate, -1, 1, -PI, -PI / 2);
    this.topRblink = map(this.alternate, -1, 1, 0, -PI / 2);
  
    this.bottomLblink = map(this.alternate, -1, 1, 0, PI / 2);
    this.bottomRblink = map(this.alternate, -1, 1, PI, PI / 2);
  
  
     // this.display = function(){
      //parte branca
      fill(255,255,255);
      ellipse(this.lex,heightEye,190,80);
      ellipse(this.rex,heightEye,190,80);
      // seguir o mouse ref: https://www.openprocessing.org/sketch/732002
      var a;
	  a=atan2(mouseY-this.y, mouseX-this.lex);
	  fill(174,107,89);
	  ellipse(this.lex+0.2*300*cos(a), this.y+0.2*60*sin(a), 60, 60);
      ellipse(this.rex+0.2*300*cos(a), this.y+0.2*60*sin(a), 60, 60);
      
      
      // iris
      //fill(174,107,89);
      //ellipse(this.lex,this.y,60,60);
      //ellipse(this.rex,this.y,60,60);
      
      // pupila
      fill(50,50,50);
      //ellipse(this.lex,this.y,30,30);
  ellipse(this.lex+0.2*300*cos(a), this.y+0.2*60*sin(a), 30, 30);
      //ellipse(this.rex,this.y,30,30);
  ellipse(this.rex+0.2*300*cos(a), this.y+0.2*60*sin(a), 30, 30);
  
  
  
      fill(100,100,100);
      //palpebras ref: https://www.openprocessing.org/sketch/815596
      //arc(0, 0, this.size, this.size/2, this.topLblink, this.topRblink, OPEN);
      arc(this.lex, this.y, 190, 90, this.topLblink, this.topRblink, OPEN);
  arc(this.rex, this.y, 190, 90, this.topLblink, this.topRblink, OPEN);
    // BOTTOM EYELID
    arc(this.lex, this.y, 190, 90, this.bottomLblink, this.bottomRblink, OPEN);
   arc(this.rex, this.y, 190, 90, this.bottomLblink, this.bottomRblink, OPEN);
  
}

// precisamos achar uma forma melhor, no momento ele alterna entre piscar e não piscar
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    counter = 0;
    counterSpeed =0;
  } else if (keyCode === RIGHT_ARROW) {
    counter =random(100);
    counterSpeed = random(0.1);
  }
}
