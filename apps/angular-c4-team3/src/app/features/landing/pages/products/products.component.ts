import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Product } from '../home/home.model';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorPassThrough, PaginatorState } from 'primeng/paginator';
import { ApiMetaData } from '../../../../core/models/general.model';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { CategoryWithIcon, OccasionWithSelected } from './services/product-filters.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    RatingModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    ProductFiltersComponent,
    TranslocoPipe
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private _productService = inject(ProductService);

  // Filter Signals
  categories = signal<CategoryWithIcon[]>([]);
  occasions = signal<OccasionWithSelected[]>([]);
  ratingValue = signal(0);
  priceFrom = signal<number | null>(null);
  priceTo = signal<number | null>(null);

  // Products & Pagination
  products = signal<Product[]>([]);
  metaData = signal<ApiMetaData>({
    currentPage: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  first = signal<number>(0);

  // Paginator PassThrough
  pt = signal<PaginatorPassThrough>({
    root: { class: 'gap-1!' },
    pages: { class: 'gap-1!' },
    first: { class: 'p-2!' },
    prev: { class: 'p-2!' },
    page: { class: 'p-2!' },
    next: { class: 'p-2!' },
    last: { class: 'p-2!' },
  });

  subscription = new Subscription();

  ngOnInit(): void {
    this.loadCategories();
    this.loadOccasions();
    this.getAllProducts();
  }

  private loadCategories() {
    this._productService.getCategories().subscribe(res => {
      const mapped: CategoryWithIcon[] = res.categories.map(c => ({
        ...c,
        selected: false,
      }));
      this.categories.set(mapped);
    });
  }

  private loadOccasions() {
    this._productService.getOccasions().subscribe(res => {
      const mapped: OccasionWithSelected[] = res.occasions.map(o => ({
        ...o,
        selected: false,
      }));
      this.occasions.set(mapped);
    });
  }

  // getAllProducts() {
  //   const sub = this._productService
  //     .getAllProducts(this.metaData().currentPage)
  //     .subscribe(res => {
  //       this.products.set(res.products.filter(p => p.quantity > 0));
  //       this.metaData.set(res.metadata);
  //       this.first.set((this.metaData().currentPage - 1) * this.metaData().limit);
  //     });
  //   this.subscription.add(sub);
  // }
  getFilters() {
  return {
    category: this.categories().find(c => c.selected)?._id,
    occasion: this.occasions().find(o => o.selected)?._id,
    priceFrom: this.priceFrom(),
    priceTo: this.priceTo(),
    rating: this.ratingValue(),
  };
}
onFilterChange() {
  // نرجع لأول صفحة
  this.metaData.set({
    ...this.metaData(),
    currentPage: 1
  });

  this.getAllProducts();
}
  getAllProducts() {
  const filters = this.getFilters();

  const sub = this._productService
    .getAllProducts(
      this.metaData().currentPage,
      this.metaData().limit,
      filters
    )
    .subscribe(res => {
      console.log('Applied Filters:', filters);
      this.products.set(res.products.filter(p => p.quantity > 0));
      console.log('Received Metadata:', res.metadata);
      this.metaData.set(res.metadata);
      this.first.set((this.metaData().currentPage - 1) * this.metaData().limit);
    });

  this.subscription.add(sub);
}

  onPageChange(event: PaginatorState) {
    if (event) {
      this.metaData.set({
        ...this.metaData(),
        currentPage: event.page != null ? event.page + 1 : this.metaData().currentPage,
        limit: event.rows != null ? event.rows : this.metaData().limit,
        totalItems: event.totalRecords != null ? event.totalRecords : this.metaData().totalItems,
      });
      this.first.set((this.metaData().currentPage - 1) * this.metaData().limit);
      this.getAllProducts();
    }
  }

  trackByProduct(index: number, product: Product) {
    return product._id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}