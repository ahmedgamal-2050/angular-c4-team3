/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SliderComponent } from 'apps/angular-c4-team3/src/app/shared/components/slider/slider.component';
import { ProductDetailsService } from 'apps/angular-c4-team3/src/app/features/landing/pages/product-details/services/product-details.service';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { RelatedProduct } from 'apps/angular-c4-team3/src/app/features/landing/pages/product-details/related-product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-best-selling',
  imports: [
    TranslocoModule,
    SliderComponent,
    ButtonComponent,
    LucideAngularModule,
  ],

  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css',
})
export class BestSellingComponent implements OnInit, OnDestroy {
  readonly arrow_right = ArrowRight;

  specialProduct = signal<RelatedProduct[]>([]);

  _productDetailsService = inject(ProductDetailsService);

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getBestSellingProducts();
  }

 getBestSellingProducts() {
    const sub = this._productDetailsService.getBestSellingProducts().subscribe(
      (res: RelatedProduct) => {
        this.specialProduct.set(res.products);
      },
      (err) => console.error(err)
    );

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
