import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../Services/email.service';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public isError : boolean;
  constructor(private _emailService: EmailService, private router: Router) { }

  ngOnInit() {
  }

  forgotPassword(userDetails) {
    // console.log(userDetails);
    this._emailService.forgotPassword(userDetails.email)
    .subscribe(
      data => {
        // console.log(data);
        M.toast({html: 'Please check your email.', displayLength: 5000});
        this.router.navigate(['/login']);
    },
    error => {
      this.isError = true;
      // M.toast({html: error.error.error.message, displayLength: 5000});
      // console.log('Error', error.error.error.message);
    }
  )
  }
}
