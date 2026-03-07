/* eslint-disable @nx/enforce-module-boundaries */
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SliderComponent } from 'apps/angular-c4-team3/src/app/shared/components/slider/slider.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductsService } from './../../../../../prodacts/services/prodacts.service';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { Product, SpecialProduct } from 'apps/angular-c4-team3/src/app/features/prodacts/specialProduct';
import { RelatedProduct } from 'apps/angular-c4-team3/src/app/features/prodacts/related-product';

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
export class BestSellingComponent implements OnInit {
  specialProduct: RelatedProduct[] = [];
  ProductsService = inject(ProductsService);
  cdr = inject(ChangeDetectorRef);
  readonly arrow_right = ArrowRight;
  ngOnInit(): void {
    this.getBestSellingProducts();
  }

 getBestSellingProducts() {
  this.ProductsService.getBestSellingProducts().subscribe(
    (res: RelatedProduct) => {
      this.specialProduct = res.products;
      this.cdr.detectChanges();
    },
    (err) => console.error(err)
  );
}
}
