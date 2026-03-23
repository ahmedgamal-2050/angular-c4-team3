/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TranslocoModule } from '@jsverse/transloco';
import { LucideAngularModule, BrushCleaning, Trash2, Star, Plus } from 'lucide-angular';
import { finalize, switchMap, Subject } from 'rxjs';

import { ButtonComponent } from '@angular-c4-team3/shared-design';
import { EmptyStateComponent } from 'apps/angular-c4-team3/src/app/shared/components/empty-state/empty-state.component';

import { WishListItem, WishListResponse } from '../modals/wishlist-item.interface';
import { NavbarRoutingService } from '../services/navbar-routing.service';

import { CartResponse } from '../../cart/cart.model';
import { CartService } from '../../cart/services/cart.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslocoModule,
    LucideAngularModule,
    EmptyStateComponent,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {

  // ================= Icons =================
  readonly BrushCleaning = BrushCleaning;
  readonly Trash = Trash2;
  readonly Star = Star;
  readonly Plus = Plus;

  // ================= Services =================
  private readonly destroyRef = inject(DestroyRef);
  private readonly navbarRoutingService = inject(NavbarRoutingService);
  private readonly cartService = inject(CartService);
  private readonly messageService = inject(MessageService);

  // ================= State (Signals) =================
  wishListItem = signal<WishListItem[]>([]);
  isLoading = signal(true);
  isCartLoading = signal(false);

  // ================= Computed =================
  wishListCount = computed(() => this.wishListItem().length);

  // ================= Streams =================
  private readonly refresh$ = new Subject<void>();

  // ================= Lifecycle =================
  ngOnInit(): void {
    this.refresh$
      .pipe(
        switchMap(() => {
          this.isLoading.set(true);
          return this.navbarRoutingService
            .getWishListItem()
            .pipe(finalize(() => this.isLoading.set(false)));
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res: WishListResponse) => {
        this.wishListItem.set(res?.wishlist?.products ?? []);
      });

    this.refresh$.next();
  }

  // ================= Actions =================

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

  addToCart(id: string): void {
    this.isCartLoading.set(true);

    this.cartService
      .addToCart(id, 1)
      .pipe(
        finalize(() => this.isCartLoading.set(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (response: CartResponse) => {
          this.cartService.cartItems.set(response.cart.cartItems);
          this.cartService.discountPercentage.set(response.cart.discount || 0);

          // ✅ Optional Success Message
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Item added to cart',
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err?.originalError?.error?.error || 'Something went wrong',
          });
        },
      });
  }
}