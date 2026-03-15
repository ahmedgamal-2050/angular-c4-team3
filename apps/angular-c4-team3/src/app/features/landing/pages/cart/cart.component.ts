import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Ticket,
  BrushCleaning,
  MoveLeft,
} from 'lucide-angular';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { InputComponent } from '../../../../shared/components/form-components/input/input.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';

@Component({
  selector: 'app-cart',
  imports: [
    TranslocoPipe,
    ReactiveFormsModule,
    LucideAngularModule,
    ButtonComponent,
    InputComponent,
    CartItemComponent,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  readonly BrushCleaning = BrushCleaning;
  readonly Ticket = Ticket;
  readonly MoveLeft = MoveLeft;
  readonly APP_ROUTES = APP_ROUTES;

  cartService = inject(CartService);
  fb = inject(FormBuilder);

  couponForm: FormGroup = this.fb.group({
    couponCode: [''],
  });

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

  applyCoupon() {
    if (this.couponForm.valid) {
      console.log('Apply coupon:', this.couponForm.value.couponCode);
      // Logic to apply coupon would go here
    }
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}
