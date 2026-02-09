import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  translocoService = inject(TranslocoService);
  lang = signal<string>(this.translocoService.getActiveLang());
  router = inject(Router);

  get activeRouter(): string {
    const urlSegments = this.router.url.split('/');
    return urlSegments[urlSegments.length - 1];
  }

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
