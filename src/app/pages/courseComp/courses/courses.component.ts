import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Course} from "../../../model/Course";
import {CourseService} from "../../../services/course.service";
import {UserChangesService} from "../../../services/userChanges.service";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Constants} from "../../../../assets/constants/constants";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private router: Router,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService,
              private courseService: CourseService,
              private userChanges: UserChangesService) {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = Object.values(courses) as Course[];
    });
  }

  isRoleProfesor() {
    return this.userChanges.getRoleFromLocalStorage() == "professor";
  }

  startCurs(curs: Course) {
    this.router.navigate(['course', curs.id], {queryParams: {data: curs.id}});
  }

  stergeCurs(curs: Course) {
    this.ngxService.start();
    this.courseService.deleteCourseById(curs.id).subscribe((response: any) => {
      this.ngxService.stop();
      this.snackBarService.openSnackBar("Cursul a fost sters cu succes!", "");
      window.location.reload()
    }, (error) => {
      this.ngxService.stop();
      this.snackBarService.openSnackBar("Cursul a fost sters cu succes!", "");
      window.location.reload()
    })
  }

  creazaCurs(){
    this.router.navigate(['/createCourse']);
  }
}
