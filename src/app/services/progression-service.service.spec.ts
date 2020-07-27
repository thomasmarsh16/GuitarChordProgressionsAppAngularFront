import { TestBed } from '@angular/core/testing';

import { ProgressionServiceService } from './progression-service.service';

describe('ProgressionServiceService', () => {
  let service: ProgressionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
