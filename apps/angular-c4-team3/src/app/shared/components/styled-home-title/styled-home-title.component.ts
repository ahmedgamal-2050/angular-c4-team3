import { Component, input } from '@angular/core';

@Component({
  selector: 'app-styled-home-title',
  imports: [],
  templateUrl: './styled-home-title.component.html',
  standalone: true,
})
export class StyledHomeTitleComponent {
  title = input.required<string>();
}
