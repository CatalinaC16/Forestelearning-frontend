import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";

@Component({
  selector: 'app-users',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.scss']
})
export class AllUsersComponent implements OnInit{

  profs: User[]=[]
  students: User[]=[]
  constructor(private userService: UserService) {
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

}
