import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup , FormControl ,Validators } from '@angular/forms';
import { AdminApiService } from '../Admin-Services/admin-api.service';

@Component({
  selector: 'app-admin-add-tours',
  templateUrl: './admin-add-tours.component.html',
  styleUrls: ['./admin-add-tours.component.scss']
})
export class AdminAddToursComponent implements OnInit {
  addtourform!:FormGroup
  constructor (private fb:FormBuilder,public service:AdminApiService) {}
  ngOnInit(): void {
    this.addtourform = this.fb.group({
      tourname : new FormControl ('',[Validators.required]),
      source : new FormControl ('',Validators.required),
      destination : new FormControl ('',Validators.required),
      desc : new FormControl ('',Validators.required),
      price : new FormControl ('',Validators.required),
      mobileno : new FormControl ('',Validators.required),
    })
  }

posttour(){
  if(this.addtourform.valid){
    this.service.PostTours(this.addtourform.value).subscribe((res)=>{      
      alert("Tour added successfully");
    }
    )
  }else{
    alert("somthing went wrong")
  }
}

}
