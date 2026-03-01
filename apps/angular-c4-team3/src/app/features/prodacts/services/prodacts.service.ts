import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review, ReviewsResponse } from '../product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from './../../../../../../../shared-design/src/environments/environments.dev';
import { Observable } from 'rxjs';
import { CreateReview } from '../createReview';
import { RelatedProductsResponse } from '../related-product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = environment.baseUrl;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  getProductReviews(): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(`${this.baseUrl}/reviews`);
  }

  getProductReviewById(productId?: string): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(
      `${this.baseUrl}/products/${productId}/reviews`,
    );
  }

  createReview(data?: string):Observable<CreateReview>{
    return this.http.post<CreateReview>(`${this.baseUrl}/reviews` , data)
  }

   getRelatedProdacts(productId?: string):Observable<RelatedProductsResponse>{
    return this.http.get<RelatedProductsResponse>(`${this.baseUrl}/related/category/${productId}`)
  }
}
