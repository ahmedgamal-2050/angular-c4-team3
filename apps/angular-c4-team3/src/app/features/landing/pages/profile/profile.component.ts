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
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  LucideAngularModule,
  UserPen,
  Lock,
  LogOut,
  Plus,
} from 'lucide-angular';

import { AuthService } from '@angular-c4-team3/auth';
import { ButtonComponent } from '@angular-c4-team3/shared-design';

import { InputComponent } from '../../../../shared/components/form-components/input/input.component';
import { PhoneComponent } from '../../../../shared/components/form-components/phone/phone.component';
import { PasswordComponent } from '../../../../shared/components/form-components/password/password.component';
import { SelectComponent } from '../../../../shared/components/form-components/select/select.component';
import { FormValidationService } from '../../../auth/services/FormValidationService';
import { REGEX_PATTERNS } from '../../../../shared/constants/regex-patterns';
import { APP_STORAGE } from '../../../../shared/constants/app-storage';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

type ProfileTab = 'profile' | 'changePassword';

@Component({
  selector: 'app-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass,
    LucideAngularModule,
    InputComponent,
    PhoneComponent,
    PasswordComponent,
    ButtonComponent,
    TranslocoModule,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  private _formValidation = inject(FormValidationService);
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _transloco = inject(TranslocoService);
  private subscriptions = new Subscription();

  readonly UserIcon = UserPen;
  readonly LockIcon = Lock;
  readonly LogOutIcon = LogOut;
  readonly PlusIcon = Plus;

  activeTab = signal<ProfileTab>('profile');
  previewUrl = signal<string | null>(null);
  pendingPhotoFormData = signal<FormData | null>(null);
  showDeleteModal = signal(false);

  // genderOptions = toSignal(
  //   this._transloco.selectTranslation().pipe(
  //     map(() => [
  //       { label: this._transloco.translate('male'), value: 'male' },
  //       { label: this._transloco.translate('female'), value: 'female' },
  //       { label: this._transloco.translate('other'), value: 'other' },
  //     ])
  //   ),
  //   { initialValue: [] as { label: string; value: string }[] }
  // );

  profileForm!: FormGroup;
  changePasswordForm!: FormGroup;

  firstNameErrors = computed(() =>
    this._formValidation.getErrors(this.profileForm.controls['firstName'], {
      required: 'First name is required.',
    })
  );

  lastNameErrors = computed(() =>
    this._formValidation.getErrors(this.profileForm.controls['lastName'], {
      required: 'Last name is required.',
    })
  );

  emailErrors = computed(() =>
    this._formValidation.getErrors(this.profileForm.controls['email'], {
      required: 'Email is required.',
      email: 'Enter a valid email address.',
    })
  );

  phoneErrors = computed(() =>
    this._formValidation.getErrors(this.profileForm.controls['phone'], {
      required: 'Phone number is required.',
      pattern: 'Enter a valid phone number.',
    })
  );

  passwordErrors = computed(() =>
    this._formValidation.getErrors(
      this.changePasswordForm.controls['password'],
      {
        required: 'Password is required.',
        minlength: 'Password must be at least 8 characters.',
      }
    )
  );

  newPasswordErrors = computed(() => {
    const control = this.changePasswordForm.controls['newPassword'];
    const errors = this._formValidation.getErrors(control, {
      required: 'Confirm password is required.',
    });

    // Add custom error if passwords do not match
    if (
      this.changePasswordForm.hasError('passwordMismatch') &&
      control.touched
    ) {
      return ['Passwords do not match.'];
    }

    return errors;
  });

  ngOnInit(): void {
    this.initProfileForm();
    this.initChangePasswordForm();
    this.loadProfileData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initProfileForm(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_PATTERNS.PHONE),
      ]),
      // gender: new FormControl(''),
    });
  }

  private initChangePasswordForm(): void {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
    });
  }

  setTab(tab: ProfileTab): void {
    this.activeTab.set(tab);
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

  loadProfileData(): void {
    const sub = this._authService.profileData().subscribe({
      next: (res: any) => {
        const user = res.user || res.data || res;
        const phone = user.phone?.replace('+200', '+20');

        this.profileForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone,
          // gender: user.gender,
        });

        if (user.photo) {
          this.previewUrl.set(user.photo);
        }
      },
      error: err => console.error('Get profile data error:', err),
    });
    this.subscriptions.add(sub);
  }

  submitProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    const sub = this._authService
      .editProfile(this.profileForm.value)
      .subscribe({
        next: () => {
          const photoData = this.pendingPhotoFormData();
          if (photoData) {
            this.uploadPhoto(photoData);
          } else {
            this.loadProfileData();
          }
          this._router.navigate([
            '/',
            APP_ROUTES.AUTH.ROOT,
            APP_ROUTES.AUTH.LOGIN,
          ]);
        },
        error: err => console.error('Update profile error:', err),
      });
    this.subscriptions.add(sub);
  }

  private uploadPhoto(formData: FormData): void {
    const sub = this._authService.uploadProfilePhoto(formData).subscribe({
      next: () => {
        this.pendingPhotoFormData.set(null);
        this.loadProfileData();
      },
      error: err => console.error('Upload photo error:', err),
    });
    this.subscriptions.add(sub);
  }

  onDeleteAccount(): void {
    this.showDeleteModal.set(true);
  }

  confirmDelete(): void {
    const sub = this._authService.deleteMyAccount().subscribe({
      next: () => {
        localStorage.removeItem(APP_STORAGE.token);
        localStorage.removeItem(APP_STORAGE.user);
        this._router.navigate([
          '/',
          APP_ROUTES.AUTH.ROOT,
          APP_ROUTES.AUTH.LOGIN,
        ]);
      },
      error: err => console.error(err),
    });
    this.subscriptions.add(sub);
  }

  submitChangePassword(): void {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const { password, newPassword } = this.changePasswordForm.value;
    const sub = this._authService
      .changePassword({
        newPassword: newPassword,
        password: password,
      })
      .subscribe({
        next: () => {
          this.changePasswordForm.reset();
          this.activeTab.set('profile');
          this._router.navigate([
            '/',
            APP_ROUTES.AUTH.ROOT,
            APP_ROUTES.AUTH.LOGIN,
          ]);
        },
        error: err => console.error(err),
      });
    this.subscriptions.add(sub);
  }

  logout(): void {
    const sub = this._authService.logout().subscribe({
      next: () => this.clearSessionAndRedirect(),
      error: () => this.clearSessionAndRedirect(),
    });
    this.subscriptions.add(sub);
  }

  private clearSessionAndRedirect(): void {
    localStorage.removeItem(APP_STORAGE.token);
    localStorage.removeItem(APP_STORAGE.user);
    this._router.navigate(['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.LOGIN]);
  }
}
