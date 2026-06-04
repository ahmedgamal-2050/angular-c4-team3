import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ArrowRight } from 'lucide-angular';
import { AddressCardComponent } from '../address-card/address-card.component';
import { ADDRESSES_DUMMY_DATA } from '../address-card/address.constants';
import { Address } from '../address-card/address.model';
import { AddressModalComponent } from '../address-modal/address-modal.component';

@Component({
  selector: 'app-stepper',
  imports: [
    ButtonComponent,
    TranslocoPipe,
    AddressCardComponent,
    AddressModalComponent,
  ],
  templateUrl: './stepper.component.html',
})
export class StepperComponent {
  readonly ArrowRight = ArrowRight;

  isAddAddressModalOpened = signal<boolean>(false);
  addresses = signal<Address[]>([]);

  submit() {
    console.log('submit');
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
