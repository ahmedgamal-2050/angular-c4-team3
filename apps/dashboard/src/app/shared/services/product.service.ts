import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../constants/endpoints';
import {
  ProductListResponse,
  ProductDetailsResponse,
  CategoriesResponse,
  OccasionsResponse,
} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getAllProducts(page = 1, limit = 12, filters?: any): Observable<ProductListResponse> {
    let params = new HttpParams().append('page', page).append('limit', limit);

    if (filters?.category) {
      params = params.append('category', filters.category);
    }

    if (filters?.occasion) {
      params = params.append('occasion', filters.occasion);
    }

    if (filters?.priceFrom) {
      params = params.append('price[gte]', filters.priceFrom);
    }

    if (filters?.priceTo) {
      params = params.append('price[lte]', filters.priceTo);
    }

    if (filters?.rating) {
      params = params.append('rateAvg[gte]', filters.rating);
    }

    return this.http.get<ProductListResponse>(ENDPOINTS.GET_ALL_PRODUCTS, {
      params,
    });
  }

  getProductById(productId: string): Observable<ProductDetailsResponse> {
    const url = ENDPOINTS.GET_PRODUCT_BY_ID.replace('{productId}', productId);
    return this.http.get<ProductDetailsResponse>(url);
  }

  addProduct(productData: FormData): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/products`, productData);
  }

  updateProduct(productId: string, productData: FormData): Observable<any> {
    return this.http.put<any>(`${BASE_URL}/products/${productId}`, productData);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/products/${productId}`);
  }

  getCategories(): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(ENDPOINTS.GET_ALL_CATEGORIES);
  }

  getOccasions(): Observable<OccasionsResponse> {
    return this.http.get<OccasionsResponse>(ENDPOINTS.GET_ALL_OCCASIONS);
  }
}
