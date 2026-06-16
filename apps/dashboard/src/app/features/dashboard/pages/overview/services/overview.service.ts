import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { AllStatisticsResponse } from '../overview.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  readonly http = inject(HttpClient);

  getAllStatistics(): Observable<AllStatisticsResponse> {
    const url = ENDPOINTS.GET_ALL_STATISTICS;
    return this.http.get<AllStatisticsResponse>(url);
  }
}
