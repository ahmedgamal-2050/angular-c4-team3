import { Component, computed, input } from '@angular/core';
import { Overall } from '../../overview.model';
import {
  CircleDollarSign,
  ClipboardList,
  LucideAngularModule,
  Package,
  ReceiptText,
} from 'lucide-angular';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-overview-overall-section',
  imports: [LucideAngularModule, TranslocoPipe],
  templateUrl: './overview-overall-section.component.html',
})
export class OverviewOverallSectionComponent {
  overall = input.required<Overall | null>();

  overallCards = computed(() => {
    return [
      {
        title: 'overview_overall_section_total_products',
        value: this.overall()?.totalProducts ?? 0,
        icon: Package,
        backgroundClass: 'bg-maroon-50',
        textClass: 'text-maroon-600',
      },
      {
        title: 'overview_overall_section_total_orders',
        value: this.overall()?.totalOrders ?? 0,
        icon: ReceiptText,
        backgroundClass: 'bg-blue-50',
        textClass: 'text-blue-600',
      },
      {
        title: 'overview_overall_section_total_categories',
        value: this.overall()?.totalCategories ?? 0,
        icon: ClipboardList,
        backgroundClass: 'bg-pink-50',
        textClass: 'text-pink-600',
      },
      {
        title: 'overview_overall_section_total_revenue',
        value: this.overall()?.totalRevenue ?? 0,
        icon: CircleDollarSign,
        backgroundClass: 'bg-emerald-50',
        textClass: 'text-emerald-600',
      },
    ];
  });
}
