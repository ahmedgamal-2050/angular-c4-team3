import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { DialogModule, DialogPassThrough } from 'primeng/dialog';
import { Address } from '../address-card/address.model';
import { AddressCardComponent } from '../address-card/address-card.component';
import {
  ADDRESS_MODAL_MODE,
  AddressModalMode,
} from './address-modal.constants';

@Component({
  selector: 'app-address-modal',
  imports: [
    NgTemplateOutlet,
    DialogModule,
    TranslocoPipe,
    AddressCardComponent,
  ],
  templateUrl: './address-modal.component.html',
})
export class AddressModalComponent {
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  addresses = input.required<Address[]>();
  isAddAddressModalOpened = input<boolean>(false);
  selectAddress = output<number>();

  dialogPt = signal<DialogPassThrough>({
    root: {
      class: '!bg-white !p-6 !rounded-2xl',
    },
    mask: {
      class: '!bg-black/50',
    },
  });
  addressMode = signal<AddressModalMode>(ADDRESS_MODAL_MODE.ADDRESS_VIEW);

  onSelectAddress(id: number) {
    this.selectAddress.emit(id);
  }

  switchMode(mode: AddressModalMode) {
    this.addressMode.set(mode);
  }
}
