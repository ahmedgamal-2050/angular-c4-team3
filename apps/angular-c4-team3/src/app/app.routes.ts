import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HomeRoutes),
  },
];
