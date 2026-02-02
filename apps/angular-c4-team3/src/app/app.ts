import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { InputComponent } from './layout/components/form-components/input/input.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [RouterModule, ReactiveFormsModule, TranslocoPipe, InputComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  translocoService = inject(TranslocoService);
  private fb = inject(FormBuilder);
  lang = signal(this.translocoService.getActiveLang());

  loginForm = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(8)],
      nonNullable: true,
    }),
  });

  emailErrors = computed(() => {
    const control = this.loginForm.controls.email;
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
    const control = this.loginForm.controls.password;
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

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.lang.set(lang);
  }

  submitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const credentials = this.loginForm.getRawValue();
    console.log('Login submitted', credentials);
  }
}
