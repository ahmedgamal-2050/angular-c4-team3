import { Component, OnInit, inject, signal } from '@angular/core';
import { OverviewService } from './services/overview.service';
import {
  AllStatisticsResponse,
  Category,
  LyRevenue,
  OrdersByStatus,
  Overall,
  Product,
  ProductsByCategory,
} from './overview.model';
import { OverviewOverallSectionComponent } from './components/overview-overall-section/overview-overall-section.component';
import { OverviewCategoriesSectionComponent } from './components/overview-categories-section/overview-categories-section.component';

@Component({
  selector: 'app-overview',
  imports: [
    OverviewOverallSectionComponent,
    OverviewCategoriesSectionComponent,
  ],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  readonly overviewService = inject(OverviewService);

  overall = signal<Overall | null>(null);
  categories = signal<Category[]>([]);
  lowStockProducts = signal<Product[]>([]);
  topSellingProducts = signal<Product[]>([]);
  productsByCategory = signal<ProductsByCategory[]>([]);
  ordersByStatus = signal<OrdersByStatus[]>([]);
  dailyRevenue = signal<LyRevenue[]>([]);
  monthlyRevenue = signal<LyRevenue[]>([]);

  ngOnInit(): void {
    this.getAllStatistics();
  }

  getAllStatistics() {
    this.overviewService.getAllStatistics().subscribe({
      next: (res: AllStatisticsResponse) => {
        this.overall.set(res.statistics.overall);
        this.categories.set(res.statistics.categories);
        this.lowStockProducts.set(res.statistics.products.lowStockProducts);
        this.topSellingProducts.set(res.statistics.products.topSellingProducts);
        this.productsByCategory.set(res.statistics.products.productsByCategory);
        this.ordersByStatus.set(res.statistics.orders.ordersByStatus);
        this.dailyRevenue.set(res.statistics.orders.dailyRevenue);
        this.monthlyRevenue.set(res.statistics.orders.monthlyRevenue);
      },
    });
  }
}
