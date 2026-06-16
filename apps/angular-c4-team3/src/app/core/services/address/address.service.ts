import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../shared/constants/endpoints';
import { AddressResponse } from '../../../shared/components/address-modal/address-modal.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  readonly http = inject(HttpClient);

  getAllAddresses() {
    return this.http.get<AddressResponse>(ENDPOINTS.GET_ADDRESSES);
  }

  addAddress(address: any) {
    return this.http.patch(ENDPOINTS.ADD_ADDRESS, address);
  }

  updateAddress(address: any, addressId: number) {
    return this.http.patch(
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
