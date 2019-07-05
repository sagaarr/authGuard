import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class ForAllService {

  constructor(private http:HttpClient,private router:Router) { }

  login(email:string, password:string ) {
    return this.http.post('http://localhost:5003/api/login', {email, password})
  
        .subscribe(responceData =>{
          console.log("from login service ")
       

          //=== Storing token to local storage here ==== 
          localStorage.setItem('currentUser', JSON.stringify(responceData));

       
          this.router.navigate(['/home']);

        }, (err)=>{
          console.log(err)

        })
  }
  // ==========================TO GET ALL USERS 
  GetAllProducts(){
    return this.http.get("http://localhost:5003/api/user-list").subscribe(data =>{
      console.log(data);
    })
  }

  register(name:string,email:string,password:string){
    this.http.post("http://localhost:5003/api/register", {name,email,password})
              .subscribe((responceData)=>{ 
                console.log("called from register ")
                 this.router.navigate(['/home']);
                  console.log(responceData)
                  
                }, (err)=>{
                  console.log(err);
                })

              }
              
    logout(){
      localStorage.removeItem('currentUser')
     }
}
