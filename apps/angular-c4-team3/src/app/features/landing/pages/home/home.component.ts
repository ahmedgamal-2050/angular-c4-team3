import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subscription } from 'rxjs';
import { CategoryElement, HomeResponse, Product } from './home.model';
import { ButtonComponent } from "shared-design/src/lib/button/button.component";
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private _homeService = inject(HomeService);

  subscription: Subscription = new Subscription();

  products = signal<Product[]>([]);
  categories = signal<CategoryElement[]>([]);
  bestSeller = signal<Product[]>([]);
  occasions = signal<CategoryElement[]>([]);

  ngOnInit(): void {
    // this.getHeroData();
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
