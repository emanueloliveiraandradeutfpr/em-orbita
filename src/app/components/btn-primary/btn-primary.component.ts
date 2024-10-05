import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { GoalFormComponent } from '../goal-form/goal-form.component'
type BtnVariant = 'primary' | 'secondary'

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  @Input('btn-text') btnText!: string
  @Input() disable!: boolean
  @Input() variant: BtnVariant = 'primary'
  @Output('update') update = new EventEmitter()

  readonly dialog = inject(MatDialog)

  openDialog() {
    const dialogRef = this.dialog.open(GoalFormComponent, {
      height: '100vh',
      position: { right: '0' },
      enterAnimationDuration: 300,
    })
    dialogRef.afterClosed().subscribe(result => {
      this.update.emit('update()')
    })
  }
}
