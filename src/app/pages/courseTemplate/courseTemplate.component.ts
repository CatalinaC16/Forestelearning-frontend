// courseTemplate.component.ts

import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Course} from "../../model/Course";

@Component({
  selector: 'app-courseTemplate',
  templateUrl: './courseTemplate.component.html',
  styleUrls: ['./courseTemplate.component.scss']
})
export class CourseTemplateComponent {
  @Input() curs: Course | undefined;

  sanitizedHtmlDescription: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {
    if(this.curs?.htmlDescription)
    this.sanitizedHtmlDescription = this.sanitizer.bypassSecurityTrustHtml(this.curs.htmlDescription);
  }
}
