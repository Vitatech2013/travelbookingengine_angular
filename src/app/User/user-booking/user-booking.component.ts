import { Component, OnInit , Inject } from '@angular/core';
import { UserApiService } from '../User-Services/user-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder , Validators , FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent implements OnInit {
 

  userbookingform!:FormGroup;

  result: any;
 constructor(private service:UserApiService , private fb:FormBuilder ,
   @Inject(MAT_DIALOG_DATA) public data:any,
 private dialogRef: MatDialogRef<UserBookingComponent>,
 private router:Router
 ){}
tour:any
  ngOnInit(): void {
    this.userbookingform = this.fb.group({
      userno : JSON.parse(localStorage.getItem('token')!).mobileno,
      date : new FormControl('',[Validators.required]),
      tourname : new FormControl('',[Validators.required]),
      source : new FormControl('',[Validators.required]),
      destination : new FormControl('',[Validators.required]),
      desciption : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      noofdays : new FormControl('',[Validators.required]),
      totalamount : new FormControl('',[Validators.required]),
      dateofjourney : new FormControl('',[Validators.required]),

    });
    this.userbookingform.patchValue({
      tourname : this.data.tourname,
      source : this.data.source,
      destination : this.data.destination,
      desciption : this.data.desc,
      price : this.data.price,
      
    })
     this.getTour();
     
  }
  cal(){
   let p = this.userbookingform.get('price')?.value;
   let n =  this.userbookingform.get('noofdays')?.value;
   this.result = p*n;
    this.userbookingform.patchValue({
      totalamount:this.result
    })
  }
getTour(){
this.service.getTours().subscribe((res=>{
  this.tour=res;
}))
}
addbooking(){
  if(this.userbookingform.valid){
    this.service.PostBooking(this.userbookingform.value).subscribe((res)=>{
      alert("Trip Booked");
      this.dialogRef.close();
      this.router.navigate(['user-navbar/user-viewbooking'])
    })
  }else{
    alert("Something Went Wrong")
  }
}
}
