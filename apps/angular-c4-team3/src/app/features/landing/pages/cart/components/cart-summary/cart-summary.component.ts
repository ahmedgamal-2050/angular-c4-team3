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

  discountAmount = input<number>(0);

  applyCoupon = output<string>();
  checkout = output<void>();

  couponForm: FormGroup = this.fb.group({
    couponCode: [''],
  });

  handleApplyCoupon() {
    if (this.couponForm.valid) {
      const code = this.couponForm.value.couponCode?.trim();

      if (!code) return; // ✅ منع الإرسال لو فاضي

      this.applyCoupon.emit(code);

      // ✅ اختيارية: تفريغ الانبوت بعد التطبيق
      this.couponForm.reset();
    }
  }

  handleCheckout() {
    this.checkout.emit();
  }
}