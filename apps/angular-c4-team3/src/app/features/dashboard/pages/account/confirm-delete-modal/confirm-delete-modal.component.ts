import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoPipe],
  templateUrl: './confirm-delete-modal.component.html',
})
export class ConfirmDeleteModalComponent {
  confirmed = output<void>();
  cancelled = output<void>();
}
