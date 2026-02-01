import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  imports: [RouterModule, TranslocoPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  translocoService = inject(TranslocoService);
  lang = signal(this.translocoService.getActiveLang());

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.lang.set(lang);
  }
}
