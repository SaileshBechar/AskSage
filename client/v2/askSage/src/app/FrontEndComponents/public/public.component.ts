import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
declare var $:any;

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
    $(window).on('scroll', function(){
      if ($(window).scrollTop() > 100){
        $('div .nav-wrapper').removeClass('default');
        $('div .nav-wrapper').addClass('scrolled');
      }
      else{
        $('div .nav-wrapper').addClass('default');
        $('div .nav-wrapper').removeClass('scrolled');
      }
    })
    
  }

  // getPhoto(): Observable<Photos[]> {
  //   this.httpClient.get('https://api.unsplash.com/photos')
  // }

}
