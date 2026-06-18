import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TranslocoService } from '@jsverse/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';
import {
  BREADCRUMB_LINKS,
  ROUTE_BREADCRUMBS_CHAIN,
} from './breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, BreadcrumbModule, LucideAngularModule],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _translocoService = inject(TranslocoService);
  private _destroyRef = inject(DestroyRef);

  readonly ChevronRight = ChevronRight;

  items = signal<MenuItem[]>([]);

  pt = signal({
    root: {
      class: 'bg-transparent! border-none! p-0! m-0! shadow-none! select-none',
    },
    list: {
      class: 'flex items-center m-0 p-0 list-none',
    },
  });

  ngOnInit() {
    // Rebuild on navigation change
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(() => {
        this.updateBreadcrumbs();
      });

    // Rebuild on language change
    this._translocoService.langChanges$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });

    // Initial build
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs() {
    const leaf = this.getActiveRouteLeaf(this._activatedRoute.root);
    const path = leaf.routeConfig?.path || '';
    const chain = ROUTE_BREADCRUMBS_CHAIN[path] || [];

    const restChain = chain
      .map((key, index) => {
        const isLast = index === chain.length - 1;
        const label = this._translocoService.translate(key) || key;
        const link = BREADCRUMB_LINKS[key];

        if (key === 'sidebar_dashboard') {
          return null;
        }

        return {
          label,
          ...(link && !isLast ? { routerLink: link } : {}),
        };
      })
      .filter(item => item !== null);

    const breadcrumbs: MenuItem[] = [
      {
        label: this._translocoService.translate('sidebar_dashboard'),
        routerLink: '/dashboard/overview',
        icon: 'LayoutDashboard',
      },
      ...restChain,
    ];

    this.items.set(breadcrumbs);
  }

  private getActiveRouteLeaf(route: ActivatedRoute): ActivatedRoute {
    let leaf = route;
    while (leaf.firstChild) {
      leaf = leaf.firstChild;
    }
    return leaf;
  }
}
