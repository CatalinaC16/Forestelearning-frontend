import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";
import {UserChangesService} from "../../../services/userChanges.service";

@Component({
  selector: 'app-changePassword',
  templateUrl: './changePassword.component.html',
  styleUrls: ['./changePassword.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;
  oldPasswordFlag: boolean = true;
  newPasswordFlag: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private userChangesService: UserChangesService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]]
    })
  }

  changePassword() {
    if (
      this.signupForm.get('oldPassword').value !== null && this.signupForm.get('oldPassword').valid &&
      this.signupForm.get('newPassword').value !== null && this.signupForm.get('newPassword').valid) {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        email: this.userChangesService.getEmailFromLocalStorage(),
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      }
      console.log(data)
      this.userService.changePassword(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Parola a fost schimbată cu succes!", "");
        this.userChangesService.logOut();
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
