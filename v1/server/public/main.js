const socket = io();
const temperatureDisplay = document.getElementById('temperature');
// const sD = 200; // 200 equivalente 2 metros do lado direito do dispositivo
// const sR = 200; // 200 equivalente 2 metros do lado esquerdo do dispositivo


socket.on('temp', function (data) {
	
	console.log(data);



if(data <= 10){
	$(".bola").animate({left: '40px'}, 500);
	setTimeout(() => {  console.log("Olhando para ESQUERDA!"); }, 1000);
	data = 200;
}else if(data >= 21){
	$(".bola").animate({left: '110px'}, 500);
	setTimeout(() => {  console.log("Parando!"); }, 1000);
	data = 200;
}

  //$(".bola").animate({left: data + 'px'}, 500);
  //temperature.innerHTML = `${data} Lumens`; // removi na index tambem o objeto
});  
