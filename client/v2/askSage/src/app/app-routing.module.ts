import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './FrontEndComponents/public/public.component';
import { LoginComponent } from './FrontEndComponents/login/login.component';
import { HomeComponent } from './FrontEndComponents/home/home.component';
import { FooterComponent } from './FrontEndComponents/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full'
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
