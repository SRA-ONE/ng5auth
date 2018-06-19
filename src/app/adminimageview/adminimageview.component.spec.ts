import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimageviewComponent } from './adminimageview.component';

describe('AdminimageviewComponent', () => {
  let component: AdminimageviewComponent;
  let fixture: ComponentFixture<AdminimageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminimageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminimageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
