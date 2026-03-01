import { Component, input } from '@angular/core';

@Component({
  selector: 'app-special-gift-overlay',
  imports: [],
  templateUrl: './special-gift-overlay.component.html',
  host: {
    class: 'bg-cover bg-center rounded-2xl relative',
    '[class]': "containerClass()",
  },
})
export class SpecialGiftOverlayComponent {
  containerClass = input<string>('');
}
