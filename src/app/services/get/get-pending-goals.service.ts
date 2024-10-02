// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, type Observable, tap } from 'rxjs'
import type { PendingGoalsResponse } from '../../interfaces/pending-goals-response'

type PendingGoalsResponseWithTypo = {
  pendingGoals: PendingGoalsResponse[]
}
@Injectable({
  providedIn: 'root',
})
export class GetPendingGoalsService {
  private endpointUrl = 'https://in-orbit-api-deqv.onrender.com/pending-goals'

  constructor(private http: HttpClient) {}

  getPendingGoals(): Observable<PendingGoalsResponse[]> {
    return this.http.get<PendingGoalsResponseWithTypo>(this.endpointUrl).pipe(
      map(response => {
        return response.pendingGoals
      })
    )
  }
}
