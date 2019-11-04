import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

export interface TokenResponse {
  token: string
}

export interface LoginPayload{
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private token: string

  constructor(private http: HttpClient) { }

extractData(res: Response) {
  let body = res.json();
  return body || {};
}

login(user:LoginPayload): Observable<any> {
    return this.http.post('https://reqres.in/api/login',user).pipe(map(res => res));
}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }
}
