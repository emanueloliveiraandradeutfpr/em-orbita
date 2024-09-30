import {
  ChangeDetectionStrategy,
  Component,
  Output,
  signal,
} from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
// biome-ignore lint/style/useImportType: <explanation>
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatRadioModule } from '@angular/material/radio'
import { CreateGoalService } from '../../services/create/create-goal.service'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrl: './goal-form.component.scss',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  providers: [CreateGoalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalFormComponent {
  loading = signal(false)
  useForm: FormGroup
  frequency = new FormControl('', [
    Validators.min(1),
    Validators.max(7),
    Validators.required,
  ])
  @Output() goal!: string

  constructor(
    private goalService: CreateGoalService,
    public dialogRef: MatDialogRef<GoalFormComponent>
  ) {
    this.useForm = new FormGroup({
      activity: new FormControl('', [
        Validators.minLength(1),
        Validators.required,
      ]),
      frequency: this.frequency,
    })
  }

  onSubmit() {
    this.loading.set(true)

    if (this.useForm.valid) {
      console.log(this.useForm.value)

      this.goalService
        .createGoal(this.useForm.value.activity, this.useForm.value.frequency)
        .subscribe({
          next: () => {
            this.useForm.reset()
          },
          complete: () => {
            this.loading.set(false)
            this.dialogRef.close()
          },
          error: error => {
            console.log(error.error.message)
          },
        })
    }
  }
}
