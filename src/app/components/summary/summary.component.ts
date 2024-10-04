import { Component, signal } from '@angular/core'
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { LogoComponent } from '../logo/logo.component'
import { PendingGoalsComponent } from '../pending-goals/pending-goals.component'
// biome-ignore lint/style/useImportType: <explanation>
import { GetPendingGoalsService } from '../../services/get/get-pending-goals.service'
// biome-ignore lint/style/useImportType: <explanation>
import { GetSummaryService } from '../../services/get/get-summary.service'
import type { PendingGoalsResponse } from '../../interfaces/pending-goals-response'
import type { SummaryResponse } from '../../interfaces/summary-response'
import { DatePipe } from '@angular/common'
import localePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localePT)

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
  pendingGoals!: PendingGoalsResponse[]
  summary!: SummaryResponse['summary']
  disireComplete = signal(0)
  completed = signal(0)
  percentage = signal(0)
  vazio = signal(false)
  content = signal('')
  pipe = new DatePipe('pt-BR')
  constructor(
    private pendingGoalsService: GetPendingGoalsService,
    private summaryService: GetSummaryService
  ) {}
  ngOnInit() {
    this.getPendingGoals()
  }

  update() {
    this.getPendingGoals()
  }

  getPendingGoals() {
    this.pendingGoalsService.getPendingGoals().subscribe({
      next: goal => {
        this.pendingGoals = goal
        this.getSummary()
      },
      complete: () => {
        this.getCountCompletion()
      },
      error: error => {
        this.vazio.set(true)
        this.content.set(String(error.error.message))
      },
    })
  }
  getSummary() {
    this.summaryService.getSummary().subscribe({
      next: summary => {
        this.summary = summary.summary
        console.log(this.summary)
        this.summary.goalsPerDay

        for (const s in this.summary.goalsPerDay) {
          console.log(this.summary.goalsPerDay[s])
        }
      },
    })
  }
  getCountCompletion() {
    this.completed.set(0)
    this.disireComplete.set(0)
    for (const goal of this.pendingGoals) {
      this.completed.update(value => value + goal.completionCounts)
      this.disireComplete.update(value => value + goal.desiredWeeklyFrequency)
    }
    this.percentage.set(
      Math.round((this.completed() / this.disireComplete()) * 100)
    )
  }
}
