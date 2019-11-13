import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { QuestionModule } from './pages/question/question.module';
import { UserModule } from './pages/user/user.module';
import { ExamModule } from './pages/exam/exam.module';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormsModule }  from '@angular/forms';
import { LoggedComponent } from './components/pages/logged/logged.component';
import { AuthGuard } from './api/authguard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    LoggedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionModule,
    UserModule,
    ExamModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
