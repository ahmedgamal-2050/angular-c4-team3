import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoPipe } from '@jsverse/transloco';
import { OrderItemComponent } from './components/order-item/order-item.component';

@Component({
  selector: 'app-order',
  imports: [TranslocoPipe, OrderItemComponent],
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  readonly orderService = inject(OrderService);
  readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // this.getAllOrders();
  }

  getAllOrders() {
    this.orderService
      .getAllOrders()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        },
      });
  }
}
