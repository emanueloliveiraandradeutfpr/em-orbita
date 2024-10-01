// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

interface CreateGoalResponse {
  '': ''
}

@Injectable({
  providedIn: 'root',
})
export class CreateGoalService {
  private endpointUrl = 'https://in-orbit-api-deqv.onrender.com/goals'

  constructor(private http: HttpClient) {}

  createGoal(title: string, frequency: number): Observable<CreateGoalResponse> {
    const desiredWeeklyFrequency = Number(frequency)
    return this.http.post<CreateGoalResponse>(this.endpointUrl, {
      title,
      desiredWeeklyFrequency,
    })
  }
}
