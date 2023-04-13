import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder ,FormGroup , FormControl ,Validators } from '@angular/forms';
import { AdminApiService } from '../Admin-Services/admin-api.service';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-edittours',
  templateUrl: './admin-edittours.component.html',
  styleUrls: ['./admin-edittours.component.scss']
})
export class AdminEdittoursComponent implements OnInit {
  Edittourform!:FormGroup
  constructor (private fb:FormBuilder,public service:AdminApiService,
    @Inject(MAT_DIALOG_DATA) public data:any,
  private matdialogueref : MatDialogRef<AdminEdittoursComponent>
    ) {}
  
  ngOnInit(): void {
    this.Edittourform = this.fb.group({
      tourname : new FormControl ('',[Validators.required]),
      source : new FormControl ('',Validators.required),
      destination : new FormControl ('',Validators.required),
      desc : new FormControl ('',Validators.required),
      price : new FormControl ('',Validators.required),
      mobileno : new FormControl ('',Validators.required),
    })

    this.Edittourform.patchValue({
      tourname : this.data.tourname,
      source : this.data.source,
      destination : this.data.destination,
      desc : this.data.desc,
      price : this.data.price,
      mobileno : this.data.mobileno,
    })

  }
  Edittour(){
    const c = {
      tourname : this.Edittourform.get('tourname')?.value,
      source :this.Edittourform.get('source')?.value,
      destination : this.Edittourform.get('destination')?.value,
      desc : this.Edittourform.get('desc')?.value,
      price : this.Edittourform.get('price')?.value,
      mobileno : this.Edittourform.get('mobileno')?.value,
    }
    this.service.EditTours(this.data._id , c).subscribe((res)=>{
      alert("Successfully updated")
    })
    window.location.reload();
}
}
