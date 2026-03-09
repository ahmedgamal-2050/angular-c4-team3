import {
  Eye,
  HeartPlus,
  LucideAngularComponent,
  LucideAngularModule,
  ShoppingCart,
  Star
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  RouterLink
} from "./chunk-DVFFD4F4.js";
import {
  Component,
  CurrencyPipe,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-MW4S3Q6I.js";

// apps/angular-c4-team3/src/app/shared/components/product-card/product-card.component.ts
var _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
function ProductCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "hot"), " ");
  }
}
function ProductCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "new"), " ");
  }
}
function ProductCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "out_of_stock"), " ");
  }
}
function ProductCardComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lucide-icon", 20);
  }
  if (rf & 2) {
    const filled_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(filled_r1 ? "text-yellow-500 fill-yellow-500 dark:text-yellow-600 dark:fill-yellow-600" : "text-yellow-500 dark:text-yellow-600");
    \u0275\u0275property("img", ctx_r1.Star)("size", 16)("strokeWidth", 1.5);
  }
}
function ProductCardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r1.product().price, "EGP ", "code"), " ");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product = input.required(...ngDevMode ? [{ debugName: "product" }] : []);
  addToCart = output();
  wishlist = output();
  quickView = output();
  Star = Star;
  ShoppingCart = ShoppingCart;
  HeartPlus = HeartPlus;
  Eye = Eye;
  ROUTES = APP_ROUTES;
  get ratingArray() {
    return Array(5).fill(0).map((_, i) => i < Math.floor(this.product().rateAvg));
  }
  onAddToCart(event) {
    event.stopPropagation();
    this.addToCart.emit(this.product());
  }
  onWishlist(event) {
    event.stopPropagation();
    this.wishlist.emit(this.product());
  }
  onQuickView(event) {
    event.stopPropagation();
    this.quickView.emit(this.product());
  }
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"] }, outputs: { addToCart: "addToCart", wishlist: "wishlist", quickView: "quickView" }, decls: 26, vars: 29, consts: [[1, "group", "relative", "rounded-2xl", "cursor-pointer", "flex", "flex-col", "gap-4", "h-full"], [1, "relative", "aspect-square", "overflow-hidden", "rounded-xl", "bg-zinc-50"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-500", 3, "src", "alt"], [1, "absolute", "top-3", "inset-s-3", "size-10", "rounded-full", "bg-white", "text-maroon-600", "flex", "items-center", "justify-center", "hover:bg-maroon-600", "hover:text-white", "transition-colors", "shadow-md", "z-2", 3, "click"], [3, "img", "size"], [1, "absolute", "top-3", "inset-e-3", "flex", "gap-2"], [1, "bg-maroon-50", "text-maroon-600", "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "uppercase"], [1, "bg-zinc-100", "text-zinc-700", "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "uppercase"], [1, "bg-red-600", "text-soft-pink-50", "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "uppercase"], [1, "absolute", "inset-0", "bg-soft-pink-600/50", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "flex", "items-center", "justify-center", "gap-3"], [1, "size-7.5", "rounded-full", "bg-white", "text-maroon-600", "flex", "items-center", "justify-center", "hover:bg-maroon-600", "hover:text-white", "transition-colors", "shadow-md", 3, "routerLink"], [1, "flex", "flex-col", "grow"], [1, "text-maroon-700", "dark:text-soft-pink-200", "text-sm", "font-semibold", "truncate", "transition-colors", 3, "routerLink"], [1, "flex", "items-center", "gap-1", "mt-3"], [3, "img", "size", "strokeWidth", "class"], [1, "mt-auto", "pt-3", "flex", "items-center", "justify-between"], [1, "flex", "gap-1"], [1, "text-maroon-700", "dark:text-soft-pink-200", "font-medium", "lg:text-base", "text-sm"], [1, "text-zinc-400", "dark:text-zinc-500", "font-medium", "lg:text-base", "text-sm", "line-through"], [1, "size-10", "rounded-full", "bg-maroon-600", "dark:bg-maroon-500", "text-white", "flex", "items-center", "justify-center", "hover:bg-maroon-800", "transition-colors", "shadow-md", 3, "click", "disabled"], [3, "img", "size", "strokeWidth"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_3_listener($event) {
        return ctx.onWishlist($event);
      });
      \u0275\u0275element(4, "lucide-icon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275conditionalCreate(6, ProductCardComponent_Conditional_6_Template, 3, 3, "span", 6);
      \u0275\u0275conditionalCreate(7, ProductCardComponent_Conditional_7_Template, 3, 3, "span", 7);
      \u0275\u0275conditionalCreate(8, ProductCardComponent_Conditional_8_Template, 3, 3, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "a", 10);
      \u0275\u0275element(11, "lucide-icon", 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 11)(13, "a", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275repeaterCreate(16, ProductCardComponent_For_17_Template, 1, 5, "lucide-icon", 14, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16)(20, "span", 17);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, ProductCardComponent_Conditional_23_Template, 3, 5, "span", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 19);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_24_listener($event) {
        return ctx.onAddToCart($event);
      });
      \u0275\u0275element(25, "lucide-icon", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.product().imgCover, \u0275\u0275sanitizeUrl)("alt", ctx.product().title);
      \u0275\u0275advance(2);
      \u0275\u0275property("img", ctx.HeartPlus)("size", 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.product().discount ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().sold < 100 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().quantity > 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction3(21, _c0, ctx.ROUTES.LANDING.ROOT, ctx.ROUTES.LANDING.PRODUCT_DETAILS, ctx.product()._id));
      \u0275\u0275advance();
      \u0275\u0275property("img", ctx.Eye)("size", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction3(25, _c0, ctx.ROUTES.LANDING.ROOT, ctx.ROUTES.LANDING.PRODUCT_DETAILS, ctx.product()._id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.product().title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.ratingArray);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(22, 17, ctx.product().priceAfterDiscount || ctx.product().price, "EGP ", "code"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.product().priceAfterDiscount && ctx.product().priceAfterDiscount !== ctx.product().price ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.product().quantity === 0);
      \u0275\u0275advance();
      \u0275\u0275property("img", ctx.ShoppingCart)("size", 18);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, RouterLink, TranslocoPipe, CurrencyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", standalone: true, imports: [LucideAngularModule, TranslocoPipe, CurrencyPipe, RouterLink], template: `<div
  class="group relative rounded-2xl cursor-pointer flex flex-col gap-4 h-full"
>
  <!-- Image Container -->
  <div class="relative aspect-square overflow-hidden rounded-xl bg-zinc-50">
    <img
      [src]="product().imgCover"
      [alt]="product().title"
      class="w-full h-full object-cover transition-transform duration-500"
    />

    <!-- Favorite Button -->
    <button
      (click)="onWishlist($event)"
      class="absolute top-3 inset-s-3 size-10 rounded-full bg-white text-maroon-600 flex items-center justify-center hover:bg-maroon-600 hover:text-white transition-colors shadow-md z-2"
    >
      <lucide-icon [img]="HeartPlus" [size]="18"></lucide-icon>
    </button>

    <!-- Badges -->
    <div class="absolute top-3 inset-e-3 flex gap-2">
      @if (product().discount) {
        <span
          class="bg-maroon-50 text-maroon-600 text-xs font-medium px-2 py-0.5 rounded-full uppercase"
        >
          {{ 'hot' | transloco }}
        </span>
      }

      @if (product().sold < 100) {
        <span
          class="bg-zinc-100 text-zinc-700 text-xs font-medium px-2 py-0.5 rounded-full uppercase"
        >
          {{ 'new' | transloco }}
        </span>
      }

      @if (product().quantity > 0) {
        <span
          class="bg-red-600 text-soft-pink-50 text-xs font-medium px-2 py-0.5 rounded-full uppercase"
        >
          {{ 'out_of_stock' | transloco }}
        </span>
      }
    </div>

    <!-- Hover Actions -->
    <div
      class="absolute inset-0 bg-soft-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
    >
      <a
        [routerLink]="[
          '/',
          ROUTES.LANDING.ROOT,
          ROUTES.LANDING.PRODUCT_DETAILS,
          product()._id,
        ]"
        class="size-7.5 rounded-full bg-white text-maroon-600 flex items-center justify-center hover:bg-maroon-600 hover:text-white transition-colors shadow-md"
      >
        <lucide-icon [img]="Eye" [size]="20"></lucide-icon>
      </a>
    </div>
  </div>

  <!-- Content -->
  <div class="flex flex-col grow">
    <a
      class="text-maroon-700 dark:text-soft-pink-200 text-sm font-semibold truncate transition-colors"
      [routerLink]="[
        '/',
        ROUTES.LANDING.ROOT,
        ROUTES.LANDING.PRODUCT_DETAILS,
        product()._id,
      ]"
    >
      {{ product().title }}
    </a>

    <!-- Rating -->
    <div class="flex items-center gap-1 mt-3">
      @for (filled of ratingArray; track $index) {
        <lucide-icon
          [img]="Star"
          [size]="16"
          [strokeWidth]="1.5"
          [class]="
            filled
              ? 'text-yellow-500 fill-yellow-500 dark:text-yellow-600 dark:fill-yellow-600'
              : 'text-yellow-500 dark:text-yellow-600'
          "
        ></lucide-icon>
      }
    </div>

    <!-- Price and Add to Cart -->
    <div class="mt-auto pt-3 flex items-center justify-between">
      <div class="flex gap-1">
        <span
          class="text-maroon-700 dark:text-soft-pink-200 font-medium lg:text-base text-sm"
        >
          {{
            product().priceAfterDiscount || product().price
              | currency: 'EGP ' : 'code'
          }}
        </span>

        @if (
          product().priceAfterDiscount &&
          product().priceAfterDiscount !== product().price
        ) {
          <span
            class="text-zinc-400 dark:text-zinc-500 font-medium lg:text-base text-sm line-through"
          >
            {{ product().price | currency: 'EGP ' : 'code' }}
          </span>
        }
      </div>

      <button
        (click)="onAddToCart($event)"
        class="size-10 rounded-full bg-maroon-600 dark:bg-maroon-500 text-white flex items-center justify-center hover:bg-maroon-800 transition-colors shadow-md"
        [disabled]="product().quantity === 0"
      >
        <lucide-icon [img]="ShoppingCart" [size]="18"></lucide-icon>
      </button>
    </div>
  </div>
</div>
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }], addToCart: [{ type: Output, args: ["addToCart"] }], wishlist: [{ type: Output, args: ["wishlist"] }], quickView: [{ type: Output, args: ["quickView"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/product-card/product-card.component.ts", lineNumber: 16 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-5FUPQFJO.js.map
