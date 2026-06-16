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
import {
  AddressDetailsForm,
  AddressItem,
  NewAddress,
} from './address-modal.model';
import { AddressDetailsFormComponent } from './components/address-details-form/address-details-form.component';
import { AddressLocationFormComponent } from './components/address-location-form/address-location-form.component';
import { DIALOG_PT } from '../../constants/pass-through';
import { APP_STORAGE } from '../../constants/app-storage';

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

  addresses = input.required<AddressItem[]>();
  isAddAddressModalOpened = input<boolean>(false);
  selectedAddress = input<AddressItem | null>(null);

  selectAddress = output<string>();
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

  onSelectAddress(id: string) {
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
    const user = JSON.parse(localStorage.getItem(APP_STORAGE.user) || 'null');
    const newAddress = {
      city: this.addressDetails()?.city || '',
      street: this.addressDetails()?.street || '',
      phone: this.addressDetails()?.phone || '',
      lat: coordinates.lat.toString(),
      long: coordinates.lng.toString(),
      username: user?.firstName + ' ' + user?.lastName,
    };

    this.saveAddress.emit(newAddress);
    this.switchMode(ADDRESS_MODAL_MODE.ADDRESS_VIEW);
  }
}
