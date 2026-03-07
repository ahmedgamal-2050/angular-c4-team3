import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { ProductDetailsService } from './services/product-details.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [ProductReviewComponent, ProductRelatedComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _productService = inject(ProductDetailsService);
  
  productId = signal('');

  ngOnInit(): void {
    this.productId.set(this._route.snapshot.params['id']);
  }
}
