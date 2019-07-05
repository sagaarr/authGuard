import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserProtectionGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userIsThere = localStorage.getItem('currentUser');
      if(!userIsThere){
        this.router.navigate(['/home'])
        return true
      }
      return false
  }

  
}
