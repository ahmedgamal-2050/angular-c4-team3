import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, Star } from 'lucide-angular';
import { ICONS_SVG } from '../../../shared/constants/icons-svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Review } from '../prodact';
import { InputComponent } from '../../../shared/components/form-components/input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';
import { TextareaComponent } from '../../../shared/components/form-components/textarea/textarea.component';

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
    TextareaComponent

  ],
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css'],
})
export class ProductReviewComponent implements OnInit {
  // Safe HTML stars array
  starsArray: SafeHtml[] = [];

  // Product rating
  rating = 4.5;
  totalRatings = 8;
  stars = 5;

  readonly single_star = Star;

  // Reactive form
  form!: FormGroup;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.renderStars();
    this.initializeForm();
  }

  // Render full and half stars
  renderStars() {
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      if (i < this.fullStars) {
        this.starsArray.push(
          this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.fullStar),
        );
      } else if (i === this.fullStars && this.hasHalfStar) {
        this.starsArray.push(
          this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.halfStar),
        );
      }
    }
  }

  // Number of full stars
  get fullStars(): number {
    return Math.floor(this.rating);
  }

  // Check if rating has a half star
  get hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  // Initialize reactive form
  initializeForm() {
    this.form = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      ReviewControl: new FormControl('', [Validators.required]),
    });
  }

  // Sample Reviews
  REVIEWS: Review[] = [
    {
      name: 'Adrian',
      date: 'Apr 7, 2025',
      rating: 4,
      title: 'Awesome Bouquet!',
      content: `I ordered this bouquet for a special occasion, and it absolutely exceeded my expectations!
The flowers were fresh, beautifully arranged, and exactly as pictured—if not better.
The color combination was stunning and gave off such a luxurious vibe.
Even the wrapping was elegant and thoughtful. Delivery was right on time, and the bouquet arrived in perfect condition.
The recipient was genuinely touched and couldn't stop admiring it. Highly recommend for anyone looking to make a lasting impression. Will definitely order again!`,
    },
     {
      name: 'Adrian',
      date: 'Apr 7, 2025',
      rating: 4,
      title: 'Awesome Bouquet!',
      content: `I ordered this bouquet for a special occasion, and it absolutely exceeded my expectations!
The flowers were fresh, beautifully arranged, and exactly as pictured—if not better.
The color combination was stunning and gave off such a luxurious vibe.
Even the wrapping was elegant and thoughtful. Delivery was right on time, and the bouquet arrived in perfect condition.
The recipient was genuinely touched and couldn't stop admiring it. Highly recommend for anyone looking to make a lasting impression. Will definitely order again!`,
    },
  ];
}
