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
    let login = this.api.login({"email": "eve.holt@reqres.in",
    "password": "cityslicka"}).subscribe();

    return login;
  }

}
