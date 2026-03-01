import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, computed, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, Star } from 'lucide-angular';
import { ICONS_SVG } from '../../../../shared/constants/icons-svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Review } from '../../product';
import { InputComponent } from '../../../../shared/components/form-components/input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { TextareaComponent } from '../../../../shared/components/form-components/textarea/textarea.component';
import { ProductsService } from '../../services/prodacts.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { APP_STORAGE } from 'apps/angular-c4-team3/src/app/shared/constants/app-storage';
import { StyledHomeTitleComponent } from '../../../../shared/components/styled-home-title/styled-home-title.component'; 

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    LucideAngularModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    TextareaComponent,
    ProgressSpinnerModule,
    StyledHomeTitleComponent,
  ],
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css'],
})
export class ProductReviewComponent implements OnInit {
  REVIEWS: Review[] = [];
  rating = 0;
  totalRatings = 0;
  readonly single_star = Star;
  form!: FormGroup;
  loading = false;
  isLoggedIn = computed<boolean>(() => localStorage.getItem(APP_STORAGE.token) !== null);

  private ProductsService = inject(ProductsService);
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.initializeForm();
    this.getProductReviewById();
  }

  getStarsArray(rating: number): SafeHtml[] {
    const stars: SafeHtml[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.fullStar));
      } else if (i === fullStars && hasHalfStar) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.halfStar));
      }
    }

    return stars;
  }

  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      product:new FormControl('673e2e1f1159920171828153'),
      rating:new FormControl(5,[Validators.required])
    });
  }

  getProductReviewById() {
    this.loading = true;
    this.ProductsService.getProductReviewById(
      '673e2e1f1159920171828153',
    ).subscribe({
      next: (res) => {
        this.REVIEWS = res?.reviews;
        this.totalRatings = this.REVIEWS.length;

        if (this.totalRatings > 0) {
          const total = this.REVIEWS.reduce((sum, r) => sum + r.rating, 0);
          this.rating = +(total / this.totalRatings).toFixed(1);
        } else {
          this.rating = 0;
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  createReview() {
    if (this.form.invalid) {
      // Mark all fields as touched to show validation errors
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };

    // Subscribe to login observable and add it to the subscription container
    this.ProductsService.createReview(payload).subscribe({
      next: (res) => {
        this.getProductReviewById();
      },
    });
  }

}
