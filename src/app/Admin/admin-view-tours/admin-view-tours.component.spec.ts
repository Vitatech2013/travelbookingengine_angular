import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewToursComponent } from './admin-view-tours.component';

describe('AdminViewToursComponent', () => {
  let component: AdminViewToursComponent;
  let fixture: ComponentFixture<AdminViewToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
