import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../services/snackbar.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './createQuiz.component.html',
  styleUrls: ['./createQuiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createQuiz: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private quizService: QuizService,
              private snackBarService: SnackbarService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.createQuiz = this.formBuilder.group({
      title: ['', [Validators.required]],
      course_id: ['', [Validators.required]],
      html_description: ['', [Validators.required]],
      correct_options: ['', [Validators.required]]
    })
  }

  createNewQuiz(){
    if (this.createQuiz.get('title').value !== null && this.createQuiz.get('title').valid
      && this.createQuiz.get('course_id').value !== null && this.createQuiz.get('course_id').valid
      && this.createQuiz.get('html_description').value !== null && this.createQuiz.get('html_description').valid
      && this.createQuiz.get('correct_options').value !== null && this.createQuiz.get('correct_options').valid
    ) {
      this.ngxService.start();
      var formData = this.createQuiz.value;
      var data = {
        title: formData.title,
        course_id: formData.course_id,
        html_description: formData.html_description,
        correct_options: formData.correct_options
      }
      this.quizService.createQuiz(data).subscribe((response: any) => {

      }, (error) => {
        this.ngxService.stop();
        this.snackBarService.openSnackBar("Quizul a fost creat cu succes!", "");
        this.router.navigate(['/worksheets']);
      })
    }
  }

}
