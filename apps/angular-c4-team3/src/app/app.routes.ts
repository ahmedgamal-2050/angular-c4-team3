import { Route } from '@angular/router';
import { APP_ROUTES } from './shared/constants/app-routes';
import { dashboardGuard } from './core/guards/dashboard.guard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: APP_ROUTES.AUTH.ROOT, pathMatch: 'full' },

  {
    path: APP_ROUTES.AUTH.ROOT,
    loadComponent: () =>
      import('./layout/auth-wrapper/auth-wrapper.component').then(
        m => m.AuthWrapperComponent
      ),
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.authRoutes),
  },

  {
    path: APP_ROUTES.LANDING.ROOT,
    loadComponent: () =>
      import('./layout/landing-wrapper/landing-wrapper.component').then(
        m => m.LandingWrapperComponent
      ),
    loadChildren: () =>
      import('./features/landing/landing.routes').then(m => m.landingRoutes),
  },

  {
    path: APP_ROUTES.DASHBOARD.ROOT,
    loadComponent: () =>
      import('./layout/dashboard-wrapper/dashboard-wrapper.component').then(
        m => m.DashboardWrapperComponent
      ),
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then(
        m => m.dashboardRoutes
      ),
    canActivate: [dashboardGuard],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import(
        './shared/components/authorized-page/authorized-page.component'
      ).then(m => m.AuthorizedPageComponent),
  },
];
