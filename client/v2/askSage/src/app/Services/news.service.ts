import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../Model/News.model';
import { PictureService } from './picture.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //News API
  newsAPIKey = '9a8d068cd73e4618bb1183d9cdb3f9dc';
  //Inteligence API
  intelizenceKey = 'gQywpIf8cE7hrzTAouTNV1rcDAp97ADC20S1lAGi';

  searchQuery : string;


  constructor(private http: HttpClient, private _picService: PictureService) { }

  // Get news from NewsService
  getNews(searchQuery? : string) {

    // var url = 'https://newsapi.org/v2/top-headlines?category=technology';  
    // var url ='https://newsapi.org/v2/everything?q=blockchain'
    if ( searchQuery){
      var url ='https://newsapi.org/v2/top-headlines?q='+this.searchQuery;
    }
    else{ 

      // var url = "https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal, financial-times, business-insider"
    // var url ='https://newsapi.org/v2/top-headlines?country=ca&category=business'
    // var url = 'https://newsapi.org/v2/top-headlines?q=insurance';
    var url = "https://newsapi.org/v2/everything?q=insurance"
  }
   
    const headers = new HttpHeaders().set("x-api-key", this.newsAPIKey);
    return this.http.get(url,{headers});

    // var url = 'https://api.intellizence.com/api/v1/companies';  
    // const headers = new HttpHeaders().set("x-api-key", this.intelizenceKey);
    // return this.http.get(url,{headers});

  }


  



}


