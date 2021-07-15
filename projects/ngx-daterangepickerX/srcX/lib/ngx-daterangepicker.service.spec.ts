import { TestBed } from '@angular/core/testing';

import { NgxDaterangepickerService } from './orch-daterangepicker.service';

describe('NgxDaterangepickerService', () => {
  let service: NgxDaterangepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDaterangepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
