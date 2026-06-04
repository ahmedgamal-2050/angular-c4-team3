import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
})
export class StepperComponent {
  totalSteps = input<number>(2);
  currentActiveStep = input<number>(1);

  steps = computed(() => {
    const total = this.totalSteps();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  activeLineWidth = computed(() => {
    const total = this.totalSteps();
    const current = this.currentActiveStep();
    if (total <= 1) return 0;
    const activeCount = Math.min(Math.max(1, current), total);
    return (activeCount / (total + 1)) * 100;
  });
}
