import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../shared/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  readonly http = inject(HttpClient);

  getAllAddresses() {
    return this.http.get<{ addresses: any[]; message: string }>(
      ENDPOINTS.GET_ADDRESSES
    );
  }

  addAddress(address: any) {
    return this.http.post(ENDPOINTS.ADD_ADDRESS, address);
  }

  updateAddress(address: any, addressId: number) {
    return this.http.put(
      ENDPOINTS.UPDATE_ADDRESS.replace('{addressId}', addressId.toString()),
      address
    );
  }

  deleteAddress(addressId: number) {
    return this.http.delete(
      ENDPOINTS.DELETE_ADDRESS.replace('{addressId}', addressId.toString())
    );
  }
}
