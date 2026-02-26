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

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
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
    { label: 'Home', icon: Home, path: '/home' },
    { label: 'Products', icon: Gift, path: '/products' },
    { label: 'Categories', icon: ClipboardList, path: '/categories' },
    { label: 'Occasions', icon: PartyPopper, path: '/occasions' },
    { label: 'Contact', icon: Headset, path: '/contact' },
    { label: 'About', icon: Info, path: '/about' },
  ]);
}
