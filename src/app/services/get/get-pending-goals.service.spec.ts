import { TestBed } from '@angular/core/testing';

import { GetPendingGoalsService } from './get-pending-goals.service';

describe('GetPendingGoalsService', () => {
  let service: GetPendingGoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPendingGoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
