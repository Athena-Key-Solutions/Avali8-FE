import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from './api.service';
import {Router} from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private api:ApiService, private router: Router, private authService: AuthenticationService,){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>{
    return this.authService.isLoggedIn         // {1}
      .pipe(
        take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn && sessionStorage.getItem('token') == null){
            this.router.navigate(['/login']);  // {4}
            alert("You must be logged to access this page.");
            return false;
          }
          return true;
        }));

    }
  }