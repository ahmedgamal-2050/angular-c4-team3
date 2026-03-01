import { Component, input } from '@angular/core';

@Component({
  selector: 'app-special-gift-content',
  imports: [],
  templateUrl: './special-gift-content.component.html',
})
export class SpecialGiftContentComponent {
  tagLabel = input<string>();
  title = input<string>();
  titleClass = input<string>();
}
