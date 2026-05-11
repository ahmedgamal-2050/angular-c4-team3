import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {  ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-stepper',
  imports: [ButtonComponent,TranslocoModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {

  readonly Ticket =ArrowRight ;
  submit(){
    console.log("submit");

  }
  // shipping-address.component.ts

addresses = [
  {
    id: 1,
    city: 'Giza',
    address: '21 Ahmed Mohamed St., King Faisal St., Giza',
    phone: '+201012346578',
    selected: false,
  },
  {
    id: 2,
    city: 'Cairo',
    address: '14 Omar Ibn Akhatab St., Ramsis St., Cairo',
    phone: '+201112345678',
    selected: true,
    badge: 'A',
  },
  {
    id: 3,
    city: 'Alexandria',
    address: '16 El-Gaish Rd, San Stefano, El-Raml 2, Alexandria',
    phone: '+201512345678',
    selected: false,
  },
];

selectAddress(id: number) {
  this.addresses = this.addresses.map((item) => ({
    ...item,
    selected: item.id === id,
  }));
}

}
