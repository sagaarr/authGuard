import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {ForAllService} from '../for-all.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup ; 

  constructor(private service:ForAllService, private router:Router) {
    if(JSON.parse(localStorage.getItem('currentUser')) == true){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      // === Custom validators Required here ==== 
      'name': new FormControl(null),
      // Custom Validators Required here ======
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // Custom validators Required Here=======
      'password': new FormControl(null),
      'ConfirmPassword': new FormControl(null)
    })
  }


  
  onSubmit(){
    const val = this.registerForm.value
    this.service.register(val.name,val.email,val.password)
    this.router.navigate(['/login'])

  }

}
