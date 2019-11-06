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
      return this.http.post('http://127.0.0.1:3333/avali8/api/v1/login',user).pipe(map(res => this.saveToken(res['token'])));
  }

  private saveToken(token: string): void {
    sessionStorage.setItem('token', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    return this.token
  }
}
