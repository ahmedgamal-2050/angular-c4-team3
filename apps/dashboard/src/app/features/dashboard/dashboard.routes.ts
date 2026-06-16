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
    path: 'categories',
    loadComponent: () =>
      import(
        './pages/all-categories/all-categories/all-categories.component'
      ).then(m => m.AllCategoriesComponent),
  },
  {
    path: 'categories/add',
    loadComponent: () =>
      import('./pages/all-categories/add-category/add-category.component').then(
        m => m.AddCategoryComponent
      ),
  },
  {
    path: 'categories/update/:id',
    loadComponent: () =>
      import('./pages/all-categories/add-category/add-category.component').then(
        m => m.AddCategoryComponent
      ),
  },
  {
    path: 'server-error',
    loadComponent: () =>
      import(
        '../../shared/components/server-error/server-error.component'
      ).then(m => m.ServerErrorComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        '../../shared/components/notfound-page/notfound-page.component'
      ).then(m => m.NotfoundPageComponent),
  },
];
