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
import { RegisterComponent } from './FrontEndComponents/register/register.component';
import { HomeComponent } from './FrontEndComponents/home/home.component';
import { HeaderComponent } from './FrontEndComponents/header/header.component';
import { NewsComponent } from './FrontEndComponents/news/news.component';
import { FooterComponent } from './FrontEndComponents/footer/footer.component';
import { ChatComponent } from './FrontEndComponents/chat/chat.component';
import { ProfileComponent } from './FrontEndComponents/profile/profile.component';
import { FeedbackComponent } from './FrontEndComponents/feedback/feedback.component';
import { PageNotFoundComponent } from './FrontEndComponents/page-not-found/page-not-found.component';
/* Services */
import { BrokerService } from './Services/broker.service';
import { AuthGuard } from './Services/auth.guard'
import { LoginGuard} from './Services/login.guard'
import { NewsService } from './Services/news.service';




@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    HeaderComponent,  
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    ChatComponent,
    NewsComponent,
    FeedbackComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BrokerService, AuthGuard, LoginGuard, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
