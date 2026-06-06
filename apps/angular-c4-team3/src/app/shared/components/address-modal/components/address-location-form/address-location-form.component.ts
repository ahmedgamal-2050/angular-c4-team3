import { Component, output, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, ArrowLeft, MapPinHouse } from 'lucide-angular';
import {
  ADDRESS_MODAL_MODE,
  AddressModalMode,
  EGYPT_CAIRO_COORDINATES,
} from '../../address-modal.constants';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-address-location-form',
  imports: [TranslocoPipe, LucideAngularModule, GoogleMap, MapMarker],
  templateUrl: './address-location-form.component.html',
})
export class AddressLocationFormComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly MapPinHouse = MapPinHouse;
  readonly ADDRESS_MODAL_MODE = ADDRESS_MODAL_MODE;

  switchMode = output<AddressModalMode>();
  saveAddress = output<google.maps.LatLngLiteral>();

  center = signal<google.maps.LatLngLiteral>(EGYPT_CAIRO_COORDINATES);
  markerPosition = signal<google.maps.LatLngLiteral>(EGYPT_CAIRO_COORDINATES);
  zoom = signal(12);

  onBack() {
    this.switchMode.emit(ADDRESS_MODAL_MODE.ADDRESS_DETAILS);
  }

  onSave() {
    this.saveAddress.emit(this.markerPosition());
  }

  onSwitchMode(mode: AddressModalMode) {
    this.switchMode.emit(mode);
  }

  findMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center.set({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        this.markerPosition.set({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    const { lat, lng } = event.latLng!.toJSON();
    this.markerPosition.set({ lat, lng });
  }
}
