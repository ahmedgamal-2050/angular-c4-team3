import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { OrderService } from './services/order.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoPipe } from '@jsverse/transloco';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderParent } from './order.model';

@Component({
  selector: 'app-order',
  imports: [TranslocoPipe, OrderItemComponent],
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  readonly orderService = inject(OrderService);
  readonly destroyRef = inject(DestroyRef);

  orderParent = signal<OrderParent[]>([]);

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService
      .getAllOrders()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          this.orderParent.set(res.orders);
        },
        error: err => {
          console.log(err);
        },
      });
  }
}
