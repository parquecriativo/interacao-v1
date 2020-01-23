let serial;
let latestData = "waiting for data";
let lt2 = 50;
let lt1 = 50;
let player1; // Declare object
let player2;
let direction = 'right';

function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/ttyUSB0');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);

  // Create object
 player1 = new Pad(40);
 player2 = new Pad(600);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString.split(",");
 lt1 = int(latestData[0]);
 lt2 = int(latestData[1]);
}

function draw() {
  background(50, 89, 100);
  player1.move(lt1);
  player1.display();
  fill(255,0,0);
  player2.move(lt2);
  player2.display();
  fill(255,255,255);
  text(latestData, 10, 10);
}



// Pad class
class Pad {
  constructor(y) {
    this.x = random(width);
    this.y = y;
    //this.diameter = random(10, 30);
    this.speed = 1;
  }

  move(position) {
    //if(direction=='right')
    if(position<3000){
      this.x =position*10;
    }
    
    //this.y += random(-this.speed, this.speed);
  }

  display() {
    rect(this.x, this.y, 100, 20);
    //elipse(this.x, this.y, this.diameter, this.diameter);
  }
}
