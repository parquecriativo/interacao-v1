#include <Ultrasonic.h>
#define TRIGGER_PIN_ESQ  12
#define ECHO_PIN_ESQ     13
#define TRIGGER_PIN_ESQ2  10
#define ECHO_PIN_ESQ2     11


Ultrasonic ultrasonicEsq(TRIGGER_PIN_ESQ, ECHO_PIN_ESQ);
Ultrasonic ultrasonicEsq2(TRIGGER_PIN_ESQ2, ECHO_PIN_ESQ2);

void setup(){
  Serial.begin(9600);
}

void loop(){
  //float cmMsec, inMsec;
  int cmMsecEsq, inMsecEsq,cmMsecEsq2, inMsecEsq2;
  long microsecEsq = ultrasonicEsq.timing();
  long microsecEsq2 = ultrasonicEsq2.timing();
  cmMsecEsq = ultrasonicEsq.convert(microsecEsq, Ultrasonic::CM);
  cmMsecEsq2 = ultrasonicEsq2.convert(microsecEsq2, Ultrasonic::CM);


  // valor em cm
  if((cmMsecEsq <=200) or (cmMsecEsq2 <=200)){
    Serial.print(cmMsecEsq);
    Serial.print(",");
    Serial.println(cmMsecEsq2);
    
  }else{
    Serial.println("0,0");
 }
  
  
    delay(2000);

}
