import { Component, inject } from '@angular/core';
import { APP_ROUTES } from '../../constants/app-routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.component.html',
})
export class ServerErrorComponent {
  private _Router = inject(Router);

  goHome(): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.LANDING.ROOT,
      APP_ROUTES.LANDING.HOME,
    ]);
  }

  retry(): void {
    window.location.reload();
  }
}
