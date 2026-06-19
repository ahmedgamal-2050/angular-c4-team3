import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {
  LucideAngularModule,
  Check,
  Banknote,
  Truck,
  Star,
} from 'lucide-angular';
import { ProductOrderItemComponent } from '../product-order-item/product-order-item.component';

@Component({
  selector: 'app-order-item',
  imports: [TranslocoPipe, LucideAngularModule, ProductOrderItemComponent],
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {
  readonly Check = Check;
  readonly Banknote = Banknote;
  readonly Truck = Truck;
}
