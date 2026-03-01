import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { HomeResponse } from '../home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _http = inject(HttpClient);

  getHomeData(): Observable<HomeResponse> {
    const url = ENDPOINTS.HOME;
    return this._http.get<HomeResponse>(url);
  }
}
