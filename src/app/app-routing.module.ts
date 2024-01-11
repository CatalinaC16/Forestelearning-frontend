import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HelpUserComponent} from "./pages/help-user/help-user.component";
import {AwardsComponent} from "./pages/awards/awards.component";
import {GradesComponent} from "./pages/grades/grades.component";
import {PracticeComponent} from "./pages/practice/practice.component";
import {CoursesComponent} from "./pages/courseComp/courses/courses.component";
import {WorksheetsComponent} from "./pages/worksheets/worksheets.component";
import {LoginComponent} from "./pages/userComp/login/login.component";
import {ForgotPasswordComponent} from "./pages/userComp/forgotPassword/forgotPassword.component";
import {UpdateUserComponent} from "./pages/userComp/updateUser/updateUser.component";
import {ChangePasswordComponent} from "./pages/userComp/changePassword/changePassword.component";
import {CourseTemplateComponent} from "./pages/courseComp/courseTemplate/courseTemplate.component";
import {CoursetryComponent} from "./pages/courseComp/coursetryhtml/coursetry.component";
import {AuthGuard} from "./guard/AuthGuard.component";
import {CreateCourseComponent} from "./pages/courseComp/createCourse/createCourse.component";
import {AllUsersComponent} from "./pages/userComp/allUsers/allUsers.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'courses', component:CoursesComponent, canActivate: [AuthGuard]},
  {path: 'practice', component:PracticeComponent, canActivate: [AuthGuard]},
  {path: 'worksheets', component:WorksheetsComponent, canActivate: [AuthGuard]},
  {path: 'grades', component:GradesComponent, canActivate: [AuthGuard]},
  {path: 'awards', component:AwardsComponent, canActivate: [AuthGuard]},
  {path: 'help', component:HelpUserComponent},
  {path: 'login', component:LoginComponent},
  {path: 'password', component:ForgotPasswordComponent},
  {path: 'updateUser', component:UpdateUserComponent},
  {path: 'changePassword', component:ChangePasswordComponent},
  {path: 'course/:id', component:CourseTemplateComponent, canActivate: [AuthGuard]},
  {path: 'crs', component:CoursetryComponent},
  {path: 'createCourse', component:CreateCourseComponent},
  {path: 'getAllUsers', component:AllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
