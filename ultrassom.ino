//Carrega a biblioteca do sensor ultrassonico
#include <Ultrasonic.h>
 
//Define os pinos para o trigger e echo
#define pino_trigger 12
#define pino_echo 13

#define pino_trigger2 8
#define pino_echo2 9


 
//Inicializa o sensor nos pinos definidos acima
Ultrasonic ultrasonic(pino_trigger, pino_echo);

Ultrasonic ultrasonic2(pino_trigger2, pino_echo2);

void setup()
{
  Serial.begin(9600);
  Serial.println("Lendo dados do sensor...");
}
 
void loop()
{
  //Le as informacoes do sensor, em cm
  float cmMsec, cmMsec2;
  long microsec = ultrasonic.timing();
  long microsec2 = ultrasonic2.timing();
  cmMsec1 = ultrasonic.convert(microsec, Ultrasonic::CM);
  cmMsec2 = ultrasonic2.convert(microsec2, Ultrasonic::CM);
  Serial.print(cmMsec1);
  Serial.print(","); 
  Serial.println(cmMsec2);
  
  
  delay(10);
}
