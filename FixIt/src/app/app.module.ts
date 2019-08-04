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
//import { HttpModule } from '@angular//http';
import { ChatComponent } from './FixItComponents/chat.component';
import { MapService } from './FixItComponents/Map Service/mapService.component';
import { ChatService } from './FixItComponents/ChatService/chat-service.service';

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
    //HttpModule
  ],
  providers: [HttpClient, UserService, HttpClientModule, MapService, NavBarComponent, LoginComponent, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
