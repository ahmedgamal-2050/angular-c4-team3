import { Component, OnInit, inject, signal } from '@angular/core';
import { OverviewService } from './services/overview.service';
import {
  AllStatisticsResponse,
  Category,
  LyRevenue,
  OrdersByStatus,
  Overall,
  Product,
} from './overview.model';
import { OverviewOverallSectionComponent } from './components/overview-overall-section/overview-overall-section.component';
import { OverviewCategoriesSectionComponent } from './components/overview-categories-section/overview-categories-section.component';
import { OverviewOrderStatusSectionComponent } from './components/overview-order-status-section/overview-order-status-section.component';
import { OverviewRevenueSectionComponent } from './components/overview-revenue-section/overview-revenue-section.component';
import { OverviewTopSellingProductsSectionComponent } from './components/overview-top-selling-products-section/overview-top-selling-products-section.component';
import { OverviewLowStockProductsSectionComponent } from './components/overview-low-stock-products-section/overview-low-stock-products-section.component';

@Component({
  selector: 'app-overview',
  imports: [
    OverviewOverallSectionComponent,
    OverviewCategoriesSectionComponent,
    OverviewOrderStatusSectionComponent,
    OverviewRevenueSectionComponent,
    OverviewTopSellingProductsSectionComponent,
    OverviewLowStockProductsSectionComponent,
  ],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  readonly overviewService = inject(OverviewService);

  overall = signal<Overall | null>(null);
  categories = signal<Category[]>([]);
  ordersByStatus = signal<OrdersByStatus[]>([]);
  dailyRevenue = signal<LyRevenue[]>([]);
  monthlyRevenue = signal<LyRevenue[]>([]);
  topSellingProducts = signal<Product[]>([]);
  lowStockProducts = signal<Product[]>([]);

  ngOnInit(): void {
    this.getAllStatistics();
  }

  getAllStatistics() {
    this.overviewService.getAllStatistics().subscribe({
      next: (res: AllStatisticsResponse) => {
        this.overall.set(res.statistics.overall);
        this.categories.set(res.statistics.categories);
        this.ordersByStatus.set(res.statistics.orders.ordersByStatus);
        this.dailyRevenue.set(res.statistics.orders.dailyRevenue);
        this.monthlyRevenue.set(res.statistics.orders.monthlyRevenue);
        this.topSellingProducts.set(res.statistics.products.topSellingProducts);
        this.lowStockProducts.set(
          res.statistics.products.lowStockProducts.sort(
            (a, b) => a.quantity! - b.quantity!
          )
        );
      },
    });
  }
}
