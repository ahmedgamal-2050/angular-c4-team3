import { Component, computed, input, output } from '@angular/core';
import { Address } from './address.model';
import {
  LucideAngularModule,
  Phone,
  MapPin,
  PenLine,
  Trash2,
} from 'lucide-angular';

@Component({
  selector: 'app-address-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './address-card.component.html',
})
export class AddressCardComponent {
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly PenLine = PenLine;
  readonly Trash2 = Trash2;

  address = input.required<Address>();
  selected = input<boolean>(false);
  isAddressModal = input<boolean>(false);

  cardClick = output<Address>();

  isSelected = computed(() => this.selected() || !!this.address().selected);

  onCardClick() {
    this.cardClick.emit(this.address());
  }
}
