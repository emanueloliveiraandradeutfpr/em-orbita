import { Component, EventEmitter, Input, Output } from '@angular/core'
// biome-ignore lint/style/useImportType: <explanation>
import { CreateGoalCompletionService } from '../../services/create/create-goal-completion.service'

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCounts: number
}
@Component({
  selector: 'app-pending-goals',
  standalone: true,
  imports: [],
  templateUrl: './pending-goals.component.html',
  styleUrl: './pending-goals.component.scss',
})
export class PendingGoalsComponent {
  @Input() pendingGoals!: PendingGoalsResponse[]
  @Output() completionGoal = new EventEmitter()

  constructor(private createGoalCompletion: CreateGoalCompletionService) {}

  completion(goal: PendingGoalsResponse) {
    this.createGoalCompletion.createGoal(goal.id).subscribe({
      next: () => {
        this.completionGoal.emit('update()')
      },
    })
    console.log(goal)
  }
}
