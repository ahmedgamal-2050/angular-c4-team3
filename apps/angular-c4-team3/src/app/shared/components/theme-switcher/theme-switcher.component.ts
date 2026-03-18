import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-theme-switcher',
  imports: [LucideAngularModule],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);

  readonly Sun = Sun;
  readonly Moon = Moon;
}
