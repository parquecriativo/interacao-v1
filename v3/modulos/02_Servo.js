//elfo motor
var b = p5.board('/dev/ttyUSB0', 'arduino');
var servo;
//elfo motor



//elfo poseNet
let counter =0;
let counterSpeed=0;
let video;
let poseNet;
let noseX = 0;
let noseY = 0;
//elfo poseNet


function setup() {
//elfo motor
  servo = b.pin(9, 'SERVO');
  servo.range([0, 120]);
//elfo motor

//elfo Video
  createCanvas(700, 400);
  noStroke();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose' , gotPoses); 
  let option = {
    inputs:34,
    outputs:4,
    task: 'classification',
    debug:true
  }
//elfo Video 
}

//setTimeout(() => {  console.log("Coletando key!"); }, 2000);


//elfo motor
// function keyPressed() {
//    if (keyCode === 37) {
//      console.log(keyCode)
//      servo.write(15);
//    } else if (keyCode === 39) {
//      console.log(keyCode)
//      servo.write(110);
//    } else if (keyCode === 38) {
//      console.log(keyCode)
//      servo.sweep();
//    } else if (keyCode === 40) {
//      console.log(keyCode)
//      servo.noSweep();
//    } 
//    else {
//     servo.write(mm);
//     console.log(mm);
//    }
// }
//elfo motor

//elfo pega pose
function gotPoses(poses){
  //console.log(poses);
  if(poses.length > 0) {  
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    counter = 0;
    counterSpeed =0;

  }else{
    noseX = 45;
    noseY = 45;
  }
}
//elfo pega pose

//elfo video render
function modelReady(){}
//elfo video render

function draw() {
  background(220);

//elfo draw
  image(video, 0,0);
  let combo = int(noseX);  
  let m = map(combo, 0, 580, 120, 0);
  fill(150);
  triangle(m, 150, 10, 10);  
  //console.log(combo);
  let mm = int(m); // valor para o servo inteiro
  //console.log(mm);
//elfo draw    






  servo.write(mm);

}