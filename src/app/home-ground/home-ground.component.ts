import { Component, OnInit } from '@angular/core';
import {ForAllService} from '../for-all.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-ground',
  templateUrl: './home-ground.component.html',
  styleUrls: ['./home-ground.component.css']
})
export class HomeGroundComponent implements OnInit {

  constructor(private service : ForAllService,private http:HttpClient ) { }

  private products = [];
  ngOnInit() {
  }

  onSubmit(){
    this.http.get("http://localhost:5003/api/user-list").subscribe((user:any[]) =>{
      console.log(user);
      this.products = user
    });
  }
}
