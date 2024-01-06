import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";
import {UserChangesService} from "../../../services/userChanges.service";

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
              private ngxService: NgxUiLoaderService,
              private loginService: UserChangesService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(Constants.nameRegex)]],
      email: ['', [Validators.required, Validators.pattern(Constants.emailRegex)]],
      contactNumber: ['', [Validators.required, Validators.pattern(Constants.contactNumberRegex)]],
      password: ['', [Validators.required]],
      role:['',[Validators.required]]
    })
  }

  signUp() {
     if (this.isSignUp
      && this.signupForm.get('name').value !== null && this.signupForm.get('name').valid
      && this.signupForm.get('email').value !== null && this.signupForm.get('email').valid
      && this.signupForm.get('password').value !== null && this.signupForm.get('password').valid
      && this.signupForm.get('contactNumber').value !== null && this.signupForm.get('contactNumber').valid
      && this.signupForm.get('role').value !== null && this.signupForm.get('role').valid
    ) {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password,
        role:formData.role
      }
      this.userService.signup(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar(this.responseMessage, "");
        this.router.navigate(['/login']);
        this.logIn();
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

  logIn() {
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
        localStorage.setItem('contactNumber',response.user.contactNumber);
        localStorage.setItem('role',response.user.role);
        this.loginService.setLocalStorageValues(response.user.name,formData.email,true,response.token);
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Ați fost autentificat cu succes. Bine ați revenit!", "");
        this.router.navigate(['/dashboard']);

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
