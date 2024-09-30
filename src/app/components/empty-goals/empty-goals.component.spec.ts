import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyGoalsComponent } from './empty-goals.component';

describe('EmptyGoalsComponent', () => {
  let component: EmptyGoalsComponent;
  let fixture: ComponentFixture<EmptyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
