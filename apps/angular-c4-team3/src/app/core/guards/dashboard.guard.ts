import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { APP_STORAGE } from '../../shared/constants/app-storage';
import { APP_ROUTES } from '../../shared/constants/app-routes';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem(APP_STORAGE.token);

  if (token) {
    return true;
  } else {
    // router.navigate([`/${APP_ROUTES.AUTH.ROOT}/${APP_ROUTES.AUTH.LOGIN}`]);
    router.navigate(['/unauthorized']);
    return false;
  }
};
