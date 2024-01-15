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
  quiz: Quiz | undefined;
  userAnswers = {q1: '', q2: '', q3: '', q4: ''};
  sanitizedHtmlDescription: SafeHtml | undefined;
  optionAValue1 = 'a';
  optionBValue1 = 'b';
  optionCValue1 = 'c';
  optionDValue1 = 'd';

  optionAValue2 = 'a';
  optionBValue2 = 'b';
  optionCValue2 = 'c';
  optionDValue2 = 'd';

  optionAValue3 = 'a';
  optionBValue3 = 'b';
  optionCValue3 = 'c';
  optionDValue3 = 'd';

  optionAValue4 = 'a';
  optionBValue4 = 'b';
  optionCValue4 = 'c';
  optionDValue4 = 'd';

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

  sendForm() {
    console.log('Valoarea selectată este:', this.userAnswers);
    // Aici poți face orice altceva cu valoarea selectată
  }
}
