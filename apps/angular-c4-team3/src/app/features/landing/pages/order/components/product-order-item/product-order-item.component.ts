import { Component, input, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, Star } from 'lucide-angular';
import { OrderItem } from './../../order.model';

@Component({
  selector: 'app-product-order-item',
  imports: [TranslocoPipe, LucideAngularModule],
  templateUrl: './product-order-item.component.html',
})
export class ProductOrderItemComponent {
  readonly Star = Star;

  orderItem = input.required<OrderItem>();
}
