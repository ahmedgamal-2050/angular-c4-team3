import { Component, inject, OnInit, OnDestroy, computed } from '@angular/core';
import { CartService } from './services/cart.service';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { Subscription } from 'rxjs';
import { LoggedInService } from '../../../../shared/services/logged-in.service';
import { CartResponse } from './cart.model';
import { MessageService } from 'primeng/api';
import { ProductItemsSectionComponent } from './components/product-items-section/product-items-section.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-cart',
  imports: [TranslocoPipe, CartSummaryComponent, ProductItemsSectionComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  private _cartService = inject(CartService);
  private _loggedInService = inject(LoggedInService);
  private _messageService = inject(MessageService);

  isLoggedIn = computed(() => this._loggedInService.isLoggedIn());
  cartItems = computed(() => this._cartService.cartItems());
  cartCount = computed(() => this._cartService.cartCount());
  subtotal = computed(() => this._cartService.subtotal());
  total = computed(() => this._cartService.total());
  discountPercentage = computed(() => this._cartService.discountPercentage());

  subscription = new Subscription();

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.getCart();
    }
  }

  getCart() {
    const sub = this._cartService.getCart().subscribe({
      next: (response: CartResponse) => {
        this.handleCartSuccess(response);
      },
      error: err => {
        this.handleCartError(err);
      },
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateQuantity({
    id,
    currentQty,
    change,
  }: {
    id: string;
    currentQty: number;
    change: number;
  }) {
    const newQuantity = currentQty + change;
    if (newQuantity < 1) {
      this.removeItem(id);
    } else {
      this.updateCartItem(id, newQuantity);
    }
  }

  removeItem(id: string) {
    if (this.isLoggedIn()) {
      const sub = this._cartService.removeCartItem(id).subscribe({
        next: (response: CartResponse) => {
          this.handleCartSuccess(response);
        },
        error: err => {
          this.handleCartError(err);
        },
      });
      this.subscription.add(sub);
    } else {
      this._cartService.cartItems.update(items =>
        items.filter(item => item._id !== id)
      );
    }
  }

  updateCartItem(id: string, quantity: number) {
    if (this.isLoggedIn()) {
      const sub = this._cartService.updateCartItem(id, quantity).subscribe({
        next: (response: CartResponse) => {
          this.handleCartSuccess(response);
        },
        error: err => {
          this.handleCartError(err);
        },
      });

      this.subscription.add(sub);
    } else {
      this._cartService.updateQuantity(id, quantity);
    }
  }

  clearCart() {
    if (this.isLoggedIn()) {
      const sub = this._cartService.clearCart().subscribe({
        next: () => {
          this._cartService.cartItems.set([]);
          this._cartService.discountPercentage.set(0);
        },
        error: err => {
          this.handleCartError(err);
        },
      });
      this.subscription.add(sub);
    } else {
      this._cartService.cartItems.set([]);
    }
  }

  handleCartSuccess(response: CartResponse) {
    this._cartService.cartItems.set(response.cart.cartItems);
    this._cartService.discountPercentage.set(response.cart.discount || 0);
  }

  handleCartError(err: { originalError: { error: { error: string } } }) {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: err.originalError.error.error,
    });
  }

  applyCoupon(couponCode: string) {
    console.log('Apply coupon:', couponCode);
    // Logic to apply coupon would go here
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}
