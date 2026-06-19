import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  readonly http = inject(HttpClient);

  getAllOrders(): Observable<any> {
    return this.http.get<any>(ENDPOINTS.GET_ALL_ORDERS);
  }
}
