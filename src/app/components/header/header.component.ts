import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { User } from 'src/app/api/models/User.model';
import { map } from 'rxjs/operators'
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/api/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private api:ApiService, private authService: AuthenticationService) {
  }

  user:User = JSON.parse(sessionStorage.getItem('user'));
  token:string;

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    this.token = sessionStorage.getItem('token');
    this.isLoggedIn$.pipe(map((res) => {
      if(res){
        this.authService.getUser().pipe(map((res) => console.log(res))).subscribe();
        console.log(res);
      }
    })).subscribe();
  }

  doSomething(event) {
    console.log("doSomething");
  }

  logout(){
    this.authService.logout(this.token);                      // {3}
    this.token = null;
  }

}
