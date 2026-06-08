import { Component, Directive, TemplateRef, contentChildren, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, TablePassThrough } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { LucideAngularModule, Search } from 'lucide-angular';
import { PAGINATOR_PT } from '../../constants/pass-through';

export interface StatusStyle {
  class: string;
  dotClass: string;
  label?: string;
}

export interface TableColumn {
  field: string;
  header: string;
  type?: 'text' | 'avatar' | 'status' | 'boolean';
  width?: string;
  avatarImageField?: string;
  avatarNameField?: string;
  avatarImageBaseUrl?: string;
  statusConfig?: Record<string, StatusStyle>;
}

@Directive({
  selector: '[appTableCell]',
})
export class TableCellDirective {
  appTableCell = input.required<string>();
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    InputTextModule,
    FormsModule,
    LucideAngularModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  readonly Search = Search;

  // Signal Inputs
  data = input<unknown[]>([]);
  columns = input<TableColumn[]>([]);
  globalFilterFields = input<string[]>([]);
  loading = input<boolean>(false);
  rows = input<number>(10);

  // Content children signal query for cell templates
  cellTemplates = contentChildren(TableCellDirective);

  tablePt = signal<TablePassThrough>({
    root: {
      class: 'overflow-hidden flex flex-col',
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

  resolveFieldData(rowData: unknown, field: string): unknown {
    if (!rowData || !field) return undefined;
    return field.split('.').reduce<unknown>((acc, part) => (acc as Record<string, unknown>)?.[part], rowData);
  }

  getStatusConfig(rowData: unknown, col: TableColumn): StatusStyle {
    const status = String(this.resolveFieldData(rowData, col.field) || '');
    const key = status.toLowerCase();
    if (col.statusConfig && col.statusConfig[key]) {
      return col.statusConfig[key];
    }
    return {
      class: 'bg-zinc-50 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800',
      dotClass: 'bg-zinc-500 dark:bg-zinc-400',
      label: status,
    };
  }

  getStatusLabel(rowData: unknown, col: TableColumn): string {
    const status = String(this.resolveFieldData(rowData, col.field) || '');
    const config = this.getStatusConfig(rowData, col);
    return config.label || status.charAt(0).toUpperCase() + status.slice(1);
  }

  getTemplateForColumn(field: string): TemplateRef<unknown> | null {
    const cellDirective = this.cellTemplates().find((t) => t.appTableCell() === field);
    return cellDirective ? cellDirective.templateRef : null;
  }
}

