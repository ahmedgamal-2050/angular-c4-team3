import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ENDPOINTS } from 'apps/angular-c4-team3/src/app/shared/constants/endpoints';
export interface AddressData {
  id: number;
  label: string;
  city: string;
  address: string;
  phone: string;
  selected?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ShippingService {
    private _http = inject(HttpClient);

  getAddress(): Observable<AddressData> {
    return this._http.get<AddressData>(`${ENDPOINTS.ADDRESS}`);
  }

}
