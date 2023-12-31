import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Course} from "../model/Course";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllCourses(){
    return this.http.get(this.apiServiceUrl + "/courses/getAllCourses",{headers:new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.apiServiceUrl + "/courses/getCourse/"+ id);
  }
}
