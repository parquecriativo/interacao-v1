var b = p5.board('/dev/ttyUSB0', 'arduino');
var led;

function setup() {
  createCanvas(400, 400);
  led = b.pin(13, 'LED');
  
}

setTimeout(() => {  console.log("Coletando key!"); }, 2000);

function keyPressed() {
  if (keyCode === 37){
    led.on();
    console.log(keyCode);
  } else if (keyCode === 39) {
    led.off();
    console.log(keyCode);
  } else if (keyCode === 38){
    led.blink();
    console.log(keyCode);
  } else if (keyCode === 40) {
    led.noBlink();
    console.log(keyCode);
  }
  else{
  	led.off();
  }
}

function draw() {
  background(220);
}