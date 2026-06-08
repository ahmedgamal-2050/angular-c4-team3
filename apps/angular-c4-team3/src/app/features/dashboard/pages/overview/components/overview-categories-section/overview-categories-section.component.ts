import { Component, input } from '@angular/core';
import { Category } from '../../overview.model';

@Component({
  selector: 'app-overview-categories-section',
  imports: [],
  templateUrl: './overview-categories-section.component.html',
})
export class OverviewCategoriesSectionComponent {
  categories = input.required<Category[]>();
}
