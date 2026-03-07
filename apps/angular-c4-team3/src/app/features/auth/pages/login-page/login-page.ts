/* eslint-disable @nx/enforce-module-boundaries */
import { Component, computed, OnInit, OnDestroy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Services & Models
import { AuthResponse } from '../../auth.modal';
import { FormValidationService } from '../../services/FormValidationService';
import { AuthService } from '@angular-c4-team3/auth';

// Shared UI Components
import { ButtonComponent } from './../../../../../../../../shared-design/src/lib/button/button.component';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';
import { PasswordComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component';

// Pipes
import { TranslocoPipe } from '@jsverse/transloco';

// RxJS
import { Subscription } from 'rxjs';
import { DecoratedTitleComponent } from 'apps/angular-c4-team3/src/app/shared/components/decorated-title/decorated-title.component';
import { APP_STORAGE } from 'apps/angular-c4-team3/src/app/shared/constants/app-storage';
import { APP_ROUTES } from 'apps/angular-c4-team3/src/app/shared/constants/app-routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    PasswordComponent,
    RouterLink,
    TranslocoPipe,
    ButtonComponent,
    DecoratedTitleComponent,
  ],
  standalone: true,
})
export class LoginPage implements OnInit, OnDestroy {
  private _AuthService = inject(AuthService);
  private _FormValidationService = inject(FormValidationService);
  private _Router = inject(Router);
  
  protected readonly APP_ROUTES = APP_ROUTES;

  // Reactive form
  form!: FormGroup;

  // Subscription container
  private subscriptions = new Subscription();

  // Computed properties for form errors
  emailErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['email'], {
      required: 'Email is required.',
      email: 'Enter a valid email address.',
    }),
  );

  passwordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'Password is required.',
      minlength: 'Password must be at least 8 characters.',
    }),
  );

  ngOnInit() {
    // Initialize the login form
    this.initializeForm();
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscriptions.unsubscribe();
  }

  /** Initialize reactive form with validators */
  initializeForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  /** Submit login form */
  submit() {
    if (this.form.invalid) {
      // Mark all fields as touched to show validation errors
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };

    // Subscribe to login observable and add it to the subscription container
    const sub = this._AuthService.login(payload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem(APP_STORAGE.token, res.token);
        localStorage.setItem(APP_STORAGE.user, JSON.stringify(res.user));
        this._Router.navigate(['/', APP_ROUTES.LANDING.ROOT, APP_ROUTES.LANDING.HOME]);
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });

    this.subscriptions.add(sub);
  }
}
