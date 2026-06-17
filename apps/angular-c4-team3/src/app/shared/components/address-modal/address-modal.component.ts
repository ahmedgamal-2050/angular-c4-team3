import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { DialogModule, DialogPassThrough } from 'primeng/dialog';
import { LucideAngularModule, MapPin } from 'lucide-angular';
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
import { CONFIRM_DIALOG_PT, DIALOG_PT } from '../../constants/pass-through';
import { APP_STORAGE } from '../../constants/app-storage';
import {
  ConfirmDialogModule,
  ConfirmDialogPassThrough,
} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

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
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './address-modal.component.html',
})
export class AddressModalComponent {
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;
  readonly MapPin = MapPin;

  private confirmationService = inject(ConfirmationService);
  private transloco = inject(TranslocoService);

  addresses = input.required<AddressItem[]>();
  isAddAddressModalOpened = input<boolean>(false);
  selectedAddress = input<AddressItem | null>(null);

  selectAddress = output<string>();
  saveAddress = output<NewAddress>();
  closeAddressModal = output<void>();
  editAddress = output<AddressItem>();
  deleteAddress = output<AddressItem>();

  dialogPt = signal<DialogPassThrough>(DIALOG_PT);
  addressMode = signal<AddressModalMode>(ADDRESS_MODAL_MODE.ADDRESS_VIEW);
  addressDetails = signal<AddressDetailsForm | null>(null);
  addressEditing = signal<AddressItem | null>(null);
  formMode = signal<'add' | 'edit'>('add');
  confirmDialogPt = signal<ConfirmDialogPassThrough>(CONFIRM_DIALOG_PT);

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

  handleEditAddress(address: AddressItem) {
    this.addressEditing.set(address);
    this.formMode.set('edit');
    this.addressMode.set(ADDRESS_MODAL_MODE.ADDRESS_DETAILS);
  }

  handleDeleteAddress(address: AddressItem) {
    this.confirmationService.confirm({
      message: this.transloco.translate(
        'Are you sure you want to delete this address?'
      ),
      accept: () => {
        this.deleteAddress.emit(address);
      },
      acceptLabel: this.transloco.translate('Confirm'),
      rejectLabel: this.transloco.translate('Cancel'),
    });
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

    if (this.formMode() === 'add') {
      this.saveAddress.emit(newAddress);
    } else {
      this.editAddress.emit({
        ...newAddress,
        _id: this.addressEditing()?._id || '',
      });
      this.addressEditing.set(null);
    }
    this.switchMode(ADDRESS_MODAL_MODE.ADDRESS_VIEW);
  }
}
