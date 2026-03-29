import { Component, computed, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  MapPin,
  Search,
  Heart,
  ShoppingCart,
  Bell,
} from 'lucide-angular';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { NavbarActionButtonComponent } from './navbar-action-button/navbar-action-button.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { LoggedInService } from '../../services/logged-in.service';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
import { APP_ROUTES } from '../../constants/app-routes';
import { CartService } from '../../../features/landing/pages/cart/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    LucideAngularModule,
    LangSwitcherComponent,
    ThemeSwitcherComponent,
    NavbarActionButtonComponent,
    TranslocoPipe,
    UserDropdownComponent,
    RouterLink,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  readonly MapPin = MapPin;
  readonly Search = Search;
  readonly Heart = Heart;
  readonly ShoppingCart = ShoppingCart;
  readonly Bell = Bell;
  readonly APP_ROUTES = APP_ROUTES;

  private _LoggedInService = inject(LoggedInService);
  private _cartService = inject(CartService);

  location = signal('Cairo');
  notificationCount = signal(0);
  searchQuery = signal('');
  cartLink = signal<string[] | string>(
    `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.CART}`
  );
  wishlistLink = signal<string[] | string>(
    `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.WISHLIST}`
  );

  isLoggedIn = this._LoggedInService.isLoggedIn;
  user = this._LoggedInService.user;
  cartCount = computed(() => this._cartService.cartCount());
  wishListCount=computed(() => this._cartService.wishListCount());
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
