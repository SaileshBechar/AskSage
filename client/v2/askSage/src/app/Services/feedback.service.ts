import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  postForm(formData: string) {
    console.log("FormData")
    return this.http.post('/api/feedback', {formData});
  }
}
