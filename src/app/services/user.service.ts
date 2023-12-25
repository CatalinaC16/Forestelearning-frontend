import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../interfaces/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  signup(data:any){
    return this.http.post(this.apiServiceUrl+ "user/signup",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

}
