import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broker } from '../Model/broker';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  forgotPassword(email: string) {
  //  console.log(email);



    return this.http.post<any>('/api/Brokers/reset', { email });
  }
}
