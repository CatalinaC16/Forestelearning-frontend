import { Component } from '@angular/core';

@Component({
  selector: 'app-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent {
  quizzes: any[] = []; // Define the quiz array

  constructor() { }

  ngOnInit(): void {
    this.getAllQuizzes(); // Fetch quizzes on component initialization
  }

  getAllQuizzes(): void {
    // Call the quiz service to get the list of quizzes

  }

  startQuiz(quiz: any): void {
    // Implement logic for starting a quiz
    console.log('Start quiz:', quiz);
  }

  stergeQuiz(quiz: any): void {
    // Implement logic for deleting a quiz
    console.log('Sterge quiz:', quiz);
  }

  goToPractice(): void {
    // Implement logic for navigating to practice
    console.log('Mergi la exersarea notiunilor');
  }

  isRoleProfesor(): boolean {
    // Implement logic to check if the user is a professor
    return true; // Replace with your actual role check
  }
}
