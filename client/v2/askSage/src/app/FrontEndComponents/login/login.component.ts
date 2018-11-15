import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';
import { MixPanelService } from '../../Services/mix-panel.service';

// mixpanel.init("fa268afdf77e936a3280b21b1f55391a");
// mixpanel.track("Login form");


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError: boolean;
  hide = true;

  rememberMe : boolean = false;


  

  constructor(private _brokerService: BrokerService, private router: Router, private mixpanelService: MixPanelService) { }

  ngOnInit() {
    //Get from localStorage and set it to form.value on init
    // console.log(localStorage.getItem('token'), localStorage.getItem('userId'));

    
  }

  onLogin(userDetails){
  
    this._brokerService.setLogin(userDetails.email, userDetails.password, userDetails.rememberMe)
      .subscribe(
        data => {
          // console.log('Success!', data);
         
          //Send to mixpanel
          this.mixpanelService.init(data.userId);
          this.mixpanelService.track("Login Action "+ userDetails.email +" token: " + data.id);


          this._brokerService.storeCredentials(data.id, data.userId);
          this.router.navigate(['/news']);

        },
        error => {
          // console.log('Error', error);
            this.isError = true;
        }
      )
  }

}
