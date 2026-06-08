import { Component, OnInit, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { LucideAngularModule, Plus, Pencil, Trash2 } from 'lucide-angular';
import {
  TableComponent,
  TableCellDirective,
} from '../../../../shared/components/table/table.component';
import { ProductService } from '../../../landing/pages/products/services/product.service';
import { Product } from '../../../landing/pages/home/home.model';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { TableColumn } from '../../../../shared/components/table/table.modal';
import { PRODUCT_TABLE_COLUMN } from './products.constants';

@Component({
  selector: 'app-dashboard-products',
  imports: [
    DecimalPipe,
    TableComponent,
    TableCellDirective,
    LucideAngularModule,
    RouterLink,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  readonly Plus = Plus;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;
  readonly AddProduct = `/${APP_ROUTES.DASHBOARD.ROOT}/${APP_ROUTES.DASHBOARD.ADD_PRODUCT}`;

  products = signal<Product[]>([]);
  tableColumns = signal<TableColumn[]>(PRODUCT_TABLE_COLUMN);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadProducts();
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

  deleteProduct(productId: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.loading.set(true);
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: err => {
          console.error('Error deleting product:', err);
          this.loading.set(false);
        },
      });
    }
  }
}
