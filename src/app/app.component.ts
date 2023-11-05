import {Component, OnInit} from '@angular/core';
import {User} from "../assets/interfaces/User";
import {UserService} from "../assets/services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SideNavToggle} from "../assets/interfaces/SideNavToggle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ForestryEdu';
  users: User[] = [];
  isSidenavCollapsed = false;
  screenWidth = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // this.getUsers();
  }

  // getUsers(){
  //   this.userService.getUsers().subscribe(
  //     (response:User[])=>{
  //       this.users = response;
  //     },
  //     (error:HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   )
  // }

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSidenavCollapsed = data.collapsed;
  }

}
