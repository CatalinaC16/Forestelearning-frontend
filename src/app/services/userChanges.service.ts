import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {SnackbarService} from "./snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class UserChangesService {
  constructor(private router: Router,
              private snackBarService: SnackbarService) {
  }

  setLocalStorageValues(username: string, email: string,isLogged: boolean, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('isLogged', String(isLogged));
    localStorage.setItem('token', token);
  }

  logOut() {
    this.router.navigate(["/login"]);
    this.snackBarService.openSnackBar("V-ați delogat cu succes!", "");
    localStorage.setItem('username', '');
    localStorage.setItem('isLogged', String(false));
    localStorage.setItem('token', '');
    localStorage.setItem('email', '');
    localStorage.setItem('role', '');

  }

  getUsernameFromLocalStorage(): string {
    return localStorage.getItem('username') || '';
  }

  getEmailFromLocalStorage(): string {
    return localStorage.getItem('email') || '';
  }

  getRoleFromLocalStorage(): string {
    return localStorage.getItem('role') || '';
  }

  getContactNumberFromLocalStorage(): string {
    return localStorage.getItem('contactNumber') || '';
  }

  getIsLoggedFromLocalStorage(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  getTokenFromLocalStorage(): string {
    return localStorage.getItem('token') || '';
  }
}
