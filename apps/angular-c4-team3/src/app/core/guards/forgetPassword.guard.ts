import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from '../../shared/constants/app-routes';

export const forgetPasswordGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const passedForgetPassword = localStorage.getItem('passedForgetPassword');

  if (passedForgetPassword === 'true') {
    return true;
  } else {
    router.navigate([`/${APP_ROUTES.AUTH.ROOT}/${APP_ROUTES.AUTH.FORGET_PASSWORD}`]);
    return false;
  }
};
