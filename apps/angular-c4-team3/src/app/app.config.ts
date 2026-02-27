import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco, TranslocoService } from '@jsverse/transloco';
import { appRoutes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { APP_STORAGE, DEFAULT_LANGUAGE } from './shared/constants/app-storage';

export function preloadTranslation(transloco: TranslocoService) {
  return function () {
    const savedLang =
      localStorage.getItem(APP_STORAGE.language) ?? DEFAULT_LANGUAGE;
    transloco.setActiveLang(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    return transloco.load(savedLang);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ar'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideAppInitializer(() => {
      const initializerFn = preloadTranslation(inject(TranslocoService));
      return initializerFn();
    }),
  ],
};
