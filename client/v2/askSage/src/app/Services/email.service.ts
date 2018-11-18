import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  forgotPassword(email: string) {
   
    return this.http.post<any>('/api/Brokers/email', { email });
  }
}
