import { Component, OnInit } from '@angular/core';
import { BrokerService} from '../../Services/broker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token : string;
  userId : string;
  constructor(private _brokerService : BrokerService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('token');
    this.userId = sessionStorage.getItem('userId');
    
  }

}
