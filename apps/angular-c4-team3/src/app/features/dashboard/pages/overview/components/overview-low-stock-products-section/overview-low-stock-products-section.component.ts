import { Component, input } from '@angular/core';
import { Product } from '../../overview.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-overview-low-stock-products-section',
  imports: [TranslocoPipe],
  templateUrl: './overview-low-stock-products-section.component.html',
})
export class OverviewLowStockProductsSectionComponent {
  lowStockProducts = input.required<Product[]>();
}
