import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './FrontEndComponents/public/public.component';
import { LoginComponent } from './FrontEndComponents/login/login.component';
import { RegisterComponent } from './FrontEndComponents/register/register.component';

import { HomeComponent } from './FrontEndComponents/home/home.component';
import { FeedbackComponent } from './FrontEndComponents/feedback/feedback.component';

import { PageNotFoundComponent } from './FrontEndComponents/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/public', pathMatch: 'full'
  },
  {
    path: 'public', component: PublicComponent
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'register', component: RegisterComponent 
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'feedback', component: FeedbackComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
