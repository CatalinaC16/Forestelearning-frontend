import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {Quiz} from "../model/Quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllQuizes(){
    return this.http.get(this.apiServiceUrl + "/quizes/getAllQuizes",{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(this.apiServiceUrl + "/quizes/getQuiz/"+ id,{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  deleteQuizById(id: number){
    return this.http.post(this.apiServiceUrl + "/quizes/deleteQuiz/"+ id,{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  createQuiz(data:any){
    return this.http.post(this.apiServiceUrl+ "/quizes/add",data,{headers:new HttpHeaders().set('Content-Type', 'application/json')})
  }
}
