import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ApiService } from '../../../api/api.service'

class signUpData {
  constructor(
    name: string,
    username: string,
    email: string,
    password: string
  ) {}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUp = new signUpData('', '', '', '');

  constructor(private api: ApiService) { }

  ngOnInit() {
  }


  onSign(signUp){
    console.log(signUp);
    let sign = this.api.signUp(signUp).subscribe();
    return sign;
  }

}
