import { Component, input } from '@angular/core';

@Component({
  selector: 'app-styled-home-title',
  imports: [],
  templateUrl: './styled-home-title.component.html',
})
export class StyledHomeTitleComponent {
  title = input.required<string>();
}
