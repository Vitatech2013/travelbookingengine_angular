import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../User-Services/user-api.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss']
})
export class UserBookingComponent implements OnInit {
 
    foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  selectedValue!: string;
 constructor(private service:UserApiService){}

  ngOnInit(): void {
    
  }
gettour(){
  
}
}
