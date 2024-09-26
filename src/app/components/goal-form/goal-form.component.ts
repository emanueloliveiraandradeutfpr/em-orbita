import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrl: './goal-form.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalFormComponent {}
