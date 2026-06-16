import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '@angular-c4-team3/auth';
import { FormValidationService } from '../../../../../shared/services/form-validation.service';
import { REGEX_PATTERNS } from 'apps/dashboard/src/app/shared/constants/regex-patterns';
import { APP_ROUTES } from 'apps/dashboard/src/app/shared/constants/app-routes';

import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { PasswordComponent } from 'apps/dashboard/src/app/shared/components/form-components/password/password.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-change-password',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PasswordComponent,
    ButtonComponent,
    TranslocoPipe,
  ],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  private _FormValidationService = inject(FormValidationService);
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  form!: FormGroup;

  currentPasswordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'Current password is required.',
    })
  );

  newPasswordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'New password is required.',
      pattern:
        'Password must contain uppercase, lowercase, number and special character.',
    })
  );

  rePasswordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['newPassword'], {
      required: 'Confirm new password is required.',
    })
  );

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PASSWORD),
      ]),
      newPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const sub = this._AuthService.changePassword(this.form.value).subscribe({
      next: () => {
        this._Router.navigate([
          '/',
          APP_ROUTES.DASHBOARD.ROOT,
          APP_ROUTES.DASHBOARD.ACCOUNT,
        ]);
      },
      error: err => console.error(err),
    });

    this.subscriptions.add(sub);
  }
}
