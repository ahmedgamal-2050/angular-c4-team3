/* eslint-disable @nx/enforce-module-boundaries */
import { Component, computed, OnInit, OnDestroy, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Services & Models
import { AuthResponse } from '../../auth.modal';
import { FormValidationService } from '../../services/FormValidationService';
import { AuthService } from '@angular-c4-team3/auth';

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
import { REGEX_PATTERNS } from '../../../../shared/constants/regex-patterns';
import { APP_STORAGE } from 'apps/angular-c4-team3/src/app/shared/constants/app-storage';
import { APP_ROUTES } from 'apps/angular-c4-team3/src/app/shared/constants/app-routes';

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
  private _Router = inject(Router);
    
  protected readonly APP_ROUTES = APP_ROUTES;

  // Form Group
  form!: FormGroup;

  // Subscription container for unsubscribing
  private subscriptions = new Subscription();

  // Gender options for dropdown
  genderOptions = signal([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

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
      pattern:
        'Password must contain uppercase, lowercase, number and special character.',
    }),
  );

  rePasswordErrors = computed(() => {
    const control = this.form.controls['rePassword'];
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
        Validators.pattern(REGEX_PATTERNS.PHONE),
      ]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(REGEX_PATTERNS.PASSWORD)]),
      rePassword: new FormControl('', [Validators.required]),
    });

    // Apply custom validator for password matching
    this.form.setValidators(this.passwordMatchValidator);
  }

  /** Custom validator to check if password and rePassword match */
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const rePassword = formGroup.get('rePassword')?.value;
    return password === rePassword ? null : { passwordMismatch: true };
  }

  /** Submit form data to the backend */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };

    // Subscribe to the registration observable and add to subscription container
    const sub = this._AuthService.register(payload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem(APP_STORAGE.token, res.token);
        localStorage.setItem(APP_STORAGE.user, JSON.stringify(res.user));
        this._Router.navigate(['/', APP_ROUTES.LANDING.ROOT, APP_ROUTES.LANDING.HOME]);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.subscriptions.add(sub);
  }
}
