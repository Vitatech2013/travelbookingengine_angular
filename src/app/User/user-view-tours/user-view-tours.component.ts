import { Component, OnInit } from '@angular/core';
import { AdminApiService } from 'src/app/Admin/Admin-Services/admin-api.service';
import { MatDialog } from '@angular/material/dialog';
import { UserBookingComponent } from '../user-booking/user-booking.component';
@Component({
  selector: 'app-user-view-tours',
  templateUrl: './user-view-tours.component.html',
  styleUrls: ['./user-view-tours.component.scss']
})
export class UserViewToursComponent implements OnInit {
  
  tdata:any
  constructor(private service:AdminApiService , private dialog:MatDialog){}
  
  ngOnInit(): void {
  this.getTour();
  }
  getTour(){
    this.service.GetTours().subscribe((res)=>{
      this.tdata = res;
    })
  }
  booktrip(e:any){
    this.dialog.open(UserBookingComponent,{
      width:"80%",
      data:e
    })
  }
}
