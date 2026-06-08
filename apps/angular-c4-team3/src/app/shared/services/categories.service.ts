import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../constants/endpoints';

export interface Category {
  _id: string;
  name: string;
  image: string;
  productsCount?: number;
}

export interface CategoriesResponse {
  message: string;
  metadata: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalItems: number;
  };
  categories: any[];
}

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private readonly http = inject(HttpClient);

  getAll(page = 1, limit = 10): Observable<CategoriesResponse> {
    return this.http.get<CategoriesResponse>(
      `${ENDPOINTS.GET_ALL_CATEGORIES}?page=${page}&limit=${limit}`
    );
  }

  add(data: FormData): Observable<any> {
    return this.http.post(ENDPOINTS.ADD_CATEGORY, data);
  }

  update(id: string, data: FormData): Observable<any> {
    return this.http.put(
      ENDPOINTS.UPDATE_CATEGORY.replace('{categoryId}', id),
      data
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(
      ENDPOINTS.DELETE_CATEGORY.replace('{categoryId}', id)
    );
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(
      ENDPOINTS.GET_CATEGORY_BY_ID.replace('{categoryId}', id)
    );
  }
}
