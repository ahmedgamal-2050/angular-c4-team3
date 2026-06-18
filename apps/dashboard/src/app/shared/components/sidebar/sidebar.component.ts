import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  ClipboardList,
  CalendarHeart,
  Package,
  Flower,
  LayoutDashboard,
} from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { SidebarProfileComponent } from './components/sidebar-profile/sidebar-profile.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    TranslocoPipe,
    SidebarProfileComponent,
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
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
