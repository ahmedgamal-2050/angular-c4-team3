import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus, Pencil, Trash2 } from 'lucide-angular';
import {
  TableComponent,
  TableCellDirective,
  TableColumn,
} from '../../../../shared/components/table/table.component';
import { ProductService } from '../../../landing/pages/products/services/product.service';
import { Product } from '../../../landing/pages/home/home.model';

@Component({
  selector: 'app-dashboard-products',
  imports: [
    CommonModule,
    TableComponent,
    TableCellDirective,
    LucideAngularModule,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  readonly Plus = Plus;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;

  products = signal<Product[]>([]);
  tableColumns = signal<TableColumn[]>([]);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.initTableColumns();
    this.loadProducts();
  }

  initTableColumns(): void {
    this.tableColumns.set([
      { field: 'title', header: 'Name', type: 'text', width: '22%' },
      { field: 'price', header: 'Price', type: 'text', width: '18%' },
      { field: 'quantity', header: 'Stock', type: 'text', width: '15%' },
      { field: 'sold', header: 'Sales', type: 'text', width: '15%' },
      { field: 'rateAvg', header: 'Ratings', type: 'text', width: '20%' },
      { field: 'actions', header: '', type: 'text', width: '10%' },
    ]);
  }

  loadProducts(): void {
    this.loading.set(true);
    this.productService.getAllProducts(1, 1000).subscribe({
      next: res => {
        this.products.set(res.products || []);
        this.loading.set(false);
      },
      error: err => {
        console.error('Error fetching dashboard products:', err);
        this.loading.set(false);
      },
    });
  }
}
