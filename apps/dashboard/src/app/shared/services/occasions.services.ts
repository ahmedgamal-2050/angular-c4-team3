import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../../../angular-c4-team3/src/app/shared/constants/endpoints';

export interface OCCASIONS {
  _id: string;
  name: string;
  image: string;
  productsCount?: number;
}

export interface occasionsResponse {
  message: string;
  metadata: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalItems: number;
  };
  occasions: any[];
}

@Injectable({ providedIn: 'root' })
export class occasionsService {
  private readonly http = inject(HttpClient);

  getAll(page = 1, limit = 10): Observable<occasionsResponse> {
    return this.http.get<occasionsResponse>(
      `${ENDPOINTS.GET_ALL_OCCASIONS}?page=${page}&limit=${limit}`
    );
  }

  add(data: FormData): Observable<any> {
    return this.http.post(ENDPOINTS.ADD_OCCASIONS, data);
  }

  update(id: string, data: FormData): Observable<any> {
    return this.http.put(
      ENDPOINTS.UPDATE_OCCASIONS.replace('{occasionsId}', id),
      data
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(
      ENDPOINTS.DELETE_OCCASIONS.replace('{occasionsId}', id)
    );
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(
      ENDPOINTS.GET_OCCASIONS_BY_ID.replace('{occasionsId}', id)
    );
  }
}
