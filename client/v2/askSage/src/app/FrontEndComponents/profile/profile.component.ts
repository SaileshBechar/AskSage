import { Component, OnInit } from '@angular/core';
import { BrokerService} from '../../Services/broker.service';
import { Broker } from '../../Model/broker';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEdit : boolean;
  brokerModel = new Broker ();

  constructor(private _brokerservice : BrokerService) { }

  
  ngOnInit() {
    this._brokerservice.getBroker()
      .subscribe(
        (info : any) => {
          // console.log(info);
          this.brokerModel = info;   
        },
        error => {
          console.log('Could not get user details!', error);
        }
      )
  }

  activateEdit(){
    this.isEdit = true;
  }

  saveInfo(){
    console.log(this.brokerModel);
    this._brokerservice.updateBroker(this.brokerModel)
      .subscribe(
        data => {
          console.log('Successfully updated broker');
          this.isEdit = null;
        },
        error => {
          console.log('Unsuccessfully updated broker', error);
        }
      )
  }
}
