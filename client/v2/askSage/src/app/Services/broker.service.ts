import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
   _token = sessionStorage.getItem('token');
   _userId = sessionStorage.getItem('userId');

  constructor(private http: HttpClient) { }

  setLogin(email: string, password: string) {
    var data = this.http.post<any>('/api/Brokers/login', {email, password});
    return data;
  }

  storeCredentials(token : string, userId : string){
      sessionStorage.token = token;
      sessionStorage.userId = userId;
  }


}
