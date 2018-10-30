import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public ifExist: boolean = false;

  constructor() { }

  ngOnInit() {
   
    this.showButtons();
  
  }



  showButtons(){
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: false,
      hoverEnabled: true  
    });


  }

}
