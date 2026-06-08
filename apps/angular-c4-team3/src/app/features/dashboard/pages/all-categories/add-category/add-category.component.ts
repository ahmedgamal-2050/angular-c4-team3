import {
  Component,
  OnDestroy,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from '../../../../../shared/constants/app-routes';
import { CategoriesService } from 'apps/angular-c4-team3/src/app/shared/services/categories.service';
import { InputComponent } from 'apps/angular-c4-team3/src/app/shared/components/form-components/input/input.component';
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { FormValidationService } from '../../../../auth/services/FormValidationService';
import { computed } from '@angular/core';

@Component({
  selector: 'app-add-category',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, InputComponent, ButtonComponent],
  templateUrl: './add-category.component.html',
})
export class AddCategoryComponent implements OnDestroy {
  private _CategoriesService = inject(CategoriesService);
  private _FormValidationService = inject(FormValidationService);
  private _Router = inject(Router);
  private subscriptions = new Subscription();

  protected readonly APP_ROUTES = APP_ROUTES;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null, [Validators.required]),
  });

  selectedFile = signal<File | null>(null);

  nameErrors = computed(() =>
    this._FormValidationService.getErrors(this.form.controls['name'], {
      required: 'Category name is required.',
    })
  );

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
    formData.append('image', this.selectedFile()!);

    const sub = this._CategoriesService.add(formData).subscribe({
      next: () => {
        this._Router.navigate(['/', APP_ROUTES.DASHBOARD.ROOT, 'categories']);
      },
      error: err => console.error(err),
    });
    this.subscriptions.add(sub);
  }
}
