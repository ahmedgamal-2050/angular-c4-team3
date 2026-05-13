/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { FormValidationService } from 'apps/angular-c4-team3/src/app/features/auth/services/FormValidationService';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PhoneComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/phone/phone.component';
import { LucideAngularModule, X } from 'lucide-angular';

export interface AddressData {
  id: number;
  label: string;
  city: string;
  address: string;
  phone: string;
  selected?: boolean;
}

type ViewMode = 'list' | 'form';

@Component({
  selector: 'app-add-address-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    LucideAngularModule,
    PhoneComponent,
  ],
  templateUrl: './add-address-dialog.component.html',
  styleUrl: './add-address-dialog.component.css',
})
export class AddAddressDialogComponent implements OnChanges {
  // ⭐ Inputs
  @Input() isOpen = false;
  @Input() addresses: AddressData[] = [];

  // ⭐ Outputs
  @Output() closed = new EventEmitter<void>();
  @Output() addressAdded = new EventEmitter<AddressData>();
  @Output() addressUpdated = new EventEmitter<AddressData>();
  @Output() addressDeleted = new EventEmitter<number>();

  readonly CloseIcon = X;

  private fb = inject(FormBuilder);

  view: ViewMode = 'list';
  editingId: number | null = null;

  addressForm: FormGroup = this.fb.group({
    label: ['Home', [Validators.required]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^(\+?20)?1[0-25][0-9]{8}$/)],
    ],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen) {
      this.view = 'list';
      this.editingId = null;
      this.addressForm.reset({ label: 'Home' });
    }
  }

  switchToForm() {
    this.editingId = null;
    this.addressForm.reset({ label: 'Home' });
    this.view = 'form';
  }

  switchToList() {
    this.editingId = null;
    this.addressForm.reset({ label: 'Home' });
    this.view = 'list';
  }

  editAddress(id: number) {
    const addr = this.addresses.find(a => a.id === id);
    if (!addr) return;

    this.editingId = id;
    this.addressForm.patchValue({
      label: addr.label,
      city: addr.city,
      address: addr.address,
      phone: addr.phone,
    });
    this.view = 'form';
  }

  deleteAddress(id: number) {
    this.addressDeleted.emit(id);
  }

  close() {
    this.addressForm.reset({ label: 'Home' });
    this.view = 'list';
    this.editingId = null;
    this.closed.emit();
  }

  onSubmit() {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    const formValue = this.addressForm.value as AddressData;

    if (this.editingId !== null) {
      this.addressUpdated.emit({
        ...formValue,
        id: this.editingId,
      });
    } else {
      this.addressAdded.emit(formValue);
    }

    this.addressForm.reset({ label: 'Home' });
    this.view = 'list';
    this.editingId = null;
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.addressForm.get(controlName);
    return !!(control?.touched && control?.hasError(errorName));
  }

  private _FormValidationService = inject(FormValidationService);

  phoneErrors = computed(() =>
    this._FormValidationService.getErrors(this.addressForm.controls['phone'], {
      required: 'Phone number is required.',
      pattern: 'Enter a valid phone number.',
    })
  );
}
