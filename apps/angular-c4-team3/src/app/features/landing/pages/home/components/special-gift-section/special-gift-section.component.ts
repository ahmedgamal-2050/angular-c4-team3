import { Component, signal } from '@angular/core';
import { ButtonComponent } from "@angular-c4-team3/shared-design";
import { SpecialGiftOverlayComponent } from './special-gift-overlay/special-gift-overlay.component';
import { SpecialGiftContentComponent } from './special-gift-content/special-gift-content.component';
import { SpecialGiftCarouselComponent } from './special-gift-carousel/special-gift-carousel.component';
import { ArrowRight } from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-special-gift-section',
  imports: [ButtonComponent, SpecialGiftOverlayComponent, SpecialGiftContentComponent, SpecialGiftCarouselComponent, TranslocoPipe],
  templateUrl: './special-gift-section.component.html',
})
export class SpecialGiftSectionComponent {
  ArrowRight = ArrowRight;

  giftTopSectionData = signal({
    tagLabel: 'special_gift_top_card_tag',
    title: 'special_gift_top_card_title',
    titleClass: 'h-20',
    containerClass: 'col-span-1 bg-[url("assets/images/special-gift-1.png")]',
    buttonLabel: 'special_gift_top_card_button',
    url: 'products'
  });

  giftBottomSectionData = signal([
    {
      id: 1,
      tagLabel: 'special_gift_bottom_card_tag_1',
      title: 'special_gift_bottom_card_title_1',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-3.png")]',
    },
    {
      id: 2,
      tagLabel: 'special_gift_bottom_card_tag_2',
      title: 'special_gift_bottom_card_title_2',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-4.png")]',
    },
    {
      id: 3,
      tagLabel: 'special_gift_bottom_card_tag_3',
      title: 'special_gift_bottom_card_title_3',
      titleClass: 'h-12',
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-5.png")]',
    },
  ]);

  shopNow() {
    console.log('Shop Now');
  }
}
