import { Component, OnInit } from '@angular/core';
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
  private newsFeed : any[];
  private picsList : any[];

  constructor( private _newsService : NewsService, private _picService: PictureService) { }

  ngOnInit() {
    this.title ="Todays News Feed";
    this._newsService.getNews(this.searchQuery)
    .subscribe(
      (data : any) => {
        //Success 
         this.newsFeed = data.articles;
        //  console.log(this.newsFeed);
        
      },
      (err : any) => {
        // console.log ("Error");
        console.log(err);
      }
    )

    

    this._picService.getPics("pic").subscribe(
      (next : any) => {
        //Sucess
        // console.log ("Success from getPics Service");
        this.picsList = next.results;
        // console.log(this.picsList);
      },
      (err) => {
        // console.log ("Error");
        console.log(err);
      }
    )
   

  }

}
