import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appName:string = "Log In";

  constructor(private _brokerService: BrokerService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(userDetails){
  
    console.log(userDetails.email);
    console.log(userDetails.password);

    this._brokerService.setLogin(userDetails.email, userDetails.password)
      .subscribe(
        data => {
          console.log('Success!', data);
          console.log(data.id);
          console.log(data.userId);
          this._brokerService.storeCredentials(data.id, data.userId);
          this.router.navigate(['/home']);

        },
        error => console.log('error', error)
      )
  }

}
