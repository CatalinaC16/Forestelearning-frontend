import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";

@Component({
  selector: 'app-login',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;
  password: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(Constants.emailRegex)]]
    })
  }

  forgotPassword() {
    if (
      this.signupForm.get('email').value !== null && this.signupForm.get('email').valid) {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        email: formData.email
      }
      this.userService.forgotPassword(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Parola a fost trimisă cu succes!", "");

        this.router.navigate(['/login']);
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
  }
}
