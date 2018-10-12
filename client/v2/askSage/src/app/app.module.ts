import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* Components */
import { AppComponent } from './app.component';
import { PublicComponent } from './FrontEndComponents/public/public.component';
import { LoginComponent } from './FrontEndComponents/login/login.component';
import { HeaderComponent } from './FrontEndComponents/header/header.component';
import { HomeComponent } from './FrontEndComponents/home/home.component';
/* Services */
import { BrokerService } from './Services/broker.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
