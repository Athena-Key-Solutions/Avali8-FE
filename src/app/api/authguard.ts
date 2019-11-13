import {CanActivate} from "@angular/router";
import {ApiService} from './api.service';
import {Router} from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private api:ApiService, private router: Router){}

    canActivate() {
        if(this.api.loggedIn){
            return true;
        }else{
            console.log("You cannot access this area.");
            this.router.navigate(['/']);
            return false;
        }
    }
  }