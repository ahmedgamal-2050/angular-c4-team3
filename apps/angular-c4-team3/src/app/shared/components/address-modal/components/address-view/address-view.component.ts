import { Component, input, output } from '@angular/core';
import { AddressCardComponent } from '../../../address-card/address-card.component';
import { Address } from '../../../address-card/address.model';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgTemplateOutlet } from '@angular/common';
import { ADDRESS_MODAL_MODE } from '../../address-modal.constants';

@Component({
  selector: 'app-address-view',
  imports: [AddressCardComponent, TranslocoPipe, NgTemplateOutlet],
  templateUrl: './address-view.component.html',
})
export class AddressViewComponent {
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  addresses = input<Address[]>([]);
  selectAddress = output<number>();
  switchMode = output<string>();

  onSelectAddress(id: number) {
    this.selectAddress.emit(id);
  }

  onSwitchMode(mode: string) {
    this.switchMode.emit(mode);
  }
}
