import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/FixItComponents/login.component';
import { IndexComponent } from '../app/FixItComponents/index.component';
import { NavBarComponent } from '../app/Nav Bar/navBar.component';
import { CreateUserComponent } from './FixItComponents/createUser.component';
import { FixItComponent } from './FixItComponents/FixIt Main/fixit.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
