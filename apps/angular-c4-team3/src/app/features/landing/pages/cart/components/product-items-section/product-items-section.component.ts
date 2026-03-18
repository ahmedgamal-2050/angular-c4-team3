import { Component, input, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { BrushCleaning, LucideAngularModule, MoveLeft } from 'lucide-angular';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../../../../shared/constants/app-routes';
import { CartItem } from '../../cart.model';

@Component({
  selector: 'app-product-items-section',
  imports: [
    TranslocoPipe,
    LucideAngularModule,
    CartItemComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './product-items-section.component.html',
})
export class ProductItemsSectionComponent {
  readonly BrushCleaning = BrushCleaning;
  readonly MoveLeft = MoveLeft;
  readonly APP_ROUTES = APP_ROUTES;

  title = input<string>('');
  type = input<'cart' | 'wishlist'>('cart');
  cartItems = input<CartItem[]>([]);
  cartCount = input<number>(0);

  readonly removeItem = output<string>();
  readonly updateQuantity = output<{
    id: string;
    currentQty: number;
    change: number;
  }>();
  readonly clearCart = output<void>();

  handleRemoveItem(productId: string) {
    this.removeItem.emit(productId);
  }

  handleUpdateQuantity({
    id,
    currentQty,
    change,
  }: {
    id: string;
    currentQty: number;
    change: number;
  }) {
    this.updateQuantity.emit({ id, currentQty, change });
  }

  handleClearCart() {
    this.clearCart.emit();
  }
}
