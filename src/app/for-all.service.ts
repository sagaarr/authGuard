import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ForAllService {

  constructor(private http:HttpClient,private router:Router) { }

  login(email:string, password:string ) {
    return this.http.post('http://localhost:5003/api/login', {email, password})
  
        .subscribe(responceData =>{
          console.log("called")
          let data = JSON.stringify(responceData);
          let objectData = JSON.parse(data);
          
          //=== Storing token to local storage here ==== 
          window.localStorage.setItem('token', objectData.token);
          this.router.navigate(['/home']);

        }, (err)=>{
          console.log(err)

        })
  }

  register(name:string,email:string,password:string){
    this.http.post("http://localhost:5003/api/register", {name,email,password})
              .subscribe((responceData)=>{ 
                console.log("called")
                 this.router.navigate(['/home']);
                  console.log(responceData)
                  
                }, (err)=>{
                  console.log(err);
                })

              }
}
