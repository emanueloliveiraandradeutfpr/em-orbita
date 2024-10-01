import { TestBed } from '@angular/core/testing';

import { CreateGoalService } from './create-goal.service';

describe('CreateGoalService', () => {
  let service: CreateGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
