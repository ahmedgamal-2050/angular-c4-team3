import { Component, output, signal } from '@angular/core';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TranslocoPipe } from '@jsverse/transloco';
import { AddressCardComponent } from '../../../../../../shared/components/address-card/address-card.component';
import { AddressModalComponent } from '../../../../../../shared/components/address-modal/address-modal.component';
import { ArrowRight } from 'lucide-angular';
import { Address } from '../../../../../../shared/components/address-card/address.model';

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

  nextStep = output<void>();

  isAddAddressModalOpened = signal<boolean>(false);
  addresses = signal<Address[]>([]);

  next() {
    this.nextStep.emit();
  }

  selectAddress(id: number) {
    this.addresses.update(prev =>
      prev.map(item => ({
        ...item,
        selected: item.id === id,
      }))
    );
  }

  openAddAddressModal() {
    this.isAddAddressModalOpened.set(true);
  }
}
