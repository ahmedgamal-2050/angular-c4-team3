import { Route } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes';

export const landingRoutes: Route[] = [
  { path: '', redirectTo: APP_ROUTES.LANDING.HOME, pathMatch: 'full' },
  { path: APP_ROUTES.LANDING.HOME, loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: APP_ROUTES.LANDING.PRODUCTS, loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent) },
];