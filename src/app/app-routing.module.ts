import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewslistComponent } from './newslist/newslist.component';
import { RegisterComponent } from './register/register.component';
import { SportsComponent } from './sports/sports.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'weather', component: WeatherComponent},
  { path: 'addnews', component: AddnewsComponent},
  { path: 'newslist', component: NewslistComponent},
  { path: 'adminHome', component: AdminheaderComponent},
  { path: 'chat', component: ChatInboxComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'sports', component: SportsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
