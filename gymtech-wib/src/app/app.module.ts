import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  // declarations: [
  //   AppComponent,
  //   LoginComponent // Declare other components here
  // ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
