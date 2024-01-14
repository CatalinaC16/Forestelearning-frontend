import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courseComp/courses/courses.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { WorksheetsComponent } from './pages/worksheets/worksheets.component';
import { GradesComponent } from './pages/grades/grades.component';
import { HelpUserComponent } from './pages/help-user/help-user.component';
import {RouterModule} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {BodyComponent} from "./components/body/body.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from "./pages/userComp/login/login.component";
import {ForgotPasswordComponent} from "./pages/userComp/forgotPassword/forgotPassword.component";
import {UpdateUserComponent} from "./pages/userComp/updateUser/updateUser.component";
import {ChangePasswordComponent} from "./pages/userComp/changePassword/changePassword.component";
import {CourseTemplateComponent} from "./pages/courseComp/courseTemplate/courseTemplate.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CoursetryComponent} from "./pages/courseComp/coursetryhtml/coursetry.component";
import {AuthGuard} from "./guard/AuthGuard.component";
import {CreateCourseComponent} from "./pages/courseComp/createCourse/createCourse.component";
import {AllUsersComponent} from "./pages/userComp/allUsers/allUsers.component";
import {UpdateUsersByAdminComponent} from "./pages/userComp/updateUsersByAdmin/updateUsersByAdmin.component";


const ngxUiLoaderConfig: NgxUiLoaderConfig={
  text:"Loading...",
  textColor:'#FFFFFF',
  textPosition:"center-center",
  bgsColor:"#40531b",
  fgsColor:"#40531b",
  fgsType:"ball-spin-clockwise-fade-rotating",
  fgsSize:100,
  hasProgressBar:false
}
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    CoursesComponent,
    PracticeComponent,
    WorksheetsComponent,
    GradesComponent,
    HelpUserComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UpdateUserComponent,
    ChangePasswordComponent,
    CourseTemplateComponent,
    CoursetryComponent,
    CreateCourseComponent,
    AllUsersComponent,
    UpdateUsersByAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
