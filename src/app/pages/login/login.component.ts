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

  isFormValid(): boolean {
    return this.signupForm.valid && this.signupForm.touched;
  }

  signUp() {
    if(this.isSignUp && this.signupForm.valid) {
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
