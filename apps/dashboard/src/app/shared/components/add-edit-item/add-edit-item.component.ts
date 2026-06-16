import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../constants/app-routes';
import { CategoriesService } from 'apps/dashboard/src/app/shared/services/categories.service';
import { InputComponent } from 'apps/dashboard/src/app/shared/components/form-components/input/input.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { FormValidationService } from 'apps/dashboard/src/app/shared/services/form-validation.service';
import { occasionsService } from 'apps/dashboard/src/app/shared/services/occasions.services';

type EntityType = 'category' | 'occasion';

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './add-edit-item.component.html',
})
export class AddEditItemComponent implements OnInit, OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _OccasionsService = inject(occasionsService);
  private _FormValidationService = inject(FormValidationService);
  private _Router = inject(Router);
  private _Route = inject(ActivatedRoute);
  private subscriptions = new Subscription();

  entityType = signal<EntityType>('category');
  entityId = signal<string | null>(null);

  readonly isEditMode = computed(() => !!this.entityId());
  readonly entityLabel = computed(() =>
    this.entityType() === 'category' ? 'Category' : 'Occasion'
  );

  entityName = signal<string>('');
  existingImageUrl = signal<string | null>(null);
  selectedFile = signal<File | null>(null);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null),
  });

  nameErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['name'], {
      required: `${this.entityLabel()} name is required.`,
    })
  );

  ngOnInit(): void {
    this.entityType.set(this._Route.snapshot.data['entityType'] ?? 'category');

    const id = this._Route.snapshot.paramMap.get('id');
    this.entityId.set(id);

    if (id) {
      this.loadEntity(id);
    } else {
      this.form.controls.image.setValidators([Validators.required]);
      this.form.controls.image.updateValueAndValidity();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getService(): CategoriesService | occasionsService {
    return this.entityType() === 'category'
      ? this._CategoriesService
      : this._OccasionsService;
  }

  private loadEntity(id: string): void {
    const sub = this.getService()
      .getById(id)
      .subscribe({
        next: res => {
          const entity = res.category ?? res.occasion ?? res.data ?? res;
          this.entityName.set(entity.name);
          this.form.controls.name.setValue(entity.name);
          this.existingImageUrl.set(entity.image ?? null);
        },
        error: err => console.error(err),
      });
    this.subscriptions.add(sub);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedFile.set(file);
    this.form.controls.image.setValue(file);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.form.value.name!);
    if (this.selectedFile()) {
      formData.append('image', this.selectedFile()!);
    }

    const listPath =
      this.entityType() === 'category' ? 'categories' : 'occasions';

    const service = this.getService();
    const request$ = this.isEditMode()
      ? service.update(this.entityId()!, formData)
      : service.add(formData);

    const sub = request$.subscribe({
      next: () => {
        this._Router.navigate(['/', APP_ROUTES.DASHBOARD.ROOT, listPath]);
      },
      error: err => console.error(err),
    });
    this.subscriptions.add(sub);
  }
}
