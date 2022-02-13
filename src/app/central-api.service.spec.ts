import { TestBed } from '@angular/core/testing';

import { CentralApiService } from './central-api.service';

describe('CentralApiService', () => {
  let service: CentralApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
