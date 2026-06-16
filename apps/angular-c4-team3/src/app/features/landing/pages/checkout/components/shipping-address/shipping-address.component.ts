import {
  Component,
  input,
  output,
  signal,
  inject,
  DestroyRef,
} from '@angular/core';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TranslocoPipe } from '@jsverse/transloco';
import { AddressCardComponent } from '../../../../../../shared/components/address-card/address-card.component';
import { AddressModalComponent } from '../../../../../../shared/components/address-modal/address-modal.component';
import { ArrowRight } from 'lucide-angular';
import {
  AddressItem,
  NewAddress,
} from '../../../../../../shared/components/address-modal/address-modal.model';
import { AddressService } from 'apps/angular-c4-team3/src/app/core/services/address/address.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-shipping-address',
  imports: [
    ButtonComponent,
    TranslocoPipe,
    AddressCardComponent,
    AddressModalComponent,
  ],
  templateUrl: './shipping-address.component.html',
})
export class ShippingAddressComponent {
  readonly ArrowRight = ArrowRight;

  readonly addressService = inject(AddressService);
  readonly destroyRef = inject(DestroyRef);

  addresses = input<AddressItem[]>([]);
  nextStep = output<void>();
  addAddress = output<NewAddress>();
  updateAddressList = output<void>();

  isAddAddressModalOpened = signal<boolean>(false);
  selectedAddress = signal<AddressItem | null>(null);

  next() {
    this.nextStep.emit();
  }

  selectAddress(id: string) {
    this.selectedAddress.set(
      this.addresses().find(addr => addr._id === id) || null
    );
  }

  openAddAddressModal() {
    this.isAddAddressModalOpened.set(true);
  }

  onAddressSaved(newAddress: NewAddress) {
    this.addAddress.emit(newAddress);
    this.isAddAddressModalOpened.set(false);
  }

  handleEditAddress(address: AddressItem) {
    const editedAddress = {
      city: address.city,
      street: address.street,
      phone: address.phone,
      lat: address.lat,
      long: address.long,
      username: address.username,
    };
    this.addressService
      .updateAddress(editedAddress, address._id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.isAddAddressModalOpened.set(false);
          this.updateAddressList.emit();
        },
      });
  }

  handleDeleteAddress(address: AddressItem) {
    this.addressService
      .deleteAddress(address._id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.isAddAddressModalOpened.set(false);
          this.updateAddressList.emit();
        },
      });
  }
}
