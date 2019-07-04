import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {ForAllService} from '../for-all.service'
import {register} from '../register.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup ; 

  constructor(private service:ForAllService) { }

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
  }

}
