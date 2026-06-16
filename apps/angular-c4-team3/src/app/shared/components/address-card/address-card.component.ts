import { Component, computed, input, output } from '@angular/core';
import {
  LucideAngularModule,
  Phone,
  MapPin,
  PenLine,
  Trash2,
} from 'lucide-angular';
import { AddressItem } from '../address-modal/address-modal.model';

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

  address = input.required<AddressItem>();
  selectedId = input<string>('');
  isAddressModal = input<boolean>(false);

  cardClick = output<AddressItem>();

  isSelected = computed(() => this.selectedId());

  onCardClick() {
    this.cardClick.emit(this.address());
  }
}
