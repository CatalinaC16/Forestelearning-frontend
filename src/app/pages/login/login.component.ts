import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {SnackbarService} from "../../services/snackbar.service";
import {NgxUiLoaderModule, NgxUiLoaderService} from "ngx-ui-loader";
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
  count1:number=0;
  count2:number=0;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(Constants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(Constants.emailRegex)]],
      contactNumber: [null, [Validators.required, Validators.pattern(Constants.contactNumberRegex)]],
      password: [null, [Validators.required]]
    })
  }

  signUp() {
    if(this.isSignUp) {
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
    this.isLogin = true;
    this.isSignUp = false;
  }
}
