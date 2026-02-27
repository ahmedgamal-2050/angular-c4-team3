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
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, TranslocoPipe],
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
    { label: 'landing_main_navbar_section_home', icon: Home, path: '/home' },
    { label: 'landing_main_navbar_section_products', icon: Gift, path: '/products' },
    { label: 'landing_main_navbar_section_categories', icon: ClipboardList, path: '/categories' },
    { label: 'landing_main_navbar_section_occasions', icon: PartyPopper, path: '/occasions' },
    { label: 'landing_main_navbar_section_contact', icon: Headset, path: '/contact' },
    { label: 'landing_main_navbar_section_about', icon: Info, path: '/about' },
  ]);
}
