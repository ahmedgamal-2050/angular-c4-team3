import {
  AutoFocus,
  BaseIcon,
  ChevronDownIcon,
  SpinnerIcon
} from "./chunk-5F2C77Q4.js";
import {
  Fluid
} from "./chunk-ZUKZCXFN.js";
import {
  Badge,
  BadgeModule
} from "./chunk-ZSIZB4LZ.js";
import {
  Ripple
} from "./chunk-FBY6JISU.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Footer,
  Header,
  P,
  PARENT_INSTANCE,
  PrimeTemplate,
  Q,
  SharedModule,
  U,
  W,
  Y,
  _t,
  l,
  s2 as s,
  z
} from "./chunk-BX323W7Q.js";
import {
  Heart,
  LucideAngularComponent,
  LucideAngularModule,
  ShoppingCart
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  DomSanitizer,
  RouterLink
} from "./chunk-DVFFD4F4.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/shared/components/styled-home-title/styled-home-title.component.ts
var StyledHomeTitleComponent = class _StyledHomeTitleComponent {
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function StyledHomeTitleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyledHomeTitleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StyledHomeTitleComponent, selectors: [["app-styled-home-title"]], inputs: { title: [1, "title"] }, decls: 5, vars: 1, consts: [[1, "w-fit"], [1, "text-xl", "lg:text-4xl", "font-bold", "text-maroon-700", "dark:text-soft-pink-200", "-mb-5"], [1, "h-5", "w-[70%]", "bg-soft-pink-100", "dark:bg-zinc-700", "to-transparent", "ltr:rounded-tr-[20px]", "ltr:rounded-br-[20px]", "rtl:rounded-tl-[20px]", "rtl:rounded-bl-[20px]"], [1, "w-[30%]", "border-b", "border-2", "border-soft-pink-600", "dark:border-soft-pink-500"]], template: function StyledHomeTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(3, "div", 2)(4, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyledHomeTitleComponent, [{
    type: Component,
    args: [{ selector: "app-styled-home-title", imports: [], standalone: true, template: '<div class="w-fit">\n  <p\n    class="text-xl lg:text-4xl font-bold text-maroon-700 dark:text-soft-pink-200 -mb-5"\n  >\n    {{ title() }}\n  </p>\n\n  <div\n    class="h-5 w-[70%] bg-soft-pink-100 dark:bg-zinc-700 to-transparent ltr:rounded-tr-[20px] ltr:rounded-br-[20px] rtl:rounded-tl-[20px] rtl:rounded-bl-[20px]"\n  ></div>\n\n  <div\n    class="w-[30%] border-b border-2 border-soft-pink-600 dark:border-soft-pink-500"\n  ></div>\n</div>\n' }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StyledHomeTitleComponent, { className: "StyledHomeTitleComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/styled-home-title/styled-home-title.component.ts", lineNumber: 9 });
})();

// apps/angular-c4-team3/src/app/shared/constants/icons-svg.ts
var ICONS_SVG = {
  fullStar: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.60404 1.91274C9.64056 1.83895 9.69697 1.77685 9.76692 1.73342C9.83686 1.69 9.91755 1.66699 9.99987 1.66699C10.0822 1.66699 10.1629 1.69 10.2328 1.73342C10.3028 1.77685 10.3592 1.83895 10.3957 1.91274L12.3207 5.8119C12.4475 6.06854 12.6347 6.29058 12.8662 6.45895C13.0977 6.62732 13.3666 6.737 13.6499 6.77857L17.9549 7.40857C18.0364 7.42039 18.1131 7.4548 18.1761 7.5079C18.2391 7.56101 18.2861 7.63069 18.3116 7.70908C18.337 7.78746 18.3401 7.87141 18.3204 7.95143C18.3006 8.03146 18.2589 8.10436 18.1999 8.1619L15.0865 11.1936C14.8812 11.3937 14.7276 11.6406 14.6389 11.9133C14.5502 12.1859 14.5291 12.476 14.5774 12.7586L15.3124 17.0419C15.3268 17.1234 15.318 17.2074 15.287 17.2841C15.2559 17.3609 15.204 17.4274 15.137 17.4761C15.07 17.5247 14.9907 17.5536 14.9081 17.5593C14.8255 17.5651 14.743 17.5475 14.6699 17.5086L10.8215 15.4852C10.568 15.3521 10.2859 15.2825 9.99946 15.2825C9.71306 15.2825 9.43094 15.3521 9.17737 15.4852L5.32987 17.5086C5.25681 17.5472 5.17437 17.5646 5.09191 17.5588C5.00946 17.5529 4.9303 17.524 4.86345 17.4754C4.7966 17.4268 4.74473 17.3604 4.71375 17.2838C4.68277 17.2071 4.67392 17.1233 4.68821 17.0419L5.42237 12.7594C5.47087 12.4767 5.44986 12.1864 5.36115 11.9136C5.27245 11.6408 5.11871 11.3937 4.91321 11.1936L1.79987 8.16274C1.74037 8.10526 1.6982 8.03223 1.67817 7.95197C1.65815 7.8717 1.66107 7.78742 1.6866 7.70873C1.71214 7.63004 1.75926 7.5601 1.8226 7.50689C1.88594 7.45367 1.96296 7.41932 2.04487 7.40774L6.34904 6.77857C6.63259 6.73732 6.90186 6.62778 7.13369 6.45939C7.36552 6.291 7.55296 6.0688 7.67987 5.8119L9.60404 1.91274Z" fill="#FFA508"/>
  </svg>`,
  halfStar: `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99987 15.282C9.71319 15.2814 9.43075 15.3512 9.17737 15.4853L5.32987 17.5087C5.25681 17.5473 5.17437 17.5647 5.09191 17.5589C5.00946 17.553 4.9303 17.5241 4.86345 17.4755C4.7966 17.4269 4.74473 17.3605 4.71375 17.2838C4.68277 17.2072 4.67392 17.1234 4.68821 17.042L5.42237 12.7595C5.47101 12.4768 5.45007 12.1864 5.36136 11.9136C5.27265 11.6408 5.11883 11.3937 4.91321 11.1937L1.79987 8.16283C1.74037 8.10535 1.6982 8.03232 1.67817 7.95205C1.65815 7.87179 1.66107 7.78751 1.6866 7.70882C1.71214 7.63013 1.75926 7.56019 1.8226 7.50698C1.88594 7.45376 1.96296 7.41941 2.04487 7.40783L6.34904 6.77866C6.63263 6.73754 6.90197 6.62806 7.13382 6.45966C7.36567 6.29125 7.55307 6.06897 7.67987 5.81199L9.60404 1.91283C9.64055 1.83903 9.69695 1.7769 9.7669 1.73346C9.83684 1.69002 9.91754 1.667 9.99987 1.66699" fill="#FFA508"/>
</svg>
`
};

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var _c0 = ["data-p-icon", "chevron-left"];
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronLeftIcon_BaseFactory || (\u0275ChevronLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronLeftIcon)))(__ngFactoryType__ || _ChevronLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronLeftIcon,
    selectors: [["", "data-p-icon", "chevron-left"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-left"]',
      standalone: true,
      template: `
        <svg:path
            d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var _c02 = ["data-p-icon", "chevron-right"];
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronRightIcon_BaseFactory || (\u0275ChevronRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronRightIcon,
    selectors: [["", "data-p-icon", "chevron-right"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-right"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var _c03 = ["data-p-icon", "chevron-up"];
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronUpIcon_BaseFactory || (\u0275ChevronUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronUpIcon)))(__ngFactoryType__ || _ChevronUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronUpIcon,
    selectors: [["", "data-p-icon", "chevron-up"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-up"]',
      standalone: true,
      template: `
        <svg:path
            d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/button/index.mjs
var style = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;

// node_modules/primeng/fesm2022/primeng-button.mjs
var _c04 = ["content"];
var _c1 = ["loadingicon"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
  class: a0,
  pt: a1
});
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Button_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.cx("spinnerIcon")));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"))("spin", true);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 5, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
  }
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c4, ctx_r0.cx("loadingIcon"), ctx_r0.ptm("loadingIcon")));
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataIconP);
  }
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c4, ctx_r0.cx("icon"), ctx_r0.ptm("icon")));
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275attribute("aria-hidden", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label)))("data-p", ctx_r0.dataLabelP);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label));
  }
}
function Button_p_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.badge || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badge))("severity", ctx_r0.badgeSeverity || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badgeSeverity))("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-button p-component", {
    "p-button-icon-only": instance.hasIcon && !instance.label && !instance.buttonProps?.label && !instance.badge,
    "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
    "p-button-loading": instance.loading || instance.buttonProps?.loading,
    "p-button-link": instance.link || instance.buttonProps?.link,
    [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
    "p-button-raised": instance.raised || instance.buttonProps?.raised,
    "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
    "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
    "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
    "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
    "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
    "p-button-plain": instance.plain || instance.buttonProps?.plain,
    "p-button-fluid": instance.hasFluid
  }],
  loadingIcon: "p-button-loading-icon",
  icon: ({
    instance
  }) => ["p-button-icon", {
    [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
    "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
    "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label,
    "p-button-icon-top": (instance.iconPos === "top" || instance.buttonProps?.iconPos === "top") && instance.label || instance.buttonProps?.label,
    "p-button-icon-bottom": (instance.iconPos === "bottom" || instance.buttonProps?.iconPos === "bottom") && instance.label || instance.buttonProps?.label
  }, instance.icon, instance.buttonProps?.icon],
  spinnerIcon: ({
    instance
  }) => {
    return Object.entries(instance.cx("icon")).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  },
  label: "p-button-label"
};
var ButtonStyle = class _ButtonStyle extends BaseStyle {
  name = "button";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonStyle_BaseFactory;
    return function ButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ButtonStyle_BaseFactory || (\u0275ButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonStyle)))(__ngFactoryType__ || _ButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ButtonStyle,
    factory: _ButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses2) {
  ButtonClasses2["root"] = "p-button";
  ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
  ButtonClasses2["icon"] = "p-button-icon";
  ButtonClasses2["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var BUTTON_INSTANCE = new InjectionToken("BUTTON_INSTANCE");
var BUTTON_DIRECTIVE_INSTANCE = new InjectionToken("BUTTON_DIRECTIVE_INSTANCE");
var BUTTON_LABEL_INSTANCE = new InjectionToken("BUTTON_LABEL_INSTANCE");
var BUTTON_ICON_INSTANCE = new InjectionToken("BUTTON_ICON_INSTANCE");
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class _ButtonLabel extends BaseComponent {
  /**
   * Used to pass attributes to DOM elements inside the pButtonLabel.
   * @defaultValue undefined
   * @deprecated use pButtonLabelPT instead.
   * @group Props
   */
  ptButtonLabel = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonLabel"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the pButtonLabel.
   * @defaultValue undefined
   * @group Props
   */
  pButtonLabelPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonLabelPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonLabelUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonLabelUnstyled"
  }] : []);
  $pcButtonLabel = inject(BUTTON_LABEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonLabel() || this.pButtonLabelPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonLabelUnstyled() && this.directiveUnstyled.set(this.pButtonLabelUnstyled());
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = function ButtonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonLabel,
    selectors: [["", "pButtonLabel", ""]],
    hostVars: 2,
    hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-label", !ctx.$unstyled() && true);
      }
    },
    inputs: {
      ptButtonLabel: [1, "ptButtonLabel"],
      pButtonLabelPT: [1, "pButtonLabelPT"],
      pButtonLabelUnstyled: [1, "pButtonLabelUnstyled"]
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_LABEL_INSTANCE,
      useExisting: _ButtonLabel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonLabel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
    type: Directive,
    args: [{
      selector: "[pButtonLabel]",
      providers: [ButtonStyle, {
        provide: BUTTON_LABEL_INSTANCE,
        useExisting: ButtonLabel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonLabel
      }],
      standalone: true,
      host: {
        "[class.p-button-label]": "!$unstyled() && true"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonLabel",
        required: false
      }]
    }],
    pButtonLabelPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonLabelPT",
        required: false
      }]
    }],
    pButtonLabelUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonLabelUnstyled",
        required: false
      }]
    }]
  });
})();
var ButtonIcon = class _ButtonIcon extends BaseComponent {
  /**
   * Used to pass attributes to DOM elements inside the pButtonIcon.
   * @defaultValue undefined
   * @deprecated use pButtonIconPT instead.
   * @group Props
   */
  ptButtonIcon = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonIcon"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the pButtonIcon.
   * @defaultValue undefined
   * @group Props
   */
  pButtonIconPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonIconPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonUnstyled"
  }] : []);
  $pcButtonIcon = inject(BUTTON_ICON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonIcon() || this.pButtonIconPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = function ButtonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonIcon,
    selectors: [["", "pButtonIcon", ""]],
    hostVars: 2,
    hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon", !ctx.$unstyled() && true);
      }
    },
    inputs: {
      ptButtonIcon: [1, "ptButtonIcon"],
      pButtonIconPT: [1, "pButtonIconPT"],
      pButtonUnstyled: [1, "pButtonUnstyled"]
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_ICON_INSTANCE,
      useExisting: _ButtonIcon
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonIcon
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
    type: Directive,
    args: [{
      selector: "[pButtonIcon]",
      providers: [ButtonStyle, {
        provide: BUTTON_ICON_INSTANCE,
        useExisting: ButtonIcon
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonIcon
      }],
      standalone: true,
      host: {
        "[class.p-button-icon]": "!$unstyled() && true"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonIcon",
        required: false
      }]
    }],
    pButtonIconPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonIconPT",
        required: false
      }]
    }],
    pButtonUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonUnstyled",
        required: false
      }]
    }]
  });
})();
var ButtonDirective = class _ButtonDirective extends BaseComponent {
  $pcButtonDirective = inject(BUTTON_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(ButtonStyle);
  /**
   * Used to pass attributes to DOM elements inside the Button component.
   * @defaultValue undefined
   * @deprecated use pButtonPT instead.
   * @group Props
   */
  ptButtonDirective = input(...ngDevMode ? [void 0, {
    debugName: "ptButtonDirective"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the Button component.
   * @defaultValue undefined
   * @group Props
   */
  pButtonPT = input(...ngDevMode ? [void 0, {
    debugName: "pButtonPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pButtonUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pButtonUnstyled"
  }] : []);
  hostName = "";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  constructor() {
    super();
    effect(() => {
      const pt = this.ptButtonDirective() || this.pButtonPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
    });
    effect(() => {
      const unstyled = this.$unstyled();
      if (this.initialized && unstyled) {
        this.setStyleClass();
      }
    });
  }
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{
    debugName: "iconSignal"
  }] : []);
  labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{
    debugName: "labelSignal"
  }] : []);
  isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{
    debugName: "isIconOnly"
  }] : []);
  _label;
  _icon;
  _loading = false;
  _severity;
  _buttonProps;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{
    debugName: "isTextButton"
  }] : []);
  /**
   * Text of the button.
   * @deprecated use pButtonLabel directive instead.
   * @group Props
   */
  get label() {
    return this._label;
  }
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Name of the icon.
   * @deprecated use pButtonIcon directive instead
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @deprecated assign props directly to the button element.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Defines the style of the button.
   * @group Props
   */
  get severity() {
    return this._severity;
  }
  set severity(value) {
    this._severity = value;
    if (this.initialized) {
      this.setStyleClass();
    }
  }
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  onAfterViewInit() {
    !this.$unstyled() && W(this.htmlElement, this.getStyleClass().join(" "));
    if (isPlatformBrowser(this.platformId)) {
      this.createIcon();
      this.createLabel();
      this.initialized = true;
    }
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && l(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !l(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    if (this.text) {
      styleClass.push("p-button-text");
    }
    if (this.severity) {
      styleClass.push(`p-button-${this.severity}`);
    }
    if (this.plain) {
      styleClass.push("p-button-plain");
    }
    if (this.raised) {
      styleClass.push("p-button-raised");
    }
    if (this.size) {
      styleClass.push(`p-button-${this.size}`);
    }
    if (this.outlined) {
      styleClass.push("p-button-outlined");
    }
    if (this.rounded) {
      styleClass.push("p-button-rounded");
    }
    if (this.size === "small") {
      styleClass.push("p-button-sm");
    }
    if (this.size === "large") {
      styleClass.push("p-button-lg");
    }
    if (this.hasFluid) {
      styleClass.push("p-button-fluid");
    }
    return this.$unstyled() ? [] : styleClass;
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.removeExistingSeverityClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  removeExistingSeverityClass() {
    const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
    const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
    if (existingSeverityClass) {
      this.htmlElement.classList.remove(existingSeverityClass);
    }
  }
  createLabel() {
    const created = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (!created && this.label) {
      let labelElement = U("span", {
        class: this.cx("label"),
        "p-bind": this.ptm("buttonlabel"),
        "aria-hidden": this.icon && !this.label ? "true" : null
      });
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = z(this.htmlElement, '[data-pc-section="buttonicon"]');
    if (!created && (this.icon || this.loading)) {
      let iconPosClass = this.label && !this.$unstyled() ? "p-button-icon-" + this.iconPos : null;
      let iconClass = !this.$unstyled() && this.getIconClass();
      let iconElement = U("span", {
        class: this.cn(this.cx("icon"), iconPosClass, iconClass),
        "aria-hidden": "true",
        "p-bind": this.ptm("buttonicon")
      });
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = z(this.htmlElement, '[data-pc-section="buttonicon"]');
    let labelElement = z(this.htmlElement, '[data-pc-section="buttonlabel"]');
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement && !this.$unstyled()) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  onDestroy() {
    this.initialized = false;
  }
  static \u0275fac = function ButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5)(dirIndex, ctx.labelSignal, ButtonLabel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon-only", !ctx.$unstyled() && ctx.isIconOnly())("p-button-text", !ctx.$unstyled() && ctx.isTextButton());
      }
    },
    inputs: {
      ptButtonDirective: [1, "ptButtonDirective"],
      pButtonPT: [1, "pButtonPT"],
      pButtonUnstyled: [1, "pButtonUnstyled"],
      hostName: "hostName",
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      raised: [2, "raised", "raised", booleanAttribute],
      size: "size",
      outlined: [2, "outlined", "outlined", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      fluid: [1, "fluid"],
      label: "label",
      icon: "icon",
      loading: "loading",
      buttonProps: "buttonProps",
      severity: "severity"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_DIRECTIVE_INSTANCE,
      useExisting: _ButtonDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ButtonDirective
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      standalone: true,
      providers: [ButtonStyle, {
        provide: BUTTON_DIRECTIVE_INSTANCE,
        useExisting: ButtonDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ButtonDirective
      }],
      host: {
        "[class.p-button-icon-only]": "!$unstyled() && isIconOnly()",
        "[class.p-button-text]": " !$unstyled() && isTextButton()"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    ptButtonDirective: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptButtonDirective",
        required: false
      }]
    }],
    pButtonPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonPT",
        required: false
      }]
    }],
    pButtonUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pButtonUnstyled",
        required: false
      }]
    }],
    hostName: [{
      type: Input
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    iconSignal: [{
      type: ContentChild,
      args: [forwardRef(() => ButtonIcon), {
        isSignal: true
      }]
    }],
    labelSignal: [{
      type: ContentChild,
      args: [forwardRef(() => ButtonLabel), {
        isSignal: true
      }]
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    severity: [{
      type: Input
    }]
  });
})();
var Button = class _Button extends BaseComponent {
  componentName = "Button";
  hostName = "";
  $pcButton = inject(BUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(ButtonStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Add a tabindex to the button.
   * @group Props
   */
  tabindex;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Specifies the variant of the component.
   * @group Props
   */
  variant;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   * @deprecated use badgeSeverity instead.
   */
  badgeClass;
  /**
   * Severity type of the badge.
   * @group Props
   * @defaultValue secondary
   */
  badgeSeverity = "secondary";
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Text of the button.
   * @group Props
   */
  label;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  buttonProps;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom content template.
   * @group Templates
   **/
  contentTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   **/
  loadingIconTemplate;
  /**
   * Custom icon template.
   * @group Templates
   **/
  iconTemplate;
  templates;
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  get hasIcon() {
    return this.icon || this.buttonProps?.icon || this.iconTemplate || this._iconTemplate || this.loadingIcon || this.loadingIconTemplate || this._loadingIconTemplate;
  }
  _contentTemplate;
  _iconTemplate;
  _loadingIconTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  get dataP() {
    return this.cn({
      [this.size]: this.size,
      "icon-only": this.hasIcon && !this.label && !this.badge,
      loading: this.loading,
      fluid: this.hasFluid,
      rounded: this.rounded,
      raised: this.raised,
      outlined: this.outlined || this.variant === "outlined",
      text: this.text || this.variant === "text",
      link: this.link,
      vertical: (this.iconPos === "top" || this.iconPos === "bottom") && this.label
    });
  }
  get dataIconP() {
    return this.cn({
      [this.iconPos]: this.iconPos,
      [this.size]: this.size
    });
  }
  get dataLabelP() {
    return this.cn({
      [this.size]: this.size,
      "icon-only": this.hasIcon && !this.label && !this.badge
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Button_BaseFactory;
    return function Button_Factory(__ngFactoryType__) {
      return (\u0275Button_BaseFactory || (\u0275Button_BaseFactory = \u0275\u0275getInheritedFactory(_Button)))(__ngFactoryType__ || _Button);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    inputs: {
      hostName: "hostName",
      type: "type",
      badge: "badge",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      link: [2, "link", "link", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      variant: "variant",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      badgeSeverity: "badgeSeverity",
      ariaLabel: "ariaLabel",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      iconPos: "iconPos",
      icon: "icon",
      label: "label",
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      severity: "severity",
      buttonProps: "buttonProps",
      fluid: [1, "fluid"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle, {
      provide: BUTTON_INSTANCE,
      useExisting: _Button
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Button
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 17,
    consts: [["pRipple", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "pAutoFocus", "pBind"], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "value", "severity", "pt", "unstyled", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "spinner", 3, "class", "pBind", "spin", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "spinner", 3, "pBind", "spin"], [3, "ngIf"], [3, "value", "severity", "pt", "unstyled"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 6, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 6, "ng-container", 2)(5, Button_span_5_Template, 2, 6, "span", 3)(6, Button_p_badge_6_Template, 1, 4, "p-badge", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass, ctx.buttonProps == null ? null : ctx.buttonProps.styleClass));
        \u0275\u0275property("ngStyle", ctx.style || (ctx.buttonProps == null ? null : ctx.buttonProps.style))("disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("pAutoFocus", ctx.autofocus || (ctx.buttonProps == null ? null : ctx.buttonProps.autofocus))("pBind", ctx.ptm("root"));
        \u0275\u0275attribute("type", ctx.type || (ctx.buttonProps == null ? null : ctx.buttonProps.type))("aria-label", ctx.ariaLabel || (ctx.buttonProps == null ? null : ctx.buttonProps.ariaLabel))("tabindex", ctx.tabindex || (ctx.buttonProps == null ? null : ctx.buttonProps.tabindex))("data-p", ctx.dataP)("data-p-disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("data-p-severity", ctx.severity || (ctx.buttonProps == null ? null : ctx.buttonProps.severity));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.label || (ctx.buttonProps == null ? null : ctx.buttonProps.label)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.badge || (ctx.buttonProps == null ? null : ctx.buttonProps.badge)));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus, SpinnerIcon, BadgeModule, Badge, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      standalone: true,
      imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule, Bind],
      template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
            [pBind]="ptm('root')"
            [attr.data-p]="dataP"
            [attr.data-p-disabled]="disabled || loading || buttonProps?.disabled"
            [attr.data-p-severity]="severity || buttonProps?.severity"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading || buttonProps?.loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon || buttonProps?.loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin', loadingIcon || buttonProps?.loadingIcon)" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="spinner" *ngIf="!(loadingIcon || buttonProps?.loadingIcon)" [class]="cn(cx('loadingIcon'), cx('spinnerIcon'))" [pBind]="ptm('loadingIcon')" [spin]="true" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon'), pt: ptm('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!(loading || buttonProps?.loading)">
                <span *ngIf="(icon || buttonProps?.icon) && !iconTemplate && !_iconTemplate" [class]="cn(cx('icon'), icon || buttonProps?.icon)" [pBind]="ptm('icon')" [attr.data-p]="dataIconP"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon'), pt: ptm('icon') }"></ng-template>
            </ng-container>
            <span
                [class]="cx('label')"
                [attr.aria-hidden]="(icon || buttonProps?.icon) && !(label || buttonProps?.label)"
                *ngIf="!contentTemplate && !_contentTemplate && (label || buttonProps?.label)"
                [pBind]="ptm('label')"
                [attr.data-p]="dataLabelP"
                >{{ label || buttonProps?.label }}</span
            >
            <p-badge
                *ngIf="!contentTemplate && !_contentTemplate && (badge || buttonProps?.badge)"
                [value]="badge || buttonProps?.badge"
                [severity]="badgeSeverity || buttonProps?.badgeSeverity"
                [pt]="ptm('pcBadge')"
                [unstyled]="unstyled()"
            ></p-badge>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonStyle, {
        provide: BUTTON_INSTANCE,
        useExisting: Button
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Button
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    link: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    badgeSeverity: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule,
    imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
    exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, Button, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
      exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/carousel/index.mjs
var style2 = "\n    .p-carousel {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-carousel-content-container {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    .p-carousel-content {\n        display: flex;\n        flex-direction: row;\n        gap: dt('carousel.content.gap');\n    }\n\n    .p-carousel-content:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-carousel-item-list {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .p-carousel-item-list:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-prev-button,\n    .p-carousel-next-button {\n        align-self: center;\n        flex-shrink: 0;\n    }\n\n    .p-carousel-indicator-list {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding: dt('carousel.indicator.list.padding');\n        gap: dt('carousel.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-carousel-indicator-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('carousel.indicator.background');\n        width: dt('carousel.indicator.width');\n        height: dt('carousel.indicator.height');\n        border: 0 none;\n        transition:\n            background dt('carousel.transition.duration'),\n            color dt('carousel.transition.duration'),\n            outline-color dt('carousel.transition.duration'),\n            box-shadow dt('carousel.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('carousel.indicator.border.radius');\n        padding: 0;\n        margin: 0;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-carousel-indicator-button:focus-visible {\n        box-shadow: dt('carousel.indicator.focus.ring.shadow');\n        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');\n        outline-offset: dt('carousel.indicator.focus.ring.offset');\n    }\n\n    .p-carousel-indicator-button:hover {\n        background: dt('carousel.indicator.hover.background');\n    }\n\n    .p-carousel-indicator-active .p-carousel-indicator-button {\n        background: dt('carousel.indicator.active.background');\n    }\n\n    .p-carousel-vertical .p-carousel-content {\n        flex-direction: column;\n    }\n\n    .p-carousel-vertical .p-carousel-item-list {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-items-hidden .p-carousel-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-carousel-item.p-carousel-item-active {\n        visibility: visible;\n    }\n";

// node_modules/primeng/fesm2022/primeng-carousel.mjs
var _c05 = ["item"];
var _c12 = ["header"];
var _c22 = ["footer"];
var _c32 = ["previousicon"];
var _c42 = ["nexticon"];
var _c5 = ["itemsContainer"];
var _c6 = ["indicatorContent"];
var _c7 = [[["p-header"]], [["p-footer"]]];
var _c8 = ["p-header", "p-footer"];
var _c9 = (a0) => ({
  height: a0
});
var _c10 = (a0) => ({
  index: a0
});
var _c11 = (a0) => ({
  $implicit: a0
});
function Carousel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Carousel_div_0_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 19);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 16)(2, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_ng_container_1_1_Template, 1, 0, null, 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_3_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 15)(1, Carousel_p_button_3_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate && !(ctx_r1.prevButtonProps == null ? null : ctx_r1.prevButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate) && !(ctx_r1.prevButtonProps == null ? null : ctx_r1.prevButtonProps.icon));
  }
}
function Carousel_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("click", function Carousel_p_button_3_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navBackward($event));
    });
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("pcPrevButton"));
    \u0275\u0275property("text", true)("buttonProps", ctx_r1.prevButtonProps)("pt", ctx_r1.ptm("pcPrevButton"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPrevButtonLabel());
  }
}
function Carousel_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Carousel_div_7_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("itemClone", \u0275\u0275pureFunction1(11, _c10, index_r5)));
    \u0275\u0275property("pBind", ctx_r1.ptm("itemClone"));
    \u0275\u0275attribute("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r5))("aria-roledescription", ctx_r1.ariaSlideLabel())("data-p-carousel-item-active", ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length + ctx_r1._numVisible)("data-p-carousel-item-start", index_r5 === 0)("data-p-carousel-item-end", ctx_r1.clonedItemsForStarting && ctx_r1.clonedItemsForStarting.length - 1 === index_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c11, item_r4));
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("item", \u0275\u0275pureFunction1(11, _c10, index_r7)));
    \u0275\u0275property("pBind", ctx_r1.getItemPTOptions("item", index_r7));
    \u0275\u0275attribute("aria-hidden", !(ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7))("aria-label", ctx_r1.ariaSlideNumber(index_r7))("aria-roledescription", ctx_r1.ariaSlideLabel())("data-p-carousel-item-active", ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7)("data-p-carousel-item-start", ctx_r1.firstIndex() === index_r7)("data-p-carousel-item-end", ctx_r1.lastIndex() === index_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c11, item_r6));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("itemClone", \u0275\u0275pureFunction1(8, _c10, index_r9)));
    \u0275\u0275property("pBind", ctx_r1.ptm("itemClone"));
    \u0275\u0275attribute("data-p-carousel-item-active", false)("data-p-carousel-item-start", false)("data-p-carousel-item-end", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c11, item_r8));
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 25);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 23)(2, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_10_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_10_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_span_1_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function Carousel_p_button_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_10_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 15)(1, Carousel_p_button_10_ng_template_1_span_1_Template, 2, 1, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate && !(ctx_r1.nextButtonProps == null ? null : ctx_r1.nextButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate && !(ctx_r1.nextButtonProps == null ? null : ctx_r1.nextButtonProps.icon));
  }
}
function Carousel_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("click", function Carousel_p_button_10_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward($event));
    });
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("pcNextButton"));
    \u0275\u0275property("buttonProps", ctx_r1.nextButtonProps)("text", true)("pt", ctx_r1.ptm("pcNextButton"))("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.ariaNextButtonLabel());
  }
}
function Carousel_ul_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "button", 28);
    \u0275\u0275listener("click", function Carousel_ul_11_li_2_Template_button_click_1_listener($event) {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDotClick($event, i_r13));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("indicator", \u0275\u0275pureFunction1(11, _c10, i_r13)));
    \u0275\u0275property("pBind", ctx_r1.getIndicatorPTOptions("indicator", i_r13));
    \u0275\u0275attribute("data-p-active", ctx_r1._page === i_r13);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("indicatorButton"));
    \u0275\u0275property("ngStyle", ctx_r1.indicatorStyle)("tabindex", ctx_r1._page === i_r13 ? 0 : -1)("pBind", ctx_r1.getIndicatorPTOptions("indicatorButton", i_r13));
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPageLabel(i_r13 + 1))("aria-current", ctx_r1._page === i_r13 ? "page" : void 0);
  }
}
function Carousel_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 27, 2);
    \u0275\u0275listener("keydown", function Carousel_ul_11_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIndicatorKeydown($event));
    });
    \u0275\u0275template(2, Carousel_ul_11_li_2_Template, 2, 13, "li", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("indicatorList"));
    \u0275\u0275property("ngStyle", ctx_r1.indicatorsContentStyle)("pBind", ctx_r1.ptm("indicatorList"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.totalDotsArray());
  }
}
function Carousel_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Carousel_div_12_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-carousel p-component", {
    "p-carousel-vertical": instance.isVertical(),
    "p-carousel-horizontal": !instance.isVertical()
  }],
  header: "p-carousel-header",
  contentContainer: "p-carousel-content-container",
  content: "p-carousel-content",
  pcPrevButton: ({
    instance
  }) => ["p-carousel-prev-button", {
    "p-disabled": instance.isBackwardNavDisabled()
  }],
  viewport: "p-carousel-viewport",
  itemList: "p-carousel-item-list",
  itemClone: ({
    instance,
    index
  }) => ["p-carousel-item p-carousel-item-clone", {
    "p-carousel-item-active": instance.totalShiftedItems * -1 === instance.value.length,
    "p-carousel-item-start": 0 === index,
    "p-carousel-item-end": instance.clonedItemsForStarting.length - 1 === index
  }],
  item: ({
    instance,
    index
  }) => ["p-carousel-item", {
    "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
    "p-carousel-item-start": instance.firstIndex() === index,
    "p-carousel-item-end": instance.lastIndex() === index
  }],
  pcNextButton: ({
    instance
  }) => ["p-carousel-next-button", {
    "p-disabled": instance.isForwardNavDisabled()
  }],
  indicatorList: ({
    instance
  }) => ["p-carousel-indicator-list", instance.indicatorsContentClass],
  indicator: ({
    instance,
    index
  }) => ["p-carousel-indicator", {
    "p-carousel-indicator-active": instance._page === index
  }],
  indicatorButton: ({
    instance
  }) => ["p-carousel-indicator-button", instance.indicatorStyleClass],
  footer: "p-carousel-footer"
};
var CarouselStyle = class _CarouselStyle extends BaseStyle {
  name = "carousel";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CarouselStyle_BaseFactory;
    return function CarouselStyle_Factory(__ngFactoryType__) {
      return (\u0275CarouselStyle_BaseFactory || (\u0275CarouselStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CarouselStyle)))(__ngFactoryType__ || _CarouselStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselStyle,
    factory: _CarouselStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselStyle, [{
    type: Injectable
  }], null, null);
})();
var CarouselClasses;
(function(CarouselClasses2) {
  CarouselClasses2["root"] = "p-carousel";
  CarouselClasses2["header"] = "p-carousel-header";
  CarouselClasses2["contentContainer"] = "p-carousel-content-container";
  CarouselClasses2["content"] = "p-carousel-content";
  CarouselClasses2["pcPrevButton"] = "p-carousel-prev-button";
  CarouselClasses2["viewport"] = "p-carousel-viewport";
  CarouselClasses2["itemList"] = "p-carousel-item-list";
  CarouselClasses2["itemClone"] = "p-carousel-item-clone";
  CarouselClasses2["item"] = "p-carousel-item";
  CarouselClasses2["pcNextButton"] = "p-carousel-next-button";
  CarouselClasses2["indicatorList"] = "p-carousel-indicator-list";
  CarouselClasses2["indicator"] = "p-carousel-indicator";
  CarouselClasses2["indicatorButton"] = "p-carousel-indicator-button";
  CarouselClasses2["footer"] = "p-carousel-footer";
})(CarouselClasses || (CarouselClasses = {}));
var Carousel = class _Carousel extends BaseComponent {
  el;
  zone;
  componentName = "Carousel";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  /**
   * Index of the first item.
   * @defaultValue 0
   * @group Props
   */
  get page() {
    return this._page;
  }
  set page(val) {
    if (this.isCreated && val !== this._page) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (val > this._page && val <= this.totalDots() - 1) {
        this.step(-1, val);
      } else if (val < this._page) {
        this.step(1, val);
      }
    }
    this._page = val;
  }
  /**
   * Number of items per page.
   * @defaultValue 1
   * @group Props
   */
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(val) {
    this._numVisible = val;
  }
  /**
   * Number of items to scroll.
   * @defaultValue 1
   * @group Props
   */
  get numScroll() {
    return this._numVisible;
  }
  set numScroll(val) {
    this._numScroll = val;
  }
  /**
   * An array of options for responsive design.
   * @see {CarouselResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Specifies the layout of the component.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Height of the viewport in vertical layout.
   * @group Props
   */
  verticalViewPortHeight = "300px";
  /**
   * Style class of main content.
   * @group Props
   */
  contentClass = "";
  /**
   * Style class of the indicator items.
   * @group Props
   */
  indicatorsContentClass = "";
  /**
   * Inline style of the indicator items.
   * @group Props
   */
  indicatorsContentStyle;
  /**
   * Style class of the indicators.
   * @group Props
   */
  indicatorStyleClass = "";
  /**
   * Style of the indicators.
   * @group Props
   */
  indicatorStyle;
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = true;
  /**
   * Whether to display navigation buttons in container.
   * @group Props
   */
  showNavigators = true;
  /**
   * Time in milliseconds to scroll items automatically.
   * @group Props
   */
  autoplayInterval = 0;
  /**
   * Style class of the viewport container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  prevButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  nextButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Callback to invoke after scroll.
   * @param {CarouselPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  itemsContainer;
  indicatorContent;
  headerFacet;
  footerFacet;
  _numVisible = 1;
  _numScroll = 1;
  _oldNumScroll = 0;
  prevState = {
    numScroll: 0,
    numVisible: 0,
    value: []
  };
  defaultNumScroll = 1;
  defaultNumVisible = 1;
  _page = 0;
  _value;
  carouselStyle;
  id;
  totalShiftedItems;
  isRemainingItemsAdded = false;
  animationTimeout;
  translateTimeout;
  remainingItems = 0;
  _items;
  startPos;
  documentResizeListener;
  clonedItemsForStarting;
  clonedItemsForFinishing;
  allowAutoplay;
  interval;
  isCreated;
  swipeThreshold = 20;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom previous icon template.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom next icon template.
   * @group Templates
   */
  nextIconTemplate;
  _itemTemplate;
  _headerTemplate;
  _footerTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  window;
  _componentStyle = inject(CarouselStyle);
  constructor(el, zone) {
    super();
    this.el = el;
    this.zone = zone;
    this.totalShiftedItems = this.page * this.numScroll * -1;
    this.window = this.document.defaultView;
  }
  onChanges(simpleChange) {
    if (isPlatformBrowser(this.platformId)) {
      if (simpleChange.value) {
        if (this.circular && this._value) {
          this.setCloneItems();
        }
      }
      if (this.isCreated) {
        if (simpleChange.numVisible) {
          if (this.responsiveOptions) {
            this.defaultNumVisible = this.numVisible;
          }
          if (this.isCircular()) {
            this.setCloneItems();
          }
          this.createStyle();
          this.calculatePosition();
        }
        if (simpleChange.numScroll) {
          if (this.responsiveOptions) {
            this.defaultNumScroll = this.numScroll;
          }
        }
      }
    }
    this.cd.markForCheck();
  }
  templates;
  onAfterContentInit() {
    this.id = s("pn_id_");
    if (isPlatformBrowser(this.platformId)) {
      this.allowAutoplay = !!this.autoplayInterval;
      if (this.circular) {
        this.setCloneItems();
      }
      if (this.responsiveOptions) {
        this.defaultNumScroll = this._numScroll;
        this.defaultNumVisible = this._numVisible;
      }
      this.createStyle();
      this.calculatePosition();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
    this.cd.detectChanges();
  }
  onAfterContentChecked() {
    if (isPlatformBrowser(this.platformId)) {
      const isCircular = this.isCircular();
      let totalShiftedItems = this.totalShiftedItems;
      if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
        if (this.autoplayInterval) {
          this.stopAutoplay(false);
        }
        this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
        let page = this._page;
        if (this.totalDots() !== 0 && page >= this.totalDots()) {
          page = this.totalDots() - 1;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        totalShiftedItems = page * this._numScroll * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        if (page === this.totalDots() - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this._numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        this._oldNumScroll = this._numScroll;
        this.prevState.numScroll = this._numScroll;
        this.prevState.numVisible = this._numVisible;
        this.prevState.value = [...this._value];
        if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
        this.isCreated = true;
        if (this.autoplayInterval && this.isAutoplay()) {
          this.startAutoplay();
        }
      }
      if (isCircular) {
        if (this.page === 0) {
          totalShiftedItems = -1 * this._numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
      }
    }
  }
  createStyle() {
    if (!this.carouselStyle) {
      this.carouselStyle = this.renderer.createElement("style");
      this.carouselStyle.type = "text/css";
      _t(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.carouselStyle);
      _t(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
    }
    let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
    if (this.responsiveOptions && !this.$unstyled()) {
      this.responsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.responsiveOptions.length; i++) {
        let res = this.responsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.carouselStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.responsiveOptions) {
      let matchedResponsiveData = {
        numVisible: this.defaultNumVisible,
        numScroll: this.defaultNumScroll
      };
      if (typeof window !== "undefined") {
        let windowWidth = window.innerWidth;
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
      }
      if (this._numScroll !== matchedResponsiveData.numScroll) {
        let page = this._page;
        page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
        let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
        if (this.isCircular()) {
          totalShiftedItems -= matchedResponsiveData.numVisible;
        }
        this.totalShiftedItems = totalShiftedItems;
        this._numScroll = matchedResponsiveData.numScroll;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      if (this._numVisible !== matchedResponsiveData.numVisible) {
        this._numVisible = matchedResponsiveData.numVisible;
        this.setCloneItems();
      }
      this.cd.markForCheck();
    }
  }
  setCloneItems() {
    this.clonedItemsForStarting = [];
    this.clonedItemsForFinishing = [];
    if (this.isCircular()) {
      this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
      this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
    }
  }
  firstIndex() {
    return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
  }
  lastIndex() {
    return this.firstIndex() + this.numVisible - 1;
  }
  totalDots() {
    return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
  }
  totalDotsArray() {
    const totalDots = this.totalDots();
    return totalDots <= 0 ? [] : Array(totalDots).fill(0);
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  isCircular() {
    return this.circular && this.value && this.value.length >= this.numVisible;
  }
  isAutoplay() {
    return this.autoplayInterval && this.allowAutoplay;
  }
  isForwardNavDisabled() {
    return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
  }
  isBackwardNavDisabled() {
    return this.isEmpty() || this._page <= 0 && !this.isCircular();
  }
  isEmpty() {
    return !this.value || this.value.length === 0;
  }
  navForward(e, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onDotClick(e, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (index > page) {
      this.navForward(e, index);
    } else if (index < page) {
      this.navBackward(e, index);
    }
  }
  onIndicatorKeydown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
    }
  }
  onRightKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const highlightedIndex = indicators.findIndex((ind) => Q(ind, "data-p-highlight") === true);
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir, page) {
    let totalShiftedItems = this.totalShiftedItems;
    const isCircular = this.isCircular();
    if (page != null) {
      totalShiftedItems = this._numScroll * page * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      this.isRemainingItemsAdded = false;
    } else {
      totalShiftedItems += this._numScroll * dir;
      if (this.isRemainingItemsAdded) {
        totalShiftedItems += this.remainingItems - this._numScroll * dir;
        this.isRemainingItemsAdded = false;
      }
      let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
      page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
    }
    if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
      totalShiftedItems = -1 * (this.value.length + this._numVisible);
      page = 0;
    } else if (isCircular && this.page === 0 && dir === 1) {
      totalShiftedItems = 0;
      page = this.totalDots() - 1;
    } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
      totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
      this.isRemainingItemsAdded = true;
    }
    if (this.itemsContainer) {
      !this.$unstyled() && P(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
    this._page = page;
    this.onPage.emit({
      page: this.page
    });
    this.cd.markForCheck();
  }
  startAutoplay() {
    this.interval = setInterval(() => {
      if (this.totalDots() > 0) {
        if (this.page === this.totalDots() - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.page + 1);
        }
      }
    }, this.autoplayInterval);
    this.allowAutoplay = true;
    this.cd.markForCheck();
  }
  stopAutoplay(changeAllow = true) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = void 0;
      if (changeAllow) {
        this.allowAutoplay = false;
      }
    }
    this.cd.markForCheck();
  }
  isPlaying() {
    return !!this.interval;
  }
  onTransitionEnd() {
    if (this.itemsContainer) {
      !this.$unstyled() && W(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transition = "";
      if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    }
  }
  ariaPrevButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.prevPageLabel : void 0;
  }
  ariaSlideLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.slide : void 0;
  }
  ariaNextButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.nextPageLabel : void 0;
  }
  ariaSlideNumber(value) {
    return this.config.translation.aria ? this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria?.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  getIndicatorPTOptions(key, index) {
    return this.ptm(key, {
      context: {
        highlighted: index === this._page
      }
    });
  }
  getItemPTOptions(key, index) {
    return this.ptm(key, {
      context: {
        index,
        active: this.firstIndex() <= index && this.lastIndex() >= index,
        start: this.firstIndex() === index,
        end: this.lastIndex() === index
      }
    });
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
          this.calculatePosition();
        });
      }
    }
  }
  unbindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
  }
  onDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  }
  static \u0275fac = function Carousel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Carousel)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Carousel,
    selectors: [["p-carousel"]],
    contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5)(dirIndex, Footer, 5)(dirIndex, _c05, 4)(dirIndex, _c12, 4)(dirIndex, _c22, 4)(dirIndex, _c32, 4)(dirIndex, _c42, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.previousIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.nextIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Carousel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c5, 5)(_c6, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemsContainer = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.indicatorContent = _t2.first);
      }
    },
    hostVars: 4,
    hostBindings: function Carousel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("role", "region");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      page: "page",
      numVisible: "numVisible",
      numScroll: "numScroll",
      responsiveOptions: "responsiveOptions",
      orientation: "orientation",
      verticalViewPortHeight: "verticalViewPortHeight",
      contentClass: "contentClass",
      indicatorsContentClass: "indicatorsContentClass",
      indicatorsContentStyle: "indicatorsContentStyle",
      indicatorStyleClass: "indicatorStyleClass",
      indicatorStyle: "indicatorStyle",
      value: "value",
      circular: [2, "circular", "circular", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showNavigators: [2, "showNavigators", "showNavigators", booleanAttribute],
      autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
      styleClass: "styleClass",
      prevButtonProps: "prevButtonProps",
      nextButtonProps: "nextButtonProps"
    },
    outputs: {
      onPage: "onPage"
    },
    features: [\u0275\u0275ProvidersFeature([CarouselStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _Carousel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 13,
    vars: 25,
    consts: [["itemsContainer", ""], ["icon", ""], ["indicatorContent", ""], [3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind"], ["attr.data-pc-group-section", "navigator", 3, "class", "text", "buttonProps", "pt", "unstyled", "click", 4, "ngIf"], [3, "touchend", "touchstart", "touchmove", "ngStyle", "pBind"], [3, "transitionend", "pBind"], [3, "class", "pBind", 4, "ngFor", "ngForOf"], ["role", "group", 3, "class", "pBind", 4, "ngFor", "ngForOf"], ["type", "button", "attr.data-pc-group-section", "navigator", 3, "class", "buttonProps", "text", "pt", "unstyled", "click", 4, "ngIf"], [3, "class", "ngStyle", "pBind", "keydown", 4, "ngIf"], [4, "ngTemplateOutlet"], ["attr.data-pc-group-section", "navigator", 3, "click", "text", "buttonProps", "pt", "unstyled"], [4, "ngIf"], ["data-p-icon", "chevron-left", 4, "ngIf"], ["data-p-icon", "chevron-up", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["data-p-icon", "chevron-up"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", 3, "pBind"], ["type", "button", "attr.data-pc-group-section", "navigator", 3, "click", "buttonProps", "text", "pt", "unstyled"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["data-p-icon", "chevron-down"], [3, "keydown", "ngStyle", "pBind"], ["type", "button", 3, "click", "ngStyle", "tabindex", "pBind"]],
    template: function Carousel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275template(0, Carousel_div_0_Template, 3, 4, "div", 3);
        \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
        \u0275\u0275template(3, Carousel_p_button_3_Template, 3, 7, "p-button", 6);
        \u0275\u0275elementStart(4, "div", 7);
        \u0275\u0275listener("touchend", function Carousel_Template_div_touchend_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchEnd($event));
        })("touchstart", function Carousel_Template_div_touchstart_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchStart($event));
        })("touchmove", function Carousel_Template_div_touchmove_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTouchMove($event));
        });
        \u0275\u0275elementStart(5, "div", 8, 0);
        \u0275\u0275listener("transitionend", function Carousel_Template_div_transitionend_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTransitionEnd());
        });
        \u0275\u0275template(7, Carousel_div_7_Template, 2, 15, "div", 9)(8, Carousel_div_8_Template, 2, 15, "div", 10)(9, Carousel_div_9_Template, 2, 12, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, Carousel_p_button_10_Template, 3, 7, "p-button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, Carousel_ul_11_Template, 3, 5, "ul", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, Carousel_div_12_Template, 3, 4, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.contentClass);
        \u0275\u0275property("ngClass", ctx.cx("contentContainer"))("pBind", ctx.ptm("contentContainer"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("aria-live", ctx.allowAutoplay ? "polite" : "off");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("viewport"));
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(23, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"))("pBind", ctx.ptm("viewport"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("itemList"));
        \u0275\u0275property("pBind", ctx.ptm("itemList"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.clonedItemsForStarting);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.clonedItemsForFinishing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIndicators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronRightIcon, ButtonModule, Button, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Carousel, [{
    type: Component,
    args: [{
      selector: "p-carousel",
      standalone: true,
      imports: [CommonModule, ChevronRightIcon, ButtonModule, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule],
      template: `
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate" [pBind]="ptm('header')">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
        </div>
        <div [class]="contentClass" [ngClass]="cx('contentContainer')" [pBind]="ptm('contentContainer')">
            <div [class]="cx('content')" [attr.aria-live]="allowAutoplay ? 'polite' : 'off'" [pBind]="ptm('content')">
                <p-button
                    *ngIf="showNavigators"
                    [class]="cx('pcPrevButton')"
                    [attr.aria-label]="ariaPrevButtonLabel()"
                    (click)="navBackward($event)"
                    [text]="true"
                    [buttonProps]="prevButtonProps"
                    [pt]="ptm('pcPrevButton')"
                    [unstyled]="unstyled()"
                    attr.data-pc-group-section="navigator"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!previousIconTemplate && !_previousIconTemplate && !prevButtonProps?.icon">
                            <svg data-p-icon="chevron-left" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-up" *ngIf="isVertical()" />
                        </ng-container>
                        <ng-container *ngIf="(previousIconTemplate || _previousIconTemplate) && !prevButtonProps?.icon">
                            <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                        </ng-container>
                    </ng-template>
                </p-button>
                <div [class]="cx('viewport')" [ngStyle]="{ height: isVertical() ? verticalViewPortHeight : 'auto' }" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" [pBind]="ptm('viewport')">
                    <div #itemsContainer [class]="cx('itemList')" (transitionend)="onTransitionEnd()" [pBind]="ptm('itemList')">
                        <div
                            *ngFor="let item of clonedItemsForStarting; let index = index"
                            [class]="cx('itemClone', { index })"
                            [attr.aria-hidden]="!(totalShiftedItems * -1 === value.length)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                            [attr.data-p-carousel-item-active]="totalShiftedItems * -1 === value.length + _numVisible"
                            [attr.data-p-carousel-item-start]="index === 0"
                            [attr.data-p-carousel-item-end]="clonedItemsForStarting && clonedItemsForStarting.length - 1 === index"
                            [pBind]="ptm('itemClone')"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div
                            *ngFor="let item of value; let index = index"
                            [class]="cx('item', { index })"
                            role="group"
                            [attr.aria-hidden]="!(firstIndex() <= index && lastIndex() >= index)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                            [attr.data-p-carousel-item-active]="firstIndex() <= index && lastIndex() >= index"
                            [attr.data-p-carousel-item-start]="firstIndex() === index"
                            [attr.data-p-carousel-item-end]="lastIndex() === index"
                            [pBind]="getItemPTOptions('item', index)"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div
                            *ngFor="let item of clonedItemsForFinishing; let index = index"
                            [class]="cx('itemClone', { index })"
                            [attr.data-p-carousel-item-active]="false"
                            [attr.data-p-carousel-item-start]="false"
                            [attr.data-p-carousel-item-end]="false"
                            [pBind]="ptm('itemClone')"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                    </div>
                </div>
                <p-button
                    type="button"
                    *ngIf="showNavigators"
                    [class]="cx('pcNextButton')"
                    (click)="navForward($event)"
                    [attr.aria-label]="ariaNextButtonLabel()"
                    [buttonProps]="nextButtonProps"
                    [text]="true"
                    [pt]="ptm('pcNextButton')"
                    [unstyled]="unstyled()"
                    attr.data-pc-group-section="navigator"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!nextIconTemplate && !_nextIconTemplate && !nextButtonProps?.icon">
                            <svg data-p-icon="chevron-right" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-down" *ngIf="isVertical()" />
                        </ng-container>
                        <span *ngIf="nextIconTemplate || (_nextIconTemplate && !nextButtonProps?.icon)">
                            <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                        </span>
                    </ng-template>
                </p-button>
            </div>
            <ul #indicatorContent [class]="cx('indicatorList')" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators" (keydown)="onIndicatorKeydown($event)" [pBind]="ptm('indicatorList')">
                <li *ngFor="let totalDot of totalDotsArray(); let i = index" [class]="cx('indicator', { index: i })" [attr.data-p-active]="_page === i" [pBind]="getIndicatorPTOptions('indicator', i)">
                    <button
                        type="button"
                        [class]="cx('indicatorButton')"
                        (click)="onDotClick($event, i)"
                        [ngStyle]="indicatorStyle"
                        [attr.aria-label]="ariaPageLabel(i + 1)"
                        [attr.aria-current]="_page === i ? 'page' : undefined"
                        [tabindex]="_page === i ? 0 : -1"
                        [pBind]="getIndicatorPTOptions('indicatorButton', i)"
                    ></button>
                </li>
            </ul>
        </div>
        <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate" [pBind]="ptm('footer')">
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CarouselStyle, {
        provide: PARENT_INSTANCE,
        useExisting: Carousel
      }],
      hostDirectives: [Bind],
      host: {
        "[attr.id]": "id",
        "[attr.role]": "'region'",
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    page: [{
      type: Input
    }],
    numVisible: [{
      type: Input
    }],
    numScroll: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    verticalViewPortHeight: [{
      type: Input
    }],
    contentClass: [{
      type: Input
    }],
    indicatorsContentClass: [{
      type: Input
    }],
    indicatorsContentStyle: [{
      type: Input
    }],
    indicatorStyleClass: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    prevButtonProps: [{
      type: Input
    }],
    nextButtonProps: [{
      type: Input
    }],
    onPage: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    indicatorContent: [{
      type: ViewChild,
      args: ["indicatorContent"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule,
    imports: [Carousel, SharedModule],
    exports: [Carousel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Carousel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [Carousel, SharedModule],
      exports: [Carousel, SharedModule]
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/shared/components/slider/slider.component.ts
var _c06 = (a0, a1, a2) => ["/", a0, a1, a2];
function SliderComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDiscountPercent(product_r1 == null ? null : product_r1.price, product_r1 == null ? null : product_r1.priceAfterDiscount), "% OFF ");
  }
}
function SliderComponent_ng_template_2_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
  if (rf & 2) {
    const star_r3 = ctx.$implicit;
    \u0275\u0275property("innerHTML", star_r3, \u0275\u0275sanitizeHtml);
  }
}
function SliderComponent_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, SliderComponent_ng_template_2_Conditional_11_For_2_Template, 1, 1, "div", 20, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getStarsArray(product_r1 == null ? null : product_r1.rateCount));
  }
}
function SliderComponent_ng_template_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "no_rated"), " ");
  }
}
function SliderComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r1 == null ? null : product_r1.price, " EGP ");
  }
}
function SliderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275conditionalCreate(4, SliderComponent_ng_template_2_Conditional_4_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275element(6, "lucide-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "a", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275conditionalCreate(11, SliderComponent_ng_template_2_Conditional_11_Template, 3, 0, "div", 13)(12, SliderComponent_ng_template_2_Conditional_12_Template, 3, 3, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SliderComponent_ng_template_2_Conditional_16_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 18);
    \u0275\u0275element(18, "lucide-icon", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r1 == null ? null : product_r1.imgCover, \u0275\u0275sanitizeUrl)("alt", product_r1 == null ? null : product_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((product_r1 == null ? null : product_r1.priceAfterDiscount) < (product_r1 == null ? null : product_r1.price) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.Heart)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction3(12, _c06, ctx_r1.APP_ROUTES.LANDING.ROOT, ctx_r1.APP_ROUTES.LANDING.PRODUCT_DETAILS, product_r1 == null ? null : product_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r1 == null ? null : product_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((product_r1 == null ? null : product_r1.rateCount) ? 11 : 12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", product_r1 == null ? null : product_r1.priceAfterDiscount, " EGP ");
    \u0275\u0275advance();
    \u0275\u0275conditional((product_r1 == null ? null : product_r1.priceAfterDiscount) < (product_r1 == null ? null : product_r1.price) ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.ShoppingCart)("size", 22);
  }
}
var SliderComponent = class _SliderComponent {
  // ✅ Input Signal
  products = input([], ...ngDevMode ? [{ debugName: "products" }] : []);
  numVisible = input(4, ...ngDevMode ? [{ debugName: "numVisible" }] : []);
  Heart = Heart;
  ShoppingCart = ShoppingCart;
  APP_ROUTES = APP_ROUTES;
  responsiveOptions = [
    { breakpoint: "1280px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
    { breakpoint: "640px", numVisible: 1, numScroll: 1 }
  ];
  sanitizer = inject(DomSanitizer);
  getDiscountPercent(price, priceAfterDiscount) {
    return Math.round((price - priceAfterDiscount) / price * 100);
  }
  getStarsArray(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.fullStar));
      } else if (i === fullStars && hasHalfStar) {
        stars.push(this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG.halfStar));
      }
    }
    return stars;
  }
  static \u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SliderComponent, selectors: [["app-slider"]], inputs: { products: [1, "products"], numVisible: [1, "numVisible"] }, decls: 3, vars: 5, consts: [[1, "slider"], [3, "value", "numVisible", "numScroll", "responsiveOptions", "circular"], ["pTemplate", "item"], [1, "lg:px-2"], [1, "relative", "bg-white", "rounded-2xl", "overflow-visible", "border", "border-gray-100", "shadow-sm", "hover:shadow-md", "transition-shadow", 2, "margin-bottom", "28px"], [1, "w-full", "overflow-hidden", "rounded-t-2xl", "relative", 2, "height", "300px"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "top-3", "left-3", "bg-maroon-600", "text-white", "text-xs", "font-bold", "px-2", "py-1", "rounded-full", "shadow"], [1, "absolute", "top-3", "right-3", "w-9", "h-9", "bg-white", "rounded-full", "flex", "items-center", "justify-center", "shadow-md", "hover:scale-110", "transition-transform", 2, "z-index", "10"], [1, "text-gray-400", "hover:bg-zinc-50", "dark:hover:bg-zinc-800/50", "transition-colors", 3, "name", "size"], [1, "px-4", "pt-4", "pb-8"], [1, "text-lg", "font-semibold", "text-maroon-700", "mb-1", "line-clamp-1", 3, "routerLink"], [1, "flex", "items-center", "gap-1", "mb-2"], [1, "flex"], [1, "text-zinc-600", "text-base", "font-normal"], [1, "flex", "items-center", "gap-3"], [1, "text-maroon-700", "font-medium", "text-base"], [1, "text-zinc-400", "font-medium", "text-base", "line-through"], [1, "absolute", "bottom-4", "ltr:right-4", "rtl:left-4", "w-12", "h-12", "bg-maroon-600", "hover:bg-text-maroon-700", "hover:bg-zinc-50", "dark:hover:bg-zinc-800/50", "text-white", "rounded-full", "flex", "items-center", "justify-center", "shadow-lg", "transition-colors"], ["color", "white", 3, "name", "size"], [3, "innerHTML"]], template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-carousel", 1);
      \u0275\u0275template(2, SliderComponent_ng_template_2_Template, 19, 16, "ng-template", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.products())("numVisible", ctx.numVisible())("numScroll", 1)("responsiveOptions", ctx.responsiveOptions)("circular", true);
    }
  }, dependencies: [CarouselModule, Carousel, PrimeTemplate, LucideAngularModule, LucideAngularComponent, TranslocoModule, RouterLink, TranslocoPipe], styles: ["\n\n  .slider .p-carousel-prev-button, \n  .slider .p-carousel-next-button {\n  background-color: #a6252a;\n  color: white;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{ selector: "app-slider", standalone: true, imports: [CarouselModule, LucideAngularModule, TranslocoModule, RouterLink], template: `<div class="slider">
  <p-carousel
    [value]="products()"
    [numVisible]="numVisible()"
    [numScroll]="1"
    [responsiveOptions]="responsiveOptions"
    [circular]="true"
  >
    <ng-template let-product pTemplate="item">
      <div class="lg:px-2">
        <div
          class="relative bg-white rounded-2xl overflow-visible border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          style="margin-bottom: 28px"
        >
          <!-- IMAGE -->
          <div
            class="w-full overflow-hidden rounded-t-2xl relative"
            style="height: 300px"
          >
            <img
              [src]="product?.imgCover"
              [alt]="product?.title"
              class="w-full h-full object-cover"
            />

            <!-- BADGE -->
            @if (product?.priceAfterDiscount < product?.price) {
              <div
                class="absolute top-3 left-3 bg-maroon-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
              >
                {{
                  getDiscountPercent(
                    product?.price,
                    product?.priceAfterDiscount
                  )
                }}% OFF
              </div>
            }

            <!-- FAVORITE BUTTON -->
            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              style="z-index: 10"
            >
              <lucide-icon
                [name]="Heart"
                [size]="18"
                class="text-gray-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              ></lucide-icon>
            </button>
          </div>

          <!-- CONTENT -->
          <div class="px-4 pt-4 pb-8">
            <!-- TITLE -->
            <a
              [routerLink]="[
                '/',
                APP_ROUTES.LANDING.ROOT,
                APP_ROUTES.LANDING.PRODUCT_DETAILS,
                product?.id,
              ]"
              class="text-lg font-semibold text-maroon-700 mb-1 line-clamp-1"
            >
              {{ product?.title }}
            </a>

            <!-- RATING COUNT -->
            <div class="flex items-center gap-1 mb-2">
              @if (product?.rateCount) {
                <div class="flex">
                  @for (
                    star of getStarsArray(product?.rateCount);
                    track $index
                  ) {
                    <div [innerHTML]="star"></div>
                  }
                </div>
              } @else {
                <p class="text-zinc-600 text-base font-normal">
                  {{ 'no_rated' | transloco }}
                </p>
              }
            </div>

            <!-- PRICE -->
            <div class="flex items-center gap-3">
              <span class="text-maroon-700 font-medium text-base">
                {{ product?.priceAfterDiscount }} EGP
              </span>
              @if (product?.priceAfterDiscount < product?.price) {
                <span class="text-zinc-400 font-medium text-base line-through">
                  {{ product?.price }} EGP
                </span>
              }
            </div>
          </div>

          <button
            class="absolute bottom-4 ltr:right-4 rtl:left-4 w-12 h-12 bg-maroon-600 hover:bg-text-maroon-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <lucide-icon
              [name]="ShoppingCart"
              [size]="22"
              color="white"
            ></lucide-icon>
          </button>
        </div>
      </div>
    </ng-template>
  </p-carousel>
</div>
`, styles: ["/* apps/angular-c4-team3/src/app/shared/components/slider/slider.component.css */\n::ng-deep .slider .p-carousel-prev-button,\n::ng-deep .slider .p-carousel-next-button {\n  background-color: #a6252a;\n  color: white;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  width: 33px;\n  height: 33px;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=slider.component.css.map */\n"] }]
  }], null, { products: [{ type: Input, args: [{ isSignal: true, alias: "products", required: false }] }], numVisible: [{ type: Input, args: [{ isSignal: true, alias: "numVisible", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SliderComponent, { className: "SliderComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/slider/slider.component.ts", lineNumber: 18 });
})();

export {
  Carousel,
  CarouselModule,
  StyledHomeTitleComponent,
  ICONS_SVG,
  SliderComponent
};
//# sourceMappingURL=chunk-VMQFCD3Z.js.map
