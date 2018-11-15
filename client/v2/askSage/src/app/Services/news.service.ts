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
  // intelizenceKey = 'gQywpIf8cE7hrzTAouTNV1rcDAp97ADC20S1lAGi';

  searchQuery : string;


  constructor(private http: HttpClient, private _picService: PictureService) { }

  // Get news from NewsService
  getNews(searchQuery? : string) {

    // var url = 'https://newsapi.org/v2/top-headlines?category=technology';  
    // var url ='https://newsapi.org/v2/everything?q=blockchain'
    // if ( searchQuery){
    //   var url ='https://newsapi.org/v2/top-headlines?q='+this.searchQuery;
    // }
    // else
     

    var url = "https://newsapi.org/v2/everything?q=insurance&from=2018-11-01&sortBy=publishedAt";
    // var url = "https://api.newsapi.aylien.com/api/v1/stories?text=insurance&published_at.start=NOW-30DAYS%2FDAY&published_at.end=NOW&language=fr&sort_by=recency";

    const headers = new HttpHeaders().set("x-api-key", this.newsAPIKey);
    // console.log(url);

    return this.http.get(url,{headers});

    // var url = 'https://api.intellizence.com/api/v1/companies';  
    // const headers = new HttpHeaders().set("x-api-key", this.intelizenceKey);
    // return this.http.get(url,{headers});

  }


  



}


