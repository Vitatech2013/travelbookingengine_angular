import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/User/User-Services/user-api.service';
import { AdminApiService } from '../Admin-Services/admin-api.service';

@Component({
  selector: 'app-admin-view-booking',
  templateUrl: './admin-view-booking.component.html',
  styleUrls: ['./admin-view-booking.component.scss']
})
export class AdminViewBookingComponent implements OnInit {
  
  allbookings:any
  constructor(private service:AdminApiService){}
  
  ngOnInit(): void {
   this.getBookings()
  }
getBookings(){
  this.service.getUserBookings().subscribe((res)=>{
    this.allbookings = res;
  })
}
}
