import { Component, Input, Output, EventEmitter, signal, OnInit, WritableSignal } from '@angular/core';
import { RatingModule, RatingPassThrough } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CategoryWithIcon, OccasionWithSelected } from '../../services/product-filters.model';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [RatingModule, InputTextModule, FormsModule, TranslocoPipe],
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {

  @Input() categories!: WritableSignal<CategoryWithIcon[]>;
  @Input() occasions!: WritableSignal<OccasionWithSelected[]>;
  @Input() ratingValue!: WritableSignal<number>;
  @Input() priceFrom!: WritableSignal<number | null>;
  @Input() priceTo!: WritableSignal<number | null>;

  @Output() filterChange = new EventEmitter<void>();

  ratingPassThrough = signal<RatingPassThrough>({
    root: { class: 'gap-1!' },
  });

  ngOnInit() {}

  // ✅ Category (Immutable update)
  selectCategory(cat: CategoryWithIcon) {
    this.categories.set(
      this.categories().map(c => ({
        ...c,
        selected: c._id === cat._id
      }))
    );

    this.filterChange.emit();
  }

  // ✅ Occasion (Immutable update)
  selectOccasion(occ: OccasionWithSelected) {
    this.occasions.set(
      this.occasions().map(o => ({
        ...o,
        selected: o._id === occ._id
      }))
    );

    this.filterChange.emit();
  }

  // ✅ Rating
  onRatingChange() {
    this.filterChange.emit();
  }

  // ✅ Price
  onPriceChange() {
    this.filterChange.emit();
  }

  // ✅ Reset Categories فقط
  resetCategories() {
    this.categories.set(
      this.categories().map(c => ({ ...c, selected: false }))
    );
    this.filterChange.emit();
  }

  // ✅ Reset Occasions فقط
  resetOccasions() {
    this.occasions.set(
      this.occasions().map(o => ({ ...o, selected: false }))
    );
    this.filterChange.emit();
  }

  // ✅ Reset All
  resetAll() {
    this.categories.set(
      this.categories().map(c => ({ ...c, selected: false }))
    );

    this.occasions.set(
      this.occasions().map(o => ({ ...o, selected: false }))
    );

    this.ratingValue.set(0);
    this.priceFrom.set(null);
    this.priceTo.set(null);

    this.filterChange.emit();
  }
}