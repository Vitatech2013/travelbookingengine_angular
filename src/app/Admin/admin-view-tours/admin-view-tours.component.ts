import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../Admin-Services/admin-api.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminEdittoursComponent } from '../admin-edittours/admin-edittours.component';

@Component({
  selector: 'app-admin-view-tours',
  templateUrl: './admin-view-tours.component.html',
  styleUrls: ['./admin-view-tours.component.scss']
})
export class AdminViewToursComponent implements OnInit{
  
tdata:any

  constructor(private service:AdminApiService , private dialogue:MatDialog){}
  
  ngOnInit(): void {
    this.gettours();
  }
gettours(){
  this.service.GetTours().subscribe((res)=>{
    this.tdata = res;
  })
}
edit(e:any){
this.dialogue.open(AdminEdittoursComponent,{
  width:'60%',
  data:e
})
}
deletetour(d:any){
  this.service.DeleteTours(d._id).subscribe((res)=>{
    alert("Successfully Deleted");
    window.location.reload();
  })
}
}
