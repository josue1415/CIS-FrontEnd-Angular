import { TestBed } from '@angular/core/testing';

import { InfScholarshipService } from './inf-scholarship.service';

describe('InfScholarshipService', () => {
  let service: InfScholarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfScholarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
