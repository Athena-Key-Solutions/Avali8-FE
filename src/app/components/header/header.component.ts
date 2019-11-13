import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { User } from 'src/app/api/models/User.model';
import { map } from 'rxjs/operators'
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    this.loadUser()
  }

  token:string = this.api.getToken();
  user:User;

  loadUser(){
    
    if(this.token != null){
      this.api.getUser(this.token).pipe(map(res => this.user = res)).subscribe();
    }
  }

  logout(){
    this.api.logout(this.token);
    this.router.navigate(['/']);
    this.user = null;
  }

}
