import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService ) { }

  ngOnInit() {
    
  }

  test(){
    let login = this.api.login({"email": "test523@gmail.com",
    "password": "123"}).subscribe();

    return login;
  }

}
