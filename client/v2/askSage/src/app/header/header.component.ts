import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Properties
  public userName = "Jhon";
  public brokerId = "1";


  public isDisabled = true;


  //Get this from parent component
  public appName = "AskSage";

  constructor() { }

  ngOnInit() {
  }

  //Call this at header
  getAppName(){
    this.appName;
    
  }

  greetUser(){
    return "Hi " + this.userName + " welcome back!"; 
  }

}
