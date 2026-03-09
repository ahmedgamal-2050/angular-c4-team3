import {
  ProductCardComponent
} from "./chunk-5FUPQFJO.js";
import {
  Carousel,
  CarouselModule,
  SliderComponent,
  StyledHomeTitleComponent
} from "./chunk-VMQFCD3Z.js";
import {
  ENDPOINTS
} from "./chunk-PYVPHPIQ.js";
import "./chunk-5F2C77Q4.js";
import {
  ButtonComponent
} from "./chunk-7XJLG7MZ.js";
import "./chunk-ZUKZCXFN.js";
import "./chunk-ZSIZB4LZ.js";
import "./chunk-FBY6JISU.js";
import {
  PrimeTemplate
} from "./chunk-BX323W7Q.js";
import {
  ArrowRight,
  Check,
  Headset,
  LucideAngularComponent,
  LucideAngularModule,
  RefreshCcw,
  ShieldCheck,
  Truck
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import "./chunk-XS4O3NDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-DVFFD4F4.js";
import {
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  SlicePipe,
  Subscription,
  computed,
  inject,
  input,
  linkedSignal,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MW4S3Q6I.js";
import "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/features/landing/pages/home/services/home.service.ts
var HomeService = class _HomeService {
  _http = inject(HttpClient);
  getHomeData() {
    const url = ENDPOINTS.HOME;
    return this._http.get(url);
  }
  static \u0275fac = function HomeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeService, factory: _HomeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-overlay/special-gift-overlay.component.ts
var _c0 = ["*"];
var SpecialGiftOverlayComponent = class _SpecialGiftOverlayComponent {
  containerClass = input("", ...ngDevMode ? [{ debugName: "containerClass" }] : []);
  static \u0275fac = function SpecialGiftOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecialGiftOverlayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialGiftOverlayComponent, selectors: [["app-special-gift-overlay"]], hostAttrs: [1, "bg-cover", "bg-center", "rounded-2xl", "relative"], hostVars: 2, hostBindings: function SpecialGiftOverlayComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.containerClass());
    }
  }, inputs: { containerClass: [1, "containerClass"] }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "absolute", "inset-0", "bg-linear-to-r", "from-black/50", "to-black/10", "flex", "flex-col", "justify-end", "p-6", "gap-2", "rounded-2xl"]], template: function SpecialGiftOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecialGiftOverlayComponent, [{
    type: Component,
    args: [{ selector: "app-special-gift-overlay", imports: [], host: {
      class: "bg-cover bg-center rounded-2xl relative",
      "[class]": "containerClass()"
    }, template: '<div\n  class="absolute inset-0 bg-linear-to-r from-black/50 to-black/10 flex flex-col justify-end p-6 gap-2 rounded-2xl"\n>\n  <ng-content />\n</div>\n' }]
  }], null, { containerClass: [{ type: Input, args: [{ isSignal: true, alias: "containerClass", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialGiftOverlayComponent, { className: "SpecialGiftOverlayComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-overlay/special-gift-overlay.component.ts", lineNumber: 12 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-content/special-gift-content.component.ts
var SpecialGiftContentComponent = class _SpecialGiftContentComponent {
  tagLabel = input(...ngDevMode ? [void 0, { debugName: "tagLabel" }] : []);
  title = input(...ngDevMode ? [void 0, { debugName: "title" }] : []);
  titleClass = input(...ngDevMode ? [void 0, { debugName: "titleClass" }] : []);
  static \u0275fac = function SpecialGiftContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecialGiftContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialGiftContentComponent, selectors: [["app-special-gift-content"]], inputs: { tagLabel: [1, "tagLabel"], title: [1, "title"], titleClass: [1, "titleClass"] }, decls: 4, vars: 4, consts: [[1, "bg-maroon-50", "text-maroon-600", "text-xs", "lg:text-sm", "font-medium", "rounded-full", "px-2", "py-0.5", "w-fit"], [1, "text-white", "text-lg", "lg:text-2xl", "font-semibold", "mt-2"]], template: function SpecialGiftContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "h2", 1);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.tagLabel(), "\n");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.titleClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.title(), "\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecialGiftContentComponent, [{
    type: Component,
    args: [{ selector: "app-special-gift-content", imports: [], template: '<span\n  class="bg-maroon-50 text-maroon-600 text-xs lg:text-sm font-medium rounded-full px-2 py-0.5 w-fit"\n>\n  {{ tagLabel() }}\n</span>\n\n<h2\n  class="text-white text-lg lg:text-2xl font-semibold mt-2"\n  [class]="titleClass()"\n>\n  {{ title() }}\n</h2>\n' }]
  }], null, { tagLabel: [{ type: Input, args: [{ isSignal: true, alias: "tagLabel", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], titleClass: [{ type: Input, args: [{ isSignal: true, alias: "titleClass", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialGiftContentComponent, { className: "SpecialGiftContentComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-content/special-gift-content.component.ts", lineNumber: 8 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-carousel/special-gift-carousel.component.ts
function SpecialGiftCarouselComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "shared-ui-button", 7);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("clicked", function SpecialGiftCarouselComponent_ng_template_1_Template_shared_ui_button_clicked_9_listener() {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shopNow(data_r2.url));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275classMap(data_r2.containerClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, data_r2.title), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, data_r2.description), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 9, data_r2.buttonLabel));
  }
}
var SpecialGiftCarouselComponent = class _SpecialGiftCarouselComponent {
  _router = inject(Router);
  carouselData = signal([
    {
      id: 1,
      containerClass: "bg-[url('assets/images/special-gift-2.png')]",
      title: "special_gift_carousel_title_1",
      description: "special_gift_carousel_description_1",
      buttonLabel: "special_gift_carousel_button_1",
      url: "products"
    },
    {
      id: 2,
      containerClass: "bg-[url('assets/images/special-gift-3.png')]",
      title: "special_gift_carousel_title_2",
      description: "special_gift_carousel_description_2",
      buttonLabel: "special_gift_carousel_button_2",
      url: "products"
    },
    {
      id: 3,
      containerClass: "bg-[url('assets/images/special-gift-4.png')]",
      title: "special_gift_carousel_title_3",
      description: "special_gift_carousel_description_3",
      buttonLabel: "special_gift_carousel_button_3",
      url: "products"
    },
    {
      id: 4,
      containerClass: "bg-[url('assets/images/special-gift-5.png')]",
      title: "special_gift_carousel_title_4",
      description: "special_gift_carousel_description_4",
      buttonLabel: "special_gift_carousel_button_4",
      url: "products"
    }
  ], ...ngDevMode ? [{ debugName: "carouselData" }] : []);
  pt = signal({
    contentContainer: {
      class: "h-full relative"
    },
    content: {
      class: "h-full"
    },
    viewport: {
      class: "h-full"
    },
    itemList: {
      class: "h-full"
    },
    indicatorList: {
      class: "absolute! top-6 end-6 z-1 gap-2!"
    },
    indicator: {
      class: "group"
    },
    indicatorButton: {
      class: "size-3! rounded-full! bg-maroon-50! group-[.p-carousel-indicator-active]:bg-maroon-700! group-[.p-carousel-indicator-active]:w-8!"
    },
    pcPrevButton: {
      root: {
        class: "bg-maroon-50! rounded-e-none! text-maroon-700! absolute! bottom-2 end-14 -translate-y-1/2 size-8! z-1 rtl:end-6 rtl:rounded-s-none! rtl:rounded-e-full!"
      }
    },
    pcNextButton: {
      root: {
        class: "bg-maroon-50! rounded-s-none! text-maroon-700! absolute! bottom-2 end-6 -translate-y-1/2 size-8! z-1 rtl:end-14 rtl:rounded-e-none! rtl:rounded-s-full!"
      }
    }
  }, ...ngDevMode ? [{ debugName: "pt" }] : []);
  shopNow(url) {
    this._router.navigate([url]);
  }
  static \u0275fac = function SpecialGiftCarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecialGiftCarouselComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialGiftCarouselComponent, selectors: [["app-special-gift-carousel"]], hostAttrs: [1, "col-span-1", "lg:col-span-3"], decls: 2, vars: 5, consts: [["styleClass", "h-full!", 3, "value", "numVisible", "numScroll", "circular", "pt"], ["pTemplate", "item"], [1, "bg-cover", "bg-center", "rounded-2xl", "relative", "h-full"], [1, "absolute", "inset-0", "bg-linear-to-r", "from-black/75", "to-black/10", "flex", "flex-col", "justify-end", "p-6", "gap-2", "rounded-2xl"], [1, "text-white", "text-2xl", "lg:text-4xl", "font-semibold"], [1, "text-white", "text-sm", "lg:text-base", "font-normal", "h-12"], [1, "w-32.5"], ["type", "button", "buttonClass", "bg-maroon-50 text-maroon-700", 3, "clicked", "label"]], template: function SpecialGiftCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-carousel", 0);
      \u0275\u0275template(1, SpecialGiftCarouselComponent_ng_template_1_Template, 11, 11, "ng-template", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.carouselData())("numVisible", 1)("numScroll", 1)("circular", true)("pt", ctx.pt());
    }
  }, dependencies: [CarouselModule, Carousel, PrimeTemplate, ButtonComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecialGiftCarouselComponent, [{
    type: Component,
    args: [{ selector: "app-special-gift-carousel", imports: [CarouselModule, ButtonComponent, TranslocoPipe], host: {
      class: "col-span-1 lg:col-span-3"
    }, template: '<p-carousel\n  [value]="carouselData()"\n  [numVisible]="1"\n  [numScroll]="1"\n  [circular]="true"\n  styleClass="h-full!"\n  [pt]="pt()"\n>\n  <ng-template pTemplate="item" let-data>\n    <div\n      class="bg-cover bg-center rounded-2xl relative h-full"\n      [class]="data.containerClass"\n    >\n      <div\n        class="absolute inset-0 bg-linear-to-r from-black/75 to-black/10 flex flex-col justify-end p-6 gap-2 rounded-2xl"\n      >\n        <h2 class="text-white text-2xl lg:text-4xl font-semibold">\n          {{ data.title | transloco }}\n        </h2>\n\n        <p class="text-white text-sm lg:text-base font-normal h-12">\n          {{ data.description | transloco }}\n        </p>\n\n        <div class="w-32.5">\n          <shared-ui-button\n            [label]="data.buttonLabel | transloco"\n            type="button"\n            buttonClass="bg-maroon-50 text-maroon-700"\n            (clicked)="shopNow(data.url)"\n          />\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</p-carousel>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialGiftCarouselComponent, { className: "SpecialGiftCarouselComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-carousel/special-gift-carousel.component.ts", lineNumber: 15 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-section.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SpecialGiftSectionComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-special-gift-overlay", 2);
    \u0275\u0275element(1, "app-special-gift-content", 3);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gift_r1 = ctx.$implicit;
    \u0275\u0275property("containerClass", gift_r1.containerClass);
    \u0275\u0275advance();
    \u0275\u0275property("tagLabel", \u0275\u0275pipeBind1(2, 4, gift_r1.tagLabel))("title", \u0275\u0275pipeBind1(3, 6, gift_r1.title))("titleClass", gift_r1.titleClass);
  }
}
var SpecialGiftSectionComponent = class _SpecialGiftSectionComponent {
  ArrowRight = ArrowRight;
  giftTopSectionData = signal({
    tagLabel: "special_gift_top_card_tag",
    title: "special_gift_top_card_title",
    titleClass: "h-20",
    containerClass: 'col-span-1 bg-[url("assets/images/special-gift-1.png")]',
    buttonLabel: "special_gift_top_card_button",
    url: "products"
  }, ...ngDevMode ? [{ debugName: "giftTopSectionData" }] : []);
  giftBottomSectionData = signal([
    {
      id: 1,
      tagLabel: "special_gift_bottom_card_tag_1",
      title: "special_gift_bottom_card_title_1",
      titleClass: "h-12",
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-3.png")]'
    },
    {
      id: 2,
      tagLabel: "special_gift_bottom_card_tag_2",
      title: "special_gift_bottom_card_title_2",
      titleClass: "h-12",
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-4.png")]'
    },
    {
      id: 3,
      tagLabel: "special_gift_bottom_card_tag_3",
      title: "special_gift_bottom_card_title_3",
      titleClass: "h-12",
      containerClass: 'col-span-1 bg-[url("assets/images/special-gift-5.png")]'
    }
  ], ...ngDevMode ? [{ debugName: "giftBottomSectionData" }] : []);
  shopNow() {
    console.log("Shop Now");
  }
  static \u0275fac = function SpecialGiftSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpecialGiftSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpecialGiftSectionComponent, selectors: [["app-special-gift-section"]], decls: 12, vars: 12, consts: [[1, "flex", "flex-col", "gap-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-4", "gap-6", "h-110"], [3, "containerClass"], [3, "tagLabel", "title", "titleClass"], ["type", "button", "buttonClass", "bg-maroon-50 text-maroon-700 px-4! w-[8.125rem]!", "iconPosition", "right", 3, "clicked", "label", "icon"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", "h-140", "lg:h-68"]], template: function SpecialGiftSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "app-special-gift-overlay", 2);
      \u0275\u0275element(3, "app-special-gift-content", 3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275pipe(5, "transloco");
      \u0275\u0275elementStart(6, "shared-ui-button", 4);
      \u0275\u0275pipe(7, "transloco");
      \u0275\u0275listener("clicked", function SpecialGiftSectionComponent_Template_shared_ui_button_clicked_6_listener() {
        return ctx.shopNow();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "app-special-gift-carousel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275repeaterCreate(10, SpecialGiftSectionComponent_For_11_Template, 4, 8, "app-special-gift-overlay", 2, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("containerClass", ctx.giftTopSectionData().containerClass);
      \u0275\u0275advance();
      \u0275\u0275property("tagLabel", \u0275\u0275pipeBind1(4, 6, ctx.giftTopSectionData().tagLabel))("title", \u0275\u0275pipeBind1(5, 8, ctx.giftTopSectionData().title))("titleClass", ctx.giftTopSectionData().titleClass);
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 10, ctx.giftTopSectionData().buttonLabel))("icon", ctx.ArrowRight);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.giftBottomSectionData());
    }
  }, dependencies: [ButtonComponent, SpecialGiftOverlayComponent, SpecialGiftContentComponent, SpecialGiftCarouselComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpecialGiftSectionComponent, [{
    type: Component,
    args: [{ selector: "app-special-gift-section", imports: [ButtonComponent, SpecialGiftOverlayComponent, SpecialGiftContentComponent, SpecialGiftCarouselComponent, TranslocoPipe], template: '<section class="flex flex-col gap-6">\n  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 h-110">\n    <app-special-gift-overlay\n      [containerClass]="giftTopSectionData().containerClass"\n    >\n      <app-special-gift-content\n        [tagLabel]="giftTopSectionData().tagLabel | transloco"\n        [title]="giftTopSectionData().title | transloco"\n        [titleClass]="giftTopSectionData().titleClass"\n      />\n\n      <shared-ui-button\n        [label]="giftTopSectionData().buttonLabel | transloco"\n        type="button"\n        buttonClass="bg-maroon-50 text-maroon-700 px-4! w-[8.125rem]!"\n        iconPosition="right"\n        [icon]="ArrowRight"\n        (clicked)="shopNow()"\n      />\n    </app-special-gift-overlay>\n\n    <app-special-gift-carousel />\n  </div>\n\n  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-140 lg:h-68">\n    @for (gift of giftBottomSectionData(); track gift.id) {\n      <app-special-gift-overlay [containerClass]="gift.containerClass">\n        <app-special-gift-content\n          [tagLabel]="gift.tagLabel | transloco"\n          [title]="gift.title | transloco"\n          [titleClass]="gift.titleClass"\n        />\n      </app-special-gift-overlay>\n    }\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpecialGiftSectionComponent, { className: "SpecialGiftSectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/special-gift-section/special-gift-section.component.ts", lineNumber: 14 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/about-home/about-home.component.ts
function AboutHomeComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275element(2, "lucide-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.check);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, feature_r1), " ");
  }
}
var AboutHomeComponent = class _AboutHomeComponent {
  featuresKeys = ["price", "quality", "occasion", "delivery"];
  arrow_right = ArrowRight;
  check = Check;
  static \u0275fac = function AboutHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutHomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutHomeComponent, selectors: [["app-about-home"]], decls: 34, vars: 27, consts: [[1, "w-full", "rounded-xl", "px-6", "py-10", "flex", "flex-col", "md:flex-row", "gap-8", "md:gap-12", "items-start"], [1, "flex-none", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2", "md:grid-cols-2", "items-center", "w-full", "md:w-auto"], [1, "row-span-1", "md:row-span-2"], ["src", "assets/images/Group_1.svg", "alt", "gift", 1, "w-full", "h-full", "object-contain", "block"], [1, "justify-self-center"], ["src", "assets/images/pic_1.svg", "alt", "gift", 1, "w-full", "h-full", "object-contain", "block"], ["src", "assets/images/pic_2.svg", "alt", "gift", 1, "w-full", "h-full", "object-contain", "block"], [1, "flex-1", "w-full"], [1, "text-sm", "font-bold", "tracking-[3px]", "text-soft-pink-500", "uppercase", "mb-3.5"], [1, "font-serif", "text-3xl", "leading-[100%]", "text-maroon-700", "dark:text-white"], [1, "text-soft-pink-500"], [1, "text-base", "leading-[100%]", "text-zinc-500", "dark:text-white", "my-2"], [1, "my-6", "w-1/2", "sm:w-1/5"], [3, "label", "type", "icon", "iconPosition"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-x-8", "gap-y-2.5", "ps-0", "sm:ps-4"], [1, "flex", "items-center", "gap-2", "text-base", "text-zinc-800", "font-normal", "py-3", "dark:text-white"], [1, "text-maroon-700", "text-base", "shrink-0", "dark:text-soft-pink-300"], ["alt", "check", 3, "name"]], template: function AboutHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "transloco");
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "transloco");
      \u0275\u0275elementStart(20, "span", 10);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 11);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12);
      \u0275\u0275element(29, "shared-ui-button", 13);
      \u0275\u0275pipe(30, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275repeaterCreate(32, AboutHomeComponent_For_33_Template, 5, 4, "div", 15, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 13, "part_1"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "highlight_1"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "part_2"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 19, "highlight_2"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 21, "part_3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "description_about"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(30, 25, "discover"))("type", "submit")("icon", ctx.arrow_right)("iconPosition", "right");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.featuresKeys);
    }
  }, dependencies: [ButtonComponent, TranslocoModule, LucideAngularModule, LucideAngularComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutHomeComponent, [{
    type: Component,
    args: [{ selector: "app-about-home", imports: [ButtonComponent, TranslocoModule, LucideAngularModule], standalone: true, template: `<section class="w-full rounded-xl px-6 py-10  flex flex-col md:flex-row gap-8 md:gap-12 items-start">

  <!-- Images Grid -->
  <div class="flex-none grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-2 items-center w-full md:w-auto">
    <div class="row-span-1 md:row-span-2">
      <img src="assets/images/Group_1.svg" alt="gift" class="w-full h-full object-contain block" />
    </div>
    <div class="justify-self-center">
      <img src="assets/images/pic_1.svg" alt="gift" class="w-full h-full object-contain block" />
    </div>
    <div class="justify-self-center">
      <img src="assets/images/pic_2.svg" alt="gift" class="w-full h-full object-contain block" />
    </div>
  </div>

  <!-- Content -->
  <div class="flex-1 w-full">
    <p class="text-sm font-bold tracking-[3px] text-soft-pink-500 uppercase mb-3.5">
      {{ 'title' | transloco }}
    </p>

    <h2 class="font-serif text-3xl leading-[100%] text-maroon-700 dark:text-white">
      {{ 'part_1' | transloco }}
      <span class="text-soft-pink-500">{{ 'highlight_1' | transloco }}</span>
      {{ 'part_2' | transloco }}
      <span class="text-soft-pink-500">{{ 'highlight_2' | transloco }}</span>
      {{ 'part_3' | transloco }}
    </h2>

    <p class="text-base leading-[100%] text-zinc-500 dark:text-white my-2">
      {{ 'description_about' | transloco }}
    </p>

    <div class="my-6 w-1/2 sm:w-1/5">
      <shared-ui-button
    
        [label]="'discover' | transloco"
        [type]="'submit'"
        [icon]="arrow_right"
        [iconPosition]="'right'">
      </shared-ui-button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 ps-0 sm:ps-4">
      @for (feature of featuresKeys; track $index) {
        <div class="flex items-center gap-2 text-base text-zinc-800 font-normal py-3 dark:text-white">
          <span class="text-maroon-700 text-base shrink-0 dark:text-soft-pink-300 ">
            <lucide-icon [name]="check" alt="check"></lucide-icon>
          </span>
          {{ feature | transloco }}
        </div>
      }
    </div>

  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutHomeComponent, { className: "AboutHomeComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/about-home/about-home.component.ts", lineNumber: 13 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/most-popular-section/most-popular-section.component.ts
var _forTrack02 = ($index, $item) => $item._id;
function MostPopularSectionComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function MostPopularSectionComponent_For_8_Template_button_click_0_listener() {
      const occasion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectOccasion(occasion_r2._id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const occasion_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedOccasion() === occasion_r2._id ? "text-maroon-600 dark:text-soft-pink-200" : "text-zinc-700 dark:text-zinc-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", occasion_r2.name, " ");
  }
}
function MostPopularSectionComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 12);
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275property("product", product_r4);
  }
}
function MostPopularSectionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, MostPopularSectionComponent_Conditional_10_For_2_Template, 1, 1, "app-product-card", 12, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredProducts());
  }
}
function MostPopularSectionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "no_products_found"));
  }
}
var MostPopularSectionComponent = class _MostPopularSectionComponent {
  products = input.required(...ngDevMode ? [{ debugName: "products" }] : []);
  occasions = input.required(...ngDevMode ? [{ debugName: "occasions" }] : []);
  selectedOccasion = linkedSignal(() => {
    return this.occasions()[0]?._id ?? null;
  }, ...ngDevMode ? [{ debugName: "selectedOccasion" }] : []);
  ArrowRight = ArrowRight;
  filteredProducts = computed(() => {
    const occasionId = this.selectedOccasion();
    const allProducts = this.products();
    if (!occasionId) {
      return allProducts.slice(0, 12);
    }
    return allProducts.filter((p) => p.occasion === occasionId).slice(0, 12);
  }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : []);
  selectOccasion(id) {
    this.selectedOccasion.set(id);
  }
  static \u0275fac = function MostPopularSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MostPopularSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MostPopularSectionComponent, selectors: [["app-most-popular-section"]], inputs: { products: [1, "products"], occasions: [1, "occasions"] }, decls: 18, vars: 15, consts: [[1, "mt-16", "container", "mx-auto"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-6", "mb-8"], [3, "title"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-base", "font-medium", 3, "click"], [1, "text-base", "font-medium", 3, "class"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "bg-zinc-50", "rounded-2xl", "border-2", "border-dashed", "border-zinc-200", "text-zinc-400"], [1, "mt-10", "flex", "justify-end"], ["routerLink", "/products", 1, "flex", "items-center", "gap-2", "text-maroon-700", "dark:text-soft-pink-200", "font-semibold", "transition-all", "duration-300"], [1, "rtl:rotate-180"], [3, "img", "size"], [3, "product"], [1, "text-lg"]], template: function MostPopularSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-styled-home-title", 2);
      \u0275\u0275pipe(3, "transloco");
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function MostPopularSectionComponent_Template_button_click_5_listener() {
        return ctx.selectOccasion(null);
      });
      \u0275\u0275text(6, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(7, MostPopularSectionComponent_For_8_Template, 2, 3, "button", 5, _forTrack02);
      \u0275\u0275pipe(9, "slice");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, MostPopularSectionComponent_Conditional_10_Template, 3, 0, "div", 6)(11, MostPopularSectionComponent_Conditional_11_Template, 4, 3, "div", 7);
      \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "transloco");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275element(17, "lucide-icon", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 7, "most_popular_title"));
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.selectedOccasion() === null ? "text-maroon-600 dark:text-soft-pink-200" : "text-zinc-700 dark:text-zinc-400");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind3(9, 9, ctx.occasions(), 0, 4));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filteredProducts().length > 0 ? 10 : 11);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "view_more"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.ArrowRight)("size", 20);
    }
  }, dependencies: [ProductCardComponent, LucideAngularModule, LucideAngularComponent, RouterLink, StyledHomeTitleComponent, TranslocoPipe, SlicePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MostPopularSectionComponent, [{
    type: Component,
    args: [{ selector: "app-most-popular-section", standalone: true, imports: [ProductCardComponent, TranslocoPipe, LucideAngularModule, RouterLink, SlicePipe, StyledHomeTitleComponent], template: `<section class="mt-16 container mx-auto">
  <!-- Header -->
  <div
    class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8"
  >
    <app-styled-home-title [title]="'most_popular_title' | transloco" />

    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-2">
      <button
        (click)="selectOccasion(null)"
        class="text-base font-medium"
        [class]="
          selectedOccasion() === null
            ? 'text-maroon-600 dark:text-soft-pink-200'
            : 'text-zinc-700 dark:text-zinc-400'
        "
      >
        All
      </button>

      @for (occasion of occasions() | slice: 0 : 4; track occasion._id) {
        <button
          (click)="selectOccasion(occasion._id)"
          class="text-base font-medium"
          [class]="
            selectedOccasion() === occasion._id
              ? 'text-maroon-600 dark:text-soft-pink-200'
              : 'text-zinc-700 dark:text-zinc-400'
          "
        >
          {{ occasion.name }}
        </button>
      }
    </div>
  </div>

  <!-- Product Grid -->
  @if (filteredProducts().length > 0) {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      @for (product of filteredProducts(); track product._id) {
        <app-product-card [product]="product" />
      }
    </div>
  } @else {
    <div
      class="flex flex-col items-center justify-center py-20 bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-200 text-zinc-400"
    >
      <p class="text-lg">{{ 'no_products_found' | transloco }}</p>
    </div>
  }

  <!-- Footer Link -->
  <div class="mt-10 flex justify-end">
    <a
      routerLink="/products"
      class="flex items-center gap-2 text-maroon-700 dark:text-soft-pink-200 font-semibold transition-all duration-300"
    >
      {{ 'view_more' | transloco }}

      <span class="rtl:rotate-180">
        <lucide-icon [img]="ArrowRight" [size]="20"></lucide-icon>
      </span>
    </a>
  </div>
</section>
` }]
  }], null, { products: [{ type: Input, args: [{ isSignal: true, alias: "products", required: true }] }], occasions: [{ type: Input, args: [{ isSignal: true, alias: "occasions", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MostPopularSectionComponent, { className: "MostPopularSectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/most-popular-section/most-popular-section.component.ts", lineNumber: 17 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/features-bar-section/features-bar-section.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function FeaturesBarSectionComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275element(2, "lucide-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "h6", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", item_r1.icon)("strokeWidth", 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, item_r1.title), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, item_r1.description), " ");
  }
}
var FeaturesBarSectionComponent = class _FeaturesBarSectionComponent {
  TruckIcon = Truck;
  RefreshCcwIcon = RefreshCcw;
  ShieldCheckIcon = ShieldCheck;
  HeadsetIcon = Headset;
  features = signal([
    {
      id: 1,
      icon: Truck,
      title: "features_bar_section_feature_1_title",
      description: "features_bar_section_feature_1_description"
    },
    {
      id: 2,
      icon: RefreshCcw,
      title: "features_bar_section_feature_2_title",
      description: "features_bar_section_feature_2_description"
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "features_bar_section_feature_3_title",
      description: "features_bar_section_feature_3_description"
    },
    {
      id: 4,
      icon: Headset,
      title: "features_bar_section_feature_4_title",
      description: "features_bar_section_feature_4_description"
    }
  ], ...ngDevMode ? [{ debugName: "features" }] : []);
  static \u0275fac = function FeaturesBarSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesBarSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesBarSectionComponent, selectors: [["app-features-bar-section"]], decls: 3, vars: 0, consts: [[1, "bg-maroon-50", "dark:bg-zinc-700", "flex", "flex-wrap", "gap-4", "justify-around", "items-center", "p-10", "rounded-2xl", "mt-10"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "justify-center", "size-15", "rounded-full", "bg-maroon-600", "dark:bg-soft-pink-200", "text-white", "dark:text-zinc-800"], ["size", "40", 3, "name", "strokeWidth"], [1, "flex", "flex-col", "gap-1"], [1, "text-xl", "font-semibold", "text-maroon-600", "dark:text-soft-pink-200"], [1, "text-sm", "text-zinc-500", "dark:text-zinc-300", "font-normal"]], template: function FeaturesBarSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275repeaterCreate(1, FeaturesBarSectionComponent_For_2_Template, 10, 8, "div", 1, _forTrack03);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.features());
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesBarSectionComponent, [{
    type: Component,
    args: [{ selector: "app-features-bar-section", imports: [LucideAngularModule, TranslocoPipe], template: '<section\n  class="bg-maroon-50 dark:bg-zinc-700 flex flex-wrap gap-4 justify-around items-center p-10 rounded-2xl mt-10"\n>\n  @for (item of features(); track item.id) {\n    <div class="flex items-center gap-4">\n      <span\n        class="flex items-center justify-center size-15 rounded-full bg-maroon-600 dark:bg-soft-pink-200 text-white dark:text-zinc-800"\n      >\n        <lucide-icon [name]="item.icon" size="40" [strokeWidth]="1" />\n      </span>\n\n      <div class="flex flex-col gap-1">\n        <h6\n          class="text-xl font-semibold text-maroon-600 dark:text-soft-pink-200"\n        >\n          {{ item.title | transloco }}\n        </h6>\n\n        <p class="text-sm text-zinc-500 dark:text-zinc-300 font-normal">\n          {{ item.description | transloco }}\n        </p>\n      </div>\n    </div>\n  }\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesBarSectionComponent, { className: "FeaturesBarSectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/features-bar-section/features-bar-section.component.ts", lineNumber: 11 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/gallery-section/gallery-section.ts
var GallerySectionComponent = class _GallerySectionComponent {
  static \u0275fac = function GallerySectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GallerySectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GallerySectionComponent, selectors: [["app-gallery-section"]], decls: 14, vars: 6, consts: [[1, "py-16"], [1, "flex", "flex-col", "items-center", "justify-center", "mb-12"], [1, "text-sm", "font-bold", "tracking-[3px]", "text-soft-pink-500", "uppercase", "mb-2"], [3, "title"], [1, "grid", "grid-cols-1", "grid-rows-6", "lg:grid-cols-3", "lg:grid-rows-3", "gap-4", "h-screen"], [1, "lg:row-span-2", "bg-[url('/assets/images/gallery-gifts.png')]", "bg-cover", "bg-center"], [1, "bg-[url('/assets/images/gallery-gift-ring.png')]", "bg-cover", "bg-center"], [1, "bg-[url('/assets/images/gallery-ring2.png')]", "bg-cover", "bg-center"], [1, "lg:row-span-2", "bg-[url('/assets/images/gallery-ring1.png')]", "bg-cover", "bg-center"], [1, "lg:row-span-2", "bg-[url('/assets/images/04941e524774f784d8769dd9ac1bc377bb92732e.png')]", "bg-cover", "bg-center"], [1, "bg-[url('/assets/images/gallery-chocolate.png')]", "bg-cover", "bg-center"]], template: function GallerySectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "app-styled-home-title", 3);
      \u0275\u0275pipe(6, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275element(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "title_gallery"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(6, 4, "gallery_desc"));
    }
  }, dependencies: [TranslocoModule, StyledHomeTitleComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerySectionComponent, [{
    type: Component,
    args: [{ selector: "app-gallery-section", imports: [TranslocoModule, StyledHomeTitleComponent], standalone: true, template: `<section class="py-16">
  <div class="flex flex-col items-center justify-center mb-12">
    <p
      class="text-sm font-bold tracking-[3px] text-soft-pink-500 uppercase mb-2"
    >
      {{ 'title_gallery' | transloco }}
    </p>

    <app-styled-home-title [title]="'gallery_desc' | transloco" />
  </div>

  <div
    class="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-3 gap-4 h-screen"
  >
    <div
      class="lg:row-span-2 bg-[url('/assets/images/gallery-gifts.png')] bg-cover bg-center"
    ></div>

    <div
      class="bg-[url('/assets/images/gallery-gift-ring.png')] bg-cover bg-center"
    ></div>

    <div
      class="bg-[url('/assets/images/gallery-ring2.png')] bg-cover bg-center"
    ></div>

    <div
      class="lg:row-span-2 bg-[url('/assets/images/gallery-ring1.png')] bg-cover bg-center"
    ></div>

    <div
      class="lg:row-span-2 bg-[url('/assets/images/04941e524774f784d8769dd9ac1bc377bb92732e.png')] bg-cover bg-center"
    ></div>

    <div
      class="bg-[url('/assets/images/gallery-chocolate.png')] bg-cover bg-center"
    ></div>
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GallerySectionComponent, { className: "GallerySectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/gallery-section/gallery-section.ts", lineNumber: 14 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/trusted-section/trusted-section.ts
function TrustedSectionComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275domElement(1, "img", 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", image_r1, \u0275\u0275sanitizeUrl);
  }
}
var TrustedSectionComponent = class _TrustedSectionComponent {
  images = ["./assets/images/brand-1.png", "./assets/images/brand-2.png", "./assets/images/brand-3.png", "./assets/images/brand-4.png", "./assets/images/brand-5.png"];
  static \u0275fac = function TrustedSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrustedSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrustedSectionComponent, selectors: [["app-trusted-section"]], decls: 9, vars: 0, consts: [[1, "bg-maroon-50", "dark:bg-zinc-700", "rounded-xl", "py-9"], [1, "text-maroon-700", "dark:text-soft-pink-200", "text-xl", "lg:text-2xl", "font-bold", "text-center", "pb-3"], [1, "dark:text-maroon-400", "text-soft-pink-500"], [1, "flex", "flex-col", "lg:flex-row", "items-center", "lg:justify-around", "gap-4", "lg-gap-0"], ["alt", "brand", 1, "h-12", "object-contain", 3, "src"]], template: function TrustedSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h4", 1);
      \u0275\u0275text(2, " Trusted by over ");
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "4.5k+");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(5, " companies ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, TrustedSectionComponent_For_8_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.images);
    }
  }, dependencies: [TranslocoModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrustedSectionComponent, [{
    type: Component,
    args: [{ selector: "app-trusted-section", imports: [TranslocoModule], standalone: true, template: '<section class="bg-maroon-50 dark:bg-zinc-700 rounded-xl py-9">\n  <h4\n    class="text-maroon-700 dark:text-soft-pink-200 text-xl lg:text-2xl font-bold text-center pb-3"\n  >\n    Trusted by over\n    <span class="dark:text-maroon-400 text-soft-pink-500">4.5k+</span> companies\n  </h4>\n\n  <div\n    class="flex flex-col lg:flex-row items-center lg:justify-around gap-4 lg-gap-0"\n  >\n    @for(image of images; track $index) {\n    <div>\n      <img [src]="image" alt="brand" class="h-12 object-contain" />\n    </div>\n    }\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrustedSectionComponent, { className: "TrustedSectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/trusted-section/trusted-section.ts", lineNumber: 14 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/best-selling/best-selling.component.ts
function BestSellingComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-slider", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("products", ctx_r0.bestSellingProducts())("numVisible", 3);
  }
}
var BestSellingComponent = class _BestSellingComponent {
  arrow_right = ArrowRight;
  bestSellingProducts = input([], ...ngDevMode ? [{ debugName: "bestSellingProducts" }] : []);
  static \u0275fac = function BestSellingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BestSellingComponent, selectors: [["app-best-selling"]], inputs: { bestSellingProducts: [1, "bestSellingProducts"] }, decls: 26, vars: 28, consts: [[1, "lg:px-6", "py-10", "grid", "grid-cols-12", "gap-6", "lg:gap-0", "items-center"], [1, "col-span-12", "lg:col-span-3"], [1, "text-sm", "font-bold", "tracking-[3px]", "text-soft-pink-500", "uppercase", "mb-3.5"], [1, "font-serif", "text-3xl", "leading-[100%]", "text-maroon-700", "dark:text-white"], [1, "text-soft-pink-500"], [1, "text-base", "leading-[100%]", "text-zinc-500", "dark:text-white", "my-2"], [1, "w-full", "lg:w-1/2"], [3, "label", "type", "icon", "iconPosition"], [1, "col-span-12", "lg:col-span-9"], [1, "slider"], [3, "products", "numVisible"]], template: function BestSellingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "transloco");
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "transloco");
      \u0275\u0275elementStart(13, "span", 4);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 5);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 6);
      \u0275\u0275element(22, "shared-ui-button", 7);
      \u0275\u0275pipe(23, "transloco");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8);
      \u0275\u0275conditionalCreate(25, BestSellingComponent_Conditional_25_Template, 2, 2, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "title_best"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "part_best1"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, "highlight_best1"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 18, "part_best2"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 20, "highlight_best2"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 22, "part_best3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 24, "descriptionbest"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(23, 26, "explore_gifts"))("type", "submit")("icon", ctx.arrow_right)("iconPosition", "right");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.bestSellingProducts().length > 0 ? 25 : -1);
    }
  }, dependencies: [
    TranslocoModule,
    SliderComponent,
    ButtonComponent,
    LucideAngularModule,
    TranslocoPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BestSellingComponent, [{
    type: Component,
    args: [{ selector: "app-best-selling", imports: [
      TranslocoModule,
      SliderComponent,
      ButtonComponent,
      LucideAngularModule
    ], template: `<section class="lg:px-6 py-10 grid grid-cols-12 gap-6 lg:gap-0 items-center">
  <div class="col-span-12 lg:col-span-3">
    <p
      class="text-sm font-bold tracking-[3px] text-soft-pink-500 uppercase mb-3.5"
    >
      {{ 'title_best' | transloco }}
    </p>

    <h2
      class="font-serif text-3xl leading-[100%] text-maroon-700 dark:text-white"
    >
      {{ 'part_best1' | transloco }}
      <span class="text-soft-pink-500">{{
        'highlight_best1' | transloco
      }}</span>
      {{ 'part_best2' | transloco }}
      <span class="text-soft-pink-500">{{
        'highlight_best2' | transloco
      }}</span>
      {{ 'part_best3' | transloco }}
    </h2>

    <p class="text-base leading-[100%] text-zinc-500 dark:text-white my-2">
      {{ 'descriptionbest' | transloco }}
    </p>

    <div class="w-full lg:w-1/2">
      <shared-ui-button
        [label]="'explore_gifts' | transloco"
        [type]="'submit'"
        [icon]="arrow_right"
        [iconPosition]="'right'"
      >
      </shared-ui-button>
    </div>
  </div>

  <div class="col-span-12 lg:col-span-9">
    @if (bestSellingProducts().length > 0) {
      <div class="slider">
        <app-slider
          [products]="bestSellingProducts()"
          [numVisible]="3"
        ></app-slider>
      </div>
    }
  </div>
</section>
` }]
  }], null, { bestSellingProducts: [{ type: Input, args: [{ isSignal: true, alias: "bestSellingProducts", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BestSellingComponent, { className: "BestSellingComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/best-selling/best-selling.component.ts", lineNumber: 21 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/services/testimonials/testimonials.service.ts
var TestimonialsService = class _TestimonialsService {
  http = inject(HttpClient);
  getTestimonials(page = 1, limit = 5) {
    const params = new HttpParams().append("page", page).append("limit", limit);
    const url = ENDPOINTS.Get_All_Testimonials;
    return this.http.get(url, { params });
  }
  static \u0275fac = function TestimonialsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TestimonialsService, factory: _TestimonialsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/components/testimonials-section/testimonials-section.ts
var _c02 = () => [0, 1, 2, 3, 4];
var _forTrack04 = ($index, $item) => $item._id;
function TestimonialsSectionComponent_For_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const testimonial_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-yellow-400", i_r1 < testimonial_r2.rating)("text-gray-300", i_r1 >= testimonial_r2.rating);
  }
}
function TestimonialsSectionComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "h4", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275repeaterCreate(5, TestimonialsSectionComponent_For_9_For_6_Template, 2, 4, "span", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const testimonial_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", testimonial_r2.user.photo, \u0275\u0275sanitizeUrl)("alt", testimonial_r2.user.firstName + " " + testimonial_r2.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", testimonial_r2.user.firstName, " ", testimonial_r2.user.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", testimonial_r2.content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 6, testimonial_r2.createdAt, "longDate"), " ");
  }
}
var TestimonialsSectionComponent = class _TestimonialsSectionComponent {
  _testimonialsService = inject(TestimonialsService);
  testimonials = signal([], ...ngDevMode ? [{ debugName: "testimonials" }] : []);
  ngOnInit() {
    this.loadTestimonials();
  }
  loadTestimonials() {
    this._testimonialsService.getTestimonials().subscribe((res) => {
      this.testimonials.set(res.testimonials);
    });
  }
  static \u0275fac = function TestimonialsSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsSectionComponent, selectors: [["app-testimonials-section"]], decls: 10, vars: 6, consts: [[1, "py-12"], [1, "flex", "flex-col", "items-center", "justify-center", "mb-12"], [1, "text-sm", "font-bold", "tracking-[3px]", "text-soft-pink-500", "uppercase", "mb-2"], [3, "title"], [1, "flex", "flex-wrap", "justify-center", "gap-8", "bg-maroon-50", "dark:bg-zinc-700", "p-12", "px-10"], [1, "bg-white", "rounded-xl", "shadow-md", "p-6", "max-w-xs", "flex", "flex-col", "items-center"], [1, "w-24", "h-24", "rounded-full", "-mt-12", "mb-4", "border-4", "border-white", "object-cover", 3, "src", "alt"], [1, "font-semibold", "text-lg", "mb-2", "text-center"], [1, "flex", "mb-4"], [1, "text-sm", 3, "text-yellow-400", "text-gray-300"], [1, "text-center", "text-gray-600", "mb-4"], [1, "text-xs", "text-gray-400"], [1, "text-sm"]], template: function TestimonialsSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "app-styled-home-title", 3);
      \u0275\u0275pipe(6, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, TestimonialsSectionComponent_For_9_Template, 12, 10, "div", 5, _forTrack04);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "testimonials_title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(6, 4, "description_testimonials"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.testimonials());
    }
  }, dependencies: [TranslocoModule, StyledHomeTitleComponent, TranslocoPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsSectionComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials-section", imports: [TranslocoModule, StyledHomeTitleComponent, DatePipe], standalone: true, template: `<section class="py-12 ">
    <div class="flex flex-col items-center justify-center mb-12">
        <p class="text-sm font-bold tracking-[3px] text-soft-pink-500 uppercase mb-2">
            {{ 'testimonials_title' | transloco }}
        </p>
        <app-styled-home-title [title]="'description_testimonials' | transloco"></app-styled-home-title>
    </div>

    <div class="flex flex-wrap justify-center gap-8 bg-maroon-50 dark:bg-zinc-700 p-12 px-10">
        @for(testimonial of testimonials(); track testimonial._id) {
        <div class="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center">
           
            <img [src]="testimonial.user.photo" [alt]="testimonial.user.firstName + ' ' + testimonial.user.lastName"
                class="w-24 h-24 rounded-full -mt-12 mb-4 border-4 border-white object-cover">

           
            <h4 class="font-semibold text-lg mb-2 text-center">
                {{ testimonial.user.firstName }} {{ testimonial.user.lastName }}
            </h4>

            
            <div class="flex mb-4">
                @for(i of [0,1,2,3,4]; track i) {
                <span class="text-sm" [class.text-yellow-400]="i < testimonial.rating"
                    [class.text-gray-300]="i >= testimonial.rating">
                    \u2605
                </span>
                }
            </div>

            
            <p class="text-center text-gray-600 mb-4">
                {{ testimonial.content }}
            </p>

           
            <span class="text-xs text-gray-400">
                {{ testimonial.createdAt| date:'longDate' }}
            </span>
        </div>
        }
    </div>
</section>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsSectionComponent, { className: "TestimonialsSectionComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/components/testimonials-section/testimonials-section.ts", lineNumber: 19 });
})();

// apps/angular-c4-team3/src/app/features/landing/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  _homeService = inject(HomeService);
  subscription = new Subscription();
  products = signal([], ...ngDevMode ? [{ debugName: "products" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  bestSeller = signal([], ...ngDevMode ? [{ debugName: "bestSeller" }] : []);
  occasions = signal([], ...ngDevMode ? [{ debugName: "occasions" }] : []);
  ngOnInit() {
    this.getHeroData();
  }
  getHeroData() {
    const api = this._homeService.getHomeData().subscribe({
      next: (res) => {
        this.products.set(res.products);
        this.categories.set(res.categories);
        this.bestSeller.set(res.bestSeller);
        this.occasions.set(res.occasions);
      }
    });
    this.subscription.add(api);
  }
  shopNow() {
    console.log("Shop Now");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 8, vars: 3, consts: [[3, "bestSellingProducts"], [3, "products", "occasions"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-special-gift-section")(1, "app-features-bar-section")(2, "app-best-selling", 0)(3, "app-most-popular-section", 1)(4, "app-about-home")(5, "app-gallery-section")(6, "app-testimonials-section")(7, "app-trusted-section");
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("bestSellingProducts", ctx.bestSeller());
      \u0275\u0275advance();
      \u0275\u0275property("products", ctx.bestSeller())("occasions", ctx.occasions());
    }
  }, dependencies: [SpecialGiftSectionComponent, BestSellingComponent, GallerySectionComponent, AboutHomeComponent, MostPopularSectionComponent, LucideAngularModule, FeaturesBarSectionComponent, TrustedSectionComponent, TestimonialsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [SpecialGiftSectionComponent, BestSellingComponent, GallerySectionComponent, AboutHomeComponent, MostPopularSectionComponent, LucideAngularModule, FeaturesBarSectionComponent, TrustedSectionComponent, GallerySectionComponent, TestimonialsSectionComponent], template: '<app-special-gift-section />\n<app-features-bar-section />\n<app-best-selling [bestSellingProducts]="bestSeller()" />\n<app-most-popular-section [products]="bestSeller()" [occasions]="occasions()" />\n<app-about-home />\n<app-gallery-section />\n<app-testimonials-section />\n<app-trusted-section />\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "apps/angular-c4-team3/src/app/features/landing/pages/home/home.component.ts", lineNumber: 19 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-NOB23MTZ.js.map
