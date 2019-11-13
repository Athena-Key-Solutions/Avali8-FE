import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { User } from '../api/models/User.model';
import {Router} from "@angular/router";


export interface TokenResponse {
  token: string
}

export interface LoginPayload{
  email: string
  password: string
}

export interface SignUpPayLoad{
  name: string
  username: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseURL:string = environment.apiUrl;  
  private token: string;
  private user: User;

  constructor(private http: HttpClient, private router: Router) {}

  loggedIn:boolean = true;

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  signUp(user:SignUpPayLoad): Observable<any> {
    return this.http.post(this.baseURL + 'signup', user).pipe(map(res => res.toString()));
  }

  login(user:LoginPayload): Observable<any> {
      return this.http.post(this.baseURL + 'login', user).pipe(map(
        
        res => {
          this.saveToken(res['token']);
          this.loggedIn = true;
          this.getUser(res['token']).pipe(map((res) => this.saveUser(res))).subscribe()
        }
        
      ));
  }

  logout(token){
    const url = this.baseURL + "logout"
    sessionStorage.clear();
    return this.http.post(url,{"token":token}).subscribe();
  }

  private saveToken(token: string): void {
    sessionStorage.setItem('token', token)
    this.token = token
  }

  private saveUser(user:User){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    return this.token
  }

  public getUserSession(){
    return sessionStorage.getItem('user');
  }

  private getUser(token:string):Observable<any>{
    
    if(this.user == null){
      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      });

      const url = this.baseURL + 'user';

      return this.http.post(url,{"token":token})

    }

  }

}
