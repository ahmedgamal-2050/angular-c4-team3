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
  selector: 'app-product-related',
  imports: [TranslocoPipe, SliderComponent, StyledHomeTitleComponent],
  templateUrl: './product-related.component.html',
  styleUrl: './product-related.component.css',
})
export class ProductRelatedComponent implements OnInit, OnDestroy {
  private _productDetailsService = inject(ProductDetailsService);

  productId = input<string>('');

  products = signal<Product[]>([]);

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (this.productId()) {
      this.getRelatedProducts(this.productId());
    }
  }

  getRelatedProducts(id: string) {
    const sub = this._productDetailsService
      .getRelatedProdacts(id)
      .subscribe((res: any) => {
        this.products.set(res.relatedProducts);
      });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
