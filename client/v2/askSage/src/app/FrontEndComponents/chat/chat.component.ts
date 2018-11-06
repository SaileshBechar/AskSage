import { Component, OnInit } from '@angular/core';
declare var M: any;
declare var dismiss: boolean;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  dismiss = false;

  constructor() { }

  ngOnInit() {
   
    this.showButtons();
    
  
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
