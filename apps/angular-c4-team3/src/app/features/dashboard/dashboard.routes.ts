import { Route } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes';

export const dashboardRoutes: Route[] = [
  { path: '', redirectTo: APP_ROUTES.DASHBOARD.OVERVIEW, pathMatch: 'full' },
  {
    path: APP_ROUTES.DASHBOARD.OVERVIEW,
    loadComponent: () =>
      import('./pages/overview/overview.component').then(
        m => m.OverviewComponent
      ),
  },
  {
    path: APP_ROUTES.DASHBOARD.PRODUCTS,
    loadComponent: () =>
      import('./pages/products/products.component').then(
        m => m.ProductsComponent
      ),
  },
];
