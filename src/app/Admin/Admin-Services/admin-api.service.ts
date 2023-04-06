import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient ) { }

PostTours(data:any){
  return this.http.post<any>(`http://localhost:5599/Admin/addtours`, data)
} 
GetTours(){
  return this.http.get<any>(`http://localhost:5599/Admin/viewtours`)
}
}
