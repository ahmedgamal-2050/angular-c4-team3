import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../../../../shared/constants/app-routes';
import { CategoriesService } from 'apps/dashboard/src/app/shared/services/categories.service';
import { ConfirmDeleteModalComponent } from '../../account/confirm-delete-modal/confirm-delete-modal.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TableComponent } from 'apps/dashboard/src/app/shared/components/table/table.component';
import { TableColumn } from 'apps/dashboard/src/app/shared/components/table/table.modal';

@Component({
  selector: 'app-all-categories',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ConfirmDeleteModalComponent,
    ButtonComponent,
    TableComponent,
  ],
  templateUrl: './all-categories.component.html',
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _Router = inject(Router);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  @ViewChild('nameTpl') nameTpl!: TemplateRef<unknown>;
  @ViewChild('productsTpl') productsTpl!: TemplateRef<unknown>;
  @ViewChild('actionsTpl') actionsTpl!: TemplateRef<unknown>;

  columns: TableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'productsCount', header: 'Products' },
    { field: 'actions', header: '' },
  ];

  categories = signal<any[]>([]);
  limit = 10;
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
    const sub = this._CategoriesService.getAll(1, 1000).subscribe({
      next: res => {
        this.categories.set(res.categories);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
    this.subscriptions.add(sub);
  }

  navigateToAdd(): void {
    this._Router.navigate(['/', APP_ROUTES.DASHBOARD.ROOT, 'categories', 'add']);
  }

  onEdit(row: any): void {
    this._Router.navigate(['/', APP_ROUTES.DASHBOARD.ROOT, 'categories', 'update', row._id]);
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
}
