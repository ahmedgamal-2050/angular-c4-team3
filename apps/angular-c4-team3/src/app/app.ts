import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule, ToastPassThrough } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  imports: [RouterOutlet, ToastModule],
  providers: [MessageService],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  toastPt = signal<ToastPassThrough>({
    message: {
      class:
        'bg-red-50! min-w-80! rounded-lg! border-1! border-red-200! outline-0! text-maroon-600! p-2',
    },
    messageContent: {
      class: 'flex! items-center! gap-2!',
    },
    summary: {
      class: 'font-semibold! text-base!',
    },
    detail: {
      class: 'text-sm!',
    },
    closeButton: {
      class: 'pe-2!',
    },
  });
}
