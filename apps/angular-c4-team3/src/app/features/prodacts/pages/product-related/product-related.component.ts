import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SliderComponent } from 'apps/angular-c4-team3/src/app/shared/components/slider/slider.component';
import { ProductsService } from '../../services/prodacts.service';
import { RelatedProduct, RelatedProductsResponse } from '../../related-product';

@Component({
  selector: 'app-product-related',
  imports: [TranslocoModule, SliderComponent],
  templateUrl: './product-related.component.html',
  styleUrl: './product-related.component.css',
})
export class ProductRelatedComponent implements OnInit {

  products: RelatedProduct[] = [];
  ProductsService = inject(ProductsService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getRelatedProdacts('673e2e1f1159920171828153');
  }

  getRelatedProdacts(id: string) {
    this.ProductsService.getRelatedProdacts(id).subscribe((res: RelatedProductsResponse) => {
      this.products = res.relatedProducts;
      this.cdr.detectChanges();   // 👈 الحل هنا
    });
  }
}
