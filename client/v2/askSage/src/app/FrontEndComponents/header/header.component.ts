import { Component, OnInit} from '@angular/core';
import { BrokerService } from '../../Services/broker.service';
import { Router } from '@angular/router';
import { TargetLocator } from 'selenium-webdriver';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public title: string;
  side_elems = document.querySelectorAll('.sidenav');

  constructor(private _brokerService: BrokerService, private _router: Router) { }

  ngOnInit() {
  }

  

  //Trigger the side navigation on menu click
  sideNavTrig() {
      var side_elems = document.querySelectorAll('.sidenav');
      var side_instances = M.Sidenav.init(side_elems, {
        onCloseEnd : this.removeElementsByClass('sidenav-overlay'),
        onCloseStart : this.removeElementsByClass('drag-target')
      });
  }

  removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);

    while(elements.length > 1){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }

  logoff() {
    this._brokerService.setLogoff()
      .subscribe(
        data => {
          this._brokerService.removeCredentials();
          this._router.navigate(['/']);
          window.location.reload();
        },
        error => {
          console.log('Logoff Error!', error);
        }
      )
  }

}
