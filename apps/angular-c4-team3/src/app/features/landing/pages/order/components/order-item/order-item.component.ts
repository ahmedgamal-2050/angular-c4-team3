import { Component, input, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  LucideAngularModule,
  Check,
  Banknote,
  Truck,
  ChevronDown,
} from 'lucide-angular';
import { ProductOrderItemComponent } from '../product-order-item/product-order-item.component';
import { OrderParent } from '../../order.model';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-order-item',
  imports: [
    TranslocoPipe,
    LucideAngularModule,
    ProductOrderItemComponent,
    DatePipe,
    DecimalPipe,
  ],
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {
  readonly Check = Check;
  readonly Banknote = Banknote;
  readonly Truck = Truck;
  readonly ChevronDown = ChevronDown;

  orderParent = input.required<OrderParent[]>();

  showOrderItems = signal(false);

  toggleOrderItems() {
    this.showOrderItems.update(value => !value);
  }
}
