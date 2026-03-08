/* eslint-disable @nx/enforce-module-boundaries */
import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SliderComponent } from 'apps/angular-c4-team3/src/app/shared/components/slider/slider.component';
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { Product } from '../../home.model';

@Component({
  selector: 'app-best-selling',
  imports: [
    TranslocoModule,
    SliderComponent,
    ButtonComponent,
    LucideAngularModule,
  ],

  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css',
})
export class BestSellingComponent {
  readonly arrow_right = ArrowRight;

  bestSellingProducts = input<Product[]>([]);
}
