import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ENDPOINTS } from 'apps/angular-c4-team3/src/app/shared/constants/endpoints';
import { WishListResponse } from '../modals/wishlist-item.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarRoutingService {
  private _http = inject(HttpClient);

  getWishListItem(): Observable<WishListResponse> {
    return this._http.get<WishListResponse>(`${ENDPOINTS.WISHLIST}`);
  }

  deleteWishListItem(id?: string): Observable<WishListResponse> {
    return this._http.delete<WishListResponse>(`${ENDPOINTS.WISHLIST}/${id}`);
  }

  clearAllWishListItem(): Observable<WishListResponse> {
    return this._http.delete<WishListResponse>(`${ENDPOINTS.WISHLIST}`);
  }

  addItemInWishList(productId?: string): Observable<WishListResponse> {
    return this._http.post<WishListResponse>(`${ENDPOINTS.WISHLIST}`, {
      productId,
    });
  }
}
