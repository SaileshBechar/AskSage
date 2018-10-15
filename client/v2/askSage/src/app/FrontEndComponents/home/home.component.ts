import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token : string;
  userId : string;

  constructor() { }

  ngOnInit() {
    this.token = sessionStorage.getItem('token');
    this.userId = sessionStorage.getItem('userId');
    
  }

}
