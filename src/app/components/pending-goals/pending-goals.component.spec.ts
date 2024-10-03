import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingGoalsComponent } from './pending-goals.component';

describe('PendingGoalsComponent', () => {
  let component: PendingGoalsComponent;
  let fixture: ComponentFixture<PendingGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
