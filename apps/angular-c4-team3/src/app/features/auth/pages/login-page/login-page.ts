// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent } from './../../../../../../../../shared-design/src/lib/button/button.component';
import { Component, computed, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthResponse } from '../../auth.modal';
import { AuthService } from '../../services/auth';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { InputComponent } from 'apps/angular-c4-team3/src/app/layout/components/form-components/input/input.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";
import { FormValidationService } from '../../services/FormValidationService';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FormsModule, InputComponent, RouterLink, TranslocoPipe,ButtonComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  form!: FormGroup;

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
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _AuthService: AuthService,
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _FormValidationService: FormValidationService // <-- inject service
  ) {}

  ngOnInit() {
    this.initialForm();
  }

  initialForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
}
