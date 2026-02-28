import { Component, inject, signal } from '@angular/core';
import { SpecialGiftOverlayComponent } from '../special-gift-overlay/special-gift-overlay.component';
import { CarouselModule, CarouselPassThrough } from 'primeng/carousel';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-gift-carousel',
  imports: [SpecialGiftOverlayComponent, CarouselModule, ButtonComponent],
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
      class: 'h-full'
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
    indicatorButton: {
      class: 'size-2 rounded-full bg-maroon-50!'
    }
  })

  shopNow(url: string) {
    this._router.navigate([url]);
  }
}
