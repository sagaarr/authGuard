import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable , of, throwError} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  
  constructor() { }

  intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    
    
    /*
        // ****************** THIS METHOD IS ALSO CORRECT HERE ****************************
    // when user logIn take its token and put it in header 
      const localToken = JSON.parse(localStorage.getItem('currentUser'))
      // Add the token to the header 
      const headers = new HttpHeaders().set('Authorization' , localToken.token);
      // Clone Http to custom auth request 
      const AuthReq = request.clone({headers: headers})

       return next.handle(AuthReq);
      
  }
*/

      // ******************different approach ***************************
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser && currentUser.token){
        
        console.log(`interceptor service route hit  ${currentUser}`);
        request = request.clone({
          setHeaders:{

            'Authorization': `Bearer ${currentUser.token}`

          }
        })
      }
   
    return next.handle(request);
    }

  
}
