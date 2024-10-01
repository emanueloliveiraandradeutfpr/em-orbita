import { TestBed } from '@angular/core/testing'
import { CreateGoalCompletionService } from './create-goal-completion.service'

describe('CreateGoalCompletionService', () => {
  let service: CreateGoalCompletionService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CreateGoalCompletionService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
