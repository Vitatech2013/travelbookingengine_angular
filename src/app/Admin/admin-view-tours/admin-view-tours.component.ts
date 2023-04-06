import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../Admin-Services/admin-api.service';

@Component({
  selector: 'app-admin-view-tours',
  templateUrl: './admin-view-tours.component.html',
  styleUrls: ['./admin-view-tours.component.scss']
})
export class AdminViewToursComponent implements OnInit{
  
data:any

  constructor(private service:AdminApiService){}
  
  ngOnInit(): void {
    this.gettours();
  }
gettours(){
  this.service.GetTours().subscribe((res)=>{
    this.data = res;
  })
}
}
