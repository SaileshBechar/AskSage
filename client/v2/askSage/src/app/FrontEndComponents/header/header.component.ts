import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title : string ;
  

  constructor(private _brokerService: BrokerService, private _router: Router) { }

  ngOnInit() {
    this.title = "Ask Sage";
    

  

  }

  logoff(){
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
