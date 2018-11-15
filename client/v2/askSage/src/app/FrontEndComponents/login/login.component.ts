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

  rememberMe: boolean = false;




  constructor(private _brokerService: BrokerService, private router: Router, private mixpanelService: MixPanelService) { }

  ngOnInit() {
    //Get from localStorage and set it to form.value on init
    // console.log(localStorage.getItem('token'), localStorage.getItem('userId'));


  }

  onLogin(userDetails) {

    this._brokerService.setLogin(userDetails.email, userDetails.password, userDetails.rememberMe)
      .subscribe(
        data => {
          // console.log('Success!', data);

          var _token = data.id;
          var _userID = data.userId;
          var _created = data.created;

          //Send to mixpanel
          this.mixpanelService.init(_userID);
          this.mixpanelService.track("Login Success",{"key": _token, "created": _created});



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
