import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeGroundComponent } from './home-ground/home-ground.component';
import {InterceptorService} from '../app/interceptor.service';
 import {ErrorInterceptor} from '../app/error.interceptor'
import {DonGuard} from '../app/don.guard';
import {UserProtectionGuard} from '../app/user-login.guard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeGroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },

    DonGuard,
    UserProtectionGuard, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
