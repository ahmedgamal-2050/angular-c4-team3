import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
  DestroyRef,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { InputComponent } from '../../../../../../shared/components/form-components/input/input.component';
import { SelectComponent } from '../../../../../../shared/components/form-components/select/select.component';
import { TextareaComponent } from '../../../../../../shared/components/form-components/textarea/textarea.component';
import { FileUploadComponent } from '../../../../../../shared/components/form-components/file-upload/file-upload.component';
import { ProductService } from '../../../../../../shared/services/product.service';
import { FormValidationService } from '../../../../../../shared/services/form-validation.service';
import {
  CategoriesResponse,
  OccasionsResponse,
  ProductDetailsResponse,
} from '../../../../../../shared/models/product';
import { Image, Images } from 'lucide-angular';
import { Dialog } from 'primeng/dialog';
import {
  DASHBOARD_CAROUSEL_PT,
  DIALOG_PT,
} from '../../../../../../shared/constants/pass-through';
import { CarouselModule, CarouselPassThrough } from 'primeng/carousel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    LucideAngularModule,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    FileUploadComponent,
    Dialog,
    CarouselModule,
  ],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  readonly Image = Image;
  readonly Images = Images;

  private productService = inject(ProductService);
  private formValidationService = inject(FormValidationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  productId = signal<string | null>(null);
  isEditMode = computed(() => !!this.productId());
  loading = signal<boolean>(false);

  categories = signal<any[]>([]);
  occasions = signal<any[]>([]);

  isGalleryModalOpened = signal<boolean>(false);
  dialogPt = signal(DIALOG_PT);
  carouselPt = signal<CarouselPassThrough>(DASHBOARD_CAROUSEL_PT);
  carouselData = signal<{ id: number; imageUrl: string | null }[]>([]);

  // Preview Signals (to bind to [initialPreviews])
  coverPreviewUrl = signal<string | null>(null);
  galleryPreviewUrls = signal<string[]>([]);

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(10),
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
      Validators.min(1),
    ]),
    category: new FormControl('', [Validators.required]),
    occasion: new FormControl('', [Validators.required]),
    imageCover: new FormControl<File | null>(null),
    images: new FormControl<File[] | null>(null),
  });

  // Computed Validation Errors
  titleErrors = computed(() => {
    const control = this.productForm.controls['title'];
    return this.formValidationService.getFormErrors(control);
  });

  descriptionErrors = computed(() => {
    const control = this.productForm.controls['description'];
    return this.formValidationService.getFormErrors(control);
  });

  priceErrors = computed(() => {
    const control = this.productForm.controls['price'];
    return this.formValidationService.getFormErrors(control);
  });

  discountErrors = computed(() => {
    const control = this.productForm.controls['discount'];
    return this.formValidationService.getFormErrors(control);
  });

  quantityErrors = computed(() => {
    const control = this.productForm.controls['quantity'];
    return this.formValidationService.getFormErrors(control);
  });

  categoryErrors = computed(() => {
    const control = this.productForm.controls['category'];
    return this.formValidationService.getFormErrors(control);
  });

  occasionErrors = computed(() => {
    const control = this.productForm.controls['occasion'];
    return this.formValidationService.getFormErrors(control);
  });

  coverImageErrors = computed(() => {
    const control = this.productForm.controls['imageCover'];
    return this.formValidationService.getFormErrors(control);
  });

  galleryErrors = computed(() => {
    const control = this.productForm.controls['images'];
    return this.formValidationService.getFormErrors(control);
  });

  ngOnInit(): void {
    this.loadDropdownData();
    this.setupPriceCalculation();
    this.loadInitData();
  }

  loadInitData() {
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
    this.productService
      .getCategories()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res: CategoriesResponse) =>
          this.categories.set(res.categories || []),
        error: (err: unknown) =>
          console.error('Error loading categories:', err),
      });

    this.productService
      .getOccasions()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res: OccasionsResponse) =>
          this.occasions.set(res.occasions || []),
        error: (err: unknown) => console.error('Error loading occasions:', err),
      });
  }

  setupPriceCalculation(): void {
    this.productForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
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
    this.productService
      .getProductById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
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

    const coverFile = formValue.imageCover;
    if (coverFile instanceof File) {
      formData.append('imgCover', coverFile);
    }
    const galleryFiles = formValue.images;
    if (Array.isArray(galleryFiles)) {
      galleryFiles.forEach(file => {
        if (file instanceof File) {
          formData.append('images', file);
        }
      });
    }

    if (this.isEditMode()) {
      formData.delete('discount');
      formData.delete('category');
      formData.delete('occasion');
      this.productService
        .updateProduct(this.productId()!, formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => {
            this.router.navigate(['/dashboard/products']);
          },
          error: (err: unknown) => {
            console.error('Error updating product:', err);
            this.loading.set(false);
          },
        });
    } else {
      this.productService
        .addProduct(formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
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

  openProductCover(): void {
    this.isGalleryModalOpened.set(true);
    const carouselObj = {
      id: 1,
      imageUrl: this.coverPreviewUrl(),
    };
    this.carouselData.set([carouselObj]);
  }

  openProductGallery(): void {
    if (this.galleryPreviewUrls().length) {
      this.isGalleryModalOpened.set(true);
      this.carouselData.set(
        this.galleryPreviewUrls().map((url, index) => ({
          id: index + 1,
          imageUrl: url,
        }))
      );
    }
  }
}
