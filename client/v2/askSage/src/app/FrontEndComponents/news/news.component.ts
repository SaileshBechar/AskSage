import { Component, OnInit } from '@angular/core';
import { News } from '../../Model/News.model';
import { NewsService } from '../../Services/news.service';
import { PictureService } from '../../Services/picture.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public title: string; 
  public searchQuery :string;


    newsFeed;
    picsList : any[];

  constructor( private _newsService : NewsService, private _picService: PictureService) { }

  ngOnInit() {
    this.title ="Todays News Feed";

  

    this._newsService.getNews(this.searchQuery)
    .subscribe(
      (data : any) => {
        //Sucess 
         this.newsFeed = data.articles;
         console.log(this.newsFeed);
        
      },
      (err : any) => {
        console.log ("Error");
        console.log(err);
      }
    )

    

    this._picService.getPics("pic").subscribe(
      (next) => {
        //Sucess
        console.log ("Success from getPics Service");
        console.log(next);
      },
      (err) => {
        console.log ("Error");
        console.log(err);
      }
    )
   

  }

}
