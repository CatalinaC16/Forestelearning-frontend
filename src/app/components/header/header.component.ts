import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {SideNavToggle} from "../../interfaces/SideNavToggle";
import {LoginService} from "../../services/login.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(public loginService: LoginService,
              public userService: UserService) {
  }

  getHeaderClass() {
    let cls = '';
    if(this.collapsed && this.screenWidth>768){
      cls = 'header-trimmed';
    }
    else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0 )
    {
      cls ='header-screen';
    }
    return cls;
  }
}
