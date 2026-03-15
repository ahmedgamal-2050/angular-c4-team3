import { Component, input, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CartItem } from '../../cart.model';
import { Plus, Minus, Trash2, Star } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-cart-item',
  imports: [TranslocoPipe, LucideAngularModule],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  readonly Plus = Plus;
  readonly Minus = Minus;
  readonly Trash2 = Trash2;
  readonly Star = Star;

  cartItem = input.required<CartItem>();
  updateQuantity = output<{
    id: string;
    currentQty: number;
    change: number;
  }>();
  removeItem = output<string>();

  handleUpdateQuantity(id: string, currentQty: number, change: number) {
    this.updateQuantity.emit({ id, currentQty, change });
  }

  handleRemoveItem(id: string) {
    this.removeItem.emit(id);
  }
}
