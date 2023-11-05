import {Component, OnInit} from '@angular/core';
import {User} from "../assets/interfaces/user";
import {UserService} from "../assets/services/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ForesteLearning';
  users:User[]=[];

  constructor(private userService:UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (response:User[])=>{
        this.users = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

}
