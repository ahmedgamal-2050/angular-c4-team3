import { Component, signal } from '@angular/core';
import { LucideAngularModule, MapPin, Search, Heart, ShoppingCart, Bell, ChevronDown } from 'lucide-angular';
import { LangSwitcherComponent } from "../lang-switcher/lang-switcher.component";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { NavbarActionButtonComponent } from "./navbar-action-button/navbar-action-button.component";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [LucideAngularModule, LangSwitcherComponent, ThemeSwitcherComponent, NavbarActionButtonComponent, TranslocoPipe],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  readonly MapPin = MapPin;
  readonly Search = Search;
  readonly Heart = Heart;
  readonly ShoppingCart = ShoppingCart;
  readonly Bell = Bell;
  readonly ChevronDown = ChevronDown;

  location = signal('Cairo');
  userName = signal('Jonathan');
  cartCount = signal(8);
  notificationCount = signal(8);
  searchQuery = signal('');

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
}
