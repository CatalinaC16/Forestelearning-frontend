import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";
import {UserChangesService} from "../../../services/userChanges.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-updateUserByAdmin',
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
  userId: number = 0;
  user: User = new User();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService,
              public userChangesService: UserChangesService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  ngOnInit() {
    this.userService.getUserById(this.userId).subscribe((data)=>{
      this.user = JSON.parse(JSON.stringify(data)) as User;
    });
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
        email: this.user.email,
        name: formData.name,
        contactNumber: formData.contactNumber,
        role: formData.role
      }
      this.userService.modify(data).subscribe((response: any) => {
        this.ngxService.stop();
        this.responseMessage = response?.message;
        this.snackBarService.openSnackBar("Datele user-ului au fost modificate cu succes!", "");
        this.router.navigate(['/getAllUsers']);
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
