import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Product } from '../home/home.model';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';
import {
  LucideAngularModule,
  Image as ImageIcon,
  Gift,
  Flower2,
  Star,
} from 'lucide-angular';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {
  PaginatorModule,
  PaginatorPassThrough,
  PaginatorState,
} from 'primeng/paginator';
import { ApiMetaData } from '../../../../core/models/general.model';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';

@Component({
  selector: 'app-products',
  imports: [
    ProductCardComponent,
    LucideAngularModule,
    RatingModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    ProductFiltersComponent,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  readonly ImageIcon = ImageIcon;
  readonly Gift = Gift;
  readonly Flower2 = Flower2;
  readonly Star = Star;

  private _productService = inject(ProductService);

  // Filter Signals
  categories = signal([
    { id: 1, name: 'Cards', icon: this.ImageIcon, selected: true },
    { id: 2, name: 'Chocolate', icon: this.Gift, selected: false },
    { id: 3, name: 'Flowers', icon: this.Flower2, selected: false },
    { id: 4, name: 'Cards', icon: this.ImageIcon, selected: false },
    { id: 5, name: 'Chocolate', icon: this.Gift, selected: false },
    { id: 6, name: 'Cards', icon: this.ImageIcon, selected: false },
  ]);
  occasions = signal([
    {
      id: 1,
      name: 'Wedding',
      image: 'assets/images/wedding.jpg',
      selected: false,
    },
    {
      id: 2,
      name: 'Apology',
      image: 'assets/images/apology.jpg',
      selected: false,
    },
    {
      id: 3,
      name: 'Graduation',
      image: 'assets/images/graduation.jpg',
      selected: false,
    },
    {
      id: 4,
      name: 'Wedding',
      image: 'assets/images/wedding2.jpg',
      selected: false,
    },
    {
      id: 5,
      name: "Father's Day",
      image: 'assets/images/fathers-day.jpg',
      selected: false,
    },
    {
      id: 6,
      name: 'Graduation',
      image: 'assets/images/graduation2.jpg',
      selected: false,
    },
  ]);
  ratingValue = signal(0);
  priceFrom = signal<number | null>(null);
  priceTo = signal<number | null>(null);

  products = signal<Product[]>([]);
  first = signal<number>(0);
  metaData = signal<ApiMetaData>({
    currentPage: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  paginatorClass = signal<string>(
    'p-2! border! dark:border-none! border-zinc-100! rounded-lg! size-8! dark:bg-zinc-700!'
  );
  pt = signal<PaginatorPassThrough>({
    root: {
      class: 'gap-1!',
    },
    pages: {
      class: 'gap-1!',
    },
    first: {
      class: this.paginatorClass(),
    },
    prev: {
      class: this.paginatorClass(),
    },
    page: {
      class:
        this.paginatorClass() +
        ' aria-[current]:border-none! aria-[current]:bg-maroon-600! dark:aria-[current]:bg-soft-pink-300! aria-[current]:text-white! dark:aria-[current]:text-zinc-700!',
    },
    next: {
      class: this.paginatorClass(),
    },
    last: {
      class: this.paginatorClass(),
    },
  });

  subscription = new Subscription();

  getAllProducts() {
    const sub = this._productService
      .getAllProducts(this.metaData().currentPage)
      .subscribe(res => {
        this.products.set(res.products.filter(product => product.quantity > 0));
        this.metaData.set(res.metadata);
      });

    this.subscription.add(sub);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  onPageChange(event: PaginatorState) {
    if (event) {
      console.log('event', event);
      this.metaData.set({
        ...this.metaData(),
        currentPage: event.page
          ? event.page + 1
          : this.metaData().currentPage + 1,
        limit: event.rows ? event.rows : this.metaData().limit,
        totalItems: event.totalRecords
          ? event.totalRecords
          : this.metaData().totalItems,
      });
      this.getAllProducts();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
