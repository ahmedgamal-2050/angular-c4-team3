import { Component, inject, signal } from '@angular/core';
import { CarouselModule, CarouselPassThrough } from 'primeng/carousel';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { APP_ROUTES } from '../../../../../../../shared/constants/app-routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-special-gift-carousel',
  imports: [CarouselModule, ButtonComponent, TranslocoPipe, RouterLink],
  templateUrl: './special-gift-carousel.component.html',
  host: {
    class: 'col-span-1 lg:col-span-3',
  },
})
export class SpecialGiftCarouselComponent {
  private _router = inject(Router);

  productsRoute = signal([
    '/',
    APP_ROUTES.LANDING.ROOT,
    APP_ROUTES.LANDING.PRODUCTS,
  ]);

  carouselData = signal([
    {
      id: 1,
      containerClass: "bg-[url('/assets/images/special-gift-2.png')]",
      title: 'special_gift_carousel_title_1',
      description: 'special_gift_carousel_description_1',
      buttonLabel: 'special_gift_carousel_button_1',
      url: this.productsRoute(),
    },
    {
      id: 2,
      containerClass: "bg-[url('/assets/images/special-gift-3.png')]",
      title: 'special_gift_carousel_title_2',
      description: 'special_gift_carousel_description_2',
      buttonLabel: 'special_gift_carousel_button_2',
      url: this.productsRoute(),
    },
    {
      id: 3,
      containerClass: "bg-[url('/assets/images/special-gift-4.png')]",
      title: 'special_gift_carousel_title_3',
      description: 'special_gift_carousel_description_3',
      buttonLabel: 'special_gift_carousel_button_3',
      url: this.productsRoute(),
    },
    {
      id: 4,
      containerClass: "bg-[url('/assets/images/special-gift-5.png')]",
      title: 'special_gift_carousel_title_4',
      description: 'special_gift_carousel_description_4',
      buttonLabel: 'special_gift_carousel_button_4',
      url: this.productsRoute(),
    },
  ]);
  pt = signal<CarouselPassThrough>({
    contentContainer: {
      class: 'h-full relative',
    },
    content: {
      class: 'h-full',
    },
    viewport: {
      class: 'h-full',
    },
    itemList: {
      class: 'h-full',
    },
    indicatorList: {
      class: 'absolute! top-6 end-6 z-1 gap-2!',
    },
    indicator: {
      class: 'group',
    },
    indicatorButton: {
      class:
        'size-3! rounded-full! bg-maroon-50! group-[.p-carousel-indicator-active]:bg-maroon-700! group-[.p-carousel-indicator-active]:w-8!',
    },
    pcPrevButton: {
      root: {
        class:
          'bg-maroon-50! rounded-e-none! text-maroon-700! absolute! bottom-2 end-14 -translate-y-1/2 size-8! z-1 rtl:end-6 rtl:rounded-s-none! rtl:rounded-e-full!',
      },
    },
    pcNextButton: {
      root: {
        class:
          'bg-maroon-50! rounded-s-none! text-maroon-700! absolute! bottom-2 end-6 -translate-y-1/2 size-8! z-1 rtl:end-14 rtl:rounded-e-none! rtl:rounded-s-full!',
      },
    },
  });

  shopNow(url: string) {
    this._router.navigate([url]);
  }
}
