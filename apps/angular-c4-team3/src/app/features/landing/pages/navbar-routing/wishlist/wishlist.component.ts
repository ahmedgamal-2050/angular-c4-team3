/* eslint-disable @nx/enforce-module-boundaries */
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
  LucideAngularModule,
  BrushCleaning,
  Trash2,
  Star,
  Plus
} from 'lucide-angular';
import {
  WishListItem,
  WishListResponse,
} from '../modals/wishlist-item.interface';
import { NavbarRoutingService } from '../services/navbar-routing.service';
import { finalize } from 'rxjs';
import { EmptyStateComponent } from 'apps/angular-c4-team3/src/app/shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-wishlist',
  imports: [ButtonComponent, TranslocoModule, LucideAngularModule,EmptyStateComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  readonly BrushCleaning = BrushCleaning;
  readonly Trash = Trash2;
  readonly Star = Star;
  readonly Plus =Plus
  private navbarRoutingService = inject(NavbarRoutingService);

  // ✅ Signals
  wishListItem = signal<WishListItem[]>([]);
  isLoading = signal(true);

  wishListCount = computed(() => this.wishListItem().length);

  ngOnInit(): void {
    this.getWishListItems();
  }

  deleteWishListItem(id: string) {
    this.navbarRoutingService.deleteWishListItem(id).subscribe(() => {
      this.getWishListItems();
    });
  }

  clearAllWishListItem() {
    this.navbarRoutingService.clearAllWishListItem().subscribe(() => {
      this.getWishListItems();
    });
  }
  getWishListItems() {
    this.navbarRoutingService
      .getWishListItem()
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe((res: WishListResponse) => {
        this.wishListItem.set(res?.wishlist?.products || []);
      });
  }
  addToCart(id?:string){
    console.log(id,"id");
    
  }
}
