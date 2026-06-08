import { Component, inject } from '@angular/core';
import { APP_ROUTES } from '../../constants/app-routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized-page',
  imports: [],
  templateUrl: './authorized-page.component.html',
})
export class AuthorizedPageComponent {
  private _Router = inject(Router);
  protected readonly APP_ROUTES = APP_ROUTES;

  goHome(): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.LANDING.ROOT,
      APP_ROUTES.LANDING.HOME,
    ]);
  }
}
