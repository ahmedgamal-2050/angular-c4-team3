import { Component, signal } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  Gift,
  ClipboardList,
  PartyPopper,
  Headset,
  Info,
} from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { APP_ROUTES } from '../../constants/app-routes';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, TranslocoPipe, RouterLinkActive],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
})
export class MainNavbarComponent {
  readonly Home = Home;
  readonly Gift = Gift;
  readonly ClipboardList = ClipboardList;
  readonly PartyPopper = PartyPopper;
  readonly Headset = Headset;
  readonly Info = Info;

  navItems = signal([
    { label: 'landing_main_navbar_section_home', icon: Home, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.HOME}` },
    { label: 'landing_main_navbar_section_products', icon: Gift, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.PRODUCTS}` },
    { label: 'landing_main_navbar_section_categories', icon: ClipboardList, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.CATEGORIES}` },
    { label: 'landing_main_navbar_section_occasions', icon: PartyPopper, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.OCCASIONS}` },
    { label: 'landing_main_navbar_section_contact', icon: Headset, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.CONTACT}` },
    { label: 'landing_main_navbar_section_about', icon: Info, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.ABOUT}` },
  ]);
}
