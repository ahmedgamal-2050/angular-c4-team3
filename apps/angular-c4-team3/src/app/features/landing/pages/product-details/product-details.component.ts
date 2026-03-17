import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { ProductDetailsService } from './services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../home/home.model';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/services/cart.service';
import { CartResponse } from '../cart/cart.model';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { LucideAngularModule, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-product-details',
  imports: [
    ProductReviewComponent,
    ProductRelatedComponent,
    LoadingComponent,
    LucideAngularModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  readonly ShoppingCart = ShoppingCart;

  private _route = inject(ActivatedRoute);
  private _productService = inject(ProductDetailsService);
  private _cartService = inject(CartService);
  private _messageService = inject(MessageService);

  productId = signal('');
  product = signal<Product | null>(null);
  isCartLoading = signal(false);

  maxQuantity = computed(() => {
    const cartProduct = this._cartService
      .cartItems()
      .find(item => item.product._id === this.productId());
    return cartProduct?.quantity || 0;
  });

  subscription = new Subscription();

  ngOnInit(): void {
    const sub = this._route.params.subscribe(params => {
      this.productId.set(params['id']);

      if (this.productId()) {
        this.getProductById(this.productId());
      }
    });

    this.subscription.add(sub);
  }

  getProductById(id: string) {
    const sub = this._productService.getProductById(id).subscribe({
      next: res => {
        this.product.set(res.product);
      },
    });

    this.subscription.add(sub);
  }

  addToCart() {
    this.isCartLoading.set(true);
    const sub = this._cartService.addToCart(this.productId(), 1).subscribe({
      next: (res: CartResponse) => {
        this._cartService.cartItems.set(res.cart.cartItems);
        this._cartService.discountPercentage.set(res.cart.discount || 0);
        this.isCartLoading.set(false);
      },
      error: err => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.originalError.error.error,
        });
        this.isCartLoading.set(false);
      },
    });

    this.subscription.add(sub);
  }
}
