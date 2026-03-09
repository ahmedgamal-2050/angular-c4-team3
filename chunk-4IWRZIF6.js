import {
  LangSwitcherComponent,
  ThemeService,
  ThemeSwitcherComponent
} from "./chunk-F4Z32TR2.js";
import "./chunk-ET6XCIB7.js";
import "./chunk-JJ5YZZNZ.js";
import "./chunk-YBU5AOQC.js";
import {
  RouterOutlet
} from "./chunk-DVFFD4F4.js";
import {
  Component,
  NgTemplateOutlet,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-MW4S3Q6I.js";
import "./chunk-GOMI4DH3.js";

// apps/angular-c4-team3/src/app/layout/auth-wrapper/auth-wrapper.component.ts
var _c0 = () => ({ $implicit: "top" });
var _c1 = () => ({ $implicit: "bottom" });
function AuthWrapperComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const position_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rotate-180", position_r1 === "bottom")("mt-10", position_r1 === "bottom")("mb-10", position_r1 === "top");
    \u0275\u0275property("src", ctx_r1.isDarkMode() ? "/assets/images/decorator-dark-mode.png" : "/assets/images/decorator-light-mode.png", \u0275\u0275sanitizeUrl);
  }
}
var AuthWrapperComponent = class _AuthWrapperComponent {
  themeService = inject(ThemeService);
  isDarkMode = computed(() => this.themeService.darkMode(), ...ngDevMode ? [{ debugName: "isDarkMode" }] : []);
  static \u0275fac = function AuthWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthWrapperComponent, selectors: [["app-auth-wrapper"]], decls: 12, vars: 6, consts: [["decorativeImage", ""], [1, "grid", "grid-cols-12", "h-screen"], [1, "col-span-12", "lg:col-span-6"], [1, "min-h-screen", "w-full", "flex", "flex-col", "items-center", "justify-center", "py-[7.25rem]", "px-[9.125rem]"], [1, "flex", "items-center", "gap-2", "justify-end", "mb-3", "w-full"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-span-12", "lg:col-span-6", "hidden", "lg:block", "bg-[url(/assets/images/auth-cover.png)]", "h-full", "bg-cover", "bg-center"], ["alt", "", 1, "w-[17.5rem]", "h-11.5", 3, "src"]], template: function AuthWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "app-lang-switcher")(5, "app-theme-switcher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainer(6, 5);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementContainer(8, 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AuthWrapperComponent_ng_template_10_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const decorativeImage_r3 = \u0275\u0275reference(11);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngTemplateOutlet", decorativeImage_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", decorativeImage_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(5, _c1));
    }
  }, dependencies: [
    RouterOutlet,
    LangSwitcherComponent,
    ThemeSwitcherComponent,
    NgTemplateOutlet
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-auth-wrapper", imports: [
      RouterOutlet,
      LangSwitcherComponent,
      ThemeSwitcherComponent,
      NgTemplateOutlet
    ], template: `<section class="grid grid-cols-12 h-screen">
  <!-- Left side -->
  <div class="col-span-12 lg:col-span-6">
    <div
      class="min-h-screen w-full flex flex-col items-center justify-center py-[7.25rem] px-[9.125rem]"
    >
      <div class="flex items-center gap-2 justify-end mb-3 w-full">
        <app-lang-switcher />

        <app-theme-switcher />
      </div>

      <!-- top decorative image -->
      <ng-container
        [ngTemplateOutlet]="decorativeImage"
        [ngTemplateOutletContext]="{ $implicit: 'top' }"
      />

      <!-- content -->
      <router-outlet />

      <!-- bottom decorative image -->
      <ng-container
        [ngTemplateOutlet]="decorativeImage"
        [ngTemplateOutletContext]="{ $implicit: 'bottom' }"
      />
    </div>
  </div>

  <!-- Right side image -->
  <div
    class="col-span-12 lg:col-span-6 hidden lg:block bg-[url(/assets/images/auth-cover.png)] h-full bg-cover bg-center"
  ></div>
</section>

<ng-template #decorativeImage let-position>
  <img
    [src]="
      isDarkMode()
        ? '/assets/images/decorator-dark-mode.png'
        : '/assets/images/decorator-light-mode.png'
    "
    alt=""
    class="w-[17.5rem] h-11.5"
    [class.rotate-180]="position === 'bottom'"
    [class.mt-10]="position === 'bottom'"
    [class.mb-10]="position === 'top'"
  />
</ng-template>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthWrapperComponent, { className: "AuthWrapperComponent", filePath: "apps/angular-c4-team3/src/app/layout/auth-wrapper/auth-wrapper.component.ts", lineNumber: 19 });
})();
export {
  AuthWrapperComponent
};
//# sourceMappingURL=chunk-4IWRZIF6.js.map
