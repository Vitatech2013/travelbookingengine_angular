import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { AdminApiService } from '../Admin-Services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminloginform!:FormGroup
 constructor(private fb:FormBuilder , private service:AdminApiService ,private router:Router){} 

  ngOnInit(): void {
    this.adminloginform  = this.fb.group({
      username : new FormControl ('',[Validators.required]),
      password : new FormControl ('',[Validators.required])
    })
  }
adminlogin(){
  let username = this.adminloginform.get('username')?.value;
  let password = this.adminloginform.get('password')?.value;

  this.service.AdminLogin(username,password).subscribe((res)=>{
 if (res) {
      localStorage.setItem('Admin',JSON.stringify(res.body)); 
      alert('success');
      this.router.navigate(['/admin-navbar']);
    }else{
      alert("Invalid credentials")
    }
  })
}
}
