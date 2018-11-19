import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service'
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _brokerService: BrokerService) { }

  ngOnInit() {
    this._brokerService.getBroker()
    .subscribe(
      (data : any) => {
        if (data.hasLoggedIn === false) {
            this._brokerService.setLoggedIn()
              .subscribe(
                data => {
                  var toastHTML = '<span>Reset your password!</span><a href="/profile" class="btn-flat toast-action"><i class="material-icons">border_color</i></a>';
                  M.toast({html: toastHTML, displayLength: Infinity});
                }
              )
          }
        },
        error => {
          console.log('Error', error); 
        }
      )

    
  }

}
