import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'app-product-order-item',
  imports: [TranslocoPipe, LucideAngularModule],
  templateUrl: './product-order-item.component.html',
})
export class ProductOrderItemComponent {
  readonly Star = Star;

  cartItem = signal({
    product: {
      title: 'Moko Chocolate Set | Esperance Rose',
      imgCover: '',
      rateAvg: 5,
      rateCount: 8,
    },
    price: 1800,
    quantity: 0,
  });
}
