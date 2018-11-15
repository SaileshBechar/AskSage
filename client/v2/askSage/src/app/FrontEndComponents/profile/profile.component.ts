import { Component, OnInit } from '@angular/core';
import { BrokerService} from '../../Services/broker.service';
import { Broker } from '../../Model/broker';
import { MixPanelService } from '../../Services/mix-panel.service';
import { ValidatorFn, FormGroup, FormControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEdit : boolean;
  changePass : boolean;
  notEquivalent: boolean;
  brokerModel = new Broker ();

  constructor(private _brokerservice : BrokerService, private mixpanelService: MixPanelService) { }

  ngOnInit() {
    this._brokerservice.getBroker()
      .subscribe(
        (info : any) => {
          // console.log(info);
          this.brokerModel = info;   
          this.brokerModel.bdr.address.postalCode = this.brokerModel.bdr.address.postalCode.toUpperCase();
          this.brokerModel.bdr.address.province = this.brokerModel.bdr.address.province.toUpperCase();
        },
        error => {
          // console.log('Could not get user details!', error);
        }
      )
  }

  checkPasswords(password, confirmPassword : string){
    if (password != confirmPassword){
      this.notEquivalent = true;
    }
    else {
      this.notEquivalent = null;
    }
  }

  saveInfo(newpassword){
    // console.log(this.brokerModel);
    this._brokerservice.updateBroker(this.brokerModel)
      .subscribe(
        (data :any) => {

          // console.log('Successfully updated broker');
          var _brokerID = data.id;
          this.mixpanelService.init(_brokerID);
          this.mixpanelService.track("Successfully updated broker",{ "brokerID": _brokerID });


          this.isEdit = null;
        },
        error => {
          // console.log('Unsuccessfully updated broker', error);
        }
      )
      if (this.changePass && newpassword != ""){
        this._brokerservice.setPassword(newpassword)
          .subscribe(
            (data:any) => {
              this.changePass = null;

              // console.log(data);
              
              // this.mixpanelService.init(_brokerID);
              this.mixpanelService.track("Successfully updated password",{});
              // console.log('Updated password with', newpassword);
            },
            error => {
              // console.log('Unsuccessfully updated password!');
            }
          )
      }
    }
}

