import {Component} from '@angular/core';
import {ProgressService} from "../../services/progress.service";
import {Progress} from "../../model/Progress";
import {UserChangesService} from "../../services/userChanges.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent {

  progress: Progress[] = [];
  allProgress: Progress[] = [];

  constructor(private progressService: ProgressService,
              public userChangesService: UserChangesService) {
    this.progressService.getProgressByUser(Number(localStorage.getItem('id'))).subscribe((data) => {
      this.progress = data as Progress[];
    });
    this.progressService.getProgress().subscribe((data) => {
      this.allProgress = data as Progress[];
    });
  }


}
