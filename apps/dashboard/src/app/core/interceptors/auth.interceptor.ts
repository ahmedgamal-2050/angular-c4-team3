import { ENDPOINTS } from '../../shared/constants/endpoints';
import { APP_STORAGE } from './../../shared/constants/app-storage';
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get token from localStorage
  const token = localStorage.getItem(APP_STORAGE.token) ?? '';

  if (token) {
    const userRoleToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNmEyMDllZDNhMWUyOThmNTU2MjRiZTk4Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3ODE1NTI5NTF9._UnRfI20h83YVahARCDHaC_saHTcpCF4AjOvawzuxy8';
    const updatedToken = !(req.url.indexOf(ENDPOINTS.GET_ALL_STATISTICS) > -1)
      ? token
      : userRoleToken;
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${updatedToken}`,
        token: updatedToken,
      },
    });
    return next(cloned);
  }

  return next(req);
};
