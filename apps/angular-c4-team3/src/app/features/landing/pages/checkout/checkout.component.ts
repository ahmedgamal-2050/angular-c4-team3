import { Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { CartSummaryComponent } from '../cart/components/cart-summary/cart-summary.component';
import { ProductMayLikeComponent } from '../product-details/components/product-may-like/product-may-like.component';
import { StepperComponent } from '../../../../shared/components/stepper/stepper.component';
import { CartService } from '../cart/services/cart.service';
import { LoggedInService } from '../../../../shared/services/logged-in.service';
import { MessageService } from 'primeng/api';
import { CouponService } from '../cart/services/copuon.service';
import { Subscription } from 'rxjs';
import { CartResponse } from '../cart/cart.model';

@Component({
  selector: 'app-checkout',
  imports: [CartSummaryComponent, ProductMayLikeComponent, StepperComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private _cartService = inject(CartService);
  private _loggedInService = inject(LoggedInService);
  private _messageService = inject(MessageService);
  private _couponService = inject(CouponService);

  isLoggedIn = computed(() => this._loggedInService.isLoggedIn());
  userId = computed(() => this._loggedInService.user()?._id || '');
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

    // ⚠️ مهم: خليها amount مش percentage لو backend بيرجع رقم ثابت
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
    if (!couponCode) return;

    const sub = this._couponService.applyCoupon(couponCode).subscribe({
      next: res => {
        this._cartService.cartItems.set(res.cart.cartItems);

        this._cartService.discountPercentage.set(res.discountAmount);

        this._messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      },
      error: err => {
        this.handleCartError(err);
      },
    });

    this.subscription.add(sub);
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}
