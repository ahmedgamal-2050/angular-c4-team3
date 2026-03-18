import { Route } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes';

export const landingRoutes: Route[] = [
  { path: '', redirectTo: APP_ROUTES.LANDING.HOME, pathMatch: 'full' },
  { path: APP_ROUTES.LANDING.HOME, loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: APP_ROUTES.LANDING.PRODUCTS, loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent) },
  { path: `${APP_ROUTES.LANDING.PRODUCT_DETAILS}/:id`, loadComponent: () => import('./pages/product-details/product-details.component').then((m) => m.ProductDetailsComponent) },
  { path: `${APP_ROUTES.LANDING.WISHLIST}`, loadComponent: () => import('./pages/wishlist/wishlist/wishlist.component').then((m) => m.WishlistComponent) },
  { path: APP_ROUTES.LANDING.CART, loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent) },
];
