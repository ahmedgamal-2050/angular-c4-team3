import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ProductDetailsService } from '../../services/product-details.service';
import { SliderComponent } from '../../../../../../shared/components/slider/slider.component';
import { StyledHomeTitleComponent } from '../../../../../../shared/components/styled-home-title/styled-home-title.component';
import { Subscription } from 'rxjs';
import { Product } from '../../../home/home.model';

@Component({
  selector: 'app-product-may-like',
    imports: [TranslocoPipe, SliderComponent, StyledHomeTitleComponent],

  templateUrl: './product-may-like.component.html',
  styleUrl: './product-may-like.component.css',
})
export class ProductMayLikeComponent implements OnInit, OnDestroy {
  private _productDetailsService = inject(ProductDetailsService);

  productId = input<string>('');
  userId = input<string>('');

  products = signal<Product[]>([]);

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (this.productId()) {
      this.getMayLikeProducts();
    } else if (this.userId()) {
      this.getMayLikeProductsByUserId();
    }
  }

  getMayLikeProducts() {
    const sub = this._productDetailsService
      .getMayLikeProducts(1,20)
      .subscribe((res: any) => {
        this.products.set(res.relatedProducts);
      });

    this.subscription.add(sub);
  }

  getMayLikeProductsByUserId() {
    const sub = this._productDetailsService
      .getRelatedProductsByUserId(this.userId())
      .subscribe((res: any) => {
        this.products.set(res.recommendations);
      });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
