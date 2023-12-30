import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {SnackbarService} from "../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../assets/constants/constants";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-updateUser',
  templateUrl: './updateUser.component.html',
  styleUrls: ['./updateUser.component.scss']
})
export class UpdateUserComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;
  password: boolean = true;
  name: string = '';
  role: string ='';
  contactNumber = '';


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(Constants.nameRegex)]],
      contactNumber: ['', [Validators.required, Validators.pattern(Constants.contactNumberRegex)]],
      role:['',[Validators.required]]
    })
  }

  modify() {
      this.ngxService.start();
      var formData = this.signupForm.value;
      var data = {
        email: this.loginService.getEmailFromLocalStorage(),
        name: formData.name,
        contactNumber: formData.contactNumber,
        role: formData.role
      }
      console.log(data)
      localStorage.setItem('username',formData.name);
      this.userService.modify(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Datele contului au fost modificate cu succes!", "");

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
}
