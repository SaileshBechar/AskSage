import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class NewsService {


// From Intellizence 
  private newsUrl = "https://api.intellizence.com/api/v1/companies?name=block";
//   private specialEventsUrl = "http://localhost:3000/api/special"; Get recommedations?

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this.newsUrl)
  }

//   getSpecialEvents() {
//     return this.http.get<any>(this.specialEventsUrl)
//   }
}
