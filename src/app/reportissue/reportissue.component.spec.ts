import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportissueComponent } from './reportissue.component';

describe('ReportissueComponent', () => {
  let component: ReportissueComponent;
  let fixture: ComponentFixture<ReportissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
