import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <button
      (click)="themeService.toggleTheme()"
      class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      [attr.aria-label]="
        themeService.darkMode() ? 'Switch to light mode' : 'Switch to dark mode'
      "
    >
      @if (themeService.darkMode()) {
        <!-- Sun Icon (for Dark Mode) -->
        <lucide-icon [name]="Sun" class="size-6 text-yellow-400" />
      } @else {
        <!-- Moon Icon (for Light Mode) -->
        <lucide-icon [name]="Moon" class="size-6 text-gray-700" />
      }
    </button>
  `,
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);

  readonly Sun = Sun;
  readonly Moon = Moon;
}
