import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './FixItComponents/index.component';
import { NavBarComponent } from './Nav Bar/navBar.component';
import { LoginComponent } from './FixItComponents/login.component';
import { CreateUserComponent } from './FixItComponents/createUser.component';
import { FixItComponent } from './FixItComponents/FixIt Main/fixit.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './FixItComponents/User Service/userService.component';
import { MapService } from './FixItComponents/Map Service/mapService.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavBarComponent,
    CreateUserComponent,
    FixItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, UserService, MapService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
