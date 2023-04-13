import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

 PostUserRegister(data:any){
  return this.http.post<any>(`http://localhost:5599/User/userregister`,data)
 } 
 GetUserlogin(mobileno:any,password:any){
  return this.http.get<any>(`http://localhost:5599/User/userlogin?mobileno=` +mobileno+ `&password=`+password)
}
getTours(){
  return this.http.get<any>(`http://localhost:5599/Admin/viewtours`)
}
PostBooking(data:any){
  return this.http.post<any>(`http://localhost:5599/User/userbooking`,data)
}
PostFeedback(data:any){
  return this.http.post<any>(`http://localhost:5599/User/addfeedback`,data)
}
GetUserBooking(userno:any){
  return this.http.get<any>(`http://localhost:5599/User/viewuserbookings?userno=`+userno)
}
}
