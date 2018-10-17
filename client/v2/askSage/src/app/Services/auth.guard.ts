import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { BrokerService } from './broker.service';
import { Router } from '@angular/router'

@Injectable(({
  providedIn: 'root'
}))

export class AuthGuard implements CanActivate {

  constructor(private _brokerservice: BrokerService, private _routing: Router){}

/* Auth for all internal pages */
  canActivate() :  Observable <boolean>{
    return this._brokerservice.verifyUser().pipe(
      map(loggedin => {
        if (loggedin === false){ //If user is not logged in and enters internal pages, will be redirected to landing page
          this._routing.navigate(['/']);
          return false;
        }
        else{
          return true; //User is allowed to proceed to desired page
        }
      }),
      catchError((err) => {
        console.log(err);
        this._routing.navigate(['/']); //If there is an error (401) user is redirected to landing page
        return of(false);
      })
    )
  }
 
}
