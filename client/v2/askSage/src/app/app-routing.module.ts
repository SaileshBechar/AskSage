import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './FrontEndComponents/public/public.component';
import { LoginComponent } from './FrontEndComponents/login/login.component';
import { RegisterComponent } from './FrontEndComponents/register/register.component';
import { HomeComponent } from './FrontEndComponents/home/home.component';
import { PageNotFoundComponent } from './FrontEndComponents/page-not-found/page-not-found.component';
import { ProfileComponent } from './FrontEndComponents/profile/profile.component';
import { FeedbackComponent } from './FrontEndComponents/feedback/feedback.component';
import { AuthGuard } from './Services/auth.guard';
import { LoginGuard } from './Services/login.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/public', pathMatch: 'full'
  },
  {
    path: 'public', component: PublicComponent, canActivate: [LoginGuard] 
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LoginGuard] 
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path : "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
