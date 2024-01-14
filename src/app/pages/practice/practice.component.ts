import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {

  constructor(private router: Router) {
  }

  goBackToCourses() {
    this.router.navigate(["/courses"]);
  }

  goToTests(){
    this.router.navigate(["/worksheets"]);
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
