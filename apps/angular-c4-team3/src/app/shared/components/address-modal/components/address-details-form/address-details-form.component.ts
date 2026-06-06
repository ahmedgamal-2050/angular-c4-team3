import { Component, computed, inject, output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../../features/auth/services/FormValidationService';
import { TranslocoPipe } from '@jsverse/transloco';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../form-components/input/input.component';
import { TextareaComponent } from '../../../form-components/textarea/textarea.component';
import { PhoneComponent } from '../../../form-components/phone/phone.component';
import { AddressDetailsForm } from '../../address-modal.model';
import { Title } from '@angular/platform-browser';

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

  next = output<AddressDetailsForm>();

  // Reactive Address Form
  addressForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  titleErrors = computed(() =>
    this._FormValidationService.getErrors(this.addressForm.controls.title, {
      required: 'Title is required.',
    })
  );

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

  onNext() {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    this.next.emit(this.addressForm.value as AddressDetailsForm);
  }
}
