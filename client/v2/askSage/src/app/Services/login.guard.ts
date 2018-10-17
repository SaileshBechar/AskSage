import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BrokerService } from './broker.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _brokerservice: BrokerService, private _routing: Router){}

  canActivate() : boolean {
    if (this._brokerservice.isLoggedIn()){ 
      this._routing.navigate(["/home"]);   
      return false;
    }
    else{
      return true;
    }
  }
}
