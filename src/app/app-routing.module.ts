import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { AdminAddToursComponent } from './Admin/admin-add-tours/admin-add-tours.component';
import { AdminViewToursComponent } from './Admin/admin-view-tours/admin-view-tours.component';
import { AdminViewBookingComponent } from './Admin/admin-view-booking/admin-view-booking.component';
import { AdminViewFeedbackComponent } from './Admin/admin-view-feedback/admin-view-feedback.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { UserViewToursComponent } from './User/user-view-tours/user-view-tours.component';
import { UserBookingComponent } from './User/user-booking/user-booking.component';
import { UserViewBookingComponent } from './User/user-view-booking/user-view-booking.component';
import { UserAddFeedbackComponent } from './User/user-add-feedback/user-add-feedback.component';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home' , component:HomeComponent},
  {path : 'admin-login' , component:AdminLoginComponent},
  {path:'admin-navbar' , component:AdminNavbarComponent ,
  children : [
    {path:'',redirectTo:'admin-addtours',pathMatch:'full'},
    {path:'admin-addtours' , component:AdminAddToursComponent},
    {path:'admin-viewtours' , component:AdminViewToursComponent},
    {path:'admin-viewbookings' , component:AdminViewBookingComponent},
    {path:'admin-viewfeedback' , component:AdminViewFeedbackComponent}
  ]  
},
  {path:'user-register' , component:UserRegisterComponent},
  {path:'user-login' , component:UserLoginComponent},
  {path:'user-navbar' , component:UserNavbarComponent,
  children:[
    {path:'',redirectTo:'user-viewtours',pathMatch:'full'},
    {path:'user-viewtours' , component:UserViewToursComponent},
    {path:'user-booking' , component:UserBookingComponent},
    {path:'user-viewbooking', component:UserViewBookingComponent},
    {path:'user-feedback' , component:UserAddFeedbackComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
