import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const forgetPasswordGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const passedForgetPassword = localStorage.getItem('passedForgetPassword');

  if (passedForgetPassword === 'true') {
    return true;
  } else {
    router.navigate(['/auth/forget-password']);
    return false;
  }
};
