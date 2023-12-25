import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin: boolean = true;
  isSignUp: boolean = false;

  signUp() {
    this.isSignUp = true;
    this.isLogin = false;
  }

  signIn() {
    this.isLogin = true;
    this.isSignUp = false;
  }
}
