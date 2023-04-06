import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewBookingComponent } from './user-view-booking.component';

describe('UserViewBookingComponent', () => {
  let component: UserViewBookingComponent;
  let fixture: ComponentFixture<UserViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
