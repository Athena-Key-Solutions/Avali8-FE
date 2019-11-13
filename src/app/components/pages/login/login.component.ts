import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { ApiService, LoginPayload } from '../../../api/api.service'; 
import { AuthenticationService } from 'src/app/api/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }
  
  ngOnInit() { }


  login(email,password){

    const loginUser = {
      "email":email,
      "password":password
    }

    return this.auth.login(loginUser);
    
  }

}
