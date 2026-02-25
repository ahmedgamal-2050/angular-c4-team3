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
  features = [
    'Competitive Prices & Easy Shopping',
    'Premium Quality & Elegant Packaging',
    'Perfect for Every Occasion',
    'Fast & Reliable Delivery',
  ];
}
