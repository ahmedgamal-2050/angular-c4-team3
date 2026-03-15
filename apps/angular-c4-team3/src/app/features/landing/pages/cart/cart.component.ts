import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, BrushCleaning, MoveLeft } from 'lucide-angular';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

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
export class CartComponent {
  readonly BrushCleaning = BrushCleaning;
  readonly MoveLeft = MoveLeft;
  readonly APP_ROUTES = APP_ROUTES;

  cartService = inject(CartService);

  get cartItems() {
    return this.cartService.cartItems;
  }

  get cartCount() {
    return this.cartService.cartCount;
  }

  get subtotal() {
    return this.cartService.subtotal;
  }

  get total() {
    return this.cartService.total;
  }

  get discountPercentage() {
    return this.cartService.discountPercentage;
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
    this.cartService.updateQuantity(id, currentQty + change);
  }

  removeItem(id: string) {
    this.cartService.removeItem(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  applyCoupon(couponCode: string) {
    console.log('Apply coupon:', couponCode);
    // Logic to apply coupon would go here
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}
