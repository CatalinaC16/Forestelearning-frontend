import {Component, EventEmitter, Output} from '@angular/core';
import {navbarData} from "../../assets/dataForApp/nav-data";
import {SideNavToggle} from "../../assets/interfaces/SideNavToggle";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle>= new EventEmitter()
  collapsed = false;
  screenWidth=0;
  navData = navbarData;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  closeSideNav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }

  openSideNav(){
    this.collapsed = true;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  }
}
