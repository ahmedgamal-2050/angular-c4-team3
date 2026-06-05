import { Component, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';
import {
  ADDRESS_MODAL_MODE,
  AddressModalMode,
} from '../../address-modal.constants';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-address-location-form',
  imports: [TranslocoPipe, LucideAngularModule, GoogleMapsModule],
  templateUrl: './address-location-form.component.html',
})
export class AddressLocationFormComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  switchMode = output<AddressModalMode>();
  saveAddress = output<void>();

  center = signal<google.maps.LatLngLiteral>({ lat: 40.7128, lng: -74.006 });
  zoom = signal(12);

  markerPosition = signal<google.maps.LatLngLiteral>({
    lat: 40.7128,
    lng: -74.006,
  });

  onBack() {
    this.switchMode.emit(ADDRESS_MODAL_MODE.ADDRESS_DETAILS);
  }

  onSave() {
    this.saveAddress.emit();
  }

  onSwitchMode(mode: AddressModalMode) {
    this.switchMode.emit(mode);
  }
}
