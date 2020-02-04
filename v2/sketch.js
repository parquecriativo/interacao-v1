let pose;
let video;
let poseNet;
let  skeleton;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, retornaUmOk);
  poseNet.on('pose',pegaPose);
}

function pegaPose(poses){
  //console.log(poses); 
  if(poses.length > 0){
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function retornaUmOk(){
  //console.log('pronto para bagaçar');
}   

function draw() {
  image(video,0,0);
  
  if(pose){  
    
    let olhoEsq = pose.leftEye;
    let olhoDir = pose.rightEye;
    
    let d = dist(olhoDir.x, olhoDir.y, olhoEsq.x, olhoEsq.y);
    
    fill(255,0,0);
    ellipse(pose.nose.x,pose.nose.y, 40);
    fill(0,0,255);
    ellipse(olhoEsq.x,olhoEsq.y, d);
    ellipse(olhoDir.x,olhoDir.y, d);
    
    ellipse(pose.leftEar.x,pose.leftEar.y, 40);
    ellipse(pose.rightEar.x,pose.rightEar.y, 40);

    ellipse(pose.leftShoulder.x,pose.leftShoulder.y, 40);
    ellipse(pose.rightShoulder.x,pose.rightShoulder.y, 40);
   
    ellipse(pose.leftElbow.x,pose.leftElbow.y, 40);
    ellipse(pose.rightElbow.x,pose.rightElbow.y, 40);
   
    ellipse(pose.leftWrist.x,pose.leftWrist.y, 40);
    ellipse(pose.rightWrist.x,pose.rightWrist.y, 40);
   
    ellipse(pose.leftHip.x,pose.leftHip.y, 40);
    ellipse(pose.rightHip.x,pose.rightHip.y, 40);
   
    ellipse(pose.leftHip.x,pose.leftHip.y, 40);
    ellipse(pose.rightHip.x,pose.rightHip.y, 40);
   
    ellipse(pose.leftKnee.x,pose.leftKnee.y, 40);
    ellipse(pose.rightKnee.x,pose.rightKnee.y, 40);
   
    ellipse(pose.leftAnkle.x,pose.leftAnkle.y, 40);
    ellipse(pose.rightAnkle.x,pose.rightAnkle.y, 40);
   
    for(let i=0; i < pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0,255,0);
      ellipse(x,y,16,16);
    }
    
    for (let i=0; i < skeleton.length; i++){
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(4);
      stroke(255,255,255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
      
  }

} 


/*

let leftEyeX;
let rightEyeX;
let heightEye;

let lX;
let rX;
let y;
let counter =0;
let counterSpeed=0;

let video;
let poseNet;
let noseX = 0;
let noseY = 0;



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
  video = createCapture(VIDEO);
  video.hide();
  //console.log(ml5);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose' , gotPoses);

  
  }

function gotPoses(poses){
  //console.log(poses);
  if(poses.length > 0) {  
  noseX = poses[0].pose.keypoints[0].position.x;
  noseY = poses[0].pose.keypoints[0].position.y;
      
    counter = 0;
    counterSpeed =0;

  }else{
     noseX = 350;
     noseY = 202;
    fecharOlhos();
    
  }
}

function modelReady(){
  //console.log('model ready');

}




function draw() {
      background(100,100,100);     
      fill(0,0,0);
      //text("mouseX= "+ mouseX + " mouseY= "+ mouseY, 10,10);
      //scale(-1.0,1.0);
      image(video, 0,0);
      eyes(lX,rX,y);
  
    
  }


function eyes(lex,rex,ye){
  
  
      this.lex = lex;
      this.rex = rex;
      this.y = ye;
  
      this.size = 80;
  
    //controla a animação das palpebras
    this.alternate = sin(counter+=counterSpeed);
    //text(this.alternate, 50,50);

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
      let a;
	  //a=atan2(noseY-this.y, noseX-350);
      a=atan2(noseY-this.y, noseX-(this.lex+(this.rex-this.lex)/2));
      //console.log(this.rex, this.lex)
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
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     counter = 0;
//     counterSpeed =0;
//   } else if (keyCode === RIGHT_ARROW) {
//     counter =random(100);
//     counterSpeed = random(0.1);
//   }
// }


function fecharOlhos() {
  counter =random(100);
  counterSpeed = random(0.1);
}

*/