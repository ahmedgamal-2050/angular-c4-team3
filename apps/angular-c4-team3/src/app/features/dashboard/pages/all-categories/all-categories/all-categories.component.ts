import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../../../../shared/constants/app-routes';
import { CategoriesService } from 'apps/angular-c4-team3/src/app/shared/services/categories.service';
import { ConfirmDeleteModalComponent } from '../../account/confirm-delete-modal/confirm-delete-modal.component';
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'apps/angular-c4-team3/src/app/shared/components/pagination/pagination.component';
import {
  DataTableComponent,
  TableColumn,
} from 'apps/angular-c4-team3/src/app/shared/components/data-table/data-table.component';

@Component({
  selector: 'app-all-categories',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ConfirmDeleteModalComponent,
    ButtonComponent,
    PaginationComponent,
    DataTableComponent,
  ],
  templateUrl: './all-categories.component.html',
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _Router = inject(Router);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'productsCount', label: 'Products' },
  ];

  categories = signal<any[]>([]);
  currentPage = signal(1);
  totalPages = signal(1);
  limit = 10;
  searchQuery = signal('');
  loading = signal(false);
  showDeleteModal = signal(false);
  selectedCategoryId = signal<string | null>(null);

  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadCategories(): void {
    this.loading.set(true);
    const sub = this._CategoriesService
      .getAll(this.currentPage(), this.limit)
      .subscribe({
        next: res => {
          this.categories.set(res.categories);
          this.totalPages.set(res.metadata.totalPages);
          this.loading.set(false);
        },
        error: () => this.loading.set(false),
      });
    this.subscriptions.add(sub);
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.loadCategories();
  }

  navigateToAdd(): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.DASHBOARD.ROOT,
      'categories',
      'add',
    ]);
  }

  onEdit(row: any): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.DASHBOARD.ROOT,
      'categories',
      'update',
      row._id,
    ]);
  }

  onDelete(row: any): void {
    this.selectedCategoryId.set(row._id);
    this.showDeleteModal.set(true);
  }

  onDeleteConfirmed(): void {
    const id = this.selectedCategoryId();
    if (!id) return;
    const sub = this._CategoriesService.delete(id).subscribe({
      next: () => {
        this.showDeleteModal.set(false);
        this.selectedCategoryId.set(null);
        this.loadCategories();
      },
      error: () => this.showDeleteModal.set(false),
    });
    this.subscriptions.add(sub);
  }

  filteredCategories() {
    const q = this.searchQuery().toLowerCase();
    return q
      ? this.categories().filter(c => c.name.toLowerCase().includes(q))
      : this.categories();
  }
}
