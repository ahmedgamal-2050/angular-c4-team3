import { Component, signal } from '@angular/core';
import { ButtonComponent } from "shared-design/src/lib/button/button.component";
import { SpecialGiftOverlayComponent } from './special-gift-overlay/special-gift-overlay.component';
import { SpecialGiftContentComponent } from './special-gift-content/special-gift-content.component';
import { SpecialGiftCarouselComponent } from './special-gift-carousel/special-gift-carousel.component';

@Component({
  selector: 'app-special-gift-section',
  imports: [ButtonComponent, SpecialGiftOverlayComponent, SpecialGiftContentComponent, SpecialGiftCarouselComponent],
  templateUrl: './special-gift-section.component.html',
})
export class SpecialGiftSectionComponent {
  giftTopSectionData = signal({
    tagLabel: 'Staring from 10.99 EGP',
    title: 'Special Gifts For The People You Love',
    titleClass: 'h-20',
    containerClass: 'col-span-1 bg-[url("assets/images/special-gift-1.png")]',
  });

  giftBottomSectionData = signal([
    {
      id: 1,
      tagLabel: 'Wedding',
      title: 'Celebrate Her Forever with a Gift She’ll Always Remember',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-3.png")]',
    },
    {
      id: 2,
      tagLabel: 'Engagement',
      title: 'Honor the Beginning of a Beautiful Journey Together',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-4.png")]',
    },
    {
      id: 3,
      tagLabel: 'Anniversary',
      title: 'Mark Every Year of Love with a Meaningful Surprise',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-5.png")]',
    },
  ]);

  shopNow() {
    console.log('Shop Now');
  }
}
