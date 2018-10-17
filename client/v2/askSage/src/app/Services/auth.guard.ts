import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BrokerService } from './broker.service';
import { Router } from '@angular/router'

@Injectable(({
  providedIn: 'root'
}))

export class AuthGuard implements CanActivate {

  constructor(private _brokerservice: BrokerService, private _routing: Router){}

  canActivate() : boolean {
    if (this._brokerservice.isLoggedIn()){    
      return true;
    }
    else{
      this._routing.navigate(["/"]);
      return false;
    }
  }
}
