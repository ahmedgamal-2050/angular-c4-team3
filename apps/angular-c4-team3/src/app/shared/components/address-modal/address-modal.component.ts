import { Component, computed, input, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { DialogModule, DialogPassThrough } from 'primeng/dialog';
import { LucideAngularModule, MapPin } from 'lucide-angular';
import { Address } from '../address-card/address.model';
import {
  ADDRESS_MODAL_MODE,
  AddressModalMode,
} from './address-modal.constants';
import { StepperComponent } from '../stepper/stepper.component';
import { AddressViewComponent } from './components/address-view/address-view.component';
import { AddressDetailsForm, NewAddress } from './address-modal.model';
import { AddressDetailsFormComponent } from './components/address-details-form/address-details-form.component';
import { AddressLocationFormComponent } from './components/address-location-form/address-location-form.component';
import { DIALOG_PT } from '../../constants/pass-through';

@Component({
  selector: 'app-address-modal',
  imports: [
    DialogModule,
    TranslocoPipe,
    StepperComponent,
    LucideAngularModule,
    AddressViewComponent,
    AddressDetailsFormComponent,
    AddressLocationFormComponent,
  ],
  templateUrl: './address-modal.component.html',
})
export class AddressModalComponent {
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;
  readonly MapPin = MapPin;

  addresses = input.required<Address[]>();
  isAddAddressModalOpened = input<boolean>(false);
  selectAddress = output<number>();
  saveAddress = output<NewAddress>();
  closeAddressModal = output<void>();

  dialogPt = signal<DialogPassThrough>(DIALOG_PT);
  addressMode = signal<AddressModalMode>(ADDRESS_MODAL_MODE.ADDRESS_VIEW);
  addressDetails = signal<AddressDetailsForm | null>(null);

  currentActiveStep = computed(() => {
    switch (this.addressMode()) {
      case ADDRESS_MODAL_MODE.ADDRESS_DETAILS:
        return 1;
      case ADDRESS_MODAL_MODE.ADDRESS_LOCATION:
        return 2;
      default:
        return 1;
    }
  });

  onSelectAddress(id: number) {
    this.selectAddress.emit(id);
  }

  switchMode(mode: AddressModalMode) {
    this.addressMode.set(mode);
  }

  onNext(addressDetails: AddressDetailsForm) {
    this.addressDetails.set(addressDetails);
    this.switchMode(ADDRESS_MODAL_MODE.ADDRESS_LOCATION);
  }

  onSave(coordinates: google.maps.LatLngLiteral) {
    const newAddress = {
      title: this.addressDetails()?.title || '',
      city: this.addressDetails()?.city || '',
      street: this.addressDetails()?.street || '',
      phone: this.addressDetails()?.phone || '',
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      isPrimary: this.addresses().length === 0,
    };

    this.saveAddress.emit(newAddress);
    this.switchMode(ADDRESS_MODAL_MODE.ADDRESS_VIEW);
  }
}
