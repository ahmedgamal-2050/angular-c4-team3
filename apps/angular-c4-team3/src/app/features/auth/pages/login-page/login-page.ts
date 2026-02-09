/* eslint-disable @nx/enforce-module-boundaries */
import { Component, computed, OnInit, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from "@angular/router";

// Services & Models
import { AuthService } from '../../services/auth';
import { AuthResponse } from '../../auth.modal';
import { FormValidationService } from '../../services/FormValidationService';

// Shared UI Components
import { ButtonComponent } from './../../../../../../../../shared-design/src/lib/button/button.component';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';
import { PasswordComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component';

// Pipes
import { TranslocoPipe } from '@jsverse/transloco';

// RxJS
import { Subscription } from 'rxjs';

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
    ButtonComponent
  ],
  standalone: true
})
export class LoginPage implements OnInit, OnDestroy {

  // Reactive form
  form!: FormGroup;

  // Subscription container
  private subscriptions = new Subscription();

  // Computed properties for form errors
  emailErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['email'], {
      required: 'Email is required.',
      email: 'Enter a valid email address.',
    })
  );

  passwordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'Password is required.',
      minlength: 'Password must be at least 8 characters.',
    })
  );

  constructor(
    private _AuthService: AuthService,
    private _FormValidationService: FormValidationService
  ) {}

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
