import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDaterangepickerComponent } from './orch-daterangepicker.component';

describe('NgxDaterangepickerComponent', () => {
  let component: NgxDaterangepickerComponent;
  let fixture: ComponentFixture<NgxDaterangepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDaterangepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
