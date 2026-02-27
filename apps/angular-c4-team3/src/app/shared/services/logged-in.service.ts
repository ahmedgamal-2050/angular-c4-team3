import { computed, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_STORAGE } from '../constants/app-storage';
import { User } from '@angular-c4-team3/auth';

@Injectable({
  providedIn: 'root',
})
export class LoggedInService {
  private _router = inject(Router);

  isLoggedIn = computed<boolean>(() => localStorage.getItem(APP_STORAGE.token) !== null);
  user = computed<User | null>(() => localStorage.getItem(APP_STORAGE.user) !== null ? JSON.parse(localStorage.getItem(APP_STORAGE.user) || '{}') : null);

  logout() {
    localStorage.removeItem(APP_STORAGE.token);
    localStorage.removeItem(APP_STORAGE.user);
    this._router.navigate(['/auth/login']);
  }
}