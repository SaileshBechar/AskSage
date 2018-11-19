import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  hide = true;
  key:any;
  constructor(private router: Router, private http: HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
      // this.route.params
      // .subscribe( params => {this.key = params['access_token'];})
      // this.key = this.route.snapshot.params['access_token'];


      this.key = this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.key = params.access_token;
        console.log(this.key); // popular
      });
      // console.log(JSON.stringify(this.key));
  }


  resetPassword(user: any) {
    // console.log(user.email, user.key, user.newPassword);
    
    var _newPass = user.newPassword;
    // var key = this.route.snapshot.params['access_token'];
    

    console.log(this.key);
    // http://localhost:3000/api/Brokers/reset-password?access_token=9KMW34K44rQixEAEOTzaOtQqYVut3fvbaGBa9YG0WNSpYg4MhgTC6OURw0nNJBWN
    return this.http.post<any>('/api/Brokers/reset-password?access_token=' + this.key, { "newPassword": user.newPassword })
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
