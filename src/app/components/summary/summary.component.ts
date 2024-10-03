import { Component } from '@angular/core'
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { LogoComponent } from '../logo/logo.component'
import { PendingGoalsComponent } from '../pending-goals/pending-goals.component'
// biome-ignore lint/style/useImportType: <explanation>
import { GetPendingGoalsService } from '../../services/get/get-pending-goals.service'
import type { PendingGoalsResponse } from '../../interfaces/pending-goals-response'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    LogoComponent,
    MatProgressBarModule,
    PendingGoalsComponent,
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  pendingGoals: PendingGoalsResponse[] = []
  sum = 0
  vazio = false
  test!: string
  constructor(private pendingGoalsService: GetPendingGoalsService) {}
  ngOnInit() {
    this.getData()
  }

  update() {
    this.getData()
  }

  getData() {
    this.pendingGoalsService.getPendingGoals().subscribe({
      next: goal => {
        this.pendingGoals = goal
        this.sum++
      },
    })
  }
}
