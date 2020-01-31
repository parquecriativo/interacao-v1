#define sensorEsq A0
int sinalSensorEsq,sinalSensorDir ,olhoEsq, olhoDir;
void setup() {
  Serial.begin(9600);
}
void loop() {

  sinalSensorEsq = analogRead(sensorEsq);
  olhoEsq = map(sinalSensorEsq, 0, 1023, 40, 180);  
  Serial.println(olhoEsq);
  delay(1000);

  sinalSensorDir = analogRead(sensorDir);
  olhoDir = map(sinalSensorDir, 0, 1023, 40, 180);  
  Serial.println(olhoDir);
  delay(1000);



Serial.print(olhoEsq);
Serial.print(",");
Serial.println(olhoDir);

}
