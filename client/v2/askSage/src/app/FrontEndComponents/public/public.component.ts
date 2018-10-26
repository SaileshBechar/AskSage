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
    $(window).on('scroll', function () {
<<<<<<< HEAD
      // console.log('Window is scrolling');
      if (document.getElementById("loginbtn")){
        var elementOffset = $('#loginbtn').offset().top;
        // console.log(elementOffset);
=======
      if (document.getElementById("loginbtn")){
        var elementOffset = $('#loginbtn').offset().top;
>>>>>>> Took out console logs on public page
        if ($(window).scrollTop() > elementOffset - 54) { //Gets height of element from top of screen and only 
          $('div .nav-wrapper').removeClass('default'); // transitions at that height minus height of element
          $('div .nav-wrapper').addClass('scrolled');
        }
        else {
          $('div .nav-wrapper').addClass('default');
          $('div .nav-wrapper').removeClass('scrolled');
        }      
      }
      else{
        $(window).off('scroll');
      }
    })
  }

  // getPhoto(): Observable<Photos[]> {
  //   this.httpClient.get('https://api.unsplash.com/photos')
  // }

}
