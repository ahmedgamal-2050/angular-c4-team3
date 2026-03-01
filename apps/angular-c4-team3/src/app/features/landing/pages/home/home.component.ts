import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subscription } from 'rxjs';
import { CategoryElement, HomeResponse, Product } from './home.model';
import { SpecialGiftSectionComponent } from "./components/special-gift-section/special-gift-section.component";
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { ProductReviewComponent } from '../../../prodacts/pages/prodact-review/product-review.component';
import { MostPopularSectionComponent } from './components/most-popular-section/most-popular-section.component';
import { LucideAngularModule } from "lucide-angular";
import { FeaturesBarSectionComponent } from './components/features-bar-section/features-bar-section.component';
import { ProductRelatedComponent } from '../../../prodacts/pages/product-related/product-related.component';

@Component({
  selector: 'app-home',
  imports: [SpecialGiftSectionComponent, AboutHomeComponent, ProductReviewComponent, MostPopularSectionComponent, LucideAngularModule, FeaturesBarSectionComponent,ProductRelatedComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private _homeService = inject(HomeService);

  subscription: Subscription = new Subscription();

  products = signal<Product[]>([]);
  categories = signal<CategoryElement[]>([]);
  bestSeller = signal<Product[]>([]);
  occasions = signal<CategoryElement[]>([]);

  ngOnInit(): void {
    this.getHeroData();
  }

  getHeroData() {
    const api = this._homeService.getHomeData().subscribe({
      next: (res: HomeResponse) => {
        this.products.set(res.products);
        this.categories.set(res.categories);
        this.bestSeller.set(res.bestSeller);
        this.occasions.set(res.occasions);
      }
    });

    this.subscription.add(api);
  }

  shopNow() {
    console.log('Shop Now');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
