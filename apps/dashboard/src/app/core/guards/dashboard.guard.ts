import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { APP_STORAGE } from '../../shared/constants/app-storage';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem(APP_STORAGE.token);
  const userRaw = localStorage.getItem(APP_STORAGE.user);
  const user = userRaw ? JSON.parse(userRaw) : null;

  if (token && user?.role === 'admin') {
    return true;
  } else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
