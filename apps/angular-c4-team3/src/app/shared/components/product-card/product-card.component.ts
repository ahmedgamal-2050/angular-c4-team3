import {
  Component,
  computed,
  inject,
  input,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { Product } from '../../../features/landing/pages/home/home.model';
import { Star, ShoppingCart, HeartPlus, Eye } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes';
import { CartService } from '../../../features/landing/pages/cart/services/cart.service';
import { CartResponse } from '../../../features/landing/pages/cart/cart.model';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    LucideAngularModule,
    TranslocoPipe,
    CurrencyPipe,
    RouterLink,
    LoadingComponent,
  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnDestroy {
  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;
  readonly HeartPlus = HeartPlus;
  readonly Eye = Eye;
  readonly ROUTES = APP_ROUTES;

  private _cartService = inject(CartService);
  private _messageService = inject(MessageService);

  product = input.required<Product>();
  isCartLoading = signal(false);

  maxQuantity = computed(() => {
    const cartProduct = this._cartService
      .cartItems()
      .find(item => item.product._id === this.product()._id);
    return cartProduct?.quantity || 0;
  });

  addToCart = output<Product>();
  wishlist = output<Product>();
  quickView = output<Product>();

  subscription = new Subscription();

  get ratingArray() {
    return Array(5)
      .fill(0)
      .map((_, i) => i < Math.floor(this.product().rateAvg));
  }

  onAddToCart() {
    this.isCartLoading.set(true);
    const sub = this._cartService.addToCart(this.product()._id, 1).subscribe({
      next: (response: CartResponse) => {
        this._cartService.cartItems.set(response.cart.cartItems);
        this._cartService.discountPercentage.set(response.cart.discount || 0);
        this.isCartLoading.set(false);
      },
      error: err => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.originalError.error.error,
        });
        this.isCartLoading.set(false);
      },
    });

    this.subscription.add(sub);
  }

  onWishlist(event: Event) {
    event.stopPropagation();
    this.wishlist.emit(this.product());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
