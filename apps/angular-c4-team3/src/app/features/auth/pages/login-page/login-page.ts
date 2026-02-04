// eslint-disable-next-line @nx/enforce-module-boundaries
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AuthResponse } from '../../auth.modal';
import { AuthService } from '../../services/auth';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FormsModule, InputTextModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private authService: AuthService) {
    console.log('login pages');
  }
  ngOnInit() {
    this.initialForm();
  }

  form!: FormGroup;

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
    this.authService.login(payload).subscribe({
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
