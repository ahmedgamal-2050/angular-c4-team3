import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadComponent: () =>
      import('./layout/auth-wrapper/auth-wrapper.component').then(
        (m) => m.AuthWrapperComponent,
      ),
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./layout/landing-wrapper/landing-wrapper.component').then(
        (m) => m.LandingWrapperComponent,
      ),
    loadChildren: () =>
      import('./features/landing/landing.routes').then((m) => m.landingRoutes),
  },
];
