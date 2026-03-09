import {
  Badge,
  BadgeModule
} from "./chunk-ZSIZB4LZ.js";
import {
  LangSwitcherComponent,
  ThemeSwitcherComponent
} from "./chunk-F4Z32TR2.js";
import {
  Motion,
  MotionModule,
  Tooltip,
  TooltipModule,
  zindexutils
} from "./chunk-U2YA5TFS.js";
import {
  ConnectedOverlayScrollHandler,
  Ripple
} from "./chunk-FBY6JISU.js";
import {
  APP_STORAGE
} from "./chunk-ET6XCIB7.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VSLF65Y7.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  D,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  S,
  SharedModule,
  Y,
  Yt,
  bt,
  s2 as s,
  ut,
  v,
  z
} from "./chunk-BX323W7Q.js";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  ClipboardList,
  Gift,
  Headset,
  Heart,
  House,
  Info,
  LogOut,
  LucideAngularComponent,
  LucideAngularModule,
  MapPin,
  PartyPopper,
  Search,
  Settings,
  ShoppingCart,
  User
} from "./chunk-JJ5YZZNZ.js";
import {
  TranslocoPipe
} from "./chunk-YBU5AOQC.js";
import {
  APP_ROUTES
} from "./chunk-XS4O3NDQ.js";
import {
  DomSanitizer,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DVFFD4F4.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Output,
  PLATFORM_ID,
  Pipe,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-MW4S3Q6I.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/shared/components/top-navbar/navbar-action-button/navbar-action-button.component.ts
function NavbarActionButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.count(), " ");
  }
}
var NavbarActionButtonComponent = class _NavbarActionButtonComponent {
  icon = input.required(...ngDevMode ? [{ debugName: "icon" }] : []);
  count = input(0, ...ngDevMode ? [{ debugName: "count" }] : []);
  static \u0275fac = function NavbarActionButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarActionButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarActionButtonComponent, selectors: [["app-navbar-action-button"]], inputs: { icon: [1, "icon"], count: [1, "count"] }, decls: 3, vars: 2, consts: [[1, "text-zinc-800", "dark:text-white", "hover:text-maroon-600", "transition-colors", "relative"], ["size", "24", 3, "name"], [1, "absolute", "-top-1", "-end-1", "bg-red-600", "dark:bg-red-500", "text-white", "text-[0.625rem]", "w-4", "h-4", "rounded-full", "flex", "items-center", "justify-center"]], template: function NavbarActionButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275element(1, "lucide-icon", 1);
      \u0275\u0275conditionalCreate(2, NavbarActionButtonComponent_Conditional_2_Template, 2, 1, "span", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("name", ctx.icon());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.count() > 0 ? 2 : -1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarActionButtonComponent, [{
    type: Component,
    args: [{ selector: "app-navbar-action-button", standalone: true, imports: [LucideAngularModule], template: '<button class="text-zinc-800 dark:text-white hover:text-maroon-600 transition-colors relative">\n  <lucide-icon [name]="icon()" size="24" />\n  @if (count() > 0) {\n    <span\n      class="absolute -top-1 -end-1 bg-red-600 dark:bg-red-500 text-white text-[0.625rem] w-4 h-4 rounded-full flex items-center justify-center"\n    >\n      {{ count() }}\n    </span>\n  }\n</button>\n' }]
  }], null, { icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: true }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarActionButtonComponent, { className: "NavbarActionButtonComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/top-navbar/navbar-action-button/navbar-action-button.component.ts", lineNumber: 11 });
})();

// apps/angular-c4-team3/src/app/shared/services/logged-in.service.ts
var LoggedInService = class _LoggedInService {
  _router = inject(Router);
  isLoggedIn = computed(() => localStorage.getItem(APP_STORAGE.token) !== null, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  user = computed(() => localStorage.getItem(APP_STORAGE.user) !== null ? JSON.parse(localStorage.getItem(APP_STORAGE.user) || "{}") : null, ...ngDevMode ? [{ debugName: "user" }] : []);
  logout() {
    localStorage.removeItem(APP_STORAGE.token);
    localStorage.removeItem(APP_STORAGE.user);
    this._router.navigate(["/", APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.LOGIN]);
  }
  static \u0275fac = function LoggedInService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoggedInService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoggedInService, factory: _LoggedInService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggedInService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/menu/index.mjs
var style = "\n    .p-menu {\n        background: dt('menu.background');\n        color: dt('menu.color');\n        border: 1px solid dt('menu.border.color');\n        border-radius: dt('menu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-menu-list {\n        margin: 0;\n        padding: dt('menu.list.padding');\n        outline: 0 none;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('menu.list.gap');\n    }\n\n    .p-menu-item-content {\n        transition:\n            background dt('menu.transition.duration'),\n            color dt('menu.transition.duration');\n        border-radius: dt('menu.item.border.radius');\n        color: dt('menu.item.color');\n        overflow: hidden;\n    }\n\n    .p-menu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menu.item.padding');\n        gap: dt('menu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menu-item-label {\n        line-height: 1;\n    }\n\n    .p-menu-item-icon {\n        color: dt('menu.item.icon.color');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-content {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-overlay {\n        box-shadow: dt('menu.shadow');\n    }\n\n    .p-menu-submenu-label {\n        background: dt('menu.submenu.label.background');\n        padding: dt('menu.submenu.label.padding');\n        color: dt('menu.submenu.label.color');\n        font-weight: dt('menu.submenu.label.font.weight');\n    }\n\n    .p-menu-separator {\n        border-block-start: 1px solid dt('menu.separator.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c0 = ["pMenuItemContent", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  item: a0
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.item == null ? null : ctx_r1.item.linkClass));
    \u0275\u0275property("ngStyle", ctx_r1.item == null ? null : ctx_r1.item.linkStyle)("target", ctx_r1.item.target)("pBind", ctx_r1.getPTOptions("itemLink"));
    \u0275\u0275attribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.item == null ? null : ctx_r1.item.linkClass));
    \u0275\u0275property("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(19, _c2))("ngStyle", ctx_r1.item == null ? null : ctx_r1.item.linkStyle)("target", ctx_r1.item.target)("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state)("pBind", ctx_r1.getPTOptions("itemLink"));
    \u0275\u0275attribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("title", ctx_r1.item.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_Template, 2, 13, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 22, "a", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon", \u0275\u0275pureFunction1(5, _c3, ctx_r1.item)), ctx_r1.item.iconClass));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("itemIcon"))("ngStyle", ctx_r1.item.iconStyle);
    \u0275\u0275attribute("data-pc-section", "itemicon");
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.item.labelClass));
    \u0275\u0275property("ngStyle", ctx_r1.item.labelStyle)("pBind", ctx_r1.getPTOptions("itemLabel"));
    \u0275\u0275attribute("data-pc-section", "itemlabel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.item.labelClass));
    \u0275\u0275property("ngStyle", ctx_r1.item.labelStyle)("innerHTML", \u0275\u0275pipeBind1(1, 6, ctx_r1.item.label), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions("itemLabel"));
    \u0275\u0275attribute("data-pc-section", "itemlabel");
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge)("pt", ctx_r1.getPTOptions("pcBadge"))("unstyled", ctx_r1.unstyled());
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_template_3_span_0_Template, 1, 7, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 6, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 4, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.item.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.item.badge);
  }
}
var _c4 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0, a1) => ({
  item: a0,
  id: a1
});
function Menu_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-motion", 5);
    \u0275\u0275listener("onBeforeEnter", function Menu_Conditional_0_Template_p_motion_onBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayBeforeEnter($event));
    })("onAfterLeave", function Menu_Conditional_0_Template_p_motion_onAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAfterLeave());
    });
    \u0275\u0275template(1, Menu_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const sharedcontent_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("visible", ctx_r1.visible)("appear", ctx_r1.popup)("options", ctx_r1.computedMotionOptions());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sharedcontent_r3);
  }
}
function Menu_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sharedcontent_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", sharedcontent_r3);
  }
}
function Menu_ng_template_2_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, Menu_ng_template_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("start"));
    \u0275\u0275property("pBind", ctx_r1.ptm("start"));
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
  }
}
function Menu_ng_template_2_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submenu_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submenu_r5.label);
  }
}
function Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, submenu_r5.label), \u0275\u0275sanitizeHtml);
  }
}
function Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 18)(2, Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r6 = \u0275\u0275reference(3);
    const submenu_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submenu_r5.escape !== false)("ngIfElse", htmlSubmenuLabel_r6);
  }
}
function Menu_ng_template_2_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_ng_template_2_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275template(1, Menu_ng_template_2_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 10)(2, Menu_ng_template_2_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const submenu_r5 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("submenuLabel"));
    \u0275\u0275property("pBind", ctx_r1.ptm("submenuLabel"))("tooltipOptions", submenu_r5.tooltipOptions)("pTooltipUnstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("data-automationid", submenu_r5.automationId)("id", ctx_r1.menuitemId(submenu_r5, ctx_r1.id, i_r8))("data-pc-section", "submenulabel");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.submenuHeaderTemplate ?? ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c1, submenu_r5));
  }
}
function Menu_ng_template_2_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_ng_template_2_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275listener("onMenuItemClick", function Menu_ng_template_2_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r9 = \u0275\u0275nextContext();
      const item_r11 = ctx_r9.$implicit;
      const j_r12 = ctx_r9.index;
      const i_r8 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r8, j_r12)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const item_r11 = ctx_r9.$implicit;
    const j_r12 = ctx_r9.index;
    const i_r8 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(item_r11.style);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(17, _c11, item_r11, ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r8, j_r12))), item_r11 == null ? null : item_r11.styleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("item"))("pMenuItemContent", item_r11)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("idx", j_r12)("menuitemId", ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r8, j_r12))("tooltipOptions", item_r11.tooltipOptions)("pTooltipUnstyled", ctx_r1.unstyled())("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.label(item_r11.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r8, j_r12)))("data-p-disabled", ctx_r1.disabled(item_r11.disabled))("aria-disabled", ctx_r1.disabled(item_r11.disabled))("id", ctx_r1.menuitemId(item_r11, ctx_r1.id, i_r8, j_r12));
  }
}
function Menu_ng_template_2_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_ng_template_2_5_ng_template_0_ng_template_2_li_0_Template, 1, 4, "li", 13)(1, Menu_ng_template_2_5_ng_template_0_ng_template_2_li_1_Template, 1, 20, "li", 20);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const submenu_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", item_r11.separator && (item_r11.visible !== false || submenu_r5.visible !== false));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r11.separator && item_r11.visible !== false && (item_r11.visible !== void 0 || submenu_r5.visible !== false));
  }
}
function Menu_ng_template_2_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_ng_template_2_5_ng_template_0_li_0_Template, 1, 4, "li", 13)(1, Menu_ng_template_2_5_ng_template_0_li_1_Template, 3, 13, "li", 14)(2, Menu_ng_template_2_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 12);
  }
  if (rf & 2) {
    const submenu_r5 = ctx.$implicit;
    \u0275\u0275property("ngIf", submenu_r5.separator && submenu_r5.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !submenu_r5.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", submenu_r5.items);
  }
}
function Menu_ng_template_2_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_ng_template_2_5_ng_template_0_Template, 3, 3, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_ng_template_2_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("separator"));
    \u0275\u0275attribute("data-pc-section", "separator");
  }
}
function Menu_ng_template_2_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("onMenuItemClick", function Menu_ng_template_2_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r13 = \u0275\u0275nextContext();
      const item_r15 = ctx_r13.$implicit;
      const i_r16 = ctx_r13.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r15, ctx_r1.id, i_r16)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext();
    const item_r15 = ctx_r13.$implicit;
    const i_r16 = ctx_r13.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(16, _c11, item_r15, ctx_r1.menuitemId(item_r15, ctx_r1.id, i_r16))), item_r15 == null ? null : item_r15.styleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("item"))("pMenuItemContent", item_r15)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("idx", i_r16)("menuitemId", ctx_r1.menuitemId(item_r15, ctx_r1.id, i_r16))("ngStyle", item_r15.style)("tooltipOptions", item_r15.tooltipOptions)("unstyled", ctx_r1.unstyled())("pTooltipUnstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.label(item_r15.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r15, ctx_r1.id, i_r16)))("data-p-disabled", ctx_r1.disabled(item_r15.disabled))("aria-disabled", ctx_r1.disabled(item_r15.disabled))("id", ctx_r1.menuitemId(item_r15, ctx_r1.id, i_r16));
  }
}
function Menu_ng_template_2_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_ng_template_2_6_ng_template_0_li_0_Template, 1, 4, "li", 13)(1, Menu_ng_template_2_6_ng_template_0_li_1_Template, 1, 19, "li", 22);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r15.separator && item_r15.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r15.separator && item_r15.visible !== false);
  }
}
function Menu_ng_template_2_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_ng_template_2_6_ng_template_0_Template, 2, 2, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_ng_template_2_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_ng_template_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, Menu_ng_template_2_div_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("end"));
    \u0275\u0275property("pBind", ctx_r1.ptm("end"));
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
function Menu_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 1);
    \u0275\u0275listener("click", function Menu_ng_template_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275template(2, Menu_ng_template_2_div_2_Template, 2, 5, "div", 8);
    \u0275\u0275elementStart(3, "ul", 9, 2);
    \u0275\u0275listener("focus", function Menu_ng_template_2_Template_ul_focus_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_ng_template_2_Template_ul_blur_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_ng_template_2_Template_ul_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListKeyDown($event));
    });
    \u0275\u0275template(5, Menu_ng_template_2_5_Template, 1, 1, null, 10)(6, Menu_ng_template_2_6_Template, 1, 1, null, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Menu_ng_template_2_div_7_Template, 2, 5, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"));
    \u0275\u0275attribute("id", ctx_r1.id)("data-p", ctx_r1.dataP);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("list"));
    \u0275\u0275property("pBind", ctx_r1.ptm("list"));
    \u0275\u0275attribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.popup ? "absolute" : "relative"
  })
};
var classes = {
  root: ({
    instance
  }) => ["p-menu p-component", {
    "p-menu-overlay": instance.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance,
    item,
    id
  }) => ["p-menu-item", {
    "p-focus": instance.focusedOptionId() && id === instance.focusedOptionId(),
    "p-disabled": instance.disabled(item.disabled)
  }, item.styleClass],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: ({
    item
  }) => ["p-menu-item-icon", item.icon, item.iconClass],
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (\u0275MenuStyle_BaseFactory || (\u0275MenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var MENU_INSTANCE = new InjectionToken("MENU_INSTANCE");
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(PLATFORM_ID, 16), \u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent extends BaseComponent {
  item;
  itemTemplate;
  menuitemId = input("", ...ngDevMode ? [{
    debugName: "menuitemId"
  }] : []);
  idx = input(0, ...ngDevMode ? [{
    debugName: "idx"
  }] : []);
  onMenuItemClick = new EventEmitter();
  menu;
  _componentStyle = inject(MenuStyle);
  hostName = "Menu";
  constructor(menu) {
    super();
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  getPTOptions(key) {
    return this.menu.getPTOptions(key, this.item, this.idx(), this.menuitemId());
  }
  static \u0275fac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(\u0275\u0275directiveInject(forwardRef(() => Menu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate",
      menuitemId: [1, "menuitemId"],
      idx: [1, "idx"]
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 6,
    consts: [["itemContent", ""], ["htmlLabel", ""], [3, "click", "pBind"], [4, "ngIf"], ["pRipple", "", 3, "class", "ngStyle", "target", "pBind", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "ngStyle", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "ngStyle", "target", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "ngStyle", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "class", "pBind", "ngStyle", 4, "ngIf"], [3, "class", "ngStyle", "pBind", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", "pt", "unstyled", 4, "ngIf"], [3, "pBind", "ngStyle"], [3, "ngStyle", "pBind"], [3, "ngStyle", "innerHTML", "pBind"], [3, "styleClass", "value", "pt", "unstyled"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onItemClick($event, ctx.item));
        });
        \u0275\u0275template(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("itemContent"));
        \u0275\u0275property("pBind", ctx.getPTOptions("itemContent"));
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.itemTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Bind, BadgeModule, Badge, SharedModule, BindModule, SafeHtmlPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe, BindModule],
      template: ` <div [class]="cx('itemContent')" (click)="onItemClick($event, item)" [attr.data-pc-section]="'content'" [pBind]="getPTOptions('itemContent')">
        <ng-container *ngIf="!itemTemplate">
            <a
                *ngIf="!item?.routerLink"
                [attr.title]="item.title"
                [attr.href]="item.url || null"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [class]="cn(cx('itemLink'), item?.linkClass)"
                [ngStyle]="item?.linkStyle"
                [target]="item.target"
                [pBind]="getPTOptions('itemLink')"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
            <a
                *ngIf="item?.routerLink"
                [routerLink]="item.routerLink"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.title]="item.title"
                [queryParams]="item.queryParams"
                routerLinkActive="p-menu-item-link-active"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                [class]="cn(cx('itemLink'), item?.linkClass)"
                [ngStyle]="item?.linkStyle"
                [target]="item.target"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [pBind]="getPTOptions('itemLink')"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
        </ng-container>

        <ng-container *ngIf="itemTemplate">
            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
        </ng-container>

        <ng-template #itemContent>
            <span [class]="cn(cx('itemIcon', { item }), item.iconClass)" [pBind]="getPTOptions('itemIcon')" *ngIf="item.icon" [ngStyle]="item.iconStyle" [attr.data-pc-section]="'itemicon'"></span>
            <span [class]="cn(cx('itemLabel'), item.labelClass)" [ngStyle]="item.labelStyle" [pBind]="getPTOptions('itemLabel')" [attr.data-pc-section]="'itemlabel'" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
            <ng-template #htmlLabel><span [class]="cn(cx('itemLabel'), item.labelClass)" [ngStyle]="item.labelStyle" [attr.data-pc-section]="'itemlabel'" [innerHTML]="item.label | safeHtml" [pBind]="getPTOptions('itemLabel')"></span></ng-template>
            <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" [pt]="getPTOptions('pcBadge')" [unstyled]="unstyled()" />
        </ng-template>
    </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    menuitemId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "menuitemId",
        required: false
      }]
    }],
    idx: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "idx",
        required: false
      }]
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  componentName = "Menu";
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @deprecated since v21.0.0, use `motionOptions` instead.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @deprecated since v21.0.0, use `motionOptions` instead.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild = viewChild("list", ...ngDevMode ? [{
    debugName: "listViewChild"
  }] : []);
  containerViewChild = viewChild("container", ...ngDevMode ? [{
    debugName: "containerViewChild"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }, ...ngDevMode ? [{
    debugName: "focusedOptionId"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "selectedOptionIndex"
  }] : []);
  focused = false;
  overlayVisible = false;
  $pcMenu = inject(MENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(MenuStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || s("pn_id_");
  }
  getPTOptions(key, item, index, id) {
    return this.ptm(key, {
      context: {
        item,
        index,
        focused: this.isItemFocused(id),
        disabled: this.disabled(item.disabled)
      }
    });
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    if (this.container && !this.overlayVisible) {
      this.container = void 0;
    }
    this.target = event.currentTarget;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onInit() {
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Custom item template.
   * @param {MenuItemTemplateContext} context - item context.
   * @see {@link MenuItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Custom submenu header template.
   * @param {MenuSubmenuHeaderTemplateContext} context - submenu header context.
   * @see {@link MenuSubmenuHeaderTemplateContext}
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayBeforeEnter(event) {
    this.container = event.element;
    if (this.container) {
      const nativeElementOuterWidth = v(this.containerViewChild()?.nativeElement);
      S(this.container, {
        width: nativeElementOuterWidth + "px"
      });
      S(this.container, {
        position: "absolute",
        top: "0"
      });
      this.appendOverlay();
      this.moveOnTop();
      this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
      D(this.container, this.target);
      bt(this.listViewChild()?.nativeElement);
      this.onShow.emit({});
    }
  }
  onOverlayAfterLeave() {
    this.restoreOverlayAppend();
    this.onOverlayHide();
    this.onHide.emit({});
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.container);
      } else {
        ut(this.$appendTo(), this.container);
      }
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      ut(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !Yt()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      !this.popup && this.changeFocusedOptionIndex(0);
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          bt(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      bt(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(Y(this.containerViewChild()?.nativeElement, 'li[data-pc-section="item"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = z(this.containerViewChild()?.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
    this.popup && bt(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = Y(this.containerViewChild()?.nativeElement, 'li[data-pc-section="item"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = Y(this.containerViewChild()?.nativeElement, 'li[data-pc-section="item"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = Y(this.containerViewChild()?.nativeElement, 'li[data-pc-section="item"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild()?.nativeElement && !this.containerViewChild()?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container) {
      if (this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.container = void 0;
    }
  }
  onDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container) {
        if (this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        this.container = void 0;
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  get dataP() {
    return this.cn({
      popup: this.popup
    });
  }
  static \u0275fac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4)(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, _c7, 4)(dirIndex, _c8, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenuHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.listViewChild, _c9, 5)(ctx.containerViewChild, _c10, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle, {
      provide: MENU_INSTANCE,
      useExisting: _Menu
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Menu
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 1,
    consts: [["sharedcontent", ""], ["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], ["name", "p-anchored-overlay", 3, "visible", "appear", "options"], ["name", "p-anchored-overlay", 3, "onBeforeEnter", "onAfterLeave", "visible", "appear", "options"], [4, "ngTemplateOutlet"], [3, "click", "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], ["role", "menu", 3, "focus", "blur", "keydown", "pBind"], [4, "ngIf"], [3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "class", "pBind", 4, "ngIf"], ["pTooltip", "", "role", "none", 3, "class", "pBind", "tooltipOptions", "pTooltipUnstyled", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["pTooltip", "", "role", "none", 3, "pBind", "tooltipOptions", "pTooltipUnstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["pTooltip", "", "role", "menuitem", 3, "class", "pBind", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "style", "tooltipOptions", "pTooltipUnstyled", "unstyled", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pBind", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "tooltipOptions", "pTooltipUnstyled", "unstyled"], ["pTooltip", "", "role", "menuitem", 3, "class", "pBind", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "ngStyle", "tooltipOptions", "unstyled", "pTooltipUnstyled", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pBind", "pMenuItemContent", "itemTemplate", "idx", "menuitemId", "ngStyle", "tooltipOptions", "unstyled", "pTooltipUnstyled"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, Menu_Conditional_0_Template, 2, 4, "p-motion", 4)(1, Menu_Conditional_1_Template, 1, 1, "ng-container");
        \u0275\u0275template(2, Menu_ng_template_2_Template, 8, 21, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.popup ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, Bind, BadgeModule, SharedModule, BindModule, MotionModule, Motion, SafeHtmlPipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe, BindModule, MotionModule],
      template: `
        @if (popup) {
            <p-motion [visible]="visible" [appear]="popup" name="p-anchored-overlay" [options]="computedMotionOptions()" (onBeforeEnter)="onOverlayBeforeEnter($event)" (onAfterLeave)="onOverlayAfterLeave()">
                <ng-container *ngTemplateOutlet="sharedcontent"></ng-container>
            </p-motion>
        } @else {
            <ng-container *ngTemplateOutlet="sharedcontent"></ng-container>
        }
        <ng-template #sharedcontent>
            <div #container [class]="cn(cx('root'), styleClass)" [style]="sx('root')" [ngStyle]="style" (click)="onOverlayClick($event)" [attr.id]="id" [pBind]="ptm('root')" [attr.data-p]="dataP">
                <div *ngIf="startTemplate ?? _startTemplate" [class]="cx('start')" [pBind]="ptm('start')" [attr.data-pc-section]="'start'">
                    <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
                </div>
                <ul
                    #list
                    [class]="cx('list')"
                    [pBind]="ptm('list')"
                    role="menu"
                    [attr.id]="id + '_list'"
                    [attr.tabindex]="getTabIndexValue()"
                    [attr.data-pc-section]="'menu'"
                    [attr.aria-activedescendant]="activedescendant()"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledBy]="ariaLabelledBy"
                    (focus)="onListFocus($event)"
                    (blur)="onListBlur($event)"
                    (keydown)="onListKeyDown($event)"
                >
                    <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                        <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="submenu.separator && submenu.visible !== false" role="separator" [attr.data-pc-section]="'separator'"></li>
                        <li
                            [class]="cx('submenuLabel')"
                            [pBind]="ptm('submenuLabel')"
                            [attr.data-automationid]="submenu.automationId"
                            *ngIf="!submenu.separator"
                            pTooltip
                            [tooltipOptions]="submenu.tooltipOptions"
                            [pTooltipUnstyled]="unstyled()"
                            role="none"
                            [attr.id]="menuitemId(submenu, id, i)"
                            [attr.data-pc-section]="'submenulabel'"
                        >
                            <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                                <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                                <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label | safeHtml"></span></ng-template>
                            </ng-container>
                            <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                        </li>
                        <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                            <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator" [attr.data-pc-section]="'separator'"></li>
                            <li
                                [class]="cn(cx('item', { item, id: menuitemId(item, id, i, j) }), item?.styleClass)"
                                [pBind]="ptm('item')"
                                *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                                [pMenuItemContent]="item"
                                [itemTemplate]="itemTemplate ?? _itemTemplate"
                                [idx]="j"
                                [menuitemId]="menuitemId(item, id, i, j)"
                                [style]="item.style"
                                (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                                pTooltip
                                [tooltipOptions]="item.tooltipOptions"
                                [pTooltipUnstyled]="unstyled()"
                                [unstyled]="unstyled()"
                                role="menuitem"
                                [attr.aria-label]="label(item.label)"
                                [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                                [attr.data-p-disabled]="disabled(item.disabled)"
                                [attr.aria-disabled]="disabled(item.disabled)"
                                [attr.id]="menuitemId(item, id, i, j)"
                            ></li>
                        </ng-template>
                    </ng-template>
                    <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                        <li [class]="cx('separator')" [pBind]="ptm('separator')" *ngIf="item.separator && item.visible !== false" role="separator" [attr.data-pc-section]="'separator'"></li>
                        <li
                            [class]="cn(cx('item', { item, id: menuitemId(item, id, i) }), item?.styleClass)"
                            [pBind]="ptm('item')"
                            *ngIf="!item.separator && item.visible !== false"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [idx]="i"
                            [menuitemId]="menuitemId(item, id, i)"
                            [ngStyle]="item.style"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            [unstyled]="unstyled()"
                            [pTooltipUnstyled]="unstyled()"
                            role="menuitem"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i)"
                        ></li>
                    </ng-template>
                </ul>
                <div *ngIf="endTemplate ?? _endTemplate" [class]="cx('end')" [pBind]="ptm('end')" [attr.data-pc-section]="'end'">
                    <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
                </div>
            </div>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle, {
        provide: MENU_INSTANCE,
        useExisting: Menu
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Menu
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        isSignal: true
      }]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container", {
        isSignal: true
      }]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static \u0275fac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();

// apps/angular-c4-team3/src/app/shared/components/user-dropdown/user-dropdown.component.ts
var _c02 = (a0, a1) => ["/", a0, a1];
function UserDropdownComponent_Conditional_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.user().firstName, " ", ctx_r2.user().lastName, " ");
  }
}
function UserDropdownComponent_Conditional_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275element(1, "lucide-icon", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.routerLink);
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r4.data.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, item_r4.label), " ");
  }
}
function UserDropdownComponent_Conditional_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_0_ng_template_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275element(1, "lucide-icon", 13);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.LogOut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "user_dropdown_logout_label"), " ");
  }
}
function UserDropdownComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function UserDropdownComponent_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(menu_r2.toggle($event));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "lucide-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-menu", 6, 0);
    \u0275\u0275template(10, UserDropdownComponent_Conditional_0_ng_template_10_Template, 3, 2, "ng-template", 7)(11, UserDropdownComponent_Conditional_0_ng_template_11_Template, 5, 5, "ng-template", 8)(12, UserDropdownComponent_Conditional_0_ng_template_12_Template, 5, 4, "ng-template", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "landing_top_navbar_section_hello"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.user().firstName);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.ChevronDown);
    \u0275\u0275advance();
    \u0275\u0275property("model", ctx_r2.items)("popup", true);
  }
}
function UserDropdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275element(1, "lucide-icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c02, ctx_r2.APP_ROUTES.AUTH.ROOT, ctx_r2.APP_ROUTES.AUTH.LOGIN));
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.User);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "user_dropdown_login_label"), " ");
  }
}
var UserDropdownComponent = class _UserDropdownComponent {
  ChevronDown = ChevronDown;
  User = User;
  MapPin = MapPin;
  ClipboardList = ClipboardList;
  Settings = Settings;
  LogOut = LogOut;
  APP_ROUTES = APP_ROUTES;
  _LoggedInService = inject(LoggedInService);
  isLoggedIn = this._LoggedInService.isLoggedIn;
  user = this._LoggedInService.user;
  items = [
    {
      label: "user_dropdown_my_profile_label",
      icon: "User",
      data: { icon: this.User },
      routerLink: "/profile"
    },
    {
      label: "user_dropdown_my_addresses_label",
      icon: "MapPin",
      data: { icon: this.MapPin },
      routerLink: "/addresses"
    },
    {
      label: "user_dropdown_my_orders_label",
      icon: "ClipboardList",
      data: { icon: this.ClipboardList },
      routerLink: "/orders"
    },
    {
      separator: true
    },
    {
      label: "user_dropdown_dashboard_label",
      icon: "Settings",
      data: { icon: this.Settings },
      routerLink: "/dashboard"
    }
  ];
  logout() {
    this._LoggedInService.logout();
  }
  static \u0275fac = function UserDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDropdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDropdownComponent, selectors: [["app-user-dropdown"]], decls: 2, vars: 1, consts: [["menu", ""], [1, "flex", "items-center", "gap-1", "font-bold", "text-zinc-700", "dark:text-zinc-50", 3, "routerLink"], ["type", "button", "aria-haspopup", "true", "aria-controls", "menu", 1, "hidden", "md:flex", "flex-col", "text-start", "leading-tight", "cursor-pointer", "bg-transparent", "border-none", "p-0", "appearance-none", "focus-visible:outline-maroon-300", 3, "click"], [1, "text-xs", "text-zinc-400", "dark:text-zinc-500"], [1, "flex", "items-center", "gap-1", "font-bold", "text-maroon-800", "dark:text-soft-pink-200"], ["size", "14", 3, "name"], ["id", "menu", "styleClass", "w-72 !rounded-3xl !border-zinc-100 dark:!border-zinc-800 !bg-white dark:!bg-zinc-800 !shadow-xl", 3, "model", "popup"], ["pTemplate", "start"], ["pTemplate", "item"], ["pTemplate", "end"], [1, "p-4", "border-b", "border-zinc-100", "dark:border-zinc-800"], [1, "font-bold", "text-maroon-700", "dark:text-soft-pink-100", "text-xl", "tracking-tight"], [1, "flex", "items-center", "gap-4", "p-3", "hover:bg-zinc-50", "dark:hover:bg-zinc-800/50", "transition-all", "duration-200", "group", 3, "routerLink"], ["size", "22", 1, "text-zinc-500", "group-hover:text-maroon-700", "dark:group-hover:text-soft-pink-200", "transition-colors", 3, "name"], [1, "font-bold", "text-zinc-700", "dark:text-zinc-300", "group-hover:text-maroon-900", "dark:group-hover:text-zinc-100", "text-[17px]"], ["type", "button", 1, "border-t", "border-zinc-100", "dark:border-zinc-800", "flex", "w-full", "items-center", "gap-4", "p-4", "hover:bg-zinc-50", "dark:hover:bg-zinc-800/50", "transition-all", "duration-200", "group", 3, "click"], ["size", "20", 3, "name"]], template: function UserDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserDropdownComponent_Conditional_0_Template, 13, 7)(1, UserDropdownComponent_Conditional_1_Template, 4, 8, "a", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isLoggedIn() && ctx.user() ? 0 : 1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, MenuModule, Menu, PrimeTemplate, RouterLink, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-user-dropdown", imports: [TranslocoPipe, LucideAngularModule, MenuModule, RouterLink], template: `@if (isLoggedIn() && user()) {
  <button
    class="hidden md:flex flex-col text-start leading-tight cursor-pointer bg-transparent border-none p-0 appearance-none focus-visible:outline-maroon-300"
    (click)="menu.toggle($event)"
    type="button"
    aria-haspopup="true"
    aria-controls="menu"
  >
    <span class="text-xs text-zinc-400 dark:text-zinc-500">{{
      'landing_top_navbar_section_hello' | transloco
    }}</span>
    <div
      class="flex items-center gap-1 font-bold text-maroon-800 dark:text-soft-pink-200"
    >
      <span>{{ user()!.firstName }}</span>
      <lucide-icon [name]="ChevronDown" size="14" />
    </div>
  </button>

  <p-menu
    #menu
    id="menu"
    [model]="items"
    [popup]="true"
    styleClass="w-72 !rounded-3xl !border-zinc-100 dark:!border-zinc-800 !bg-white dark:!bg-zinc-800 !shadow-xl"
  >
    <ng-template pTemplate="start">
      <div class="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <span
          class="font-bold text-maroon-700 dark:text-soft-pink-100 text-xl tracking-tight"
        >
          {{ user()!.firstName }} {{ user()!.lastName }}
        </span>
      </div>
    </ng-template>

    <ng-template pTemplate="item" let-item>
      <a
        [routerLink]="item.routerLink"
        class="flex items-center gap-4 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 group"
      >
        <lucide-icon
          [name]="item.data.icon"
          size="22"
          class="text-zinc-500 group-hover:text-maroon-700 dark:group-hover:text-soft-pink-200 transition-colors"
        />
        <span
          class="font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-maroon-900 dark:group-hover:text-zinc-100 text-[17px]"
        >
          {{ item.label | transloco }}
        </span>
      </a>
    </ng-template>

    <ng-template pTemplate="end">
      <button
        type="button"
        (click)="logout()"
        class="border-t border-zinc-100 dark:border-zinc-800 flex w-full items-center gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 group"
      >
        <lucide-icon
          [name]="LogOut"
          size="22"
          class="text-zinc-500 group-hover:text-maroon-700 dark:group-hover:text-soft-pink-200 transition-colors"
        />
        <span
          class="font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-maroon-900 dark:group-hover:text-zinc-100 text-[17px]"
        >
          {{ 'user_dropdown_logout_label' | transloco }}
        </span>
      </button>
    </ng-template>
  </p-menu>
} @else {
  <a
    [routerLink]="['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.LOGIN]"
    class="flex items-center gap-1 font-bold text-zinc-700 dark:text-zinc-50"
  >
    <lucide-icon [name]="User" size="20" />
    {{ 'user_dropdown_login_label' | transloco }}
  </a>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDropdownComponent, { className: "UserDropdownComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/user-dropdown/user-dropdown.component.ts", lineNumber: 16 });
})();

// apps/angular-c4-team3/src/app/shared/components/top-navbar/top-navbar.component.ts
function TopNavbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275element(5, "lucide-icon", 17);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "landing_top_navbar_section_deliver_to"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx_r0.MapPin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.location());
  }
}
var TopNavbarComponent = class _TopNavbarComponent {
  MapPin = MapPin;
  Search = Search;
  Heart = Heart;
  ShoppingCart = ShoppingCart;
  Bell = Bell;
  _LoggedInService = inject(LoggedInService);
  location = signal("Cairo", ...ngDevMode ? [{ debugName: "location" }] : []);
  userName = signal("Jonathan", ...ngDevMode ? [{ debugName: "userName" }] : []);
  cartCount = signal(8, ...ngDevMode ? [{ debugName: "cartCount" }] : []);
  notificationCount = signal(8, ...ngDevMode ? [{ debugName: "notificationCount" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  isLoggedIn = this._LoggedInService.isLoggedIn;
  user = this._LoggedInService.user;
  updateSearch(event) {
    const input2 = event.target;
    this.searchQuery.set(input2.value);
  }
  static \u0275fac = function TopNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopNavbarComponent, selectors: [["app-top-navbar"]], decls: 21, vars: 10, consts: [[1, "bg-white", "dark:bg-zinc-800", "border-b", "border-zinc-100", "dark:border-zinc-700", "py-3", "shadow-sm"], [1, "container", "mx-auto", "px-4", "flex", "flex-wrap", "lg:flex-nowrap", "items-center", "justify-between", "gap-4", "lg:gap-6"], [1, "flex", "items-center"], [1, "flex", "flex-col", "items-center"], ["src", "assets/images/rose-app-logo.webp", "alt", "logo", 1, "h-20", "w-22"], [1, "hidden", "lg:flex", "flex-col", "gap-1", "text-sm"], [1, "order-last", "w-full", "lg:order-0", "lg:flex-1", "max-w-2xl", "mt-2", "lg:mt-0", "relative", "hidden", "lg:block"], ["type", "text", 1, "w-full", "ps-12", "pe-4", "py-2", "bg-zinc-50", "border", "border-zinc-200", "dark:border-zinc-600", "rounded-lg", "focus:border-maroon-300", "transition-colors", "dark:placeholder:text-zinc-500", "dark:bg-zinc-700", 3, "input", "placeholder"], ["size", "20", 1, "absolute", "inset-s-3", "top-1/2", "-translate-y-1/2", "text-zinc-400", "dark:text-zinc-500", 3, "name"], [1, "flex", "items-center", "gap-2", "sm:gap-4", "lg:gap-6"], [1, "h-8", "w-px", "bg-zinc-200", "dark:bg-zinc-700", "hidden", "md:block"], [1, "flex", "items-center", "gap-2", "sm:gap-3", "md:gap-5"], [3, "icon"], [3, "icon", "count"], [1, "flex", "items-center", "gap-1", "sm:gap-2"], [1, "text-zinc-400", "dark:text-zinc-500"], [1, "flex", "items-center", "gap-1", "font-semibold", "text-maroon-700", "dark:text-soft-pink-200"], ["size", "18", 3, "name"]], template: function TopNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, TopNavbarComponent_Conditional_5_Template, 8, 5, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "input", 7);
      \u0275\u0275pipe(8, "transloco");
      \u0275\u0275listener("input", function TopNavbarComponent_Template_input_input_7_listener($event) {
        return ctx.updateSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "lucide-icon", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275element(11, "app-user-dropdown")(12, "div", 10);
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275element(14, "app-navbar-action-button", 12)(15, "app-navbar-action-button", 13)(16, "app-navbar-action-button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 10);
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275element(19, "app-lang-switcher")(20, "app-theme-switcher");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoggedIn() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "landing_top_navbar_section_search_placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("name", ctx.Search);
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.Heart);
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.ShoppingCart)("count", ctx.cartCount());
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.Bell)("count", ctx.notificationCount());
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, LangSwitcherComponent, ThemeSwitcherComponent, NavbarActionButtonComponent, UserDropdownComponent, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-top-navbar", standalone: true, imports: [LucideAngularModule, LangSwitcherComponent, ThemeSwitcherComponent, NavbarActionButtonComponent, TranslocoPipe, UserDropdownComponent], template: `<nav
  class="bg-white dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 py-3 shadow-sm"
>
  <div
    class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-6"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <img
          src="assets/images/rose-app-logo.webp"
          alt="logo"
          class="h-20 w-22"
        />
      </div>
    </div>

    <!-- Location -->
    @if (isLoggedIn()) {
      <div class="hidden lg:flex flex-col gap-1 text-sm">
        <div class="text-zinc-400 dark:text-zinc-500">
          {{ 'landing_top_navbar_section_deliver_to' | transloco }}:
        </div>
        <div
          class="flex items-center gap-1 font-semibold text-maroon-700 dark:text-soft-pink-200"
        >
          <lucide-icon [name]="MapPin" size="18" />
          <span>{{ location() }}</span>
        </div>
      </div>
    }

    <!-- Search Bar -->
    <div
      class="order-last w-full lg:order-0 lg:flex-1 max-w-2xl mt-2 lg:mt-0 relative hidden lg:block"
    >
      <input
        type="text"
        [placeholder]="
          'landing_top_navbar_section_search_placeholder' | transloco
        "
        class="w-full ps-12 pe-4 py-2 bg-zinc-50 border border-zinc-200 dark:border-zinc-600 rounded-lg focus:border-maroon-300 transition-colors dark:placeholder:text-zinc-500 dark:bg-zinc-700"
        (input)="updateSearch($event)"
      />
      <lucide-icon
        [name]="Search"
        size="20"
        class="absolute inset-s-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
      />
    </div>

    <!-- Right Side Actions -->
    <div class="flex items-center gap-2 sm:gap-4 lg:gap-6">
      <!-- User Profile -->
      <app-user-dropdown />

      <div class="h-8 w-px bg-zinc-200 dark:bg-zinc-700 hidden md:block"></div>

      <!-- Icons -->
      <div class="flex items-center gap-2 sm:gap-3 md:gap-5">
        <app-navbar-action-button [icon]="Heart" />

        <app-navbar-action-button [icon]="ShoppingCart" [count]="cartCount()" />

        <app-navbar-action-button [icon]="Bell" [count]="notificationCount()" />
      </div>

      <div class="h-8 w-px bg-zinc-200 dark:bg-zinc-700 hidden md:block"></div>

      <!-- Language -->
      <div class="flex items-center gap-1 sm:gap-2">
        <app-lang-switcher />

        <app-theme-switcher />
      </div>
    </div>
  </div>
</nav>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopNavbarComponent, { className: "TopNavbarComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/top-navbar/top-navbar.component.ts", lineNumber: 17 });
})();

// apps/angular-c4-team3/src/app/shared/components/main-navbar/main-navbar.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function MainNavbarComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275element(2, "lucide-icon", 4);
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance();
    \u0275\u0275property("name", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, item_r1.label));
  }
}
var MainNavbarComponent = class _MainNavbarComponent {
  Home = House;
  Gift = Gift;
  ClipboardList = ClipboardList;
  PartyPopper = PartyPopper;
  Headset = Headset;
  Info = Info;
  navItems = signal([
    { label: "landing_main_navbar_section_home", icon: House, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.HOME}` },
    { label: "landing_main_navbar_section_products", icon: Gift, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.PRODUCTS}` },
    { label: "landing_main_navbar_section_categories", icon: ClipboardList, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.CATEGORIES}` },
    { label: "landing_main_navbar_section_occasions", icon: PartyPopper, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.OCCASIONS}` },
    { label: "landing_main_navbar_section_contact", icon: Headset, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.CONTACT}` },
    { label: "landing_main_navbar_section_about", icon: Info, path: `/${APP_ROUTES.LANDING.ROOT}/${APP_ROUTES.LANDING.ABOUT}` }
  ], ...ngDevMode ? [{ debugName: "navItems" }] : []);
  static \u0275fac = function MainNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainNavbarComponent, selectors: [["app-main-navbar"]], decls: 5, vars: 0, consts: [[1, "bg-maroon-700", "dark:bg-soft-pink-200", "text-white", "dark:text-zinc-800"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap", "items-center", "justify-center", "gap-4"], ["routerLinkActive", "text-soft-pink-200 dark:text-maroon-800 border-b-2 border-soft-pink-200 dark:border-maroon-800", 1, "flex", "items-center", "p-2", "md:p-3", "gap-1", "md:gap-2", "group", "transition-all", "duration-300", "hover:text-soft-pink-200", "dark:hover:text-maroon-700", 3, "routerLink"], ["size", "20", 1, "group-hover:scale-110", "transition-transform", 3, "name"], [1, "font-medium", "tracking-wide"]], template: function MainNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "ul", 2);
      \u0275\u0275repeaterCreate(3, MainNavbarComponent_For_4_Template, 6, 5, "li", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.navItems());
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, RouterLink, RouterLinkActive, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-main-navbar", standalone: true, imports: [LucideAngularModule, RouterLink, TranslocoPipe, RouterLinkActive], template: '<nav class="bg-maroon-700 dark:bg-soft-pink-200 text-white dark:text-zinc-800">\n  <div class="container mx-auto px-4">\n    <ul class="flex flex-wrap items-center justify-center gap-4">\n      @for (item of navItems(); track item.label) {\n        <li>\n          <a\n            [routerLink]="item.path"\n            routerLinkActive="text-soft-pink-200 dark:text-maroon-800 border-b-2 border-soft-pink-200 dark:border-maroon-800"\n            class="flex items-center p-2 md:p-3 gap-1 md:gap-2 group transition-all duration-300 hover:text-soft-pink-200 dark:hover:text-maroon-700"\n          >\n            <lucide-icon\n              [name]="item.icon"\n              size="20"\n              class="group-hover:scale-110 transition-transform"\n            />\n            <span class="font-medium tracking-wide">{{\n              item.label | transloco\n            }}</span>\n          </a>\n        </li>\n      }\n    </ul>\n  </div>\n</nav>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainNavbarComponent, { className: "MainNavbarComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/main-navbar/main-navbar.component.ts", lineNumber: 22 });
})();

// apps/angular-c4-team3/src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.label;
function FooterComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, link_r1.label), " ");
  }
}
function FooterComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "footer_invalid_email"), " ");
  }
}
var FooterComponent = class _FooterComponent {
  ArrowRight = ArrowRight;
  newsletterForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });
  navLinks = [
    { label: "landing_main_navbar_section_home", path: "/" },
    { label: "landing_main_navbar_section_products", path: "/products" },
    { label: "landing_main_navbar_section_categories", path: "/categories" },
    { label: "landing_main_navbar_section_occasions", path: "/occasions" },
    { label: "landing_main_navbar_section_contact", path: "/contact" },
    { label: "landing_main_navbar_section_about", path: "/about" },
    { label: "footer_terms_conditions", path: "/terms" },
    { label: "footer_privacy_policy", path: "/privacy" },
    { label: "footer_faqs", path: "/faqs" }
  ];
  subscribe() {
    if (this.newsletterForm.valid) {
      console.log("Newsletter subscription:", this.newsletterForm.value.email);
      this.newsletterForm.reset();
    }
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 20, consts: [[1, "bg-zinc-800", "dark:bg-zinc-900", "text-white", "py-12", "md:py-20", "mt-10"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-12", "gap-8", "lg:gap-4"], [1, "col-span-1", "md:col-span-2", "lg:col-span-3", "flex", "flex-col", "items-center", "lg:items-start", "justify-center", "text-center", "lg:text-start", "gap-6"], ["src", "assets/images/rose-app-logo.webp", "alt", "Rose Logo", 1, "h-56.5", "w-60"], [1, "space-y-1", "text-center", "lg:text-start", "ms-0", "lg:ms-4"], [1, "text-lg", "font-semibold", "text-soft-pink-300"], [1, "text-zinc-100", "font-normal", "text-sm"], [1, "col-span-1", "md:col-span-1", "lg:col-span-5", "flex", "flex-col", "items-center", "lg:items-start", "px-4", "text-center", "lg:text-start"], [1, "text-lg", "font-semibold", "text-soft-pink-300", "mb-2"], [1, "grid", "grid-cols-1", "gap-1.5"], [1, "col-span-1", "md:col-span-1", "lg:col-span-4", "flex", "flex-col", "items-center", "lg:items-start", "text-center", "lg:text-start"], [1, "text-xl", "font-semibold", "text-soft-pink-300"], [1, "text-zinc-500", "text-sm", "mb-5"], [1, "w-full", "max-w-md", 3, "ngSubmit", "formGroup"], [1, "relative", "flex", "items-center", "bg-zinc-600", "dark:bg-zinc-800", "rounded-full"], ["type", "email", "formControlName", "email", 1, "w-full", "bg-transparent", "border-none", "focus:ring-0", "text-white", "px-4", "py-3", "text-sm", "font-medium", "placeholder:text-zinc-400", 3, "placeholder"], ["type", "submit", 1, "bg-soft-pink-50", "dark:bg-soft-pink-300", "text-maroon-700", "dark:text-zinc-800", "px-4", "py-3", "rounded-full", "font-medium", "flex", "items-center", "gap-2", "transition-all", "duration-300", "disabled:opacity-50", "whitespace-nowrap", 3, "disabled"], [1, "rtl:rotate-180"], [3, "img", "size"], [1, "text-red-400", "text-xs", "mt-1", "px-4"], [1, "text-zinc-100", "hover:text-soft-pink-200", "transition-colors", "duration-300", "text-base", "font-medium", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "h2", 6);
      \u0275\u0275text(7, " Rose E-Commerce App ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " All rights reserved | 2025 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8)(11, "h3", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul", 10);
      \u0275\u0275repeaterCreate(15, FooterComponent_For_16_Template, 4, 4, "li", null, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11)(18, "h3", 12);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 13);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "transloco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "form", 14);
      \u0275\u0275listener("ngSubmit", function FooterComponent_Template_form_ngSubmit_24_listener() {
        return ctx.subscribe();
      });
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275element(26, "input", 16);
      \u0275\u0275pipe(27, "transloco");
      \u0275\u0275elementStart(28, "button", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "transloco");
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275element(32, "lucide-icon", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(33, FooterComponent_Conditional_33_Template, 3, 3, "p", 20);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "footer_discover_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 12, "footer_newsletter_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 14, "footer_newsletter_desc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.newsletterForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 16, "footer_email_placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.newsletterForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "footer_subscribe_button"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("img", ctx.ArrowRight)("size", 16);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_10_0.touched) || ((tmp_10_0 = ctx.newsletterForm.get("email")) == null ? null : tmp_10_0.dirty)) ? 33 : -1);
    }
  }, dependencies: [LucideAngularModule, LucideAngularComponent, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [TranslocoPipe, LucideAngularModule, RouterLink, ReactiveFormsModule], template: `<footer class="bg-zinc-800 dark:bg-zinc-900 text-white py-12 md:py-20 mt-10">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4">
      <!-- Brand & Info -->
      <div
        class="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center lg:items-start justify-center text-center lg:text-start gap-6"
      >
        <img
          src="assets/images/rose-app-logo.webp"
          alt="Rose Logo"
          class="h-56.5 w-60"
        />

        <div class="space-y-1 text-center lg:text-start ms-0 lg:ms-4">
          <h2 class="text-lg font-semibold text-soft-pink-300">
            Rose E-Commerce App
          </h2>

          <p class="text-zinc-100 font-normal text-sm">
            All rights reserved | 2025
          </p>
        </div>
      </div>

      <!-- Discovery Links -->
      <div class="col-span-1 md:col-span-1 lg:col-span-5 flex flex-col items-center lg:items-start px-4 text-center lg:text-start">
        <h3 class="text-lg font-semibold text-soft-pink-300 mb-2">
          {{ 'footer_discover_title' | transloco }}
        </h3>

        <ul class="grid grid-cols-1 gap-1.5">
          @for (link of navLinks; track link.label) {
            <li>
              <a
                [routerLink]="link.path"
                class="text-zinc-100 hover:text-soft-pink-200 transition-colors duration-300 text-base font-medium"
              >
                {{ link.label | transloco }}
              </a>
            </li>
          }
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-start">
        <h3 class="text-xl font-semibold text-soft-pink-300">
          {{ 'footer_newsletter_title' | transloco }}
        </h3>

        <p class="text-zinc-500 text-sm mb-5">
          {{ 'footer_newsletter_desc' | transloco }}
        </p>

        <form
          [formGroup]="newsletterForm"
          (ngSubmit)="subscribe()"
          class="w-full max-w-md"
        >
          <div
            class="relative flex items-center bg-zinc-600 dark:bg-zinc-800 rounded-full"
          >
            <input
              type="email"
              formControlName="email"
              [placeholder]="'footer_email_placeholder' | transloco"
              class="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-sm font-medium placeholder:text-zinc-400"
            />

            <button
              type="submit"
              [disabled]="newsletterForm.invalid"
              class="bg-soft-pink-50 dark:bg-soft-pink-300 text-maroon-700 dark:text-zinc-800 px-4 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
            >
              {{ 'footer_subscribe_button' | transloco }}

              <span class="rtl:rotate-180">
                <lucide-icon [img]="ArrowRight" [size]="16" />
              </span>
            </button>
          </div>

          @if (
            newsletterForm.get('email')?.invalid &&
            (newsletterForm.get('email')?.touched ||
              newsletterForm.get('email')?.dirty)
          ) {
            <p class="text-red-400 text-xs mt-1 px-4">
              {{ 'footer_invalid_email' | transloco }}
            </p>
          }
        </form>
      </div>
    </div>
  </div>
</footer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "apps/angular-c4-team3/src/app/shared/components/footer/footer.component.ts", lineNumber: 14 });
})();

// apps/angular-c4-team3/src/app/layout/landing-wrapper/landing-wrapper.component.ts
var LandingWrapperComponent = class _LandingWrapperComponent {
  static \u0275fac = function LandingWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingWrapperComponent, selectors: [["app-landing-wrapper"]], decls: 5, vars: 0, consts: [[1, "py-10", "mx-auto", "container", "px-4", "lg:px-5"]], template: function LandingWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-top-navbar")(1, "app-main-navbar");
      \u0275\u0275elementStart(2, "main", 0);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
    }
  }, dependencies: [RouterOutlet, TopNavbarComponent, MainNavbarComponent, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-landing-wrapper", imports: [RouterOutlet, TopNavbarComponent, MainNavbarComponent, FooterComponent], template: '<app-top-navbar />\n<app-main-navbar />\n\n<main class="py-10 mx-auto container px-4 lg:px-5">\n  <router-outlet />\n</main>\n\n<app-footer />\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingWrapperComponent, { className: "LandingWrapperComponent", filePath: "apps/angular-c4-team3/src/app/layout/landing-wrapper/landing-wrapper.component.ts", lineNumber: 13 });
})();
export {
  LandingWrapperComponent
};
//# sourceMappingURL=chunk-DIWSAHHB.js.map
