import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
