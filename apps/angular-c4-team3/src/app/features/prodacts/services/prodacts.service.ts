import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewsResponse } from '../product';
import { Observable } from 'rxjs';
import { CreateReview } from '../createReview';
import { RelatedProduct, RelatedProductsResponse } from '../related-product';
import { ENDPOINTS } from '../../../shared/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  getProductReviews(): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(`${ENDPOINTS.REVIEWS}`);
  }

  getProductReviewById(productId?: string): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(
      `${ENDPOINTS.GET_REVIEW_BY_ID}/${productId}/reviews`,
    );
  }

  createReview(data?: string): Observable<CreateReview> {
    return this.http.post<CreateReview>(`${ENDPOINTS.REVIEWS}`, data);
  }

  getRelatedProdacts(productId?: string): Observable<RelatedProductsResponse> {
    return this.http.get<RelatedProductsResponse>(
      `${ENDPOINTS.CATEGORY_PRODUCT}/${productId}`,
    );
  }

  getBestSellingProducts(): Observable<RelatedProduct> {
    return this.http.get<RelatedProduct>(`${ENDPOINTS.GET_REVIEW_BY_ID}`);
  }
}
