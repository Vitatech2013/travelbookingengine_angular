import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../User-Services/user-api.service';
import { FormBuilder , FormGroup , Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userregisterform!:FormGroup;
 constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
   this.userregisterform = this.fb.group({
    name : new FormControl ('',[Validators.required]),
    surname : new FormControl ('',[Validators.required]),
    password : new FormControl ('',[Validators.required]),
    emailid : new FormControl ('',[Validators.required]),
    mobileno : new FormControl ('',[Validators.required]),
    address : new FormControl ('',[Validators.required]),
   })
  }
  userregister(){
    if(this.userregisterform.valid){
      this.service.PostUserRegister(this.userregisterform.value).subscribe((res)=>{
        alert("You Have registered Succesfully");
        this.router.navigate(['/user-login']);
      })
    }else{
      alert("Something Went wrong")
    }
  }
}
