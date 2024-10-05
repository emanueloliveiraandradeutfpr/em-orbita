// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import type { SummaryResponse } from '../../interfaces/summary-response'
import type { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
/*
summary: {
    completed: number;
    total: number;
    goalsPerDay: Record<string, {
        id: string;
        title: string;
        completedAt: string;
    }[]>;
*/
export class GetSummaryService {
  private endpointUrl = 'https://in-orbit-api-deqv.onrender.com/summary'
  constructor(private http: HttpClient) {}

  getSummary(): Observable<SummaryResponse> {
    return this.http.get<SummaryResponse>(this.endpointUrl)
  }
}
