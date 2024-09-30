import { Component } from '@angular/core'
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-empty-goals',
  standalone: true,
  imports: [BtnPrimaryComponent, NgOptimizedImage],
  templateUrl: './empty-goals.component.html',
  styleUrl: './empty-goals.component.scss',
})
export class EmptyGoalsComponent {}
