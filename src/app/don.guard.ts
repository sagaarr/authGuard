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
      let localStorageToken = window.localStorage.getItem("token")
      if(localStorageToken){
        console.log('Something')
        return true;
      }
      console.log("Nothing goes here Mind It Its Rajnikant style ")
      this.router.navigate(['/login']);

      return false 
  }

  
}
