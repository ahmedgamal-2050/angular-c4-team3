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
        Validators.pattern(/^\d{10,}$/),
      ]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        ),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        ),
      ]),
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

    if (payload.phone && payload.phone.startsWith('01')) {
      payload.phone = '+20' + payload.phone.substring(1);
    }

    this._AuthService.register(payload).subscribe({
      next: (res) => {
        console.log('Success');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
