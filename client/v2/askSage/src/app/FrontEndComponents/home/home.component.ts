import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { MixPanelService } from '../../Services/mix-panel.service';
declare var M: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  notEquivalent :boolean;

  constructor(private _brokerService: BrokerService, private mixpanelService: MixPanelService) { }

  ngOnInit() {
    this._brokerService.getBroker()
    .subscribe(
      (data : any) => {
        if (data.hasLoggedIn === true) {
            this._brokerService.setLoggedIn()
              .subscribe(
                data => {
                  var elems = document.querySelectorAll('.modal');
                  var instances = M.Modal.init(elems, {});
                  $('.modal').modal('open');
                }
              )
          }
        },
        error => {
          console.log('Error', error); 
        }
      )
  }

  checkPasswords(password, confirmPassword : string){
    if (password != confirmPassword){
      this.notEquivalent = true;
    }
    else {
      this.notEquivalent = null;
    }
  }

  savePassword(newpassword: string){
    this._brokerService.setPassword(newpassword)
    .subscribe(
      (data:any) => {
        // this.mixpanelService.init(_brokerID);
        this.mixpanelService.track("Successfully updated password",{});
        $('.modal').modal('close');
      },
      error => {
        // console.log('Unsuccessfully updated password!');
      }
      )
  }
}
