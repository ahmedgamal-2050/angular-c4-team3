import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, ArrowRight, Check } from 'lucide-angular';
import { ButtonComponent } from '@angular-c4-team3/shared-design';

@Component({
  selector: 'app-about-home',
  imports: [ButtonComponent, TranslocoModule, LucideAngularModule],
  templateUrl: './about-home.component.html',
  styleUrl: './about-home.component.css',
  standalone: true,
})
export class AboutHomeComponent {
  featuresKeys = ['price', 'quality', 'occasion', 'delivery'];
  readonly arrow_right = ArrowRight;
  readonly check = Check;
}
