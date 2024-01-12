import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  signup(data:any){
    return this.http.post(this.apiServiceUrl+ "/user/signup",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

  login(data:any){
    return this.http.post(this.apiServiceUrl+ "/user/login",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

  forgotPassword(data:any){
    return this.http.post(this.apiServiceUrl+ "/user/forgotPassword",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

  modify(data:any){
    return this.http.post(this.apiServiceUrl+ "/user/update",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

  changePassword(data:any){
    return this.http.post(this.apiServiceUrl+ "/user/changePassword",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }

  getProf(){
    return this.http.get(this.apiServiceUrl + "/user/getAllUsers",{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getStudents(){
    return this.http.get(this.apiServiceUrl + "/user/getAllStudents",{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
