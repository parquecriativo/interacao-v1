#include <Ultrasonic.h>
#define TRIGGER_PIN  12
#define ECHO_PIN     13
Ultrasonic ultrasonic(TRIGGER_PIN, ECHO_PIN);
void setup(){
  Serial.begin(9600);
}

void loop(){
  //float cmMsec, inMsec;
  int cmMsec, inMsec;
  long microsec = ultrasonic.timing();
  cmMsec = ultrasonic.convert(microsec, Ultrasonic::CM);
  
  if(cmMsec <= 10){
    Serial.println(cmMsec);
    delay(2000);    
    }else if(cmMsec >= 15){
    Serial.println(cmMsec);
    delay(1000);
  }
  
//Serial.println(cmMsec);
//delay(500);

}
