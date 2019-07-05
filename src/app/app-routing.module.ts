import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {DonGuard} from '../app/don.guard';
import {UserProtectionGuard} from '../app/user-protection.guard'
// Import Login Register and dashboard and THE DON PAGE   
import {LoginComponent} from '../app/login/login.component'
import {RegisterComponent} from '../app/register/register.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import{HomeGroundComponent } from '../app/home-ground/home-ground.component'
const routes : Routes = [
  { path: 'login', component: LoginComponent , canActivate:[UserProtectionGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[UserProtectionGuard]  },
  { path: '', component: DashboardComponent },
  { path: 'home', component: HomeGroundComponent, canActivate:[DonGuard]}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
