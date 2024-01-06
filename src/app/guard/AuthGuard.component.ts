import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {UserChangesService} from "../services/userChanges.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userChanges: UserChangesService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userChanges.getIsLoggedFromLocalStorage()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
