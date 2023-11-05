import { Component } from '@angular/core';
import {navbarData} from "./nav-data";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  collapsed = false;
  navData = navbarData;
}
