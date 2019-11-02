import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl: string = 'avali8/api/v1/'

  constructor() { }
}
