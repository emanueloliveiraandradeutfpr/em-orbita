import { Component } from '@angular/core'
import { EmptyGoalsComponent } from '../empty-goals/empty-goals.component'
import { SummaryComponent } from '../summary/summary.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmptyGoalsComponent, SummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
