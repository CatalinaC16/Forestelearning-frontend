import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-users',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.scss']
})
export class AllUsersComponent {

  users: User[]=[]
  constructor(private userService: UserService) {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = Object.values(users) as User[];
      console.log(this.users)
    });

  }

}
