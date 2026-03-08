import { Component, inject, input } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { RelatedProduct } from '../../../features/landing/pages/product-details/related-product';
import { LucideAngularModule, ShoppingCart, Heart } from 'lucide-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS_SVG } from '../../constants/icons-svg';
import { TranslocoModule } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";
import { APP_ROUTES } from '../../constants/app-routes';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, LucideAngularModule, TranslocoModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  // ✅ Input Signal
  products = input<RelatedProduct[]>([]);
  numVisible = input(4);

  readonly Heart = Heart;
  readonly ShoppingCart = ShoppingCart;
  readonly APP_ROUTES = APP_ROUTES;
  
  responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
    { breakpoint: '640px', numVisible: 1, numScroll: 1 },
  ];
  private sanitizer = inject(DomSanitizer);

  getDiscountPercent(price: number, priceAfterDiscount: number): number {
    return Math.round(((price - priceAfterDiscount) / price) * 100);
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
}
