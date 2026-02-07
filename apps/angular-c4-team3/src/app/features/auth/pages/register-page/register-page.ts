import { Component, computed, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthResponse } from '../../auth.modal';
import { AuthService } from '../../services/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InputComponent } from 'apps/angular-c4-team3/src/app/layout/components/form-components/input/input.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";
import { FormValidationService } from '../../services/FormValidationService';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, FormsModule, InputComponent, RouterLink, TranslocoPipe],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {
  form!: FormGroup;

  // gender-dropdown.component.ts أو نفس الـ Component
genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

  firstNameErrors = computed(() => 
    this._FormValidationService.getErrors(this.form.controls['firstName'], {
      required: 'First name is required.',
    })
  );

  lastNameErrors = computed(() => 
    this._FormValidationService.getErrors(this.form.controls['lastName'], {
      required: 'Last name is required.',
    })
  );

  emailErrors = computed(() => 
    this._FormValidationService.getErrors(this.form.controls['email'], {
      required: 'Email is required.',
      email: 'Enter a valid email address.',
    })
  );

  phoneErrors = computed(() => 
    this._FormValidationService.getErrors(this.form.controls['phone'], {
      required: 'Phone number is required.',
      pattern: 'Enter a valid phone number.',
    })
  );

  genderErrors = computed(() => 
    this._FormValidationService.getErrors(this.form.controls['gender'], {
      required: 'Gender is required.',
    })
  );

  passwordErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['password'], {
      required: 'Password is required.',
      minlength: 'Password must be at least 8 characters.',
    })
  );

  confirmPasswordErrors = computed(() => {
    const control = this.form.controls['confirmPassword'];
    const errors = this._FormValidationService.getErrors(control, {
      required: 'Confirm password is required.',
    });
    
    if (this.form.hasError('passwordMismatch') && control.touched) {
      return ['Passwords do not match.'];
    }
    
    return errors;
  });

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _AuthService: AuthService,
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _FormValidationService: FormValidationService
  ) {}

  ngOnInit() {
    this.initialForm();
  }

  initialForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,}$/)]),
      countryCode: new FormControl('EG(+20)'),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    
    this.form.setValidators(this.passwordMatchValidator);
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };
    this._AuthService.register(payload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userEmail', res.email);
      },
      error: (err) => {
        console.error('Registration failed:', err);
      },
    });
  }
}