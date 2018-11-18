import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var M: any;
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }


  resetPassword(user: any) {
    // console.log(user.email, user.key, user.newPassword);
    var _newPass = user.newPassword;

    // http://localhost:3000/api/Brokers/reset-password?access_token=9KMW34K44rQixEAEOTzaOtQqYVut3fvbaGBa9YG0WNSpYg4MhgTC6OURw0nNJBWN
    return this.http.post<any>('/api/Brokers/reset-password?access_token=' + user.key, { "newPassword": user.newPassword })
      .subscribe(
        data => {
          // console.log('Success!', data);
          
          M.toast({"Password reset Success": 'rounded', displayLength: 5000});
          this.router.navigate(['/login']);
        },
        error => {
          // console.log('Error', error);
          M.toast({html: error.error.error.message, classes: 'rounded', displayLength: 5000});
          // this.isError = true;
        }
      )
  }
}
