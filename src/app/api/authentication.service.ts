import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/User.model';
import { ApiService, LoginPayload } from './api.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthenticationService {
  
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private user = new ReplaySubject<User>(1);

  constructor(private router: Router, private api:ApiService) {
    let storedUser = sessionStorage.getItem('user');
    if(storedUser)
      this.setUser(JSON.parse(storedUser),false);

  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  getUser() {
    return this.user;
  }

  login(user: LoginPayload){
    if (user.email !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.api.login(user).subscribe()
      alert("Success logged in.");
      this.router.navigate(['/logged']);
      this.loggedIn.next(true);
    }
  }

  logout(token) {                            // {4}
    this.loggedIn.next(false);
    this.api.logout(token);
  }

  setUser(user:User, storeUser:boolean = false){
    if(storeUser){
      sessionStorage.setItem('user', JSON.stringify(user));
    }
    this.user.next(user);
  }

}
