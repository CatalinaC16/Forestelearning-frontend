import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Course} from "../../../model/Course";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {map} from "rxjs";

@Component({
  selector: 'app-course-template',
  templateUrl: './courseTemplate.component.html',
  styleUrls: ['./courseTemplate.component.scss']
})
export class CourseTemplateComponent {
  curs: Course | undefined;

  sanitizedHtmlDescription: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private courseService: CourseService) {
    let val = this.route.snapshot.queryParamMap.get('data') ? parseInt(this.route.snapshot.queryParamMap.get('data')!, 10) : 0;
    this.courseService.getCourseById(val).pipe(
      map(response => response)
    ).subscribe(data => {
      this.curs = data as Course;

      if (this.curs?.htmlDescription)
        this.sanitizedHtmlDescription = this.sanitizer.bypassSecurityTrustHtml(this.curs.htmlDescription);
    });
  }
}
