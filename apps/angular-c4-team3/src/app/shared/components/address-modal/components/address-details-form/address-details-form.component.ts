import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../../features/auth/services/FormValidationService';
import { TranslocoPipe } from '@jsverse/transloco';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../form-components/input/input.component';
import { TextareaComponent } from '../../../form-components/textarea/textarea.component';
import { PhoneComponent } from '../../../form-components/phone/phone.component';
import { AddressDetailsForm, AddressItem } from '../../address-modal.model';

@Component({
  selector: 'app-address-details-form',
  imports: [
    TranslocoPipe,
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    PhoneComponent,
  ],
  templateUrl: './address-details-form.component.html',
})
export class AddressDetailsFormComponent {
  private _FormValidationService = inject(FormValidationService);

  address = input<AddressItem | null>(null);
  next = output<AddressDetailsForm>();

  // Reactive Address Form
  addressForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  cityErrors = computed(() =>
    this._FormValidationService.getErrors(this.addressForm.controls.city, {
      required: 'City is required.',
    })
  );

  addressErrors = computed(() =>
    this._FormValidationService.getErrors(this.addressForm.controls.street, {
      required: 'Address is required.',
    })
  );

  phoneErrors = computed(() =>
    this._FormValidationService.getErrors(this.addressForm.controls.phone, {
      required: 'Phone number is required.',
    })
  );

  fillAddress = effect(() => {
    const address = this.address();
    if (address) {
      this.addressForm.patchValue({
        city: address.city,
        street: address.street,
        phone: address.phone.replace('+20', ''),
      });
    }
  });

  onNext() {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    this.next.emit(this.addressForm.value as AddressDetailsForm);
  }
}
