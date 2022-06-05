#include <DHT.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <Arduino.h>
#include <ESP8266WiFi.h>

const char* ssid = "HUAWEI P8 lite 2017";
const char* password = "SARDELLA";
const char* host = "https://arduino-perry.herokuapp.com";
String url = "/new-record";

//#define DHT11_PIN 7
//
//DHT dht(DHT11_PIN, DHT11);

void setup() {
  Serial.begin(115200);
  pinMode(A0,INPUT);
  
  //searchWiFi();
  connetti();
}

void loop() {
//      float h = dht.readHumidity();
//      float t = dht.readTemperature();

      int co2rd[10];           //array con 10 letture
      int co2ppm = 0;          //valora calcolato per PPM(Parti Per Milione)
      int sos = 0;             //variabile SOS per il calcolo della media
      for (int x = 0;x<10;x++){                   
//        co2rd[x]=analogRead(A0);//valore del sensore di rilevamento del gas
      }
    
//      for (int x=0;x<10;x++){  
//        sos+=co2rd[x];  
//      }  
//      co2ppm = sos/10; 
      
      HTTPClient http;

      StaticJsonBuffer<300> JSONbuffer;   //Declaring static JSON buffer
      JsonObject& JSONencoder = JSONbuffer.createObject();
      
      JSONencoder["ppm"] = "400";
      JSONencoder["umidita"] = "40";
      JSONencoder["temperatura"] = "40";
      char JSONmessageBuffer[300];
      JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
      Serial.println(JSONmessageBuffer); 
      
      const int httpPort = 80; 
//      if (!client.connect(host, httpPort)) 
//      { 
//        Serial.println("connection failed"); 
//        return; 
//      } 
      
      String address = host + url; 
      http.begin(address, "BB 8E 09 B0 E6 91 4C 8A 72 78 31 0F 80 7C 12 7A AA A5 F9 66");
      http.addHeader("Content-Type", "application/json");
      int code = http.POST(JSONmessageBuffer);
      String payload = http.getString();
      Serial.print(payload);
      
      Serial.print(code);
      http.end();
      delay(60000);

}

void searchWiFi(){
  int nreti = WiFi.scanNetworks();
  
  for(int i=0; i< nreti;i++){
    if (Serial.availableForWrite() > 32)
    {
      Serial.print("Rete: ");
      Serial.println(WiFi.SSID(i));
    }
  }
}

void connetti(){
  WiFi.begin(ssid,password);
  while(WiFi.status() != WL_CONNECTED){
    if (Serial.availableForWrite() > 32){
      Serial.print(".");
    }
      
    delay(1000);
  }
  if (Serial.availableForWrite() > 32){
    Serial.println("Connesso alla rete WiFi!");
  }
    
}
