const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO.listen(server);

app.use(express.static(__dirname + '/public'));
server.listen(5555, () => console.log('server on port 5555'));

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600
});
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
  console.log('connection is opened');
});

parser.on('data', function (data) {
	if(data != null){ 	
	  let temp = parseInt(data, 10);
	  // let temp = data.split(",");
	  //console.log("primeiro" + temp[0] + " segundo" + temp[1]);

		// console.log(temp);
	  io.emit('temp', data.toString());

	}
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));
