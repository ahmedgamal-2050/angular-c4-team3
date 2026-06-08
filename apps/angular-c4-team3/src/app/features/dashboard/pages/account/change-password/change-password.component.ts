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
import { FormValidationService } from '../../../../auth/services/FormValidationService';
import { REGEX_PATTERNS } from 'apps/angular-c4-team3/src/app/shared/constants/regex-patterns';
import { APP_ROUTES } from 'apps/angular-c4-team3/src/app/shared/constants/app-routes';

import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { PasswordComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component';
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
    this._FormValidationService.getErrors(
      this.form.controls['currentPassword'],
      {
        required: 'Current password is required.',
      }
    )
  );

  newPasswordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'New password is required.',
      pattern:
        'Password must contain uppercase, lowercase, number and special character.',
    })
  );

  rePasswordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['rePassword'], {
      required: 'Confirm new password is required.',
    })
  );

  ngOnInit(): void {
    this.form = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PASSWORD),
      ]),
      rePassword: new FormControl('', [Validators.required]),
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
