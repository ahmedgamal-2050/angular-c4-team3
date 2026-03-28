import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { ApplyCouponResponse } from './coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private _http = inject(HttpClient);

  applyCoupon(code: string) {
    return this._http.post<ApplyCouponResponse>(
      ENDPOINTS.APPLY_COUPON,
      { code }
    );
  }
}