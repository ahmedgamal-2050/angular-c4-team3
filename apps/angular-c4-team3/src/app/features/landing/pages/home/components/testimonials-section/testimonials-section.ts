import { TestimonialsService } from './../../services/testimonials/testimonials.service';
import { Component , inject , signal  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { StyledHomeTitleComponent } from './../../../../../..//shared/components/styled-home-title/styled-home-title.component';
import { Subscription } from 'rxjs';
import { ITestimonial } from '../../services/testimonials/testimonials.model';




@Component({
  selector: 'app-testimonials-section',
  imports: [TranslocoModule, StyledHomeTitleComponent,DatePipe],
  templateUrl: './testimonials-section.html',
//   styleUrl: './testimonials-section.component.css',
  standalone: true,
})
export class TestimonialsSectionComponent {
  
   private _testimonialsService = inject(TestimonialsService);

  testimonials = signal<ITestimonial[]>([]);

  ngOnInit() {
    this.loadTestimonials();
  }

  loadTestimonials() {
    this._testimonialsService.getTestimonials().subscribe(res => {
      this.testimonials.set(res.testimonials);
    });
  }
}
