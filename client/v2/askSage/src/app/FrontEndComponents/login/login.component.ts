import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError: boolean;
  hide = true;

  

  constructor(private _brokerService: BrokerService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(userDetails){
  
    this._brokerService.setLogin(userDetails.email, userDetails.password)
      .subscribe(
        data => {
          // console.log('Success!', data);
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
