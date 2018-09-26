import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Globals} from './_global/global';
import {AuthenticationService} from './_service/authentication.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from "./_helper/jwt.interceptor";
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    Globals,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
