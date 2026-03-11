import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReviewsResponse } from '../product';
import { Observable } from 'rxjs';
import { CreateReview } from '../create-review';
import { RelatedProductsResponse } from '../related-product';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';
import { Product } from '../../home/home.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private _http = inject(HttpClient);

  getProductReviews(): Observable<ReviewsResponse> {
    return this._http.get<ReviewsResponse>(`${ENDPOINTS.REVIEWS}`);
  }

  getProductReviewById(productId?: string): Observable<ReviewsResponse> {
    const url = ENDPOINTS.GET_REVIEW_BY_ID.replace('{productId}', productId ?? '');
    return this._http.get<ReviewsResponse>(url);
  }

  createReview(data?: string): Observable<CreateReview> {
    return this._http.post<CreateReview>(`${ENDPOINTS.REVIEWS}`, data);
  }

  getRelatedProdacts(productId?: string): Observable<Product> {
    return this._http.get<Product>(
      `${ENDPOINTS.CATEGORY_PRODUCT}/${productId}`,
    );
  }
}
