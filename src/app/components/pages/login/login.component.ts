import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { ApiService, LoginPayload } from '../../../api/api.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private api: ApiService) { }
  
  ngOnInit() { }


  login(email,password){

    const loginUser = {
      "email":email,
      "password":password
    }

    return this.api.login(loginUser).subscribe();
    
  }

}
