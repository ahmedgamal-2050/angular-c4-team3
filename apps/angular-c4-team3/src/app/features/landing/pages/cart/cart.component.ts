import { Component, inject, OnInit, OnDestroy, computed } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, BrushCleaning, MoveLeft } from 'lucide-angular';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { Subscription } from 'rxjs';
import { LoggedInService } from '../../../../shared/services/logged-in.service';
import { CartResponse } from './cart.model';

@Component({
  selector: 'app-cart',
  imports: [
    TranslocoPipe,
    LucideAngularModule,
    ButtonComponent,
    CartItemComponent,
    RouterLink,
    CartSummaryComponent,
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  readonly BrushCleaning = BrushCleaning;
  readonly MoveLeft = MoveLeft;
  readonly APP_ROUTES = APP_ROUTES;

  private _cartService = inject(CartService);
  private _loggedInService = inject(LoggedInService);

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
        this._cartService.cartItems.set(response.cart.cartItems);
        this._cartService.discountPercentage.set(response.cart.discount || 0);
      },
      error: err => {
        console.log(err);
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
    console.log(id, newQuantity);
    if (newQuantity < 1) {
      this.removeItem(id);
    } else if (this.isLoggedIn()) {
      const sub = this._cartService.updateCartItem(id, newQuantity).subscribe({
        next: (response: CartResponse) => {
          this._cartService.cartItems.set(response.cart.cartItems);
          this._cartService.discountPercentage.set(response.cart.discount || 0);
        },
        error: err => {
          console.log(err);
        },
      });
      this.subscription.add(sub);
    } else {
      this._cartService.updateQuantity(id, newQuantity);
    }
  }

  removeItem(id: string) {
    if (this.isLoggedIn()) {
      const sub = this._cartService.removeCartItem(id).subscribe({
        next: (response: CartResponse) => {
          this._cartService.cartItems.set(response.cart.cartItems);
          this._cartService.discountPercentage.set(response.cart.discount || 0);
        },
        error: err => {
          console.log(err);
        },
      });
      this.subscription.add(sub);
    } else {
      this._cartService.cartItems.update(items =>
        items.filter(item => item._id !== id)
      );
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
          console.log(err);
        },
      });
      this.subscription.add(sub);
    } else {
      this._cartService.cartItems.set([]);
    }
  }

  applyCoupon(couponCode: string) {
    console.log('Apply coupon:', couponCode);
    // Logic to apply coupon would go here
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}
