import { Component, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-lang-switcher',
  imports: [],
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.css',
})
export class LangSwitcherComponent {
  translocoService = inject(TranslocoService);
  lang = signal<string>(this.translocoService.getActiveLang());

  changeLanguage() {
    const newLang = this.lang() === 'en' ? 'ar' : 'en';
    this.translocoService.setActiveLang(newLang);
    this.lang.set(newLang);
    if (newLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }
}
