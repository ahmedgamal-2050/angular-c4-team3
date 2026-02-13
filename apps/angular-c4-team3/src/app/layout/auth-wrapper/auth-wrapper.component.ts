import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangSwitcherComponent } from '../../shared/components/lang-switcher/lang-switcher.component';
import { ThemeSwitcherComponent } from '../../shared/components/theme-switcher/theme-switcher.component';
import { NgTemplateOutlet } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-auth-wrapper',
  imports: [
    RouterOutlet,
    LangSwitcherComponent,
    ThemeSwitcherComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './auth-wrapper.component.html',
  styleUrl: './auth-wrapper.component.css',
})
export class AuthWrapperComponent {
  themeService = inject(ThemeService);
  isDarkMode = computed<boolean>(() => this.themeService.darkMode());
}
