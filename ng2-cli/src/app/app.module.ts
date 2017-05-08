import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module'
import { LoginModule } from './login/login.module'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClient } from './app.rest';
import { CanActivateRoute } from './app.authguard'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
    DashboardModule,
    LoginModule,
    
    AppRoutingModule
  ],
  providers: [
  CanActivateRoute,
    HttpClient
  ],
  bootstrap: [AppComponent,  ]
})
export class AppModule { }
