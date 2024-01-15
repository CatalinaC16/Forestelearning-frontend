import { Component } from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {Course} from "../../../model/Course";
import {Quiz} from "../../../model/Quiz";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {UserChangesService} from "../../../services/userChanges.service";

@Component({
  selector: 'app-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent {
  quizes: Quiz[] = [];

  constructor(private router: Router,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService,
              private quizService:QuizService,
              private userChangesService: UserChangesService) {
    this.getAllQuizzes();
  }

  getAllQuizzes(): void {
    this.quizService.getAllQuizes().subscribe((quizes) => {
      this.quizes = Object.values(quizes) as Quiz[];
    });
  }

  startQuiz(quiz: any): void {
    this.router.navigate(['quiz', quiz.id], {queryParams: {data: quiz.id}});
  }

  stergeQuiz(quiz: Quiz) {
    this.ngxService.start();
    this.quizService.deleteQuizById(quiz.id).subscribe((response: any) => {
      this.ngxService.stop();
      this.snackBarService.openSnackBar("Quizul a fost sters cu succes!", "");
      window.location.reload()
    }, (error) => {
      this.ngxService.stop();
      this.snackBarService.openSnackBar("Quizul a fost sters cu succes!", "");
      window.location.reload()
    })
  }

  creeazaQuiz(){
    this.router.navigate(['/createQuiz']);
  }

  goToPractice(): void {
    this.router.navigate(['/practice']);
  }

  isRoleProfesor(): boolean {
    return this.userChangesService.getRoleFromLocalStorage() == "professor";
  }
}
