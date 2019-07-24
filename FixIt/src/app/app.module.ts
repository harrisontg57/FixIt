import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/FixItComponents/login.component';
import { IndexComponent } from '../app/FixItComponents/index.component';
import { NavBarComponent } from '../app/Nav Bar/navBar.component';
import { CreateUserComponent } from './FixItComponents/createUser.component';
import { FixItComponent } from './FixItComponents/FixIt Main/fixit.component';
import { UserService } from './FixItComponents/User Service/userService.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChatComponent } from './FixItComponents/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavBarComponent,
    CreateUserComponent,
    FixItComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
