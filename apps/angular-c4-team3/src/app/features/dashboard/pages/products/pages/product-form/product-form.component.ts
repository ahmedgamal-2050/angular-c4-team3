import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LucideAngularModule, Upload } from 'lucide-angular';
import { InputComponent } from '../../../../../../shared/components/form-components/input/input.component';
import { SelectComponent } from '../../../../../../shared/components/form-components/select/select.component';
import { TextareaComponent } from '../../../../../../shared/components/form-components/textarea/textarea.component';
import { ProductService } from '../../../../../landing/pages/products/services/product.service';
import { FormValidationService } from '../../../../../auth/services/FormValidationService';
import { CategoriesResponse } from '../../../../../landing/pages/products/services/category.model';
import { OccasionsResponse } from '../../../../../landing/pages/products/services/occasions.model';
import { ProductDetailsResponse } from '../../../../../landing/pages/products/product.model';

@Component({
  selector: 'app-product-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LucideAngularModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
  ],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  private productService = inject(ProductService);
  private formValidationService = inject(FormValidationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly Upload = Upload;

  productId = signal<string | null>(null);
  isEditMode = computed(() => !!this.productId());
  loading = signal<boolean>(false);

  categories = signal<any[]>([]);
  occasions = signal<any[]>([]);

  // Preview Signals
  coverPreviewUrl = signal<string | null>(null);
  coverFile = signal<File | null>(null);
  galleryPreviewUrls = signal<string[]>([]);
  galleryFiles = signal<File[]>([]);

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
    ]),
    discount: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(70),
    ]),
    priceAfterDiscount: new FormControl<number | null>({
      value: null,
      disabled: true,
    }),
    quantity: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
    ]),
    category: new FormControl('', [Validators.required]),
    occasion: new FormControl('', [Validators.required]),
    imageCover: new FormControl<File | null>(null),
    images: new FormControl<File[] | null>(null),
  });

  // Computed Validation Errors
  titleErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.title, {
      required: 'Title is required.',
    })
  );

  descriptionErrors = computed(() =>
    this.formValidationService.getErrors(
      this.productForm.controls.description,
      {
        required: 'Description is required.',
      }
    )
  );

  priceErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.price, {
      required: 'Price is required.',
      min: 'Price must be a positive number.',
    })
  );

  discountErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.discount, {
      min: 'Discount cannot be negative.',
      max: 'Discount cannot exceed 100%.',
    })
  );

  quantityErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.quantity, {
      required: 'Quantity is required.',
      min: 'Quantity must be a positive number.',
    })
  );

  categoryErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.category, {
      required: 'Category is required.',
    })
  );

  occasionErrors = computed(() =>
    this.formValidationService.getErrors(this.productForm.controls.occasion, {
      required: 'Occasion is required.',
    })
  );

  coverImageErrors = computed(() => {
    const control = this.productForm.controls.imageCover;
    return control.touched && control.hasError('required')
      ? ['Cover image is required.']
      : [];
  });

  galleryErrors = computed(() => {
    const control = this.productForm.controls.images;
    return control.touched && control.hasError('required')
      ? ['At least one gallery image is required.']
      : [];
  });

  ngOnInit(): void {
    this.loadDropdownData();
    this.setupPriceCalculation();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId.set(id);
      this.loadProductData(id);
    } else {
      // image validators are only required for creation
      this.productForm.controls.imageCover.setValidators([Validators.required]);
      this.productForm.controls.images.setValidators([Validators.required]);
      this.productForm.controls.imageCover.updateValueAndValidity();
      this.productForm.controls.images.updateValueAndValidity();
    }
  }

  loadDropdownData(): void {
    this.productService.getCategories().subscribe({
      next: (res: CategoriesResponse) =>
        this.categories.set(res.categories || []),
      error: (err: unknown) => console.error('Error loading categories:', err),
    });

    this.productService.getOccasions().subscribe({
      next: (res: OccasionsResponse) => this.occasions.set(res.occasions || []),
      error: (err: unknown) => console.error('Error loading occasions:', err),
    });
  }

  setupPriceCalculation(): void {
    this.productForm.valueChanges.subscribe(() => {
      const price = this.productForm.get('price')?.value || 0;
      const discount = this.productForm.get('discount')?.value || 0;
      const priceAfterDiscount = price - (price * discount) / 100;
      this.productForm
        .get('priceAfterDiscount')
        ?.setValue(priceAfterDiscount, { emitEvent: false });
    });
  }

  loadProductData(id: string): void {
    this.loading.set(true);
    this.productService.getProductById(id).subscribe({
      next: (res: ProductDetailsResponse) => {
        const product = res.product;
        this.productForm.patchValue({
          title: product.title,
          description: product.description,
          price: product.price,
          discount: product.discount || 0,
          priceAfterDiscount: product.priceAfterDiscount || product.price,
          category: product.category,
          occasion: product.occasion,
          quantity: product.quantity,
        });

        if (product.imgCover) {
          this.coverPreviewUrl.set(product.imgCover);
        }
        if (product.images) {
          this.galleryPreviewUrls.set(product.images);
        }
        this.loading.set(false);
      },
      error: (err: unknown) => {
        console.error('Error loading product details:', err);
        this.loading.set(false);
      },
    });
  }

  onCoverSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.coverFile.set(file);
      this.productForm.patchValue({ imageCover: file });
      this.productForm.controls.imageCover.markAsTouched();

      const reader = new FileReader();
      reader.onload = e => {
        this.coverPreviewUrl.set(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  onGallerySelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const filesArray = Array.from(input.files);
      this.galleryFiles.set(filesArray);
      this.productForm.patchValue({ images: filesArray });
      this.productForm.controls.images.markAsTouched();

      const newUrls: string[] = [];
      let loadedCount = 0;
      filesArray.forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          newUrls.push(e.target?.result as string);
          loadedCount++;
          if (loadedCount === filesArray.length) {
            this.galleryPreviewUrls.set(newUrls);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    const formValue = this.productForm.getRawValue();

    const formData = new FormData();
    formData.append('title', formValue.title || '');
    formData.append('description', formValue.description || '');
    formData.append('price', String(formValue.price || 0));
    formData.append('quantity', String(formValue.quantity || 0));
    if (formValue.discount !== null && formValue.discount !== undefined) {
      formData.append('discount', String(formValue.discount));
    }
    formData.append('priceAfterDiscount', String(formValue.priceAfterDiscount));
    formData.append('category', formValue.category || '');
    formData.append('occasion', formValue.occasion || '');

    if (this.coverFile()) {
      formData.append('imgCover', this.coverFile()!);
    }
    this.galleryFiles().forEach(file => {
      formData.append('images', file);
    });

    if (this.isEditMode()) {
      this.productService.updateProduct(this.productId()!, formData).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/products']);
        },
        error: (err: unknown) => {
          console.error('Error updating product:', err);
          this.loading.set(false);
        },
      });
    } else {
      this.productService.addProduct(formData).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/products']);
        },
        error: (err: unknown) => {
          console.error('Error adding product:', err);
          this.loading.set(false);
        },
      });
    }
  }
}
