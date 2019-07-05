import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let localStorageToken = window.localStorage.getItem("currentUser")
      if(localStorageToken){
        console.log('User is authorized to access this route == authGuard')
        return true;
      }
      console.log("User is Not authorized to access this route == authGuard")
      this.router.navigate(['/login']);
     
      return false 
  }

  
}
