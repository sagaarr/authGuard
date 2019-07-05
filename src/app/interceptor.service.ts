import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import {Observable , of, throwError} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  
  constructor() { }

  intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    
    if(localStorage.getItem('token') !== null){
      /*
        ****************** THIS METHOD IS ALSO CORRECT HERE ****************************
    // when user logIn take its token and put it in header 
      const localToken = localStorage.getItem('token')
      // Add the token to the header 
      const headers = new HttpHeaders().set('access-token' , localToken);
      // Clone Http to custom auth request 
      const AuthReq = request.clone({headers: headers})

       return next.handle(AuthReq);
      
      */

      let currentUser = localStorage.getItem('token');
      if(currentUser && currentUser){
        request = request.clone({
          setHeaders:{
            Authorization: `Bearer ${currentUser}`
          }
        })
      }
    }
    return next.handle(request);
  }


}
