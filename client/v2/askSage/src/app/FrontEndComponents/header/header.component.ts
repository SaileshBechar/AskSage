import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;


  constructor(private _brokerService: BrokerService, private _router: Router) { }

  ngOnInit() {
    this.title = "Ask Sage";

  }

  //Trigger the side navigation on menu click
  sideNavTrig() {
    if (document.readyState === "complete") {
      let navBar: HTMLElement = document.getElementById("mobile-menu")
      navBar.style.transform = "translateX(100%)";
    }

  }

  logoff() {
    this._brokerService.setLogoff()
      .subscribe(
        data => {
          this._brokerService.removeCredentials();
          this._router.navigate(['/']);
        },
        error => {
          console.log('Logoff Error!', error);
        }
      )
  }

}
