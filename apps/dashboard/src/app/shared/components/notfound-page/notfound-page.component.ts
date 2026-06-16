import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes';

@Component({
  selector: 'app-notfound-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notfound-page.component.html',
})
export class NotfoundPageComponent {
  private _Router = inject(Router);

  goHome(): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.LANDING.ROOT,
      APP_ROUTES.LANDING.HOME,
    ]);
  }
}
