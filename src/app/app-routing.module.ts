import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HelpUserComponent} from "./help-user/help-user.component";
import {AwardsComponent} from "./awards/awards.component";
import {GradesComponent} from "./grades/grades.component";
import {PracticeComponent} from "./practice/practice.component";
import {CoursesComponent} from "./courses/courses.component";
import {WorksheetsComponent} from "./worksheets/worksheets.component";

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'practice', component:PracticeComponent},
  {path: 'worksheets', component:WorksheetsComponent},
  {path: 'grades', component:GradesComponent},
  {path: 'awards', component:AwardsComponent},
  {path: 'help', component:HelpUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
