import { Component, input } from '@angular/core';
import { LucideAngularModule, X, RefreshCcw, Image as ImageIcon, Gift, Flower2 } from 'lucide-angular';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filters',
  imports: [LucideAngularModule, RatingModule, InputTextModule, FormsModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css',
})
export class ProductFiltersComponent {
  readonly X = X;
  readonly RefreshCcw = RefreshCcw;
  readonly ImageIcon = ImageIcon;
  readonly Gift = Gift;
  readonly Flower2 = Flower2;

  categories = input([
    { id: 1, name: 'Cards', icon: this.ImageIcon, selected: true },
    { id: 2, name: 'Chocolate', icon: this.Gift, selected: false },
    { id: 3, name: 'Flowers', icon: this.Flower2, selected: false },
    { id: 4, name: 'Cards', icon: this.ImageIcon, selected: false },
    { id: 5, name: 'Chocolate', icon: this.Gift, selected: false },
    { id: 6, name: 'Cards', icon: this.ImageIcon, selected: false },
  ]);

  occasions = input([
    { id: 1, name: 'Wedding', image: 'assets/images/wedding.jpg', selected: false },
    { id: 2, name: 'Apology', image: 'assets/images/apology.jpg', selected: false },
    { id: 3, name: 'Graduation', image: 'assets/images/graduation.jpg', selected: false },
    { id: 4, name: 'Wedding', image: 'assets/images/wedding2.jpg', selected: false },
    { id: 5, name: "Father's Day", image: 'assets/images/fathers-day.jpg', selected: false },
    { id: 6, name: 'Graduation', image: 'assets/images/graduation2.jpg', selected: false },
  ]);

  ratingValue = input(0);
  priceFrom = input<number | null>(null);
  priceTo = input<number | null>(null);
}
