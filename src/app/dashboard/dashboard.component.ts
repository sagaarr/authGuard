import { Component, OnInit } from '@angular/core';
import {ForAllService } from '../for-all.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:ForAllService) { }

  ngOnInit() {
  }
 onSubmit(){
  this.service.logout()
 }


}
