import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PictureService {
   //Unsplash API keys
  secretKey =  '174bad0aaa8674a49f83fba64f84a4a2582c333b909b0f35b9d2613497796cb7';
  accessKey = '4f2e7025c82830559b6d448b81326715eae17cd829aaaa6255c79454dac22ca9';
  

  constructor(private http: HttpClient) { }



// Get random collection of pics from unsplash
getPics(topic: string){
   
 
 
  return this.http.get('https://api.unsplash.com/search/photos/?client_id='+ this.accessKey+'&query='+topic);
}
  


}
