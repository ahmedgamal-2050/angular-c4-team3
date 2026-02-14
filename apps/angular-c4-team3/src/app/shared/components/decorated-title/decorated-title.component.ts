import { Component, input } from '@angular/core';

@Component({
  selector: 'app-decorated-title',
  imports: [],
  templateUrl: './decorated-title.component.html',
  styleUrl: './decorated-title.component.css',
})
export class DecoratedTitleComponent {
  title = input<string>('');
}
