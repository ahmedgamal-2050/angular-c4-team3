import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  columns = input.required<TableColumn[]>();
  rows = input.required<any[]>();
  editClick = output<any>();
  deleteClick = output<any>();
}
