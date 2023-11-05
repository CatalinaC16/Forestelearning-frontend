import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BodyComponent } from './body/body.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { PracticeComponent } from './practice/practice.component';
import { WorksheetsComponent } from './worksheets/worksheets.component';
import { GradesComponent } from './grades/grades.component';
import { AwardsComponent } from './awards/awards.component';
import { HelpUserComponent } from './help-user/help-user.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    CoursesComponent,
    PracticeComponent,
    WorksheetsComponent,
    GradesComponent,
    AwardsComponent,
    HelpUserComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
