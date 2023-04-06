import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }

GetTour(tourname:any){
  return this.http.get<any>(`http://localhost:5599/User/getTours?`+tourname)
}
}
