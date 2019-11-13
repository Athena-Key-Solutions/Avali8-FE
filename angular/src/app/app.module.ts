import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

import { QuestionModule } from './pages/question/question.module';
import { UserModule } from './pages/user/user.module';
import { ExamModule } from './pages/exam/exam.module';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionModule,
    UserModule,
    ExamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
