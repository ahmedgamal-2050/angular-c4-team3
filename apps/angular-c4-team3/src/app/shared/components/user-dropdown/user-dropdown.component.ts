import { Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  LucideAngularModule,
  ChevronDown,
  User,
  MapPin,
  ClipboardList,
  Settings,
  LogOut,
} from 'lucide-angular';
import { LoggedInService } from '../../services/logged-in.service';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { APP_ROUTES } from '../../constants/app-routes';

@Component({
  selector: 'app-user-dropdown',
  imports: [TranslocoPipe, LucideAngularModule, MenuModule, RouterLink],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.css',
})
export class UserDropdownComponent {
  readonly ChevronDown = ChevronDown;
  readonly User = User;
  readonly MapPin = MapPin;
  readonly ClipboardList = ClipboardList;
  readonly Settings = Settings;
  readonly LogOut = LogOut;

  protected readonly APP_ROUTES = APP_ROUTES;

  private _LoggedInService = inject(LoggedInService);

  isLoggedIn = this._LoggedInService.isLoggedIn;
  user = this._LoggedInService.user;

  items: MenuItem[] = [
    {
      label: 'user_dropdown_my_profile_label',
      icon: 'User',
      data: { icon: this.User },
      routerLink: '/dashboard/account',
    },
    {
      label: 'user_dropdown_my_addresses_label',
      icon: 'MapPin',
      data: { icon: this.MapPin },
      routerLink: '/addresses',
    },
    {
      label: 'user_dropdown_my_orders_label',
      icon: 'ClipboardList',
      data: { icon: this.ClipboardList },
      routerLink: '/orders',
    },
    {
      separator: true,
    },
    {
      label: 'user_dropdown_dashboard_label',
      icon: 'Settings',
      data: { icon: this.Settings },
      routerLink: '/dashboard',
    },
  ];

  logout() {
    this._LoggedInService.logout();
  }
}
