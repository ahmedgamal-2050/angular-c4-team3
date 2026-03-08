import { Component, inject, input } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { LucideAngularModule, ShoppingCart, Heart } from 'lucide-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS_SVG } from '../../constants/icons-svg';
import { TranslocoModule } from '@jsverse/transloco';
import { APP_ROUTES } from '../../constants/app-routes';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../../features/landing/pages/home/home.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, LucideAngularModule, TranslocoModule,ProductCardComponent],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  // ✅ Input Signal
  products  = input<Product[]>([]);
  numVisible = input(4);

  responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
    { breakpoint: '640px', numVisible: 1, numScroll: 1 },
  ];

}
