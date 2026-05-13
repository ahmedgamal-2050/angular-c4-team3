import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ArrowRight } from 'lucide-angular';
import { AddAddressDialogComponent, AddressData } from '../../../features/landing/pages/shipping-page/components/add-address-dialog/add-address-dialog.component';
import { ShippingService } from '../../../features/landing/pages/shipping-page/services/shipping.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslocoModule,
    CommonModule,
    AddAddressDialogComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  readonly Ticket = ArrowRight;

  currentStep = 1;
  isAddressModalOpen = false;

  addresses: AddressData[] = [
    {
      id: 1,
      label: 'Home',
      city: 'Giza',
      address: '21 Ahmed Mohamed St., King Faisal St., Giza',
      phone: '+201012346578',
      selected: false,
    },
    {
      id: 2,
      label: 'Work',
      city: 'Cairo',
      address: '14 Omar Ibn Akhatab St., Ramsis St., Cairo',
      phone: '+201112345678',
      selected: true,
    },
    {
      id: 3,
      label: 'Family',
      city: 'Alexandria',
      address: '16 El-Gaish Rd, San Stefano, El-Raml 2, Alexandria',
      phone: '+201512345678',
      selected: false,
    },
  ];

  private ShippingService =inject(ShippingService)

  constructor(){
    // this.getAddress()
  }
  getAddress(){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.ShippingService.getAddress().subscribe((res)=>{
      // this.addresses=[res]
    })
  }

  submit() {
    this.currentStep = 2;
  }

  selectAddress(id: number) {
    this.addresses = this.addresses.map(item => ({
      ...item,
      selected: item.id === id,
    }));
  }

  // Modal Controls
  openAddressModal() {
    this.isAddressModalOpen = true;
  }

  closeAddressModal() {
    this.isAddressModalOpen = false;
  }

  // Add
  handleAddressAdded(newAddress: AddressData) {
    const newId = Math.max(...this.addresses.map(a => a.id ?? 0), 0) + 1;
    this.addresses = [
      ...this.addresses,
      { ...newAddress, id: newId, selected: false },
    ];
  }

  // Update
  handleAddressUpdated(updated: AddressData) {
    this.addresses = this.addresses.map(a =>
      a.id === updated.id ? { ...a, ...updated } : a
    );
  }

  // Delete
  handleAddressDeleted(id: number) {
    this.addresses = this.addresses.filter(a => a.id !== id);
  }
}