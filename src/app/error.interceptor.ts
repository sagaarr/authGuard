import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import {Observable , of, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators';
import {ForAllService} from '../app/for-all.service'
 
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  
  constructor(private service:ForAllService) { }

  intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    
   return next.handle(request).pipe(catchError(err=>{
       console.log(err);
       if(err.status === 401){
           this.service.logout()
           location.reload(true);
       };

       const error = err.error.message || err.statusText;
       return throwError(error);
   }))
  }

}

