import { Component, input } from '@angular/core';
import { Product } from '../../overview.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-overview-top-selling-products-section',
  imports: [TranslocoPipe],
  templateUrl: './overview-top-selling-products-section.component.html',
})
export class OverviewTopSellingProductsSectionComponent {
  topSellingProducts = input.required<Product[]>();
}
