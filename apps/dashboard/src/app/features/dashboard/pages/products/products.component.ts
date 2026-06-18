import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, Plus, Pencil } from 'lucide-angular';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product';
import { APP_ROUTES } from '../../../../shared/constants/app-routes';
import { TableColumn } from '../../../../shared/components/table/table.modal';
import { PRODUCT_TABLE_COLUMN } from './products.constants';
import { ConfirmDeleteModalComponent } from '../account/confirm-delete-modal/confirm-delete-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard-products',
  imports: [
    DecimalPipe,
    TableComponent,
    LucideAngularModule,
    RouterLink,
    ConfirmDeleteModalComponent,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  readonly productService = inject(ProductService);
  readonly router = inject(Router);
  readonly destroyRef = inject(DestroyRef);

  readonly Plus = Plus;
  readonly Pencil = Pencil;
  readonly AddProduct = `/${APP_ROUTES.DASHBOARD.ROOT}/${APP_ROUTES.DASHBOARD.ADD_PRODUCT}`;

  products = signal<Product[]>([]);
  tableColumns = signal<TableColumn[]>(PRODUCT_TABLE_COLUMN);
  loading = signal<boolean>(true);
  selectedId = signal<string | null>(null);
  showDeleteModal = signal(false);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.productService
      .getAllProducts(1, 1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
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

  handleDelete(id: string) {
    this.selectedId.set(id);
    this.showDeleteModal.set(true);
  }

  deleteProduct(productId: string): void {
    this.loading.set(true);
    this.productService
      .deleteProduct(productId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.showDeleteModal.set(false);
          this.selectedId.set(null);
          this.loadProducts();
          this.loading.set(false);
        },
        error: err => {
          console.error('Error deleting product:', err);
          this.loading.set(false);
        },
      });
  }

  navigateToEdit(productId: string): void {
    this.router.navigate([
      `/${APP_ROUTES.DASHBOARD.ROOT}/${APP_ROUTES.DASHBOARD.EDIT_PRODUCT.replace(':id', productId)}`,
    ]);
  }
}
