import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { BrokerService } from 'src/app/Services/broker.service';
import { AuthGuard } from 'src/app/Services/auth.guard';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  constructor(private _brokerService: BrokerService, private _feedbackService: FeedbackService) {
  }

  ngOnInit() {
  }

  onSubmit(feedback) {
    //If user is logged in
    this._brokerService.verifyUser().subscribe(
      loggedIn => {
        //Call service to submit data to endpoint
        if (loggedIn){
        console.log(this._feedbackService.postForm(feedback).subscribe(
          data => {
            console.log('Success!', data);

          },
          error => console.log('error', error)
        ));
        }else{
          console.log("Not logged in")
        }

      },
      error => console.log('error', error)
    );
  }







  //Rating Control
  rating = 0;
  stars: NodeListOf<Element>; // = document.querySelectorAll(".star2");

  submitRating(rating) {
    console.log(rating);

    //Get the rating
    this.stars = document.querySelectorAll(".star2");
    this.setStars(rating);
    this.rating = rating++;
  }

  setStars(whichStar) {
    this.clearStars()
    for (let i = 0; i <= whichStar; i++) {
      this.stars[i].classList.add("gold")
    }
  }

  clearStars() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].classList.remove("gold")
    }
  }



}
