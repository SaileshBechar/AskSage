import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../Services/broker.service'

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(private _brokerService : BrokerService) { }

  ngOnInit() {

    
  }

}
