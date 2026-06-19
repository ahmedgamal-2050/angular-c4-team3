import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { Observable } from 'rxjs';
import { OrderResponse } from '../order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  readonly http = inject(HttpClient);

  getAllOrders(): Observable<OrderResponse> {
    return this.http.get<OrderResponse>(ENDPOINTS.GET_ALL_ORDERS);
  }

  createOrder(order: {
    shippingAddress: {
      street: string;
      phone: string;
      city: string;
      lat: string;
      long: string;
    };
  }) {
    return this.http.post(ENDPOINTS.CREATE_ORDER, order);
  }
}
