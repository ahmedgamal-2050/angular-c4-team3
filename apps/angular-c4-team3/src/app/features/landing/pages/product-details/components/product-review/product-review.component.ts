import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, computed, inject, input, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, Star } from 'lucide-angular';
import { ICONS_SVG } from '../../../../../../shared/constants/icons-svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Review } from '../../product';
import { InputComponent } from '../../../../../../shared/components/form-components/input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { TextareaComponent } from '../../../../../../shared/components/form-components/textarea/textarea.component';
import { ProductDetailsService } from '../../services/product-details.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { APP_STORAGE } from '../../../../../../shared/constants/app-storage';
import { StyledHomeTitleComponent } from '../../../../../../shared/components/styled-home-title/styled-home-title.component'; 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [
    TranslocoPipe,
    LucideAngularModule,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    TextareaComponent,
    ProgressSpinnerModule,
    StyledHomeTitleComponent,
    DatePipe,
  ],
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css'],
})
export class ProductReviewComponent implements OnInit, OnDestroy {
  readonly single_star = Star;

  private _productDetailsService = inject(ProductDetailsService);
  private sanitizer = inject(DomSanitizer);

  productId = input<string>('');

  reviews = signal<Review[]>([]);
  rating = signal(0);
  totalRatings = signal(0);
  loading = signal(false);

  isLoggedIn = computed<boolean>(() => localStorage.getItem(APP_STORAGE.token) !== null);
  
  form!: FormGroup;
  subscription = new Subscription();

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
    this.loading.set(true);
    const sub = this._productDetailsService.getProductReviewById(
      this.productId(),
    ).subscribe({
      next: (res) => {
        this.reviews.set(res?.reviews);
        this.totalRatings.set(this.reviews().length);

        if (this.totalRatings() > 0) {
          const total = this.reviews().reduce((sum, r) => sum + r.rating, 0);
          this.rating.set(+(total / this.totalRatings()).toFixed(1));
        } else {
          this.rating.set(0);
        }
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading.set(false);
      },
    });

    this.subscription.add(sub);
  }

  createReview() {
    if (this.form.invalid) {
      // Mark all fields as touched to show validation errors
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.value };

    // Subscribe to login observable and add it to the subscription container
    const sub = this._productDetailsService.createReview(payload).subscribe({
      next: () => {
        this.getProductReviewById();
      },
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
