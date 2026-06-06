import {
  afterNextRender,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { OrdersByStatus } from '../../overview.model';
import { ChartModule } from 'primeng/chart';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-overview-order-status-section',
  imports: [ChartModule, TranslocoPipe],
  templateUrl: './overview-order-status-section.component.html',
})
export class OverviewOrderStatusSectionComponent {
  ordersByStatus = input.required<OrdersByStatus[]>();

  data = signal<any>(null);
  options = signal<any>(null);
  orderStatusChart = computed(() => {
    return this.ordersByStatus().map(item => ({
      status: item._id,
      count: item.count,
      percentage: Math.floor(
        (item.count / this.ordersByStatus().reduce((a, b) => a + b.count, 0)) *
          100
      ),
    }));
  });
  labels = computed(() => this.orderStatusChart().map(item => item.status));
  counts = computed(() => this.orderStatusChart().map(item => item.count));
  percentage = computed(() =>
    this.orderStatusChart().map(item => item.percentage)
  );

  renderChart = effect(() => {
    if (this.ordersByStatus().length > 0) {
      this.initChart();
    }
  });

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--color-zinc-800');

    this.data.set({
      labels: this.labels(),
      datasets: [
        {
          data: this.percentage(),
          backgroundColor: [
            documentStyle.getPropertyValue('--color-blue-500'),
            documentStyle.getPropertyValue('--color-emerald-600'),
            documentStyle.getPropertyValue('--color-red-600'),
          ],
        },
      ],
    });

    this.options.set({
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
          labels: {
            color: textColor,
          },
        },
      },
    });
  }
}
