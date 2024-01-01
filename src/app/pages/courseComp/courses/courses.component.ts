import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {Course} from "../../../model/Course";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses:Course[] = [];

  constructor(private router: Router,
              private courseService: CourseService) {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = Object.values(courses) as Course[];
    });
  }

  startCurs(curs: Course){
    this.router.navigate(['course',curs.id],{ queryParams: { data: curs.id }});
  }
}
