import { APP_STORAGE } from './../../shared/constants/app-storage';
import { HttpInterceptorFn } from '@angular/common/http';


/**
 * Auth Interceptor
 * Automatically attaches the authentication token to outgoing HTTP requests
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get token from localStorage
  const token = localStorage.getItem(APP_STORAGE.token) ?? '';

  // If no token or public endpoint, proceed without modification
  if (!token) {
    return next(req);
  }

  // Clone the request and add the Authorization header
  const clonedRequest = req.clone({
    headers: req.headers
      .set('Authorization', `Bearer ${token}`)
      .set('token', token),
  });

  return next(clonedRequest);
};
