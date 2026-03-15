import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../cart.model';
import { initialCartItems } from '../cart.constants';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>(initialCartItems);

  // Computed values
  cartCount = computed(() => this.cartItems().length);
  subtotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  // Example discount logic (as in the design: Subtotal 250, Total 125 with "50% Discount")
  discountPercentage = signal<number>(0.5); // 50%

  total = computed(() => {
    const sub = this.subtotal();
    return sub - sub * this.discountPercentage();
  });

  updateQuantity(id: string, newQuantity: number) {
    if (newQuantity < 1) return;
    this.cartItems.update(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  removeItem(id: string) {
    this.cartItems.update(items => items.filter(item => item.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
