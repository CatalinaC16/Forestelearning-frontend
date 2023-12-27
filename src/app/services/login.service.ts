import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  setLocalStorageValues(username: string, isLogged: boolean, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('isLogged', String(isLogged));
    localStorage.setItem('token', token);
  }

  logOut(){
    localStorage.setItem('username', '');
    localStorage.setItem('isLogged', String(false));
    localStorage.setItem('token', '');
  }

  getUsernameFromLocalStorage(): string {
    return localStorage.getItem('username') || '';
  }

  getIsLoggedFromLocalStorage(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }

  getTokenFromLocalStorage(): string {
    return localStorage.getItem('token') || '';
  }
}
