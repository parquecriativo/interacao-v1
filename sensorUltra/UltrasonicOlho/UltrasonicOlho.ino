#include <Ultrasonic.h>
#define TRIGGER_PIN_ESQ  12
#define ECHO_PIN_ESQ     13


Ultrasonic ultrasonicEsq(TRIGGER_PIN_ESQ, ECHO_PIN_ESQ);

void setup(){
  Serial.begin(9600);
}

void loop(){
  //float cmMsec, inMsec;
  int cmMsecEsq, inMsecEsq;
  long microsecEsq = ultrasonicEsq.timing();
  cmMsecEsq = ultrasonicEsq.convert(microsecEsq, Ultrasonic::CM);


  // valor em cm
  if(cmMsecEsq <=200){
    Serial.println(cmMsecEsq);

  }
  
    delay(500);

}
