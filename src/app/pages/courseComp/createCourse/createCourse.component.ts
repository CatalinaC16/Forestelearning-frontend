import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-createCourse',
  templateUrl: './createCourse.component.html',
  styleUrls: ['./createCourse.component.scss']
})
export class CreateCourseComponent implements OnInit {
  createCourse: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private courseService: CourseService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.createCourse = this.formBuilder.group({
      title: ['', [Validators.required]],
      image_url: ['', [Validators.required]],
      html_description: ['', [Validators.required]]
    })
  }

  createNewCourse(){
    if (this.createCourse.get('title').value !== null && this.createCourse.get('title').valid
      && this.createCourse.get('image_url').value !== null && this.createCourse.get('image_url').valid
      && this.createCourse.get('html_description').value !== null && this.createCourse.get('html_description').valid
    ) {
      this.ngxService.start();
      var formData = this.createCourse.value;
      var data = {
        title: formData.title,
        image_url: formData.image_url,
        html_description: formData.html_description
      }
      this.courseService.createCourse(data).subscribe((response: any) => {

      }, (error) => {
        this.ngxService.stop();
        this.snackBarService.openSnackBar("Cursul a fost creat cu succes!", "");
        this.router.navigate(['/courses']);
      })
    }
  }

}
