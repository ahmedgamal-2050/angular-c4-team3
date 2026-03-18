import { Component, computed, input, linkedSignal } from '@angular/core';
import { CategoryElement, Product } from '../../home.model';
import { ProductCardComponent } from '../../../../../../shared/components/product-card/product-card.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { ArrowRight } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { StyledHomeTitleComponent } from '../../../../../../shared/components/styled-home-title/styled-home-title.component';
import { APP_ROUTES } from '../../../../../../shared/constants/app-routes';

@Component({
  selector: 'app-most-popular-section',
  standalone: true,
  imports: [
    ProductCardComponent,
    TranslocoPipe,
    LucideAngularModule,
    RouterLink,
    SlicePipe,
    StyledHomeTitleComponent,
  ],
  templateUrl: './most-popular-section.component.html',
})
export class MostPopularSectionComponent {
  readonly ArrowRight = ArrowRight;
  readonly APP_ROUTES = APP_ROUTES;

  products = input.required<Product[]>();
  occasions = input.required<CategoryElement[]>();

  selectedOccasion = linkedSignal<string | null>(() => {
    return this.occasions()[0]?._id ?? null;
  });

  filteredProducts = computed(() => {
    const occasionId = this.selectedOccasion();
    const allProducts = this.products();

    if (!occasionId) {
      return allProducts.slice(0, 12); // Show first 12 if no filter
    }

    return allProducts.filter(p => p.occasion === occasionId).slice(0, 12);
  });

  selectOccasion(id: string | null) {
    this.selectedOccasion.set(id);
  }
}
