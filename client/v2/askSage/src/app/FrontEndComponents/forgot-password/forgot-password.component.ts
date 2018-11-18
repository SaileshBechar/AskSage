import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../Services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _emailService: EmailService, private router: Router) { }

  ngOnInit() {
  }

  forgotPassword(userDetails) {
    this._emailService.forgotPassword(userDetails.email)
    .subscribe(
      data => {
        this.router.navigate(['/login']);
    },
    error => {
      console.log('Error', error);
    }
  )
  }
}
