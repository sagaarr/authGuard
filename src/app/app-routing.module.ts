import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {DonGuard} from '../app/don.guard';

// Import Login Register and dashboard and THE DON PAGE   
import {LoginComponent} from '../app/login/login.component'
import {RegisterComponent} from '../app/register/register.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import{HomeGroundComponent } from '../app/home-ground/home-ground.component'
const routes : Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: '', component: DashboardComponent ,canActivate:[DonGuard] },
  { path: 'home', component: HomeGroundComponent, canActivate:[DonGuard]}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
