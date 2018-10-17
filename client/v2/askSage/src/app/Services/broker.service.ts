import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BrokerService {
  _token: string;
  _userId: string;

  constructor(private http: HttpClient) { }

  setLogin(email: string, password: string) {
    return this.http.post<any>('/api/Brokers/login', {email, password});

  }

  storeCredentials(token : string, userId : string){
    localStorage.token = token;
    localStorage.userId = userId;
  }

  isLoggedIn(){
    this._token = localStorage.getItem('token');
    this._userId = localStorage.getItem('userId');
    if (this._token == null || this._userId == null){
      return false;
    }
    else{
      return this.isVerified;
    }
  }

  isVerified(){
    console.log("In isVerified");
    return true;
  }

  setLogoff(){
    return this.http.post('/api/Brokers/logout?access_token='+ this._token, {});
  }

  removeCredentials(){
    this._token = null;
    this._userId = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

}
