import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


// import { PageEvent } from '@angular/material';
// import { HostListener, Inject } from "@angular/core";
// import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {

    

    
  }

  // getPhoto(): Observable<Photos[]> {
  //   this.httpClient.get('https://api.unsplash.com/photos')
  // }

}
