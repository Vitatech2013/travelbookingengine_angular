import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgmaterialModule } from './ngMaterial/ngmaterial/ngmaterial.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminAddToursComponent } from './Admin/admin-add-tours/admin-add-tours.component';
import { AdminViewToursComponent } from './Admin/admin-view-tours/admin-view-tours.component';
import { AdminViewBookingComponent } from './Admin/admin-view-booking/admin-view-booking.component';
import { AdminViewFeedbackComponent } from './Admin/admin-view-feedback/admin-view-feedback.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { UserViewToursComponent } from './User/user-view-tours/user-view-tours.component';
import { UserBookingComponent } from './User/user-booking/user-booking.component';
import { UserViewBookingComponent } from './User/user-view-booking/user-view-booking.component';
import { UserAddFeedbackComponent } from './User/user-add-feedback/user-add-feedback.component';
import { HomeComponent } from './Home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNavComponent } from './Home/home/home-nav/home-nav.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminEdittoursComponent } from './Admin/admin-edittours/admin-edittours.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminAddToursComponent,
    AdminViewToursComponent,
    AdminViewBookingComponent,
    AdminViewFeedbackComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserViewToursComponent,
    UserBookingComponent,
    UserViewBookingComponent,
    UserAddFeedbackComponent,
    HomeComponent,
    HomeNavComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    AdminEdittoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
