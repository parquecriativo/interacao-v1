#define sensor A0
int sinalSensor, val;
void setup() {
  Serial.begin(9600);
}
void loop() {
  sinalSensor = analogRead(sensor);
  val = map(sinalSensor, 0, 1023, 40, 180);  
  Serial.println(val);
  delay(1000);
}
