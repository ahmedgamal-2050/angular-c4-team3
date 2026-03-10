import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';
import { ProductDetailsService } from './services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../home/home.model';

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
  product = signal<Product | null>(null);

  ngOnInit(): void {

    const id = this._route.snapshot.params['id'];
    this.productId.set(id);

    if (id) {
      this._productService.getProductById(id).subscribe({
        next: (res) => {
          this.product.set(res.product);
        }
      });
    }
  }
}