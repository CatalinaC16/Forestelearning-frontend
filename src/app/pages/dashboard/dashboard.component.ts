import { Component } from '@angular/core';
import {UserChangesService} from "../../services/userChanges.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private userChangesService: UserChangesService) {
  }

  isRoleAdmin() {
    return this.userChangesService.getRoleFromLocalStorage() == "admin";
  }

}
