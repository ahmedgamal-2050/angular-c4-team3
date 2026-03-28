import {
  Component,
  effect,
  inject,
  input,
  computed,
  OnDestroy,
  output,
  signal,
} from '@angular/core';
import { Product } from '../../../features/landing/pages/home/home.model';
import { Star, ShoppingCart, HeartPlus, Eye, HeartMinus } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes';
import { NavbarRoutingService } from '../../../features/landing/pages/wishlist/services/navbar-routing.service';
import { WishListResponse } from '../../../features/landing/pages/wishlist/modals/wishlist-item.interface';
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
    NgClass,
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
  readonly HeartMinus = HeartMinus;
  readonly Eye = Eye;
  readonly ROUTES = APP_ROUTES;

  private navbarRoutingService = inject(NavbarRoutingService);
  private _cartService = inject(CartService);
  private _messageService = inject(MessageService);

  product = input.required<Product>();

  addToCart = output<Product>();
  wishlist = output<Product>();
  quickView = output<Product>();

  private _isInWishlist = signal(false);
  isCartLoading = signal(false);
  isInWishlist = computed(() => {
  return this._cartService.wishListItems().some(
    item => item._id === this.product()._id
  );
});

  maxQuantity = computed(() => {
    const cartProduct = this._cartService
      .cartItems()
      .find(item => item.product._id === this.product()._id);
    return cartProduct?.quantity || 0;
  });

  subscription = new Subscription();

  constructor() {
    effect(() => {
      this._isInWishlist.set(this.product().isInWishlist ?? false);
    });
  }

  toggleWishlist(id: string) {
    if (this.isInWishlist()) {
      this.deleteWishListItem(id);
    } else {
      this.addItemInWishList(id);
    }
  }
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

  addItemInWishList(id?: string) {
    this.navbarRoutingService
      ?.addItemInWishList(id)
      .subscribe((res?: WishListResponse) => {
        if (res) this._isInWishlist.set(true);
      });
    this._cartService.addToWishlist({
      ...this.product(),
      quantity: 1,
    });
  }

  deleteWishListItem(id: string) {
    this.navbarRoutingService
      .deleteWishListItem(id)
      .subscribe((res?: WishListResponse) => {
        if (res) this._isInWishlist.set(false);
      });
    this._cartService.removeFromWishlist(id);
  }
}
