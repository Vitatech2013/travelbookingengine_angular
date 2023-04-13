import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient ) { }
AdminLogin(username:any,password:any){
  return this.http.get<any>(`http://localhost:5599/Admin/adminlogin?username=${username}&password=${password}`)
}
PostTours(data:any){
  return this.http.post<any>(`http://localhost:5599/Admin/addtours`, data)
} 
GetTours(){
  return this.http.get<any>(`http://localhost:5599/Admin/viewtours`)
}
getFeedback(){
  return this.http.get<any>(`http://localhost:5599/Admin/viewfeedback`)
}
getUserBookings(){
  return this.http.get<any>(`http://localhost:5599/User/viewalluserbookings`)
}
EditTours(id:any,data:any){
  return this.http.put<any>(`http://localhost:5599/Admin/`+id,data)
}
DeleteTours(id:any){
  return this.http.delete<any>(`http://localhost:5599/Admin/`+id)
}
}
