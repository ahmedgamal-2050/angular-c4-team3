import { Component, computed, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressSpinnerPassThrough } from 'primeng/types/progressspinner';

@Component({
  selector: 'app-loading',
  imports: [ProgressSpinnerModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  loadingSize = input('size-8!');
  loadingColor = input('stroke-maroon-600! dark:stroke-soft-pink-300!');

  loadingPt = computed<ProgressSpinnerPassThrough>(() => ({
    root: {
      class: this.loadingSize(),
    },
    spin: {
      class: `${this.loadingColor()} m-0!`,
    },
    circle: {
      class: 'stroke-4!',
    },
  }));
}
