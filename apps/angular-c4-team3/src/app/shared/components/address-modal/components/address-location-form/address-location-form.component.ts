import { Component, input, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, MapPin } from 'lucide-angular';
import {
  ADDRESS_MODAL_MODE,
  AddressModalMode,
} from '../../address-modal.constants';

@Component({
  selector: 'app-address-location-form',
  imports: [TranslocoPipe, LucideAngularModule],
  templateUrl: './address-location-form.component.html',
})
export class AddressLocationFormComponent {
  readonly MapPin = MapPin;
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  switchMode = output<AddressModalMode>();
  saveAddress = output<void>();

  onSave() {
    this.saveAddress.emit();
  }

  onSwitchMode(mode: AddressModalMode) {
    this.switchMode.emit(mode);
  }
}
