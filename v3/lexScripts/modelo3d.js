//draw a spinning octahedron
let octahedron;

function preload() {
  octahedron = loadModel('cabeca4.obj');
}

function setup() {
  createCanvas(600, 630, WEBGL);
}

function draw() {
  	background(200);
  	rotateX(9.5);
  	rotateY(frameCount * 0.01);
  	model(octahedron);
}