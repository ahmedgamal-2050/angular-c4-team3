import { Component, Input, signal, Signal, OnInit } from '@angular/core';
import { RatingModule, RatingPassThrough } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CategoryWithIcon, OccasionWithSelected } from '../../services/product-filters.model';
import { TranslocoPipe } from '@jsverse/transloco';
@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [RatingModule, InputTextModule, FormsModule , TranslocoPipe],
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {
  @Input() categories!: Signal<CategoryWithIcon[]>;
  @Input() occasions!: Signal<OccasionWithSelected[]>;
  @Input() ratingValue!: Signal<number>;
  @Input() priceFrom!: Signal<number | null>;
  @Input() priceTo!: Signal<number | null>;

  ratingPassThrough = signal<RatingPassThrough>({
    root: { class: 'gap-1!' },
  });

  ngOnInit() {}
}