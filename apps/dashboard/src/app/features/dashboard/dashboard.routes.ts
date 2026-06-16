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
  {
    path: APP_ROUTES.DASHBOARD.ADD_PRODUCT,
    loadComponent: () =>
      import('./pages/products/pages/product-form/product-form.component').then(
        m => m.ProductFormComponent
      ),
  },
  {
    path: APP_ROUTES.DASHBOARD.EDIT_PRODUCT,
    loadComponent: () =>
      import('./pages/products/pages/product-form/product-form.component').then(
        m => m.ProductFormComponent
      ),
  },
  {
    path: APP_ROUTES.DASHBOARD.ACCOUNT,
    loadComponent: () =>
      import('./pages/account/account-setting/account-setting.component').then(
        m => m.AccountSettingComponent
      ),
  },
  {
    path: APP_ROUTES.DASHBOARD.CHANGE_PASSWORD,
    loadComponent: () =>
      import('./pages/account/change-password/change-password.component').then(
        m => m.ChangePasswordComponent
      ),
  },
  {
    path: APP_ROUTES.DASHBOARD.CATEGORIES,
    data: { entityType: 'category' },
    loadComponent: () =>
      import(
        './pages/all-categories/all-categories/all-categories.component'
      ).then(m => m.AllCategoriesComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.ADD_CATEGORY,
    data: { entityType: 'category' },
    loadComponent: () =>
      import(
        '../../shared/components/add-edit-item/add-edit-item.component'
      ).then(m => m.AddEditItemComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.UPDATE_CATEGORY,
    data: { entityType: 'category' },
    loadComponent: () =>
      import(
        '../../shared/components/add-edit-item/add-edit-item.component'
      ).then(m => m.AddEditItemComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.OCCASIONS,
    data: { entityType: 'occasion' },
    loadComponent: () =>
      import(
        './pages/all-categories/all-categories/all-categories.component'
      ).then(m => m.AllCategoriesComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.ADD_OCCASION,
    data: { entityType: 'occasion' },
    loadComponent: () =>
      import(
        '../../shared/components/add-edit-item/add-edit-item.component'
      ).then(m => m.AddEditItemComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.UPDATE_OCCASION,
    data: { entityType: 'occasion' },
    loadComponent: () =>
      import(
        '../../shared/components/add-edit-item/add-edit-item.component'
      ).then(m => m.AddEditItemComponent),
  },
  {
    path: 'server-error',
    loadComponent: () =>
      import(
        '../../shared/components/server-error/server-error.component'
      ).then(m => m.ServerErrorComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.UNAUTHORIZED,
    loadComponent: () =>
      import(
        '../../shared/components/authorized-page/authorized-page.component'
      ).then(m => m.AuthorizedPageComponent),
  },
  {
    path: APP_ROUTES.DASHBOARD.PROFILE,
    loadComponent: () =>
      import('./pages/account/account-setting/account-setting.component').then(
        m => m.AccountSettingComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        '../../shared/components/notfound-page/notfound-page.component'
      ).then(m => m.NotfoundPageComponent),
  },
];
