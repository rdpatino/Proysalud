import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { EdituserComponent } from './users/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdduserComponent,
    ViewuserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
