import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";
import {Course} from "../../../model/Course";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-users',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.scss']
})
export class AllUsersComponent implements OnInit{

  profs: User[]=[]
  students: User[]=[]
  constructor(private userService: UserService,
              private router: Router,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getProf().subscribe((profs) => {
      this.profs = Object.values(profs) as User[];
    });
    this.userService.getStudents().subscribe((students) => {
      this.students = Object.values(students) as User[];
    });
  }

  stergeUser(user: User) {
    this.ngxService.start();
    this.userService.deleteUserById(user.id).subscribe((response: any) => {
      this.ngxService.stop();
      window.location.reload()
    }, (error) => {
      this.ngxService.stop();
      window.location.reload()
    })
  }
}
