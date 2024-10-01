import { Component } from '@angular/core'
// biome-ignore lint/style/useImportType: <explanation>
import { GetPendingGoalsService } from '../../services/get/get-pending-goals.service'
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { LogoComponent } from '../logo/logo.component'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [BtnPrimaryComponent, LogoComponent, MatProgressBarModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  disabled = false
  vazio = false
  test!: string
  constructor(private pendingGoalsService: GetPendingGoalsService) {}
  populate() {
    this.pendingGoalsService.getPendingGoals().subscribe({
      next: goal => {
        this.test = goal.title
      },
    })
  }
}
