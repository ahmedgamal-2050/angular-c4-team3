import { Component, input, output } from '@angular/core';
import { AddressCardComponent } from '../../../address-card/address-card.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgTemplateOutlet } from '@angular/common';
import { ADDRESS_MODAL_MODE } from '../../address-modal.constants';
import { AddressItem } from '../../address-modal.model';

@Component({
  selector: 'app-address-view',
  imports: [AddressCardComponent, TranslocoPipe, NgTemplateOutlet],
  templateUrl: './address-view.component.html',
})
export class AddressViewComponent {
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  addresses = input<AddressItem[]>([]);
  selectedAddress = input<AddressItem | null>(null);
  selectAddress = output<string>();
  editAddress = output<AddressItem>();
  deleteAddress = output<AddressItem>();
  switchMode = output<string>();

  onSelectAddress(id: string) {
    this.selectAddress.emit(id);
  }

  onSwitchMode(mode: string) {
    this.switchMode.emit(mode);
  }
}
