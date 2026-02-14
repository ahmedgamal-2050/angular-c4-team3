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
import { AuthService } from '../../services/auth';
import { AuthResponse } from '../../auth.modal';
import { FormValidationService } from '../../services/FormValidationService';

// Shared UI Components
import { ButtonComponent } from './../../../../../../../../shared-design/src/lib/button/button.component';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';

// Pipes
import { TranslocoPipe } from '@jsverse/transloco';

// RxJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forget-password',
  imports: [    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    RouterLink,
    TranslocoPipe,
    ButtonComponent,
    ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  private _AuthService = inject(AuthService);
  private _FormValidationService = inject(FormValidationService);
  private _Router = inject(Router);

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
        localStorage.setItem('token', res.token);
        localStorage.setItem('userEmail', res.email);
        console.log('Login successful:', res);
        localStorage.setItem('passedForgetPassword', 'true');
        this._Router.navigate(['/auth/set-password'])
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });

    this.subscriptions.add(sub);
  }
}
