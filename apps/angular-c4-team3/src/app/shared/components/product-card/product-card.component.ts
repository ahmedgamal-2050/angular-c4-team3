import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../../features/landing/pages/home/home.model';
import { Star, ShoppingCart, HeartPlus, Eye } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes';
import { CartService } from '../../../features/landing/pages/cart/services/cart.service';
import { CartResponse } from '../../../features/landing/pages/cart/cart.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LucideAngularModule, TranslocoPipe, CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;
  readonly HeartPlus = HeartPlus;
  readonly Eye = Eye;
  readonly ROUTES = APP_ROUTES;

  private _cartService = inject(CartService);

  product = input.required<Product>();

  addToCart = output<Product>();
  wishlist = output<Product>();
  quickView = output<Product>();

  get ratingArray() {
    return Array(5)
      .fill(0)
      .map((_, i) => i < Math.floor(this.product().rateAvg));
  }

  onAddToCart() {
    this._cartService.addToCart(this.product()._id, 1).subscribe({
      next: (response: CartResponse) => {
        this._cartService.cartItems.set(response.cart.cartItems);
        this._cartService.discountPercentage.set(response.cart.discount || 0);
      },
      error: err => {
        console.log(err);
      },
    });
  }

  onWishlist(event: Event) {
    event.stopPropagation();
    this.wishlist.emit(this.product());
  }

  onQuickView(event: Event) {
    event.stopPropagation();
    this.quickView.emit(this.product());
  }
}
