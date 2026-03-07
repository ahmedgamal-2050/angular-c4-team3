import { Route } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes';

export const appRoutes: Route[] = [
  { path: '', redirectTo: APP_ROUTES.AUTH.ROOT, pathMatch: 'full' },

  {
    path: APP_ROUTES.AUTH.ROOT,
    loadComponent: () =>
      import('./layout/auth-wrapper/auth-wrapper.component').then(
        (m) => m.AuthWrapperComponent,
      ),
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },

  {
    path: APP_ROUTES.LANDING.ROOT,
    loadComponent: () =>
      import('./layout/landing-wrapper/landing-wrapper.component').then(
        (m) => m.LandingWrapperComponent,
      ),
    loadChildren: () =>
      import('./features/landing/landing.routes').then((m) => m.landingRoutes),
  },
];
