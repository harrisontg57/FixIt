import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FixItComponents/login.component';
import { IndexComponent } from './FixItComponents/index.component';
import { CreateUserComponent } from './FixItComponents/createUser.component';
import { FixItComponent } from './FixItComponents/FixIt Main/fixit.component';
import { ChatComponent } from './FixItComponents/chat.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'fixit', component: FixItComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
