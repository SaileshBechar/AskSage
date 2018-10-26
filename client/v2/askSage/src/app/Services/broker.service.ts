import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BrokerService {
  _token: string;
  _userId: string;
  _loggedIn : boolean;

  constructor(private http: HttpClient) { }

  setLogin(email: string, password: string) {
    return this.http.post<any>('/api/Brokers/login', {email, password});
  }

  //Function called when user logs in to store credentials in local variables
  storeCredentials(token : string, userId : string){
    localStorage.token = token;
    localStorage.userId = userId;
    this._loggedIn = true; //Service remembers that user was legitamently logged in
  }

  getCredentials(){
    this._token = localStorage.getItem('token');
    this._userId = localStorage.getItem('userId');
  }


  //Function to verify authenticity of user
  verifyUser(){
    this.getCredentials();
    if (this._token == null || this._userId == null){ //Checks if user has no credentials to save resources
      return of(false); //returns observable
    }
    if (this._loggedIn === true){ //Checks if user has logged in this session
      return of(true);
    }
    else{ //If user has not logged in this session, we validate the token
      
      return this.http.get('/api/Brokers/' + this._userId + '/accessTokens/' + this._token + '?access_token=' + this._token);
    }
  }

  getBroker(){
    this.getCredentials();
    return this.http.get('/api/Brokers/' + this._userId + '?access_token='+ this._token);
  }

  updateBroker(brokerModel){
    this.getCredentials();
    return this.http.patch('/api/Brokers/' + this._userId + '?access_token='+ this._token, {
      email : brokerModel.email,
      fname : brokerModel.fname,
      lname : brokerModel.lname,
      bdr : {
        name: brokerModel.bdr.name,
        phone: brokerModel.bdr.phone,
        email: brokerModel.bdr.email,
        role: brokerModel.bdr.role,
        company: brokerModel.bdr.company,
      }
    });
  }

  setLogoff(){
    this.getCredentials();
    return this.http.post('/api/Brokers/logout?access_token='+ this._token, {});
  }

  removeCredentials(){
    this._token = null;
    this._userId = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this._loggedIn = null;
  }

}
