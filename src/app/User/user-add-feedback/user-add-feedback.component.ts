import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { UserApiService } from '../User-Services/user-api.service';

@Component({
  selector: 'app-user-add-feedback',
  templateUrl: './user-add-feedback.component.html',
  styleUrls: ['./user-add-feedback.component.scss']
})
export class UserAddFeedbackComponent implements OnInit {

feedbackform!:FormGroup;
user:any
  constructor(public fb:FormBuilder , private service:UserApiService){}

  ngOnInit(): void {
    this.feedbackform = this.fb.group({
      username:  JSON.parse(localStorage.getItem('token')!).name,
      emailid: JSON.parse(localStorage.getItem('token')!).emailid,
      message: new FormControl ('',[Validators.required])
    });
    }
Addfeedback(){
  if(this.feedbackform.valid){
    this.service.PostFeedback(this.feedbackform.value).subscribe((res)=>{
      alert("Feedback Added Successfully");
      window.location.reload();
    })
  }
}
}
