import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { InputComponent } from './shared/components/form-components/input/input.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { FormErrorService } from './shared/services/form-error.service';

@Component({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    TranslocoPipe,
    InputComponent,
    ThemeSwitcherComponent,
  ],
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
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  private readonly formErrorService = inject(FormErrorService);

  emailErrors = this.formErrorService.getErrorMessage(
    this.loginForm.controls.email,
    'Email',
  );

  passwordErrors = this.formErrorService.getErrorMessage(
    this.loginForm.controls.password,
    'Password',
  );

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
