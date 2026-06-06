import { Component, input, output, signal } from '@angular/core';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TranslocoPipe } from '@jsverse/transloco';
import { AddressCardComponent } from '../../../../../../shared/components/address-card/address-card.component';
import { AddressModalComponent } from '../../../../../../shared/components/address-modal/address-modal.component';
import { ArrowRight } from 'lucide-angular';
import { Address } from '../../../../../../shared/components/address-card/address.model';
import { NewAddress } from '../../../../../../shared/components/address-modal/address-modal.model';

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

  addresses = input<Address[]>([]);
  nextStep = output<void>();
  addAddress = output<NewAddress>();

  isAddAddressModalOpened = signal<boolean>(false);
  selectedAddress = signal<Address | null>(null);

  next() {
    this.nextStep.emit();
  }

  selectAddress(id: number) {
    this.selectedAddress.set(
      this.addresses().find(addr => addr.id === id) || null
    );
  }

  openAddAddressModal() {
    this.isAddAddressModalOpened.set(true);
  }

  onAddressSaved(newAddress: NewAddress) {
    this.addAddress.emit(newAddress);
    this.isAddAddressModalOpened.set(false);
  }
}
