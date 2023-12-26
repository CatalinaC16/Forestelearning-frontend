import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {SnackbarService} from "../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../assets/constants/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: boolean = true;
  isLogin: boolean = true;
  isSignUp: boolean = false;
  signupForm: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(Constants.nameRegex)]],
      email: ['', [Validators.required, Validators.pattern(Constants.emailRegex)]],
      contactNumber: ['', [Validators.required, Validators.pattern(Constants.contactNumberRegex)]],
      password: ['', [Validators.required]]
    })
  }

  signUp() {
    console.log(this.signupForm.get('name'))
    console.log(this.signupForm.get('email'))
    console.log(this.signupForm.get('contactNumber'))
    if (this.isSignUp
      && this.signupForm.get('name').value !== null && this.signupForm.get('name').valid
      && this.signupForm.get('email').value !== null && this.signupForm.get('email').valid
      && this.signupForm.get('password').value !== null && this.signupForm.get('password').valid
      && this.signupForm.get('contactNumber').value !== null && this.signupForm.get('contactNumber').valid
    ) {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password
      }
      this.userService.signup(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar(this.responseMessage, "");
        this.router.navigate(['/']);
      }, (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = Constants.generateError;
        }
        this.snackBarService.openSnackBar(this.responseMessage, Constants.error);
      })
    }
    this.isSignUp = true;
    this.isLogin = false;
  }

  signIn() {
    if (this.isLogin
      && this.signupForm.get('email').value !== null && this.signupForm.get('email').valid
      && this.signupForm.get('password').value !== null && this.signupForm.get('password').valid) {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        email: formData.email,
        password: formData.password
      }
      this.userService.login(data).subscribe((response: any) => {
        this.ngxService.stop();
        localStorage.setItem('token', response.token);
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar(this.responseMessage, "");
        this.router.navigate(['/']);
      }, (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = Constants.generateError;
        }
        this.snackBarService.openSnackBar(this.responseMessage, Constants.error);
      })
    }
    this.isLogin = true;
    this.isSignUp = false;
  }
}
