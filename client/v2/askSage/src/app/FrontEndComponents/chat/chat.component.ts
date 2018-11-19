import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service';


var init_pronav :any;
declare var M: any; 
declare var Pronav: any;

var __onWebMessengerHostReady__ :any;
declare var dismiss: boolean;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  dismiss = false;

  constructor(private _brokerService: BrokerService) { }

  ngOnInit() {
   
    this.showButtons();
    var obj = this._brokerService.sendCredentials();



    function init_pronav(access_token,user_id){Pronav.init({appId:"5bf2f470beced40022d0218e",customText:{introductionText:"I am here to help. Ask me a question.",headerText:"Broker questions. Answered."},customColors:{buttonBackground:"rgb(238, 250, 247)",buttonText:"rgb(12, 143, 105)",detailBackground:"rgb(238, 250, 247)"}}).then(function(){return Pronav.updateUser({properties:{user_id:user_id,token:access_token}})}).then(function(){Pronav.startConversation()})}
    init_pronav(obj.tok, obj.id);

    // this._brokerService.init();
 
  }



  showButtons(){
    // M.toast({html: 'Hi Chat with me!', classes: 'rounded', displayLength: 5000})


    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      // toolbarEnabled: false,
      // hoverEnabled: true  
    });


  }

}
