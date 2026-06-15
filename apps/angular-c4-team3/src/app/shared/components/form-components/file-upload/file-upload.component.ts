import { Component, computed, inject, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { LucideAngularModule, Upload } from 'lucide-angular';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-file-upload',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    LucideAngularModule,
    LabelComponent,
  ],
  templateUrl: './file-upload.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class FileUploadComponent {
  private readonly controlContainer = inject(ControlContainer);

  readonly UploadIcon = Upload;

  // Signal Inputs
  id = input.required<string>();
  fieldControlName = input.required<string>();
  label = input<string>('');
  placeholder = input<string>('No file selected');
  required = input<boolean>(false);
  multiple = input<boolean>(false);
  accept = input<string>('image/*');
  initialPreviews = input<string[]>([]);
  errorMessages = input<string[]>();

  previewUrls = signal<string[]>([]);
  fileNameDisplay = signal<string>('');

  fileuploadPt = signal<any>({
    root: {
      class: 'border-none! bg-transparent! p-0! w-full',
    },
    pcUploadBtn: {
      class: 'hidden!',
    },
    pcCancelBtn: {
      class: 'hidden!',
    },
    header: {
      class: 'hidden!',
    },
    content: {
      class: 'p-0! border-none! bg-transparent!',
    },
    file: {
      class: 'hidden!',
    },
    fileThumbnail: {
      class: 'hidden!',
    },
    fileDetails: {
      class: 'hidden!',
    },
    fileActions: {
      class: 'hidden!',
    },
    row: {
      class: 'hidden!',
    },
  });

  get parentFormGroup() {
    return this.controlContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.fieldControlName()) as FormControl;
  }

  name = computed(() => this.fieldControlName() || this.id());
  disabled = computed(() => this.control.disabled ?? false);

  constructor() {
    effect(() => {
      const initial = this.initialPreviews();
      if (initial && initial.length > 0) {
        this.previewUrls.set(initial);
        if (this.multiple()) {
          this.fileNameDisplay.set(`${initial.length} images uploaded`);
        } else {
          const url = initial[0];
          const name = url.substring(url.lastIndexOf('/') + 1) || 'Current image';
          this.fileNameDisplay.set(name);
        }
      }
    });
  }

  onSelect(event: any): void {
    if (event.files && event.files.length > 0) {
      const filesArray = Array.from(event.files) as File[];
      
      if (this.multiple()) {
        this.control.setValue(filesArray);
        this.control.markAsTouched();
        this.fileNameDisplay.set(`${filesArray.length} files selected`);

        const newUrls: string[] = [];
        let loadedCount = 0;
        filesArray.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            newUrls.push(e.target?.result as string);
            loadedCount++;
            if (loadedCount === filesArray.length) {
              this.previewUrls.set(newUrls);
            }
          };
          reader.readAsDataURL(file);
        });
      } else {
        const file = filesArray[0];
        this.control.setValue(file);
        this.control.markAsTouched();
        this.fileNameDisplay.set(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewUrls.set([e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onClear(): void {
    this.control.setValue(null);
    this.control.markAsTouched();
    this.previewUrls.set([]);
    this.fileNameDisplay.set('');
  }
}
