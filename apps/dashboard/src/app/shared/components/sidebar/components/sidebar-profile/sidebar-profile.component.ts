import {
  Component,
  inject,
  signal,
  HostListener,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInService } from '../../../../services/logged-in.service';
import {
  LucideAngularModule,
  MoreVertical,
  Settings,
  LogOut,
  Menu,
} from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar-profile',
  standalone: true,
  imports: [LucideAngularModule, TranslocoPipe],
  templateUrl: './sidebar-profile.component.html',
})
export class SidebarProfileComponent {
  private _loggedInService = inject(LoggedInService);
  private _router = inject(Router);
  private _elementRef = inject(ElementRef);

  readonly MoreVertical = MoreVertical;
  readonly Settings = Settings;
  readonly LogOut = LogOut;
  readonly Menu = Menu;

  user = this._loggedInService.user;
  isDropdownOpen = signal(false);

  toggleDropdown() {
    this.isDropdownOpen.update(v => !v);
  }

  goToProfile() {
    this.isDropdownOpen.set(false);
    this._router.navigate(['/dashboard/profile']);
  }

  logout() {
    this.isDropdownOpen.set(false);
    this._loggedInService.logout();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen.set(false);
    }
  }
}
