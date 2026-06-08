import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { forkJoin, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '@angular-c4-team3/auth';
import { APP_STORAGE } from 'apps/angular-c4-team3/src/app/shared/constants/app-storage';
import { APP_ROUTES } from 'apps/angular-c4-team3/src/app/shared/constants/app-routes';

import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';
import { SelectComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/select/select.component';
import { PhoneComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/phone/phone.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { FormValidationService } from '../../../../auth/services/FormValidationService';
import { REGEX_PATTERNS } from 'apps/angular-c4-team3/src/app/shared/constants/regex-patterns';
import { ConfirmDeleteModalComponent } from '../confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-account-setting',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    SelectComponent,
    PhoneComponent,
    ButtonComponent,
    TranslocoPipe,
    ConfirmDeleteModalComponent,
  ],
  templateUrl: './account-setting.component.html',
})
export class AccountSettingComponent implements OnInit, OnDestroy {
  private _FormValidationService = inject(FormValidationService);
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  form!: FormGroup;
  changePasswordForm!: FormGroup;

  previewUrl = signal<string | null>(null);
  pendingPhotoFormData = signal<FormData | null>(null);
  showChangePassword = signal(false);
  showDeleteModal = signal(false);

  genderOptions = signal([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

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

  currentPasswordErrors = computed(() =>
    this._FormValidationService.getErrors(
      this.changePasswordForm.controls['currentPassword'],
      { required: 'Current password is required.' }
    )
  );

  newPasswordErrors = computed(() =>
    this._FormValidationService.getErrors(
      this.changePasswordForm.controls['password'],
      {
        required: 'New password is required.',
        pattern:
          'Password must contain uppercase, lowercase, number and special character.',
      }
    )
  );

  rePasswordErrors = computed(() =>
    this._FormValidationService.getErrors(
      this.changePasswordForm.controls['rePassword'],
      { required: 'Confirm password is required.' }
    )
  );

  ngOnInit(): void {
    this.initializeForm();
    this.initializeChangePasswordForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initializeForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PHONE),
      ]),
      gender: new FormControl('', [Validators.required]),
    });
  }

  initializeChangePasswordForm(): void {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PASSWORD),
      ]),
      rePassword: new FormControl('', [Validators.required]),
    });
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('photo', file);
    this.pendingPhotoFormData.set(formData);

    const reader = new FileReader();
    reader.onload = () => this.previewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  onDeleteAccount(): void {
    this.showDeleteModal.set(true);
  }

  confirmDelete(): void {
    const sub = this._AuthService.deleteMyAccount().subscribe({
      next: () => {
        localStorage.removeItem(APP_STORAGE.token);
        localStorage.removeItem(APP_STORAGE.user);
        this._Router.navigate([
          '/',
          APP_ROUTES.AUTH.ROOT,
          APP_ROUTES.AUTH.LOGIN,
        ]);
      },
      error: err => console.error(err),
    });
    this.subscriptions.add(sub);
  }

  onChangePassword(): void {
    debugger;
    this._Router.navigate([
      '/',
      APP_ROUTES.DASHBOARD.ROOT,
      APP_ROUTES.DASHBOARD.CHANGE_PASSWORD,
    ]);
  }

  submitChangePassword(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const sub = this._AuthService
      .changePassword(this.changePasswordForm.value)
      .subscribe({
        next: () => {
          this.changePasswordForm.reset();
          this.showChangePassword.set(false);
        },
        error: err => console.error(err),
      });
    this.subscriptions.add(sub);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const profileUpdate$ = this._AuthService.editProfile(this.form.value).pipe(
      catchError(err => {
        console.error('Profile update failed:', err);
        return of(null);
      })
    );

    const photoFormData = this.pendingPhotoFormData();
    const photoUpdate$ = photoFormData
      ? this._AuthService.uploadProfilePhoto(photoFormData).pipe(
          catchError(err => {
            console.error('Photo upload failed:', err);
            return of(null);
          })
        )
      : of(null);

    const sub = forkJoin([profileUpdate$, photoUpdate$]).subscribe({
      next: () => {
        this.pendingPhotoFormData.set(null);
      },
    });

    this.subscriptions.add(sub);
  }
}
