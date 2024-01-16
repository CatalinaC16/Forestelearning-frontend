import {Component} from '@angular/core';
import {ProgressService} from "../../services/progress.service";
import {Progress} from "../../model/Progress";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {

  progress: Progress = new Progress();

  constructor(private progressService: ProgressService) {
    this.progressService.getProgressByUser(Number(localStorage.getItem('id'))).subscribe((data) => {
      this.progress = data as Progress;
      console.log(this.progress)
    });
  }


}
