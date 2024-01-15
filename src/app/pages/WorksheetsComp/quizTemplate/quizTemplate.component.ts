import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Course} from "../../../model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {map} from "rxjs";
import {Quiz} from "../../../model/Quiz";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz-template',
  templateUrl: './quizTemplate.component.html',
  styleUrls: ['./quizTemplate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuizTemplateComponent {
  quiz :Quiz | undefined;
  options: string[] =[];

  sanitizedHtmlDescription: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private quizService: QuizService,
              private router: Router) {

    let val = this.route.snapshot.queryParamMap.get('data') ? parseInt(this.route.snapshot.queryParamMap.get('data')!, 10) : 0;
    this.quizService.getQuizById(val).pipe(
      map(response => response)
    ).subscribe(data => {
      this.quiz = data as Quiz;
      this.options = this.quiz.correctOptions.split(',');

      if (this.quiz?.htmlDescription)
        this.sanitizedHtmlDescription = this.sanitizer.bypassSecurityTrustHtml(this.quiz.htmlDescription);
    });
  }

  goBackToPractice(){
    this.router.navigate(["/worksheets"]);
  }

  sendForm(){
    let nota  = 2;
    const radioButtons1 = document.getElementsByName('q1') as NodeListOf<HTMLInputElement>;
    radioButtons1.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === this.options[0]){
          nota+=2;
        }
      }
    });
    const radioButtons2 = document.getElementsByName('q2') as NodeListOf<HTMLInputElement>;
    radioButtons2.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === this.options[1]){
          nota+=2;
        }
      }
    });
    const radioButtons3 = document.getElementsByName('q3') as NodeListOf<HTMLInputElement>;
    radioButtons3.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === this.options[2]){
          nota+=2;
        }
      }
    });
    const radioButtons4 = document.getElementsByName('q4') as NodeListOf<HTMLInputElement>;
    radioButtons4.forEach((radioButton) => {
      if (radioButton.checked) {
        if (radioButton.value === this.options[3]){
          nota+=2;
        }
      }
    });

  }
}
