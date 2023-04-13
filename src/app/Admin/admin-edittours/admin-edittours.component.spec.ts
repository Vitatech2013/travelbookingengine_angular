import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdittoursComponent } from './admin-edittours.component';

describe('AdminEdittoursComponent', () => {
  let component: AdminEdittoursComponent;
  let fixture: ComponentFixture<AdminEdittoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEdittoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEdittoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
