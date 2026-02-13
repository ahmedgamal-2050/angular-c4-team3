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
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';
import { PasswordComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/password/password.component';
import { SelectComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/select/select.component';
import { PhoneComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/phone/phone.component';

// Pipes
import { TranslocoPipe } from '@jsverse/transloco';

// RxJS
import { Subscription } from 'rxjs';
import { DecoratedTitleComponent } from 'apps/angular-c4-team3/src/app/shared/components/decorated-title/decorated-title.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    RouterLink,
    TranslocoPipe,
    ButtonComponent,
    PasswordComponent,
    SelectComponent,
    PhoneComponent,
    DecoratedTitleComponent,
  ],
  standalone: true,
})
export class RegisterPage implements OnInit, OnDestroy {
  private _AuthService = inject(AuthService);
  private _FormValidationService = inject(FormValidationService);

  // Form Group
  form!: FormGroup;

  // Subscription container for unsubscribing
  private subscriptions = new Subscription();

  // Gender options for dropdown
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  // Computed properties for form errors
  firstNameErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['firstName'], {
      required: 'First name is required.',
    }),
  );

  lastNameErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['lastName'], {
      required: 'Last name is required.',
    }),
  );

  emailErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['email'], {
      required: 'Email is required.',
      email: 'Enter a valid email address.',
    }),
  );

  phoneErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['phone'], {
      required: 'Phone number is required.',
      pattern: 'Enter a valid phone number.',
    }),
  );

  genderErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['gender'], {
      required: 'Gender is required.',
    }),
  );

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

  ngOnInit() {
    // Initialize the reactive form
    this.initializeForm();
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.unsubscribe();
  }

  /** Initialize the form and validators */
  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10,}$/),
      ]),
      countryCode: new FormControl('EG(+20)'),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    // Apply custom validator for password matching
    this.form.setValidators(this.passwordMatchValidator);
  }

  /** Custom validator to check if password and confirmPassword match */
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  /** Submit form data to the backend */
  submit() {
    if (this.form.invalid) {
      // Mark all fields as touched to show validation errors
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };

    // Subscribe to the registration observable and add to subscription container
    const sub = this._AuthService.register(payload).subscribe({
      next: (res: AuthResponse) => {
        // Store token and email in localStorage
        localStorage.setItem('token', res.token);
        localStorage.setItem('userEmail', res.email);
        console.log('Registration successful:', res);
      },
      error: (err) => {
        console.error('Registration failed:', err);
      },
    });

    this.subscriptions.add(sub);
  }
}
