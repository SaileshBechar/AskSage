import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  _token: string;

  constructor(private http: HttpClient) { }

  postForm(inputText: string) {
    this._token = localStorage.getItem('token');
    // console.log("FormData")
    return this.http.post('/api/feedback?access_token=' + this._token, {inputText});
  }
}
