//elfo motor
var b = p5.board('/dev/ttyUSB0', 'arduino');
var servo; 
//elfo motor

//elfo 3d
let octahedron;
function preload() {
  octahedron = loadModel('cabeca4.obj');
}
//elfo 3d

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
  createCanvas(800, 800, WEBGL);
  //noStroke();
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
  background(200);
  //image(video, 0,0);
  let movX = int(noseX);  
  let movY = int(noseY);  
  let mX = map(movX, 0, 580, 120, 0);
  let mY = map(movY, 0, 580, 120, 0);
  let mm = int(mX); // valor para o servo inteiro
  let mmy = int(mY); // valor para o servo inteiro


// atencao nos eixos
  let mapaX = map(mY, 120, 0, 10, 9); //vertical
  let mapaY = map(mX, 120, 0, 2, 4); //horizontal
  console.log(mapaY);

//  rotateX(9.5);
  rotateX(mapaX);
  rotateY(mapaY);
  model(octahedron);

  servo.write(mm);
  servo.write(mmy);

}