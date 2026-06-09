import { Component, OnInit, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Plus,
  Pencil,
  Trash2,
  EllipsisVertical,
} from 'lucide-angular';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ProductService } from '../../../landing/pages/products/services/product.service';
import { Product } from '../../../landing/pages/home/home.model';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { TableColumn } from '../../../../shared/components/table/table.modal';
import { PRODUCT_TABLE_COLUMN } from './products.constants';
import { MenuModule, MenuPassThrough } from 'primeng/menu';

@Component({
  selector: 'app-dashboard-products',
  imports: [
    DecimalPipe,
    TableComponent,
    LucideAngularModule,
    RouterLink,
    MenuModule,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  readonly productService = inject(ProductService);
  readonly router = inject(Router);

  readonly Plus = Plus;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;
  readonly EllipsisVertical = EllipsisVertical;
  readonly AddProduct = `/${APP_ROUTES.DASHBOARD.ROOT}/${APP_ROUTES.DASHBOARD.ADD_PRODUCT}`;

  products = signal<Product[]>([]);
  tableColumns = signal<TableColumn[]>(PRODUCT_TABLE_COLUMN);
  loading = signal<boolean>(true);
  actionItems = signal([
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
    },
  ]);
  menuPt = signal<MenuPassThrough>({
    root: {
      class: 'bg-white! dark:bg-zinc-800! rounded-md! shadow-sm!',
    },
  });

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
