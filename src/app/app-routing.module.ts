import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './users/adduser/adduser.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { EdituserComponent } from './users/edituser/edituser.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'adduser', component: AdduserComponent},
  {path: 'viewuser', component: ViewuserComponent},
  {path: 'edituser/:id', component: EdituserComponent},
  //{path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
