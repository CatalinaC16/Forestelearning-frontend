import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { WorksheetsComponent } from './pages/worksheets/worksheets.component';
import { GradesComponent } from './pages/grades/grades.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { HelpUserComponent } from './pages/help-user/help-user.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {BodyComponent} from "./components/body/body.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

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
    SideNavComponent,
    HeaderComponent,
    FooterComponent
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
