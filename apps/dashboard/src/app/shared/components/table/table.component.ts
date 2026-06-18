import { Component, TemplateRef, input, output, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, TablePassThrough } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {
  EllipsisVertical,
  LucideAngularModule,
  Pencil,
  Search,
  Trash2,
} from 'lucide-angular';
import { PAGINATOR_PT } from '../../constants/pass-through';
import { TableColumn } from './table.modal';
import { TableActionsComponent } from './components/table-actions/table-actions.component';

@Component({
  selector: 'app-table',
  imports: [
    NgTemplateOutlet,
    IconFieldModule,
    InputIconModule,
    TableModule,
    InputTextModule,
    FormsModule,
    LucideAngularModule,
    TableActionsComponent,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  readonly Search = Search;

  data = input<unknown[]>([]);
  columns = input<TableColumn[]>([]);
  globalFilterFields = input<string[]>([]);
  loading = input<boolean>(false);
  rows = input<number>(10);
  cellTemplates = input.required<TemplateRef<unknown>[]>();

  delete = output<string>();
  navigateToEdit = output<string>();

  tablePt = signal<TablePassThrough>({
    root: {
      class: 'lg:overflow-hidden flex flex-col',
    },
    header: {
      class: 'pb-4.5! border-none!',
    },
    mask: {
      class: 'hidden!',
    },
    loadingIcon: {
      class: 'text-blue-600 dark:text-blue-500',
    },
    tableContainer: {
      class:
        'overflow-x-auto w-full scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800 pb-6!',
    },
    table: {
      class: 'min-w-full text-start border-collapse rounded-lg!',
    },
    thead: {
      class: 'bg-zinc-50! dark:bg-zinc-800!',
    },
    pcPaginator: PAGINATOR_PT,
  });
}
