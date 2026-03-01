import { Component, inject, signal } from '@angular/core';
import { CarouselModule, CarouselPassThrough } from 'primeng/carousel';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-gift-carousel',
  imports: [CarouselModule, ButtonComponent],
  templateUrl: './special-gift-carousel.component.html',
  host: {
    class: 'col-span-3'
  }
})
export class SpecialGiftCarouselComponent {
  private _router = inject(Router);

  carouselData = signal([
    {
      id: 1,
      containerClass: "bg-[url('assets/images/special-gift-2.png')]",
      title: 'Say It with Flowers',
      description: 'Elegant gifts for every special moment.',
      url: 'products'
    },
    {
      id: 2,
      containerClass: "bg-[url('assets/images/special-gift-3.png')]",
      title: 'Say It with Flowers',
      description: 'Elegant gifts for every special moment.',
      url: 'products'
    },
    {
      id: 3,
      containerClass: "bg-[url('assets/images/special-gift-4.png')]",
      title: 'Say It with Flowers',
      description: 'Elegant gifts for every special moment.',
      url: 'products'
    },
    {
      id: 4,
      containerClass: "bg-[url('assets/images/special-gift-5.png')]",
      title: 'Say It with Flowers',
      description: 'Elegant gifts for every special moment.',
      url: 'products'
    },
  ]);
  pt = signal<CarouselPassThrough>({
    contentContainer: {
      class: 'h-full relative'
    },
    content: {
      class: 'h-full'
    },
    viewport: {
      class: 'h-full'
    },
    itemList: {
      class: 'h-full'
    },
    indicatorList: {
      class: 'absolute! top-6 end-6 z-1 gap-2!'
    },
    indicator: {
      class: 'group'
    },
    indicatorButton: {
      class: 'size-3! rounded-full! bg-maroon-50! group-[.p-carousel-indicator-active]:bg-maroon-700! group-[.p-carousel-indicator-active]:w-8!',
    },
    pcPrevButton: {
      root: {
        class: 'bg-maroon-50! rounded-e-none! text-maroon-700! absolute! bottom-2 end-14 -translate-y-1/2 size-8! z-1'
      }
    },
    pcNextButton: {
      root: {
        class: 'bg-maroon-50! rounded-s-none! text-maroon-700! absolute! bottom-2 end-6 -translate-y-1/2 size-8! z-1'
      }
    }
  })

  shopNow(url: string) {
    this._router.navigate([url]);
  }
}
