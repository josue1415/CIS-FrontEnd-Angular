import { TestBed } from '@angular/core/testing';

import { ProfilesServicesService } from './profiles-services.service';

describe('ProfilesServicesService', () => {
  let service: ProfilesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
