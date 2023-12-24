import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addUser(user : User):Observable<User>{
    return this.http.post<User>(`${this.apiServiceUrl}/user/add`, user);
  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServiceUrl}/user/all`);
  }

  public updateUser(user : User):Observable<User>{
    return this.http.put<User>(`${this.apiServiceUrl}/user/update`, user);
  }

  public getUserById(userId : number):Observable<User>{
    return this.http.get<User>(`${this.apiServiceUrl}/user/find/${userId}`);
  }

  public deleteUser(userId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/user/delete/${userId}`);
  }


}
