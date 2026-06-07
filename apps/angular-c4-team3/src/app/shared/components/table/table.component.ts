import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule, TablePassThrough } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { LucideAngularModule, Search } from 'lucide-angular';
import { PAGINATOR_PT } from '../../constants/pass-through';

@Component({
  selector: 'app-table',
  imports: [
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
export class TableComponent implements OnInit {
  readonly Search = Search;

  customers!: any[];
  loading = signal<boolean>(true);
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

  ngOnInit() {
    // Populate mock customer dataset for realistic preview
    this.customers = [
      {
        id: 1000,
        name: 'James Butt',
        country: { name: 'Algeria', code: 'dz' },
        status: 'unqualified',
        verified: true,
        representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: { name: 'Egypt', code: 'eg' },
        status: 'proposal',
        verified: true,
        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
      },
      {
        id: 1002,
        name: 'Art Venere',
        country: { name: 'Panama', code: 'pa' },
        status: 'qualified',
        verified: false,
        representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      },
      {
        id: 1003,
        name: 'Lenna Paprocki',
        country: { name: 'Slovenia', code: 'si' },
        status: 'new',
        verified: true,
        representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
      },
      {
        id: 1004,
        name: 'Donette Foller',
        country: { name: 'South Africa', code: 'za' },
        status: 'negotiation',
        verified: true,
        representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      },
      {
        id: 1005,
        name: 'Simona Morasca',
        country: { name: 'Egypt', code: 'eg' },
        status: 'qualified',
        verified: false,
        representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      },
      {
        id: 1006,
        name: 'Mitsue Tollner',
        country: { name: 'Paraguay', code: 'py' },
        status: 'renewal',
        verified: true,
        representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      },
      {
        id: 1007,
        name: 'Leota Diahann',
        country: { name: 'Serbia', code: 'rs' },
        status: 'proposal',
        verified: true,
        representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
      },
      {
        id: 1008,
        name: 'Sage Wieser',
        country: { name: 'Egypt', code: 'eg' },
        status: 'unqualified',
        verified: true,
        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
      },
      {
        id: 1009,
        name: 'Kris Marple',
        country: { name: 'Italy', code: 'it' },
        status: 'negotiation',
        verified: false,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
      },
      {
        id: 1010,
        name: 'Minna Amour',
        country: { name: 'Romania', code: 'ro' },
        status: 'qualified',
        verified: true,
        representative: { name: 'Onyama Limba', image: 'onyamalimba.png' },
      },
      {
        id: 1011,
        name: 'Abel Maclead',
        country: { name: 'Singapore', code: 'sg' },
        status: 'new',
        verified: true,
        representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      },
      {
        id: 1012,
        name: 'Kiley Caldarera',
        country: { name: 'Japan', code: 'jp' },
        status: 'unqualified',
        verified: false,
        representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
      },
      {
        id: 1013,
        name: 'Graciela Lario',
        country: { name: 'Spain', code: 'es' },
        status: 'renewal',
        verified: true,
        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
      },
      {
        id: 1014,
        name: 'Cammy Rachal',
        country: { name: 'France', code: 'fr' },
        status: 'proposal',
        verified: true,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
      },
      {
        id: 1015,
        name: 'Mattie Poquette',
        country: { name: 'Germany', code: 'de' },
        status: 'negotiation',
        verified: false,
        representative: { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      },
    ];
  }
}
