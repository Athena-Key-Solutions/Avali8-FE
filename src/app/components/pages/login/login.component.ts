import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'; 

class loginData {
  constructor(
    email: string,
    password: string
  ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = new loginData('', '');

  constructor(private api: ApiService ) { }

  ngOnInit() {
    
  }

  login(login){
    return this.api.login(login).subscribe();;
  }

}
