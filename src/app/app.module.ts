import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { WeatherComponent } from './weather/weather.component';
import { ApixuService } from './apixu.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddnewsComponent } from './addnews/addnews.component';
import { NewslistComponent } from './newslist/newslist.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdministrateService } from './administrate.service';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    WeatherComponent,
    AddnewsComponent,
    NewslistComponent,
    AdminheaderComponent,
    ChatInboxComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SportsComponent,
    NewsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService, ApixuService, AdministrateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
