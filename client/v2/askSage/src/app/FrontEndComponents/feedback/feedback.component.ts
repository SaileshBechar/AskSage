import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { BrokerService } from 'src/app/Services/broker.service';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { AuthService } from 'src/app/auth.service';
// import { }

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  public feedback: string = "q2";

  constructor(private _brokerService: BrokerService, private _feedbackService: FeedbackService) {
  }

  ngOnInit() {
  }

  onSubmit(feedback) {
    //Serialize form data into JSON format
    var serialize = require('form-serialize');
    var form = document.querySelector('#feedbackForm');
    var obj = serialize(form, { hash: true });

    //Post serialized form data to feedback endpoint
    console.log(this._feedbackService.postForm(obj).subscribe(
      data => {
        console.log('Success!', data);
      },
      error => console.log('error', error)));
  }


}
