import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';




@Component({
  selector: 'app-trusted-section',
  imports: [TranslocoModule,],
  templateUrl: './trusted-section.html',
//   styleUrl: './trusted-section.component.css',
  standalone: true,
})
export class TrustedSectionComponent {
  images:string[]=['./assets/images/brand-1.png','./assets/images/brand-2.png','./assets/images/brand-3.png','./assets/images/brand-4.png','./assets/images/brand-5.png'];
}
