import { Component, computed, input, signal } from '@angular/core';
import { LyRevenue } from '../../overview.model';
import { ChartModule } from 'primeng/chart';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-overview-revenue-section',
  imports: [ChartModule, TranslocoPipe],
  templateUrl: './overview-revenue-section.component.html',
  host: {
    class: 'block lg:col-span-3',
  },
})
export class OverviewRevenueSectionComponent {
  dailyRevenue = input.required<LyRevenue[]>();
  monthlyRevenue = input.required<LyRevenue[]>();

  activeTab = signal<'monthly' | 'weekly'>('monthly');

  private getMonthLabel(id: string): string {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthNum = parseInt(id, 10);
    if (!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12) {
      return monthNames[monthNum - 1];
    }
    const date = new Date(id);
    if (!isNaN(date.getTime())) {
      return monthNames[date.getMonth()];
    }
    return id;
  }

  private getDayLabel(id: string): string {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(id);
    if (!isNaN(date.getTime())) {
      return dayNames[date.getDay()];
    }
    return id;
  }

  chartData = computed(() => {
    const tab = this.activeTab();
    const isMonthly = tab === 'monthly';
    const rawData = isMonthly ? this.monthlyRevenue() : this.dailyRevenue();

    let sortedData: LyRevenue[] = [];
    if (isMonthly) {
      sortedData = [...rawData].sort(
        (a, b) => parseInt(a._id, 10) - parseInt(b._id, 10)
      );
    } else {
      sortedData = [...rawData].sort(
        (a, b) => new Date(a._id).getTime() - new Date(b._id).getTime()
      );
    }

    const labels = sortedData.map(item =>
      isMonthly ? this.getMonthLabel(item._id) : this.getDayLabel(item._id)
    );
    const values = sortedData.map(item => item.revenue);

    return {
      labels,
      datasets: [
        {
          data: values,
          borderColor: '#b91c1c',
          borderWidth: 2.5,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHitRadius: 10,
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return null;
            }
            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, 'rgba(185, 28, 28, 0.2)');
            gradient.addColorStop(1, 'rgba(185, 28, 28, 0.001)');
            return gradient;
          },
        },
      ],
    };
  });

  chartOptions = computed(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context: any) => {
              return ` ${context.parsed.y} EGP`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: '#f4f4f5',
          },
          border: {
            display: false,
          },
          ticks: {
            color: '#18181b',
            font: {
              size: 11,
              weight: 'bold',
            },
            padding: 8,
          },
        },
        y: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            display: innerWidth < 1024 ? false : true,
          },
        },
      },
    };
  });

  maxPointLabelPlugin = signal({
    id: 'maxPointLabel',
    afterDatasetsDraw(chart: any) {
      const { ctx, data } = chart;
      const dataset = data.datasets[0];
      if (!dataset || !dataset.data || dataset.data.length === 0) return;

      let maxVal = -Infinity;
      let maxIdx = -1;
      for (let i = 0; i < dataset.data.length; i++) {
        const val = dataset.data[i];
        if (val > maxVal) {
          maxVal = val;
          maxIdx = i;
        }
      }

      if (maxIdx === -1) return;

      const meta = chart.getDatasetMeta(0);
      const point = meta.data[maxIdx];
      if (!point) return;

      const { x: ptX, y: ptY } = point;

      ctx.save();
      // Draw highlighted dot
      ctx.beginPath();
      ctx.arc(ptX, ptY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#991b1b';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Draw text label
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#991b1b';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      const text = `${maxVal} EGP`;
      ctx.fillText(text, ptX, ptY - 8);
      ctx.restore();
    },
  });

  chartPlugins = signal([this.maxPointLabelPlugin()]);
}
