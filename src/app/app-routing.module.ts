import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HelpUserComponent} from "./pages/help-user/help-user.component";
import {AwardsComponent} from "./pages/awards/awards.component";
import {GradesComponent} from "./pages/grades/grades.component";
import {PracticeComponent} from "./pages/practice/practice.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {WorksheetsComponent} from "./pages/worksheets/worksheets.component";
import {LoginComponent} from "./pages/userComp/login/login.component";
import {ForgotPasswordComponent} from "./pages/userComp/forgotPassword/forgotPassword.component";
import {UpdateUserComponent} from "./pages/userComp/updateUser/updateUser.component";
import {ChangePasswordComponent} from "./pages/userComp/changePassword/changePassword.component";
import {CourseTemplateComponent} from "./pages/courseTemplate/courseTemplate.component";

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'practice', component:PracticeComponent},
  {path: 'worksheets', component:WorksheetsComponent},
  {path: 'grades', component:GradesComponent},
  {path: 'awards', component:AwardsComponent},
  {path: 'help', component:HelpUserComponent},
  {path: 'login', component:LoginComponent},
  {path: 'password', component:ForgotPasswordComponent},
  {path: 'updateUser', component:UpdateUserComponent},
  {path: 'changePassword', component:ChangePasswordComponent},
  {path: 'course/:id', component:CourseTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
