/* eslint-disable @angular-eslint/prefer-inject */
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Component, computed, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthResponse } from '../../auth.modal';
import { AuthService } from '../../services/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InputComponent } from 'apps/angular-c4-team3/src/app/layout/components/form-components/input/input.component';
import { TranslocoService } from '@jsverse/transloco';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FormsModule, InputComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  lang = signal<string>('English');
  emailErrors = computed(() => {
    const control = this.form.controls['email'];
    if (!(control.touched || control.dirty)) {
      return [];
    }
    const errors: string[] = [];
    if (control.hasError('required')) {
      errors.push('Email is required.');
    }
    if (control.hasError('email')) {
      errors.push('Enter a valid email address.');
    }
    return errors;
  });
  passwordErrors = computed(() => {
    const control = this.form.controls['password'];
    if (!(control.touched || control.dirty)) {
      return [];
    }
    const errors: string[] = [];
    if (control.hasError('required')) {
      errors.push('Password is required.');
    }
    if (control.hasError('minlength')) {
      errors.push('Password must be at least 8 characters.');
    }
    return errors;
  });
  constructor(
    private _AuthService: AuthService,
    private translocoService: TranslocoService,
  ) {
    this.lang = signal(this.translocoService.getActiveLang());
  }
  ngOnInit() {
    this.initialForm();
  }
  initialForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }
    const payload = { ...this.form.value };
    this._AuthService.login(payload).subscribe({
      next: (res: AuthResponse) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userEmail', res.email);
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.lang.set(lang);
  }
}
