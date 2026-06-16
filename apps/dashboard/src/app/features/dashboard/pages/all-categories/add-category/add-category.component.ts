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
import { APP_ROUTES } from '../../../../../shared/constants/app-routes';
import { CategoriesService } from 'apps/dashboard/src/app/shared/services/categories.service';
import { InputComponent } from 'apps/dashboard/src/app/shared/components/form-components/input/input.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { FormValidationService } from '../../../../../shared/services/form-validation.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _FormValidationService = inject(FormValidationService);
  private _Router = inject(Router);
  private _Route = inject(ActivatedRoute);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  // ── Mode ──
  categoryId = signal<string | null>(null);
  readonly isEditMode = computed(() => !!this.categoryId());

  // ── State ──
  categoryName = signal<string>('');
  existingImageUrl = signal<string | null>(null);
  selectedFile = signal<File | null>(null);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null),
  });

  nameErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['name'], {
      required: 'Category name is required.',
    })
  );

  ngOnInit(): void {
    const id = this._Route.snapshot.paramMap.get('id');
    this.categoryId.set(id);

    if (id) {
      // Edit mode: image optional (keep existing if not changed)
      this.loadCategory(id);
    } else {
      // Add mode: image required
      this.form.controls.image.setValidators([Validators.required]);
      this.form.controls.image.updateValueAndValidity();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private loadCategory(id: string): void {
    const sub = this._CategoriesService.getById(id).subscribe({
      next: res => {
        const category = res.category ?? res.data ?? res;
        this.categoryName.set(category.name);
        this.form.controls.name.setValue(category.name);
        this.existingImageUrl.set(category.image ?? null);
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

    const request$ = this.isEditMode()
      ? this._CategoriesService.update(this.categoryId()!, formData)
      : this._CategoriesService.add(formData);

    const sub = request$.subscribe({
      next: () => {
        this._Router.navigate(['/', APP_ROUTES.DASHBOARD.ROOT, 'categories']);
      },
      error: err => console.error(err),
    });
    this.subscriptions.add(sub);
  }
}
