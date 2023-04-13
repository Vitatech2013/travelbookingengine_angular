import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../User-Services/user-api.service';

@Component({
  selector: 'app-user-view-booking',
  templateUrl: './user-view-booking.component.html',
  styleUrls: ['./user-view-booking.component.scss']
})
export class UserViewBookingComponent implements OnInit{
  bookings:any
 constructor(private service:UserApiService){}

  ngOnInit(): void {
   this.getbookings();
  }
getbookings(){
  let userno = JSON.parse(localStorage.getItem('token')!).mobileno;
  this.service.GetUserBooking(userno).subscribe((res)=>{
  this.bookings = res;  
  })
}

}
