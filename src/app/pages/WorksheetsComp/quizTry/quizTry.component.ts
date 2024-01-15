import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {Quiz} from "../../../model/Quiz";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quizTry',
  templateUrl: './quizTry.component.html',
  styleUrls: ['./quizTry.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuizTryComponent {
  quiz :Quiz | undefined;

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

      if (this.quiz?.htmlDescription)
        this.sanitizedHtmlDescription = this.sanitizer.bypassSecurityTrustHtml(this.quiz.htmlDescription);
    });
  }
}
