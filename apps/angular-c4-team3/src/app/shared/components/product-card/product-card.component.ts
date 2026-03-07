import { Component, input, output } from '@angular/core';
import { Product } from '../../../features/landing/pages/home/home.model';
import { Star, ShoppingCart, HeartPlus, Eye } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LucideAngularModule, TranslocoPipe, CurrencyPipe, RouterLink],
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
  readonly Eye = Eye;
  readonly ROUTES = APP_ROUTES;

  get ratingArray() {
    return Array(5).fill(0).map((_, i) => i < Math.floor(this.product().rateAvg));
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
}
