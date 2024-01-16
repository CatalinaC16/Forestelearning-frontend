import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getProgressByUser(id:number){
    return this.http.get(this.apiServiceUrl + "/progress/getProgressByUser/"+id,{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getProgress(){
    return this.http.get(this.apiServiceUrl + "/progress/getProgress",{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  addProgressToUser(data:any){
    return this.http.post(this.apiServiceUrl+ "/progress/add",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
