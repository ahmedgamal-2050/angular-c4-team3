import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';


import { StyledHomeTitleComponent } from './../../../../../..//shared/components/styled-home-title/styled-home-title.component'; 

@Component({
  selector: 'app-gallery-section',
  imports: [TranslocoModule,StyledHomeTitleComponent],
  templateUrl: './gallery-section.html',
//   styleUrl: './gallery-section.component.css',
  standalone: true,
})
export class GallerySectionComponent {
  
}
