// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type CreateGoalCompletionResponse = {}

@Injectable({
  providedIn: 'root',
})
export class CreateGoalCompletionService {
  private endpointUrl = 'https://in-orbit-api-deqv.onrender.com/completions'

  constructor(private http: HttpClient) {}

  createGoal(goalId: string): Observable<CreateGoalCompletionResponse> {
    return this.http.post<CreateGoalCompletionResponse>(this.endpointUrl, {
      goalId,
    })
  }
}
