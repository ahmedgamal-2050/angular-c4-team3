import {
  Component,
  effect,
  inject,
  input,
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


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    LucideAngularModule,
    NgClass,
    TranslocoPipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();
  wishlist = output<Product>();
  quickView = output<Product>();

  readonly Star = Star;
  readonly ShoppingCart = ShoppingCart;
  readonly HeartPlus = HeartPlus;
  readonly HeartMinus = HeartMinus;
  readonly Eye = Eye;
  readonly ROUTES = APP_ROUTES;

  private navbarRoutingService = inject(NavbarRoutingService);
  private _isInWishlist = signal(false);
  isInWishlist = this._isInWishlist.asReadonly();

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

  onAddToCart(event: Event) {
    event.stopPropagation();
    this.addToCart.emit(this.product());
  }

  onWishlist(event: Event) {
    event.stopPropagation();
    this.wishlist.emit(this.product());
  }

  onQuickView(event: Event) {
    event.stopPropagation();
    this.quickView.emit(this.product());
  }

  addItemInWishList(id?: string) {
    this.navbarRoutingService
      ?.addItemInWishList(id)
      .subscribe((res?: WishListResponse) => {
        if (res) this._isInWishlist.set(true);
      });
  }

  deleteWishListItem(id: string) {
    this.navbarRoutingService
      .deleteWishListItem(id)
      .subscribe((res?: WishListResponse) => {
        if (res) this._isInWishlist.set(false);
      });
  }
}
