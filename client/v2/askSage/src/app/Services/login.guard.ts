import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { BrokerService } from './broker.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/* Auth for Login and Public pages */
export class LoginGuard implements CanActivate {
  constructor(private _brokerservice: BrokerService, private _routing: Router){}

  canActivate() : Observable<boolean>{
    return this._brokerservice.verifyUser().pipe(
      map(loggedin => {
        if (loggedin === false){ //If user is not logged in they will be allowed to access external pages
          return true;
        }
        else{
          console.log(loggedin);
          this._routing.navigate(['/news']); //If user is logged in they will not be allowed to access external pages
          return false;
        }
      }),
      catchError((err) => {
        console.log(err);
        return of(true);
      })
    )
  }
 
}
