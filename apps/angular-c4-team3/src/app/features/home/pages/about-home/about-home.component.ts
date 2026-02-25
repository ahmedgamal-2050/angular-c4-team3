import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonComponent } from 'shared-design/src/lib/button/button.component';

@Component({
  selector: 'app-about-home',
  imports: [ButtonComponent, TranslocoModule],
  templateUrl: './about-home.component.html',
  styleUrl: './about-home.component.css',
  standalone: true,
})
export class AboutHomeComponent {
  description = `Make every moment memorable with our premium gift boxes. Carefully curated and
  beautifully packaged, each box is filled with handpicked items designed to impress.
  Whether it's for a birthday, wedding, or a simple "thank you," our gift boxes are crafted to
  leave a lasting impression — because thoughtful gifting starts here.`;

    featuresKeys = [
    'about.price',
    'about.quality',
    'about.occasion',
    'about.delivery',
  ];
}
