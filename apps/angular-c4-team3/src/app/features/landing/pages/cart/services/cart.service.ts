import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { CartItem, CartResponse } from '../cart.model';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../../../../shared/constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _http = inject(HttpClient);

  cartItems = signal<CartItem[]>([]);
  wishListItems = signal<CartItem[]>([]);
  // Computed values
  cartCount = computed(() => this.cartItems().length);
  wishListCount = computed(() => this.wishListItems().length);
  subtotal = computed<number>(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  discountPercentage = signal<number>(0);

  total = computed<number>(() => {
    const sub = this.subtotal();
    return sub - sub * this.discountPercentage();
  });

  constructor() {
    effect(() => {
      localStorage.setItem('wishlist', JSON.stringify(this.wishListItems()));
    });
  }
  updateQuantity(id: string, newQuantity: number) {
    if (newQuantity < 1) return;
    this.cartItems.update(items =>
      items.map(item =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  getCart() {
    const url = ENDPOINTS.GET_CART;
    return this._http.get<CartResponse>(url);
  }

  addToCart(productId: string, quantity: number) {
    const url = ENDPOINTS.ADD_TO_CART;
    return this._http.post<CartResponse>(url, { product: productId, quantity });
  }

  updateCartItem(cartItemId: string, quantity: number) {
    const url = ENDPOINTS.UPDATE_CART.replace('{cartItemId}', cartItemId);
    return this._http.put<CartResponse>(url, { quantity });
  }

  removeCartItem(cartItemId: string) {
    const url = ENDPOINTS.DELETE_CART.replace('{cartItemId}', cartItemId);
    return this._http.delete<CartResponse>(url);
  }

  clearCart() {
    const url = ENDPOINTS.CLEAR_CART;
    return this._http.delete(url);
  }

  addToWishlist(item: any) {
    this.wishListItems.update(items => {
      const exists = items.find(i => i._id === item._id);
      if (exists) return items;

      return [...items, item];
    });
  }

  removeFromWishlist(id: string) {
    this.wishListItems.update(items => items.filter(item => item._id !== id));
  }
}
