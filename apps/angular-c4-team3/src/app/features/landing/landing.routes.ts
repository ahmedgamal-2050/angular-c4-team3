import { Route } from '@angular/router';

export const landingRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
];