import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../../../../shared/constants/app-routes';
import { CategoriesService } from 'apps/dashboard/src/app/shared/services/categories.service';
import { occasionsService } from 'apps/dashboard/src/app/shared/services/occasions.services';
import { ConfirmDeleteModalComponent } from '../../account/confirm-delete-modal/confirm-delete-modal.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TableComponent } from 'apps/dashboard/src/app/shared/components/table/table.component';
import { TableColumn } from 'apps/dashboard/src/app/shared/components/table/table.modal';

type EntityType = 'category' | 'occasion';

@Component({
  selector: 'app-all-categories',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ConfirmDeleteModalComponent, ButtonComponent, TableComponent],
  templateUrl: './all-categories.component.html',
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _OccasionsService = inject(occasionsService);
  private _Router = inject(Router);
  private _Route = inject(ActivatedRoute);
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

  entityType = signal<EntityType>('category');

  readonly entityLabel = computed(() =>
    this.entityType() === 'category' ? 'Category' : 'Occasion'
  );

  readonly entityPath = computed(() =>
    this.entityType() === 'category' ? 'categories' : 'occasions'
  );

  items = signal<any[]>([]);
  limit = 10;
  loading = signal(false);
  showDeleteModal = signal(false);
  selectedId = signal<string | null>(null);

  ngOnInit(): void {
    this.entityType.set(this._Route.snapshot.data['entityType'] ?? 'category');
    this.loadItems();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getService(): CategoriesService | occasionsService {
    return this.entityType() === 'category'
      ? this._CategoriesService
      : this._OccasionsService;
  }

  loadItems(): void {
    this.loading.set(true);
    const sub = (this.getService().getAll(1, 1000) as any).subscribe({
      next: (res: any) => {
        this.items.set(res.categories ?? res.occasions ?? []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
    this.subscriptions.add(sub);
  }

  navigateToAdd(): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.DASHBOARD.ROOT,
      this.entityPath(),
      'add',
    ]);
  }

  onEdit(row: any): void {
    this._Router.navigate([
      '/',
      APP_ROUTES.DASHBOARD.ROOT,
      this.entityPath(),
      'update',
      row._id,
    ]);
  }

  onDelete(row: any): void {
    this.selectedId.set(row._id);
    this.showDeleteModal.set(true);
  }

  onDeleteConfirmed(): void {
    const id = this.selectedId();
    if (!id) return;
    const sub = this.getService()
      .delete(id)
      .subscribe({
        next: () => {
          this.showDeleteModal.set(false);
          this.selectedId.set(null);
          this.loadItems();
        },
        error: () => this.showDeleteModal.set(false),
      });
    this.subscriptions.add(sub);
  }
}
