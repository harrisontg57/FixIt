import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FixItComponents/login.component';
import { IndexComponent } from './FixItComponents/index.component';
import { CreateUserComponent } from './FixItComponents/createUser.component';
import { FixItComponent } from './FixItComponents/FixIt Main/fixit.component';

const routes: Routes = [
  {path: 'users/login', component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'fixit', component: FixItComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
