import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { Observable } from 'rxjs';
import { ProductDetailsResponse, ProductListResponse } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getAllProducts(page = 1, limit = 12): Observable<ProductListResponse> {
    const params = new HttpParams().append('page' , page).append('limit', limit)

    const url = ENDPOINTS.GET_ALL_PRODUCTS;
    return this.http.get<ProductListResponse>(url, { params });
  }


}
