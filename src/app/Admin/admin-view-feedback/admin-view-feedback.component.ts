import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../Admin-Services/admin-api.service';

@Component({
  selector: 'app-admin-view-feedback',
  templateUrl: './admin-view-feedback.component.html',
  styleUrls: ['./admin-view-feedback.component.scss']
})
export class AdminViewFeedbackComponent implements OnInit {
feed:any
constructor(private service:AdminApiService){}

  ngOnInit(): void {
    this.getfeedback()
  }
getfeedback(){
  this.service.getFeedback().subscribe((res)=>{
    this.feed = res;
  })
}
}
