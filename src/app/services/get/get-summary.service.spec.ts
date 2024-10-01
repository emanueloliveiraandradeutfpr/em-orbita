import { TestBed } from '@angular/core/testing';

import { GetSummaryService } from './get-summary.service';

describe('GetSummaryService', () => {
  let service: GetSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
