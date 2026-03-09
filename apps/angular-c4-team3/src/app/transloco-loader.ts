import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    const url = isDevMode()
      ? `/assets/i18n/${lang}.json`
      : `/angular-c4-team3/assets/i18n/${lang}.json`;
    return this.http.get<Translation>(url);
  }
}
