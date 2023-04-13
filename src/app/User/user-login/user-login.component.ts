import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators ,FormControl } from '@angular/forms';
import { UserApiService } from '../User-Services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userloginform!:FormGroup
constructor(private fb:FormBuilder , private service:UserApiService , private router:Router){}

  ngOnInit(): void {
    this.userloginform = this.fb.group({
      mobileno: new FormControl ('',[Validators.required]),
      password : new FormControl ('',[Validators.required])
    })
  }
userLogin(){
  let mobileno = this.userloginform.get('mobileno')?.value;
  let password = this.userloginform.get('password')?.value;
  
  this.service.GetUserlogin(mobileno,password).subscribe((res)=>{
    if(res){
      localStorage.setItem('token',JSON.stringify(res))
      alert("Login Success")
      this.router.navigate(['/user-navbar'])
    }else{
      alert("Invalid Credentials")
    }
  })
}
}
