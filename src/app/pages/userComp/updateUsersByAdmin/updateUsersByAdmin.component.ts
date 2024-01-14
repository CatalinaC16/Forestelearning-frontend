import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";
import {UserChangesService} from "../../../services/userChanges.service";

@Component({
  selector: 'app-updateUser',
  templateUrl: './updateUsersByAdmin.component.html',
  styleUrls: ['./updateUsersByAdmin.component.scss']
})
export class UpdateUsersByAdminComponent implements OnInit {
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
              public userChangesService: UserChangesService) {
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
        email: this.userChangesService.getEmailFromLocalStorage(),
        name: formData.name,
        contactNumber: formData.contactNumber,
        role: formData.role
      }
      this.userService.modify(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Datele contului au fost modificate cu succes!", "");
        localStorage.setItem('username',formData.name);
        localStorage.setItem('contactNumber',formData.contactNumber);
        localStorage.setItem('role',formData.role);
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

  isRoleAdmin() {
    return this.userChangesService.getRoleFromLocalStorage() == "admin";
  }

  isRoleProfessor() {
    return this.userChangesService.getRoleFromLocalStorage() == "professor";
  }
}
