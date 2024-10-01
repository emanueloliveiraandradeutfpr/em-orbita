// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import type { PendingGoalsResponse } from '../../interfaces/pending-goals-response'

@Injectable({
  providedIn: 'root',
})
export class GetPendingGoalsService {
  private endpointUrl = 'https://in-orbit-api-deqv.onrender.com/completions'

  constructor(private http: HttpClient) {}

  getPendingGoals(): Observable<PendingGoalsResponse> {
    return this.http.get<PendingGoalsResponse>(this.endpointUrl)
  }
}
