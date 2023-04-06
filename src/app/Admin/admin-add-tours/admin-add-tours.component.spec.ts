import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddToursComponent } from './admin-add-tours.component';

describe('AdminAddToursComponent', () => {
  let component: AdminAddToursComponent;
  let fixture: ComponentFixture<AdminAddToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
