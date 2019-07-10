import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FixItComponents/login.component';
import { IndexComponent } from './FixItComponents/index.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
