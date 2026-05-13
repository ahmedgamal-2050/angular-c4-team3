import { Component, inject, input, output, signal } from '@angular/core';
import { InputComponent } from '../../../../../../shared/components/form-components/input/input.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TranslocoPipe } from '@jsverse/transloco';
import { TicketPercent, MoveRight } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { APP_ROUTES } from 'apps/angular-c4-team3/src/app/shared/constants/app-routes';

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
  private router =inject(Router)
  subtotal = input<number>(0);
  total = input<number>(0);
  showButton = input<boolean>(true);
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
    this.router.navigate([ `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.SHIPPING}`])

  }
}
