import { Component, output, signal } from '@angular/core';
import {
  EllipsisVertical,
  LucideAngularModule,
  Pencil,
  Trash2,
} from 'lucide-angular';
import { MenuModule, MenuPassThrough } from 'primeng/menu';

@Component({
  selector: 'app-table-actions',
  imports: [LucideAngularModule, MenuModule],
  templateUrl: './table-actions.component.html',
})
export class TableActionsComponent {
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;
  readonly EllipsisVertical = EllipsisVertical;

  delete = output<void>();
  navigateToEdit = output<void>();

  actionItems = signal([
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
    },
  ]);
  menuPt = signal<MenuPassThrough>({
    root: {
      class: 'bg-white! dark:bg-zinc-800! rounded-md! shadow-sm!',
    },
  });
}
