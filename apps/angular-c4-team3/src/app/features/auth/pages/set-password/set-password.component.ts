/* eslint-disable @nx/enforce-module-boundaries */
import { Component, computed, OnInit, OnDestroy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

// Services & Models
import { AuthService } from '../../services/auth';
import { AuthResponse } from '../../auth.modal';
import { FormValidationService } from '../../services/FormValidationService';

// Shared UI Components
import { ButtonComponent } from './../../../../../../../../shared-design/src/lib/button/button.component';
import { PasswordComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component';

// Pipes
import { TranslocoPipe } from '@jsverse/transloco';

// RxJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-set-password',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PasswordComponent,
    RouterLink,
    TranslocoPipe,
    ButtonComponent,
  ],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.css',
})
export class SetPasswordComponent implements OnInit, OnDestroy {
  private _AuthService = inject(AuthService);
  private _FormValidationService = inject(FormValidationService);

  // Reactive form
  form!: FormGroup;

  // Subscription container
  private subscriptions = new Subscription();

  // Computed properties for form errors

  passwordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'Password is required.',
      minlength: 'Password must be at least 8 characters.',
    }),
  );

  confirmPasswordErrors = computed(() => {
    const control = this.form.controls['confirmPassword'];
    const errors = this._FormValidationService.getErrors(control, {
      required: 'Confirm password is required.',
    });

    // Add custom error if passwords do not match
    if (this.form.hasError('passwordMismatch') && control.touched) {
      return ['Passwords do not match.'];
    }

    return errors;
  });

  /** Custom validator to check if password and confirmPassword match */
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

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
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    // Apply custom validator for password matching
    this.form.setValidators(this.passwordMatchValidator);
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
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });

    this.subscriptions.add(sub);
  }
}
