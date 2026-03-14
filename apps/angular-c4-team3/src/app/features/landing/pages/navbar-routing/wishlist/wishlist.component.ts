/* eslint-disable @nx/enforce-module-boundaries */
import { ButtonComponent } from '@angular-c4-team3/shared-design';
import {
  Component,
  inject,
  OnInit,
  signal,
  computed,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import {
  LucideAngularModule,
  BrushCleaning,
  Trash2,
  Star,
  Plus,
} from 'lucide-angular';
import {
  WishListItem,
  WishListResponse,
} from '../modals/wishlist-item.interface';
import { NavbarRoutingService } from '../services/navbar-routing.service';
import { finalize, switchMap, Subject } from 'rxjs';
import { EmptyStateComponent } from 'apps/angular-c4-team3/src/app/shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-wishlist',
  imports: [ButtonComponent, TranslocoModule, LucideAngularModule, EmptyStateComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  // ✅ Icons
  readonly BrushCleaning = BrushCleaning;
  readonly Trash = Trash2;
  readonly Star = Star;
  readonly Plus = Plus;

  // ✅ Services
  private readonly navbarRoutingService = inject(NavbarRoutingService);
  private readonly destroyRef = inject(DestroyRef);

  // ✅ Signals
  wishListItem = signal<WishListItem[]>([]);
  isLoading = signal(true);

  // ✅ Computed
  wishListCount = computed(() => this.wishListItem().length);

  private readonly refresh$ = new Subject<void>();

  ngOnInit(): void {
    this.refresh$
      .pipe(
        switchMap(() => {
          this.isLoading.set(true);
          return this.navbarRoutingService.getWishListItem().pipe(
            finalize(() => this.isLoading.set(false)),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((res: WishListResponse) => {
        this.wishListItem.set(res?.wishlist?.products ?? []);
      });

    this.refresh$.next();
  }

  deleteWishListItem(id: string): void {
    this.navbarRoutingService
      .deleteWishListItem(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refresh$.next());
  }

  clearAllWishListItem(): void {
    this.navbarRoutingService
      .clearAllWishListItem()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refresh$.next());
  }

  addToCart(id?: string): void {
    if (!id) return;
    console.log(id, 'id');
   
  }
}