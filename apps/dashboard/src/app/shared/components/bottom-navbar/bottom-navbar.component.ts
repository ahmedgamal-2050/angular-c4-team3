import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  ClipboardList,
  CalendarHeart,
  Package,
  LayoutDashboard,
  Flower,
} from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, TranslocoPipe],
  templateUrl: './bottom-navbar.component.html',
})
export class BottomNavbarComponent {
  readonly Flower = Flower;

  menuItems = signal([
    {
      labelKey: 'sidebar_overview',
      route: '/dashboard/overview',
      icon: LayoutDashboard,
    },
    {
      labelKey: 'sidebar_categories',
      route: '/dashboard/categories',
      icon: ClipboardList,
    },
    {
      labelKey: 'sidebar_occasions',
      route: '/dashboard/occasions',
      icon: CalendarHeart,
    },
    {
      labelKey: 'sidebar_products',
      route: '/dashboard/products',
      icon: Package,
    },
  ]);
}
