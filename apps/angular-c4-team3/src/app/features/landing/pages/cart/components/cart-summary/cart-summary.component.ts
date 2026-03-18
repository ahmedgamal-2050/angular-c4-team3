import { Component, inject, input, output } from '@angular/core';
import { InputComponent } from '../../../../../../shared/components/form-components/input/input.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TranslocoPipe } from '@jsverse/transloco';
import { TicketPercent, MoveRight } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-summary',
  imports: [
    InputComponent,
    ButtonComponent,
    TranslocoPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
  readonly Ticket = TicketPercent;
  readonly MoveRight = MoveRight;

  fb = inject(FormBuilder);

  subtotal = input<number>(0);
  total = input<number>(0);
  discountPercentage = input<number>(0);
  applyCoupon = output<string>();
  checkout = output<void>();

  couponForm: FormGroup = this.fb.group({
    couponCode: [''],
  });

  handleApplyCoupon() {
    if (this.couponForm.valid) {
      console.log('Apply coupon:', this.couponForm.value.couponCode);
      this.applyCoupon.emit(this.couponForm.value.couponCode);
    }
  }

  handleCheckout() {
    this.checkout.emit();
  }
}
